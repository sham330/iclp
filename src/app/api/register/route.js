import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

export async function POST(request) {
  console.log("📥 API Hit: /api/register");

  try {
    const body = await request.json();
    const { name, email, phone, course, state, city,contact } = body;

    if (!name || !course) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // ✅ Save to MySQL
    try {
      const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT) || 3306,
      });
      await db.execute(
        `INSERT INTO registrations (name, email, phone, course, state, city, contact, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
        [name, email || null, phone || null, course, state || null, city || null, contact || null]
      );
      await db.end();
      console.log("✅ Saved to DB");
    } catch (dbErr) {
      console.error("⚠️ DB save failed (continuing):", dbErr.message);
    }

    // 📨 Nodemailer setup with fallback
    const accounts = [
      { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
      { user: process.env.GMAIL_FALLBACK_USER, pass: process.env.GMAIL_FALLBACK_PASS },
    ];

    let transporter = null;
    for (const account of accounts) {
      try {
        const t = nodemailer.createTransport({
          service: "gmail",
          auth: { user: account.user, pass: account.pass },
        });
        await t.verify();
        transporter = t;
        console.log("📡 SMTP verified with:", account.user);
        break;
      } catch {
        console.warn("⚠️ SMTP failed for:", account.user, "- trying next...");
      }
    }

    if (!transporter) {
      console.warn("⚠️ All email accounts failed — data already saved to DB");
      return NextResponse.json({ success: true, message: "Registration received successfully" });
    }

    const activeUser = transporter.options.auth.user;
    const mailOptions = {
      from: activeUser,
      to: "enquiry.iclp@gmail.com",
      subject: `💡 New Course Registration | ICLP Tech`,
      html: `
        <div style="font-family:'Inter',sans-serif;background:#f8fafc;padding:40px 20px;border-radius:16px;max-width:620px;margin:auto;border:1px solid #e2e8f0;">
          <div style="text-align:center;margin-bottom:28px;">
            <img src="https://iclptech.in/Logo.png" alt="ICLP Tech Logo" style="width:80px;height:80px;object-fit:contain;border-radius:14px;margin-bottom:12px;"/>
            <h1 style="font-size:1.8rem;color:#1e293b;margin:0;font-weight:700;">ICLP Tech - New Course Registration</h1>
            <p style="color:#64748b;font-size:0.95rem;margin-top:8px;">A new learner has registered for a course. See details below 👇</p>
          </div>

          <div style="height:4px;background:linear-gradient(90deg,#4f46e5,#06b6d4);border-radius:4px;margin:24px 0;"></div>

          <div style="background:white;border:1px solid #e2e8f0;border-radius:12px;padding:24px;color:#1e293b;">
            <p><b>👤 Name:</b> ${name}</p>
            <p><b>📧 Email:</b> ${email || contact}</p>
            <p><b>📞 Phone:</b> ${phone || contact}</p>
            <p><b>📘 Course:</b> ${course}</p>
            ${state ? `<p><b>🌍 State:</b> ${state}</p>` : ""}
            ${city ? `<p><b>🏙️ City:</b> ${city}</p>` : ""}
          </div>

          <div style="text-align:center;color:#94a3b8;font-size:0.85rem;margin-top:28px;">
            <p>Submitted on ${new Date().toLocaleString()}</p>
            <p style="color:#4f46e5;font-weight:600;">— ICLP Tech Website</p>
            <a href="https://iclptech.in" style="color:#06b6d4;text-decoration:none;">Visit ICLPTech.in</a>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);

    return NextResponse.json({ success: true, message: "Registration submitted successfully" });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
