// app/api/chat/route.ts
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;

    if (!apiKey) {
      return json({ error: "Missing OPENAI_API_KEY" }, 500);
    }

    // Responses API: messages -> input
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
      ...messages.map((m: { role: "user" | "assistant"; content: string }) => ({
        role: m.role,
        content: [{ type: "text", text: m.content }],
      })),
    ];

    const body: any = {
      model,
      input,
    };

    // File Search an Vector Store anbinden (Responses API)
    if (vectorStoreId) {
      body.tools = [{ type: "file_search" }];
      body.tool_resources = {
        file_search: { vector_store_ids: [vectorStoreId] },
      };
    }

    const resp = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();

    if (!resp.ok) {
      // Fehlertext sauber nach vorne geben
      const errorMsg =
        data?.error?.message ||
        typeof data === "string"
          ? data
          : JSON.stringify(data, null, 2);
      return json({ error: `OpenAI error: ${errorMsg}` }, resp.status);
    }

    const text = extractTextFromResponses(data);

    return json({ text });
  } catch (e: any) {
    return json({ error: e?.message || String(e) }, 500);
  }
}

function json(payload: any, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Robust gegen verschiedene Responses-Formate:
 * - data.output_text (bequem)
 * - data.output[].content[].text (type: "text" | "output_text")
 */
function extractTextFromResponses(data: any): string {
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const out = data?.output;
  if (Array.isArray(out)) {
    for (const item of out) {
      const content = item?.content;
      if (Array.isArray(content)) {
        const parts = content
          .map((c: any) => {
            if (typeof c?.text === "string") return c.text; // {type:"text", text:"..."}
            if (c?.type === "text" && typeof c?.text === "string") return c.text;
            if (c?.type === "output_text" && typeof c?.text === "string")
              return c.text;
            if (typeof c?.text?.value === "string") return c.text.value;
            return "";
          })
          .join("");
        if (parts.trim()) return parts.trim();
      }
    }
  }
  return "";
}
