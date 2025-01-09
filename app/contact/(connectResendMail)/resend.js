import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export const sendEmail = async () => {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ecocraveworld@gmail.com"],
      subject: "Hello world",
      html: "<strong>Hi , how are you</strong>",
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
