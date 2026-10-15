// must read documentation to setup this system. if any configuration isssue connect with developer
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, phone, email, loanType, loanAmount, message } =
      await req.json();

    if (!name || !phone || !loanType) {
      return NextResponse.json(
        { status: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@chakrafinances.com",
        pass: "Chakrafin$2026",
      },
    });

    const html = `
      <h2>Get in Touch</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email || "N/A"}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Loan Service:</b> ${loanType}</p>
      <p><b>Loan Amount:</b> ${loanAmount || "N/A"}</p>
      <p><b>Message:</b></p>
      <p>${message || "N/A"}</p>
    `;

    await transporter.sendMail({
      from: "info@chakrafinances.com",
      to: "info@chakrafinances.com",
      subject: "New Loan Enquiry",
      html,
    });

    if (email) {
      await transporter.sendMail({
        from: "info@chakrafinances.com",
        to: email,
        subject: "Thank you for contacting Chakra Finances",
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. Our team will reach you shortly.</p>
          <br/>
          <p>Regards</p>
          <p>Chakra Finances</p>
        `,
      });
    }

    return NextResponse.json({ status: true });
  } catch (error) {
    console.log("Mail Error:", error);

    return NextResponse.json(
      { status: false, error: "Mail failed" },
      { status: 500 }
    );
  }
}