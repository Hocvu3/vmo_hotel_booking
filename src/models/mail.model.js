const transporter = require('../config/mail');
const env = require('../config/env');
class MailModel {
  static createEmailTemplate(title, message, buttonText, buttonLink) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h2 style="color: #333;">${title}</h2>
        <p style="font-size: 16px; color: #555;">${message}</p>
        <a href="${buttonLink}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">${buttonText}</a>
        <p style="font-size: 14px; color: #888; margin-top: 20px;">Thanks<br>Support team</p>
      </div>
    `;
  }
  static async sendEmail(to, subject, htmlContent = null) {
    const mailOptions = {
      from: env.EMAIL_USER,
      to,
      subject,
      html: htmlContent,
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
