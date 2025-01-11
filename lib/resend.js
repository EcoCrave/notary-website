"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export const sendEmail = async () => {
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["ecocraveworld@gmail.com"],
    subject: "Hello world",
    html: `<strong>this is the final testing</strong>`,
  });
};
