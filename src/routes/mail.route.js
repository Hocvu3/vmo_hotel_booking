const express = require('express');
const mailRouter = express.Router();
const MailController = require('../controllers/mail.controller');

mailRouter.post('/send-mail', MailController.sendMail);

module.exports = mailRouter;
