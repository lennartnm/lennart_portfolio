// app/api/chat/route.ts
import { NextRequest } from "next/server";

export const runtime = "nodejs";

type Msg = { role: "user" | "assistant"; content: string };

function sendJSON(payload: any, status = 200) {
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

    if (!apiKey) return sendJSON({ error: "Missing OPENAI_API_KEY" }, 500);

    // Gespräch als Plain-Text aufbereiten (stabil für Responses API)
    const system =
      "You are Lennart's AI clone. Antworte präzise, freundlich und fachkundig zu Digital/Growth Marketing, Demand Gen, SEO/SEM, Paid, Partnerships und Marketing Automation.";
    const history = (messages || [])
      .slice(-15)
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n\n");

    const input = `${system}\n\n${history}\n\nAssistant:`;

    // 1) Versuch MIT File Search (Vector Store anhängen)
    const withFS: any = {
      model,
      input,
      tools: [{ type: "file_search" }],
      attachments: vectorStoreId ? [{ vector_store_id: vectorStoreId }] : undefined,
    };

    let data = await callResponses(apiKey, withFS);

    // 400? → wenn es nach File-Search/Attachments/Vector-Store riecht, ohne FS erneut probieren
    if (data.__error && data.__status === 400 && looksLikeFSProblem(data)) {
      const noFS = { model, input };
      data = await callResponses(apiKey, noFS);
    }

    if (data.__error) {
      return sendJSON(
        {
          error: `OpenAI error (${data.__status})`,
          message: data.__message,
          details: data.__raw, // ggf. in Prod entfernen
        },
        data.__status
      );
    }

    const text = extractText(data);
    return sendJSON({ text: text || "(leer)" });
  } catch (e: any) {
    return sendJSON({ error: e?.message || String(e) }, 500);
  }
}

async function callResponses(apiKey: string, body: any) {
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
        : err?.error?.message ?? err?.message ?? JSON.stringify(err, null, 2);

    return { __error: true, __status: resp.status, __message: message, __raw: err };
  }

  try {
    return await resp.json();
  } catch (e: any) {
    return { __error: true, __status: 500, __message: e?.message || String(e), __raw: e };
  }
}

function looksLikeFSProblem(errObj: any) {
  const s = JSON.stringify(errObj.__raw || "").toLowerCase();
  return (
    s.includes("file_search") ||
    s.includes("vector_store") ||
    s.includes("attachments") ||
    s.includes("tool") ||
    s.includes("not allowed") ||
    s.includes("not found")
  );
}

// Text robust extrahieren (output_text oder strukturierte Ausgaben)
function extractText(data: any): string {
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
        else if (typeof c?.text?.value === "string") buf.push(c.text.value);
      }
    }
    const joined = buf.join("").trim();
    if (joined) return joined;
  }
  return "";
}
