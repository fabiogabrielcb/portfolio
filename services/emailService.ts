import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE, EMAILJS_TEMPLATE } from "~/constants/constants";

export class EmailService {
  static async sendEmail(
    name: string,
    email: string,
    message: string,
    secret: string,
  ): Promise<void> {
    const params = {
      from_name: name,
      email_id: email,
      message: message,
    };

    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, params, secret);
  }
}
