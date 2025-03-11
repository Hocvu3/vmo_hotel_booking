const { Payment } = require('../models/db');
const MailModel = require('../models/mail.model');
const messaging = require('../config/firebaseAdmin');
const { getTokens, saveToken } = require('../models/notification.model');
const { response } = require('express');

const handleWebhook = async (req, res) => {
  const event = req.event;

  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutSessionCompleted(event.data.object);
      break;

    case 'checkout.session.expired':
      await handleCheckoutSessionExpired(event.data.object);
      break;

    case 'charge.refunded':
      await handleChargeRefunded(event.data.object);
      break;

    default:
      console.log(`Unhandled Event : ${event.type}`);
  }
  res.json({ received: true });
};

// Handle completed session
async function handleCheckoutSessionCompleted(session) {
  try {
    // Send email after payment complete
    // const customerEmail = session.customer_details?.email || 'hocvu2003@gmail.com';
    const customerEmail = 'hocvu2003@gmail.com';
    const amount = session.amount_total ? session.amount_total / 100 : 200;
    const link = 'https://example.com'; // Enter actual links

    const htmlContent = MailModel.createEmailTemplate(
      'Payment succeeded',
      `Thank you for paying $${amount}. You can view your order here`,
      'View booking',
      link
    );

    const emailResult = await MailModel.sendEmail(
      customerEmail,
      'Payment confirmed',
      htmlContent
    );

    if (!emailResult.success) {
      console.error('Error sending email:', emailResult.error);
    }

    // Update status
    await Payment.update(
      {
        status: 'Completed',
        transaction_id: session.payment_intent,
      },
      {
        where: { transaction_id: session.id },
      }
    );
    console.log('Payment updated successfully');

    // Push notification
    const tokens = getTokens();
    console.log(tokens);
    const notificationMessage = {
      notification: {
        title: 'Payment confirmed',
        body: `Your payment of $${amount} was successful, thank you`,
      },
      tokens: tokens,
    };
    try {
      responses = await messaging.sendEachForMulticast(notificationMessage);
      console.log('send notification successfully');
    } catch (err) {
      console.log('error', err.message);
    }
  } catch (err) {
    console.error('Error in handleCheckoutSessionCompleted:', err);
  }
}

// Handle expired session
async function handleCheckoutSessionExpired(session) {
  try {
    // Send email after payment failed
    // const customerEmail =
    //   session.customer_details?.email || 'hocvu2003@gmail.com';
    const customerEmail = 'hocvu2003@gmail.com';
    const amount = session.amount_total ? session.amount_total / 100 : 200;
    const link = 'https://example.com'; // Enter actual links

    const htmlContent = MailModel.createEmailTemplate(
      'Payment expired',
      `Your session of amount $${amount} has expired, Try it later`,
      'View details',
      link
    );

    const emailResult = await MailModel.sendEmail(
      customerEmail,
      'Payment expired',
      htmlContent
    );

    if (!emailResult.success) {
      console.error('Error sending email:', emailResult.error);
    }

    // Update status of expired
    await Payment.update(
      {
        status: 'Expired',
      },
      {
        where: { transaction_id: session.payment_intent },
      }
    );

    console.log('Payment failed');
  } catch (err) {
    console.log('Error in handleCheckoutSessionExpired', err.message);
  }
}

//Handle charge refund
async function handleChargeRefunded(charge) {
  try {
    // Send email after payment complete
    // const customerEmail = charge.billing_details.email;
    const customerEmail = 'hocvu2003@gmail.com';
    const amount = charge.amount_refunded ? charge.amount_refunded / 100 : 200;
    const link = 'https://example.com'; // Enter actual links

    const htmlContent = MailModel.createEmailTemplate(
      'Payment refunded',
      `$${amount} has been moved to your wallet`,
      'View details',
      link
    );

    const emailResult = await MailModel.sendEmail(
      customerEmail,
      'Payment refunded',
      htmlContent
    );

    if (!emailResult.success) {
      console.error('Error sending email:', emailResult.error);
    }

    // Update status of refund
    const paymentIntend = await Payment.findOne({
      where: { transaction_id: charge.payment_intent },
    });
    if (!paymentIntend) {
      console.log(
        `Error: Payment record not found for payment_intent: ${charge.payment_intent}`
      );
      return;
    }
    await Payment.update(
      { status: 'Refunded' },
      { where: { transaction_id: charge.payment_intent } }
    );

    console.log('Payment refunded.');
  } catch (err) {
    console.log('Error in handleChargeRefunded', err.message);
  }
}
module.exports = { handleWebhook };
