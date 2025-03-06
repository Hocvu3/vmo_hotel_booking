const messaging = require('../config/firebaseAdmin');
const { saveToken, getTokens } = require('../models/notification.model');

const saveUserToken = (req, res) => {
  const { token } = req.body;
  saveToken(token);
  res.status(200).json({ success: true, message: 'Token saved successfully' });
};

const sendNotification = async (req, res) => {
  console.log('Receive request:', req.body);
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
    android: {
      notification: {
        sound: 'default',
        priority: 'high',
      },
    },
    data: { click_action: 'FLUTTER_NOTIFICATION_CLICK' }, // Mobile app
    //9a0619a8-51c7-4ef1-bf5d-32536a724697
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

const renderNotificationPage = (req, res) => {
  res.render('notification');
};

module.exports = { saveUserToken, sendNotification, renderNotificationPage };
