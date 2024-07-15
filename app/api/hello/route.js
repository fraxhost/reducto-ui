import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  return NextResponse.json(
    {
      message: "Hello World",
    },
    {
      status: 200,
    }
  );
}
