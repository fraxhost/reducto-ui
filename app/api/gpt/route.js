import "dotenv/config";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  const { content } = await request.json();
  const apikey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: apikey });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content }],
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status); // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code); // e.g. 'invalid_api_key'
      console.error(error.type); // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.log(error);
    }

    return NextResponse.json(
      { error: "Failed to create chat completion" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const apikey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: apikey });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Tell me about USA" }],
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status); // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code); // e.g. 'invalid_api_key'
      console.error(error.type); // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.log(error);
    }

    return NextResponse.json(
      { error: "Failed to create chat completion" },
      { status: 500 }
    );
  }
}
