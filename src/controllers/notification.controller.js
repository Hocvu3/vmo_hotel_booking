const messaging = require('../config/firebaseAdmin');
const { saveToken, getTokens } = require('../models/notification.model');

const saveUserToken = (req, res) => {
  const { token } = req.body;
  saveToken(token);
  res.status(200).json({ success: true, message: 'Token saved successfully' });
};

const sendNotification = async (req, res) => {
  const { title, body, token } = req.body;

  let tokens = getTokens();
  if (token && !tokens.includes(token)) {
    saveToken(token);
  }

  if (!tokens || tokens.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: 'No users subscribed' });
  }

  const message = {
    notification: { title, body },
    tokens,
  };
  try {
    const responses = await messaging.sendEachForMulticast(message);
    console.log('Sent successfully: ', responses);
    res.json({
      success: true,
      message: 'Notification sent successfully!',
      responses,
    });
  } catch (error) {
    console.error('Error while sending message:', error.code, error.message);
    res
      .status(500)
      .json({ success: false, message: 'Failed to send notification', error });
  }
};

module.exports = { saveUserToken, sendNotification };
