import axios from 'axios';
import { showAlert, hideAlert } from './alert';
// Create summary
const createBooking = async (
  room_id,
  user_id,
  check_in,
  check_out,
  number_of_guest,
  service_id
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/bookings',
      data: {
        room_id,
        user_id,
        check_in,
        check_out,
        number_of_guest,
        service_id,
      },
    });
    // Take bookingId from response
    const bookingId = res.data.data.bookingId;
    if (res.data.status === 'success') {
      showAlert('success', 'Create booking successfully!');
      window.setTimeout(() => {
        location.assign(`/summary?bookingId=${bookingId}`);
      }, 1500);
    }
  } catch (err) {
    if (err.response) {
      // Check err.response
      showAlert('error', err.response.data.message);
    } else {
      // Response untracked
      showAlert('error', 'An unexpected error occurred. Please try again.');
      console.error('Error without response:', err); // Log to debug
    }
  }
};
//Get Booking
const getBooking = async (bookingId) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/api/v1/bookings/${bookingId}`,
    });
  } catch (err) {}
};
export { createBooking, getBooking };
