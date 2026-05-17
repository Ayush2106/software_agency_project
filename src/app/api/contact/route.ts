import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import type { ContactFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    await sendContactEmail(body);
    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error("[Contact]", err);
    return NextResponse.json(
      { error: "Could not send message. Please try again later." },
      { status: 500 }
    );
  }
}
