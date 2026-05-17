import { NextRequest, NextResponse } from "next/server";
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
    // In production, integrate with email service (Resend, SendGrid, etc.)
    console.log("[Contact Form]", {
      ...body,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true, message: "Message received!" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
