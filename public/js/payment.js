import axios from 'axios';
import { showAlert, hideAlert } from './alert';
import moment from 'moment';
// Create Payment
const createPayment = async (booking_Id, total_amount) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/v1/payment/create-session/${booking_Id}`,
      data: {
        booking_id: booking_Id,
        total_amount: total_amount,
      },
    });
    if (res.data.status === 'success') {
      window.location.href = res.data.session.url;
    }
  } catch (err) {
    if (err.response) {
      showAlert('error', err.response.data.message);
    } else {
      // Response untracked
      showAlert('error', 'An unexpected error occurred. Please try again.');
      console.error('Error without response:', err); // Log to debug
    }
  }
};

export { createPayment };
