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

    // ---- Gespräch als Plain-Text aufbereiten (statt input_text Blöcken) ----
    const system =
      "You are Lennart's AI clone. Antworte präzise, freundlich und fachkundig zu Digital/Growth Marketing, Demand Gen, SEO/SEM, Paid, Partnerships und Marketing Automation.";
    const history = (messages || [])
      .slice(-15)
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n\n");

    const input = `${system}\n\n${history}\n\nAssistant:`;

    // Request-Body für Responses API
    const body: any = { model, input };

    // Optional: File Search / Vector Store einbinden
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

    if (!resp.ok) {
      // Fehler lesbar machen
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

      return json(
        {
          error: `OpenAI error (${resp.status})`,
          message,
          details: typeof err === "string" ? err : err, // ggf. in Prod entfernen
        },
        resp.status
      );
    }

    const data = await resp.json();
    const text = extractTextFromResponses(data);

    return json({ text: text || "(leer)" });
  } catch (e: any) {
    return json({ error: e?.message || String(e) }, 500);
  }
}

// Zieht Text robust aus Responses-Ausgaben
function extractTextFromResponses(data: any): string {
  // Bequemer Shortcut, falls vorhanden
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  // Generischer Fallback über data.output[].content[]
  const out = data?.output;
  if (Array.isArray(out)) {
    const buf: string[] = [];
    for (const item of out) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;
      for (const c of content) {
        // Häufige Formate der Responses-API:
        // { type: "output_text", text: "..." }
        // { type: "text", text: "..." }   (manchmal)
        if (typeof c?.text === "string") buf.push(c.text);
        else if (typeof c?.text?.value === "string") buf.push(c.text.value);
      }
    }
    const joined = buf.join("").trim();
    if (joined) return joined;
  }
  return "";
}
