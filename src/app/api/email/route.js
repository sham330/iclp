import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { PrismaClient } from "@prisma/client"; // Uncomment if you use Prisma
// const prisma = new PrismaClient();

export async function POST(request) {
  console.log("📥 API Hit: /api/register");

  try {
    const body = await request.json();
    console.log("📦 Received:", body);

    const { name, email, phone, course } = body;

    // 🔍 Validate fields
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        {
          message: "All fields are required",
          received: {
            name: !!name,
            email: !!email,
            phone: !!phone,
            course: !!course,
          },
        },
        { status: 400 }
      );
    }

    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // ✅ (Optional) Save to database
    /*
    const savedUser = await prisma.user.create({
      data: { name, email, phone_number: phone, course },
    });
    */

    // ✅ Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info.iclptech@gmail.com",
        pass: "knjj pzhr loiu qlir", // ⚠️ Use an App Password, not your Gmail password
      },
    });

    // Verify connection (optional)
    await transporter.verify();
    console.log("📡 SMTP connection verified");

    // ✅ Email contents
const mailOptions = {
  from: "info.iclptech@gmail.com",
  to: "info.iclptech@gmail.com",
  subject: `💡 New Course Registration | ICLP Tech`,
  html: `
  <div style="
    font-family: 'Inter', Arial, sans-serif;
    background-color: #f8fafc;
    padding: 40px 20px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    max-width: 620px;
    margin: 30px auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  ">

    <!-- Header -->
    <div style="text-align: center; margin-bottom: 28px;">
      <img src="https://iclptech.in/Logo.png" alt="ICLP Tech Logo"
        style="width: 80px; height: 80px; object-fit: contain; border-radius: 14px; margin-bottom: 12px;" />
      <h1 style="
        font-size: 1.8rem;
        color: #1e293b;
        margin: 0;
        font-weight: 700;
      ">
        ICLP Tech - New Course Registration
      </h1>
      <p style="
        color: #64748b;
        font-size: 0.95rem;
        margin-top: 8px;
      ">
        A new learner has registered for a course. See details below 👇
      </p>
    </div>

    <!-- Gradient Divider -->
    <div style="
      height: 4px;
      width: 100%;
      background: linear-gradient(90deg, #4f46e5, #06b6d4);
      border-radius: 4px;
      margin: 24px 0;
    "></div>

    <!-- Details Card -->
    <div style="
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      line-height: 1.6;
      color: #1e293b;
    ">

      <div style="margin-bottom: 16px;">
        <span style="font-weight: 600; color: #475569;">👤 Name:</span>
        <div style="font-size: 1rem; color: #0f172a;">${name}</div>
      </div>

      <div style="margin-bottom: 16px;">
        <span style="font-weight: 600; color: #475569;">📧 Email:</span>
        <div style="font-size: 1rem; color: #0f172a;">${email}</div>
      </div>

      <div style="margin-bottom: 16px;">
        <span style="font-weight: 600; color: #475569;">📞 Phone:</span>
        <div style="font-size: 1rem; color: #0f172a;">${phone}</div>
      </div>

      <div>
        <span style="font-weight: 600; color: #475569;">📘 Course:</span>
        <div style="font-size: 1rem; color: #0f172a;">${course}</div>
      </div>

    </div>

    <!-- Footer -->
    <div style="
      text-align: center;
      color: #94a3b8;
      font-size: 0.85rem;
      margin-top: 28px;
    ">
      <p style="margin: 4px 0;">Submitted on ${new Date().toLocaleString()}</p>
      <p style="margin: 4px 0;">
        <span style="color: #4f46e5; font-weight: 600;">— ICLP Tech Website</span>
      </p>
      <p style="margin-top: 8px;">
        <a href="https://iclptech.in" style="color: #06b6d4; text-decoration: none;">Visit ICLPTech.in</a>
      </p>
    </div>

  </div>
  `,
};


    // ✅ Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);

    // ✅ Response
    return NextResponse.json({
      success: true,
      message: "Form submitted and email sent successfully",
      // savedUser, // Uncomment if using Prisma
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { message: "Failed to submit form", error: error.message },
      { status: 500 }
    );
  }
}
