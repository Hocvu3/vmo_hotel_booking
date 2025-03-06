const MailModel = require('../models/mail.model');

class MailController {
  static renderSendMailPage(req, res) {
    res.render('sendMail');
  }

  static async sendMail(req, res) {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
      return res.status(400).json({
        success: false,
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
