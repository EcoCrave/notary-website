"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export const sendContactEmail = async () => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: ["ecocraveworld@gmail.com"],
    subject: "Hello world",
    html: `<strong>this is the final testing</strong>`,
  });
};

export const sendformSubmitionEmail = async () => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: ["ecocraveworld@gmail.com"],
    subject: "Hello world",
    html: `<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; padding: 20px;">
        <tr>
            <td>
                <h1 style="color: #4a4a4a; text-align: center;">Thank You for Applying</h1>
                
                <p style="font-size: 16px;">Dear Applicant,</p>
                
                <p style="font-size: 16px;">Thank you for submitting your application. We appreciate your interest and the time you've taken to apply.</p>
                
                <p style="font-size: 16px;">Your application is currently under review by our team. Once the review process is complete and if your application is approved, we will send a confirmation email to the address you provided during the application process.</p>
                
                <p style="font-size: 16px;">Please note that the review process may take some time. We ask for your patience and assure you that we will get back to you as soon as possible.</p>
                
                <p style="font-size: 16px;">If you have any questions or need to update any information in your application, please don't hesitate to contact our support team.</p>
                
                <p style="font-size: 16px;">Thank you once again for your interest. We look forward to potentially working with you.</p>
                
                <p style="font-size: 16px;">Best regards,<br>The Application Team</p>
            </td>
        </tr>
    </table>
    
    <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">This is an automated message. Please do not reply to this email.</p>
</body> `,
  });
};

export const sendNotaryApprovalEmail = async () => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: ["ecocraveworld@gmail.com"],
    subject: "Hello world",
    html: `<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; padding: 20px;">
        <tr>
            <td>
                <h1 style="color: #4a4a4a; text-align: center;">Thank You for Applying</h1>
                
                <p style="font-size: 16px;">Dear Applicant,</p>
                
                <p style="font-size: 16px;">Thank you for submitting your application. We appreciate your interest and the time you've taken to apply.</p>
                
                <p style="font-size: 16px;">Your application is currently under review by our team. Once the review process is complete and if your application is approved, we will send a confirmation email to the address you provided during the application process.</p>
                
                <p style="font-size: 16px;">Please note that the review process may take some time. We ask for your patience and assure you that we will get back to you as soon as possible.</p>
                
                <p style="font-size: 16px;">If you have any questions or need to update any information in your application, please don't hesitate to contact our support team.</p>
                
                <p style="font-size: 16px;">Thank you once again for your interest. We look forward to potentially working with you.</p>
                
                <p style="font-size: 16px;">Best regards,<br>The Application Team</p>
            </td>
        </tr>
    </table>
    
    <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">This is an automated message. Please do not reply to this email.</p>
</body> `,
  });
};

export const fileNotarizedConfirm = async () => {
  await resend.emails.send({
    from: "Online Notary <onboarding@resend.dev>",
    to: ["ecocraveworld@gmail.com"],
    subject: "Hello world",
    html: `<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; padding: 20px;">
        <tr>
            <td>
                <h1 style="color: #4a4a4a; text-align: center;">Thank You for Applying</h1>
                
                <p style="font-size: 16px;">Dear Applicant,</p>
                
                <p style="font-size: 16px;">Thank you for submitting your application. We appreciate your interest and the time you've taken to apply.</p>
                
                <p style="font-size: 16px;">Your application is currently under review by our team. Once the review process is complete and if your application is approved, we will send a confirmation email to the address you provided during the application process.</p>
                
                <p style="font-size: 16px;">Please note that the review process may take some time. We ask for your patience and assure you that we will get back to you as soon as possible.</p>
                
                <p style="font-size: 16px;">If you have any questions or need to update any information in your application, please don't hesitate to contact our support team.</p>
                
                <p style="font-size: 16px;">Thank you once again for your interest. We look forward to potentially working with you.</p>
                
                <p style="font-size: 16px;">Best regards,<br>The Application Team</p>
            </td>
        </tr>
    </table>
    
    <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">This is an automated message. Please do not reply to this email.</p>
</body> `,
  });
};
