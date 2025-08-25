// app/api/chat/route.ts
import { NextRequest } from "next/server";

export const runtime = "nodejs";

type Msg = { role: "user" | "assistant"; content: string };

function json(payload: any, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: Msg[] };

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;

    if (!apiKey) return json({ error: "Missing OPENAI_API_KEY" }, 500);

    const input = [
      {
        role: "system",
        content: [
          {
            type: "text",
            text:
              "You are Lennart's AI clone. Antworte präzise, freundlich und fachkundig zu Digital/Growth Marketing, Demand Gen, SEO/SEM, Paid, Partnerships und Marketing Automation.",
          },
        ],
      },
      ...messages.map((m) => ({
        role: m.role,
        content: [{ type: "text", text: m.content }],
      })),
    ];

    // Erst mit File Search versuchen (wenn gesetzt)
    const withFileSearch = buildRequestBody(model, input, vectorStoreId);
    let data = await callOpenAI(apiKey, withFileSearch);

    // Wenn 400 & Hinweis auf file_search/vector_store => ohne File Search nochmal versuchen
    if (data.__error && data.__status === 400 && looksLikeFileSearchIssue(data)) {
      const withoutFileSearch = buildRequestBody(model, input, undefined);
      data = await callOpenAI(apiKey, withoutFileSearch);
    }

    if (data.__error) {
      // Lesbare Fehler zurückgeben
      return json(
        {
          error: `OpenAI error (${data.__status})`,
          message: data.__message,
          details: data.__raw, // für Debug in Vercel Logs nützlich (bei Bedarf entfernen)
        },
        data.__status
      );
    }

    const text = extractTextFromResponses(data);
    return json({ text });
  } catch (e: any) {
    return json({ error: e?.message || String(e) }, 500);
  }
}

function buildRequestBody(model: string, input: any, vectorStoreId?: string) {
  const body: any = { model, input };

  if (vectorStoreId) {
    body.tools = [{ type: "file_search" }];
    body.tool_resources = { file_search: { vector_store_ids: [vectorStoreId] } };
  }

  // Optional, schadet nicht:
  body.response_format = { type: "text" };

  return body;
}

async function callOpenAI(apiKey: string, body: any) {
  const resp = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    let err: any;
    try {
      err = await resp.json();
    } catch {
      err = await resp.text();
    }

    const message =
      typeof err === "string"
        ? err
        : err?.error?.message ?? err?.message ?? JSON.stringify(err);

    return { __error: true, __status: resp.status, __message: message, __raw: err };
  }

  try {
    const data = await resp.json();
    return data;
  } catch (e: any) {
    return { __error: true, __status: 500, __message: e?.message || String(e), __raw: e };
  }
}

function looksLikeFileSearchIssue(errObj: any) {
  const s = JSON.stringify(errObj.__raw || "").toLowerCase();
  return (
    s.includes("file_search") ||
    s.includes("vector_store") ||
    s.includes("tool") ||
    s.includes("attachments") ||
    s.includes("not allowed") ||
    s.includes("not found")
  );
}

/** zieht Text aus verschiedenen möglichen Responses-Formaten */
function extractTextFromResponses(data: any): string {
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }
  const out = data?.output;
  if (Array.isArray(out)) {
    const buf: string[] = [];
    for (const item of out) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;
      for (const c of content) {
        if (typeof c?.text === "string") buf.push(c.text);
        else if (c?.type === "text" && typeof c?.text === "string") buf.push(c.text);
        else if (c?.type === "output_text" && typeof c?.text === "string") buf.push(c.text);
        else if (typeof c?.text?.value === "string") buf.push(c.text.value);
      }
    }
    const joined = buf.join("").trim();
    if (joined) return joined;
  }
  return "";
}
