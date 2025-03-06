const transporter = require('../config/mail');
const env = require('../config/env');
class MailModel {
  static async sendEmail(to, subject, text, htmlContent = null) {
    const defaultHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h2 style="color: #333;">Xin chào!</h2>
        <p style="font-size: 16px; color: #555;">${text}</p>
        <a href="https://example.com" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">Xem chi tiết</a>
        <p style="font-size: 14px; color: #888; margin-top: 20px;">Trân trọng,<br></p>
      </div>
    `;
    const mailOptions = {
      from: env.EMAIL_USER,
      to,
      subject,
      text,
      html: htmlContent || defaultHtml,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return { success: true, message: 'Email sent successfully', info };
    } catch (error) {
      return { success: false, message: 'Email sent failed', error };
    }
  }
}

module.exports = MailModel;
