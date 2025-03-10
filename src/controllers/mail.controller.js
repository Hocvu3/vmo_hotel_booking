const MailModel = require('../models/mail.model');

class MailController {
  // Send
  static async sendMail(req, res) {
    const { to, subject, text, customLink } = req.body;

    if (!to || !subject || !text) {
      return res.status(400).json({
        status: 'false',
        message: 'Missed information: to, subject, text',
      });
    }

    const result = await MailModel.sendEmail(to, subject, text);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  }
}

module.exports = MailController;
