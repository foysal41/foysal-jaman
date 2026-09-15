import { NextResponse } from "next/server";
import foysalData from "@/data/foysalData";

export async function POST(request) {
  try {
    const { message } = await request.json();

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },

        body: JSON.stringify({
          model: "inclusionai/ling-3.0-flash-vl:free",

          messages: [
            {
              role: "system",
              content: `
You are Foysal Jaman's Portfolio AI Assistant.

Here is Foysal Jaman's complete portfolio information:

${JSON.stringify(foysalData, null, 2)}

Answer the user's questions using this information.

Rules:
- Only use the information provided above.
- Do not invent any information about Foysal.
- If the information is not available, say you don't have that information.
- Answer professionally and clearly.
`,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("OpenRouter Error:", data);

      return NextResponse.json(
        {
          error: "AI request failed",
        },
        {
          status: response.status,
        },
      );
    }

    const answer = data.choices?.[0]?.message?.content;

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
