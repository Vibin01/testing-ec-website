
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { generateEmailTemplate } from "@/lib/generateQuoteEmailTemplate";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, tier } = await req.json();


    if (!name || !email || !phone || !company || !tier) {
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
      company_name: company,
      tier,
    });

    // ✅ Send email to your inbox
    const info = await transporter.sendMail({
      from: `"Connect EC Website" <${process.env.SMTP_USER}>`,
      to: "hello@connectec.app",
      subject: `Request Quote Form: ${company}`,
      html: htmlContent,
    });


    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
