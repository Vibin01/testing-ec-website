
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { generateEmailTemplate } from "@/lib/generateEmailTemplate";

export async function POST(req: Request) {
  try {
    const { name, email, phone, queryType, message } = await req.json();
console.log(name, email, phone, queryType, message);
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // ✅ Gmail transporter using your app password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your Gmail or Google Workspace email
        pass: process.env.SMTP_PASS, // the 16-character app password
      },
    });

    const htmlContent = generateEmailTemplate({
      name,
      email,
      phone,
      queryType,
      message,
    });

    // ✅ Send email to your inbox
    const info = await transporter.sendMail({
      from: `"Connect EC Website" <${process.env.SMTP_USER}>`,
      to: "hello@connectec.app",
      subject: ` Contact Form: ${queryType}`,
      html: htmlContent,
    });


    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
