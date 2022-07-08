import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "21aaa874988414",
      pass: "fb0bb22082aa0f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'User <salvealek@gmail.com>',
        to: 'Arthur Timóteo <peraarthur2018@gmail.com>',
      subject,
      html: body,
    });
  };
}