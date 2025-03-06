const express = require('express');
const mailRouter = express.Router();
const MailController = require('../controllers/mail.controller');

mailRouter.get('/send-mail', MailController.renderSendMailPage);
mailRouter.post('/send-mail', MailController.sendMail);

module.exports = mailRouter;
