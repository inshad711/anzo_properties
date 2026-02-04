// // app/api/contact/route.ts
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { firstName, email, phone, needs, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"Website Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       subject: `New Request: ${needs}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
//           <h2 style="color: #c5a67c;">New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${firstName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Service Needed:</strong> ${needs}</p>
//           <hr style="border: 0; border-top: 1px solid #eee;" />
//           <p><strong>Message:</strong></p>
//           <p style="white-space: pre-wrap;">${message}</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Nodemailer error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 },
//     );
//   }
// }

////new
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, email, phone, needs, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to YOU (The Admin)
    const adminMailOptions = {
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Request: ${needs} from ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #c5a67c;">New Lead Captured</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Needed:</strong> ${needs}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 2. Email to the USER (Thank You)
    const userMailOptions = {
      from: `"Our Team" <${process.env.EMAIL_USER}>`,
      to: email, // This is the email they entered in the form
      subject: `Thank you for contacting us, ${firstName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; padding: 20px;">
          <h2 style="color: #c5a67c;">Hello ${firstName},</h2>
          <p>Thank you for reaching out to us. We have received your request regarding <strong>${needs}</strong>.</p>
          <p>Our team is reviewing your message and will get back to you shortly at this email address or via phone at ${phone}.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>Anzo Properties</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #999;">This is an automated response. Please do not reply directly to this email.</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
