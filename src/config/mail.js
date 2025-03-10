const nodemailer = require('nodemailer');
const env = require('./env');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_USER, // Email
    pass: env.EMAIL_PASS, // App password
  },
});

module.exports = transporter;
