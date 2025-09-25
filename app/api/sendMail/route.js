// app/api/sendMail/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, number } = body || {};

    // basic validation
    if (!firstname || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // vzmtztgibmfuceky
    // transporter using Mailtrap (from your .env.local)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: "orphanboy028@gmail.com", // your Gmail address
        pass: "vzmtztgibmfuceky", // App Password you created
      },
    });

    // build email content
    const html = `
      <h3>New Enquiry</h3>
      <p><strong>Name:</strong> ${escapeHtml(
        firstname + " " + (lastname || "")
      )}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(number || "N/A")}</p>
    
    `;

    await transporter.sendMail({
      from: `"SHAPOORJI PALLONJI Vanaha Enquiry" <noreply@saranshrealtors.com>`,
      to: `anju.saranshrealtors@gmail.com`,
      subject: `Enquiry from ${firstname}`,
      text: `${firstname} ${lastname}\n${email}\nPhone: ${
        number || "N/A"
      }\nEvent Date:  ${eventdate || "N/A"}`,
      html,
    });

    return NextResponse.json(
      { ok: true, message: "Mail sent" },
      { status: 200 }
    );
  } catch (err) {
    console.error("sendMail error:", err);
    // return body as json so client.json() won't fail
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br/>");
}
