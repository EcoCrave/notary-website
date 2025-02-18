"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export const sendContactEmail = async (name, email, message) => {
  await resend.emails.send({
    from: "notaryblocks@gmail.com",
    to: "notaryblocks@gmail.com",
    subject: "Hello world",
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
  });
};

export const sendBookingConfirmationEmail = async (
  recipientEmail,
  userName
) => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: [recipientEmail],
    subject: "Appointment Confirmation - Online Notary",
    html: `
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f8f8;">
    
        <!-- Logo Section -->
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="/img/notary-logo.png" alt="Company Logo" width="150" style="display: block; margin: 0 auto;">
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <tr>
                <td>
                    <h1 style="color: #2c3e50; text-align: center;">Thank You for Booking Your Appointment</h1>
                    
                    <p style="font-size: 16px;">Dear <strong>${userName}</strong>,</p>
                    
                    <p style="font-size: 16px;">
                        We have received your appointment booking request. Thank you for choosing our **Online Notary Services**.
                    </p>
                    
                    <p style="font-size: 16px;">
                        Our team will now **verify your documents**, and once the review is complete, we will get back to you with the next steps.
                    </p>

                    <p style="font-size: 16px;">
                        If you have any **urgent questions** or need assistance, feel free to reach out to our support team.
                    </p>

                    <p style="font-size: 16px;">Thank you for your trust in our services!</p>

                    <p style="font-size: 16px;"><strong>Best regards,</strong><br>Online Notary Team</p>
                </td>
            </tr>
        </table>
        
        <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">
            This is an automated message. Please do not reply to this email.
        </p>
    </body>`,
  });
};

export const sendPaymentRequestEmail = async (
  recipientEmail,
  userName,
  paymentLink,
  amount
) => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: [recipientEmail],
    subject: "Next Step: Payment Required for Your Notary Appointment",
    html: `
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f8f8;">
    
        <!-- Logo Section -->
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="/img/notary-logo.png" alt="Company Logo" width="150" style="display: block; margin: 0 auto;">
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <tr>
                <td>
                    <h1 style="color: #2c3e50; text-align: center;">Documents Verified – Next Step: Payment</h1>
                    
                    <p style="font-size: 16px;">Dear <strong>${userName}</strong>,</p>
                    
                    <p style="font-size: 16px;">
                        We have successfully **verified your documents** and are now ready to proceed with your online notary appointment.
                    </p>
                    
                    <p style="font-size: 16px;">
                        To confirm your appointment, **please complete your payment of <strong>$${amount}</strong>** using the secure payment link below.
                    </p>

                    <!-- Payment Button -->
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="${paymentLink}" target="_blank" style="background-color: #28a745; color: white; padding: 12px 24px; font-size: 16px; text-decoration: none; border-radius: 5px; display: inline-block;">
                            Complete Payment
                        </a>
                    </div>

                    <p style="font-size: 16px;">
                        Once we receive your payment, we will send you a **confirmation email** with your **meeting details**.
                    </p>

                    <p style="font-size: 16px;">
                        If you have any **questions** or need assistance, feel free to contact our support team.
                    </p>

                    <p style="font-size: 16px;"><strong>Best regards,</strong><br>Online Notary Team</p>
                </td>
            </tr>
        </table>
        
        <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">
            This is an automated message. Please do not reply to this email.
        </p>
    </body>`,
  });
};

export const sendNotarizedDocumentsEmail = async (
  recipientEmail,
  userName,
  notarizedFiles
) => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: [recipientEmail],
    subject: "Your Notarized Documents Are Ready!",
    attachments: notarizedFiles.map((file) => ({
      filename: file.filename,
      content: file.content, // Base64 encoded content
    })),
    html: `
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f8f8;">
    
        <!-- Logo Section -->
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="/img/notary-logo.png" alt="Company Logo" width="150" style="display: block; margin: 0 auto;">
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <tr>
                <td>
                    <h1 style="color: #2c3e50; text-align: center;">Your Notarized Documents Are Ready</h1>
                    
                    <p style="font-size: 16px;">Dear <strong>${userName}</strong>,</p>
                    
                    <p style="font-size: 16px;">
                        We are pleased to inform you that your documents have been **successfully notarized**.
                    </p>
                    
                    <p style="font-size: 16px;">
                        Please find your notarized documents attached to this email. You can also **download them using the link below**.
                    </p>

                    <!-- Download Button -->
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="https://your-download-link.com" target="_blank" style="background-color: #007bff; color: white; padding: 12px 24px; font-size: 16px; text-decoration: none; border-radius: 5px; display: inline-block;">
                            Download Documents
                        </a>
                    </div>

                    <p style="font-size: 16px;">
                        If you have any **questions or require further assistance**, feel free to contact our support team.
                    </p>

                    <p style="font-size: 16px;"><strong>Best regards,</strong><br>Online Notary Team</p>
                </td>
            </tr>
        </table>
        
        <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">
            This is an automated message. Please do not reply to this email.
        </p>
    </body>`,
  });
};
