import axios from 'axios';
import { showAlert, hideAlert } from './alert';
import moment from 'moment';
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
      url: `api/v1/bookings/${bookingId}`,
    });
    if (res.data.status === 'success') {
      return res.data.data;
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
// Update Summary FE
const updateBookingSummary = async (bookingId) => {
  try {
    const bookingData = await getBooking(bookingId);
    if (bookingData) {
      // Update room name
      document.getElementById('room-name').textContent =
        bookingData.booking.room.name || 'N/A';

      // Update check-in check-out dates
      document.getElementById('check-in-date').textContent =
        moment(bookingData.booking.arrival_date).format('DD/MM/YYYY') || 'N/A';
      document.getElementById('check-out-date').textContent =
        moment(bookingData.booking.departure_date).format('DD/MM/YYYY') ||
        'N/A';

      // Update info of user
      document.getElementById('guest-name').textContent =
        bookingData.booking.user.full_name || 'N/A';
      document.getElementById('user-email').textContent =
        bookingData.booking.user.email || 'N/A';

      // Update room info
      document.getElementById('room-type').textContent =
        bookingData.booking.room.category.name || 'N/A';

      // Update dropdown
      const serviceDropdown = document.getElementById('service-dropdown');
      const services = bookingData.booking?.booking_services || [];
      if (services.length > 0) {
        services.forEach((service) => {
          const option = document.createElement('option');
          option.value = service.serviceId;
          option.textContent = service.service.name;
          serviceDropdown.appendChild(option);
        });
      } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No services available';
        serviceDropdown.appendChild(option);
      }

      // Update room price & services price
      const room_price = bookingData.booking.room.price.amount;
      document.getElementById('room-charge').textContent =
        `$${room_price}` || 'N/A';

      const serviceChargeElement = document.getElementById('service-charge');
      const services_price = bookingData.booking?.booking_services || [];

      let totalServiceCharge = 0;
      if (services_price.length > 0) {
        services_price.forEach((service) => {
          const serviceName = service.service.name || 'Unknown Service';
          const servicePrice =
            service.service?.prices?.length > 0
              ? service.service.prices[0].amount
              : 0;
          totalServiceCharge += servicePrice;
          // Create row to store name and price
          const serviceRow = document.createElement('div');
          serviceRow.classList.add('price-row'); // CSS

          // Create span for name of services
          const nameSpan = document.createElement('span');
          nameSpan.textContent = `${serviceName}`;

          // Create span for prices of services
          const priceSpan = document.createElement('span');
          priceSpan.textContent = `$${servicePrice.toFixed(2)}`;

          // Add to row
          serviceRow.appendChild(nameSpan);
          serviceRow.appendChild(priceSpan);

          // Add to main container
          serviceChargeElement.appendChild(serviceRow);
        });
      } else {
        serviceChargeElement.textContent = 'No services available';
      }

      // Update total price
      const total_price = totalServiceCharge + room_price;
      document.getElementById('total-price').textContent =
        `$${total_price.toFixed(2)}` || 'N/A';
    }
  } catch (err) {
    console.error('Error:', err);
    showAlert('error', 'Error while fetching data. Try again');
  }
};

// Apply coupon
const getDiscount = async (discount) => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/bookings/discount',
      data: {
        discount_code: discount,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Coupon applied');
    } else {
      showAlert('error', 'Invalid coupon');
    }
  } catch (err) {
    console.error('Error:', err);
    showAlert('error', 'Error while fetching data. Try again');
  }
};
export { createBooking, updateBookingSummary, getDiscount };
