// app/api/chat/route.ts
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;

    // Responses API "input" Format
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

    // File Search via Vector Store aktivieren, wenn vorhanden
    if (vectorStoreId) {
      body.tools = [{ type: "file_search" }];
      body.attachments = [{ vector_store_id: vectorStoreId }];
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
      const errText = await resp.text();
      return new Response(
        JSON.stringify({ error: `OpenAI error: ${errText}` }),
        {
          status: resp.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await resp.json();

    // Responses API stellt oft eine bequeme "output_text" Property bereit.
    // Fallback: aus dem strukturierten Output zusammensetzen.
    const text =
      data.output_text ??
      (Array.isArray(data.output)
        ? data.output
            .map((o: any) =>
              Array.isArray(o.content)
                ? o.content
                    .map((c: any) =>
                      c.type === "output_text"
                        ? c.text
                        : c.text?.value ?? ""
                    )
                    .join("")
                : ""
            )
            .join("")
        : "");

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || String(e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
