import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { showAlert } from './alert';
import { login, logout } from './login';
import { updateInfo } from './settings';
import { createPayment } from './payment';
import { app, messaging, requestPermission } from './firebase-client';
import { createBooking, updateBookingSummary, getDiscount } from './booking';

// Notification
requestPermission();

// Others
document.addEventListener('DOMContentLoaded', () => {
  // Login
  const loginForm = document.querySelector('.form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }
  // Logout
  const logoutBtn = document.querySelector('.sidebar-link-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
  // Update information
  const formUpdate = document.querySelector('.user-form');
  if (formUpdate) {
    formUpdate.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('user_name').value;
      const email = document.getElementById('user_email').value;
      const phone = document.getElementById('user_phone').value;
      const date = document.getElementById('user_date').value;

      const new_date = new Date(date);
      const timestamp = new_date.toISOString();

      const userInfoElement = document.getElementById('user-info');
      const userId = userInfoElement.dataset.userId;

      updateInfo(userId, name, timestamp, email, phone);
    });
  }
  // Booking_Summary
  const summarySelector = document.querySelector('.btn-warning');
  if (summarySelector) {
    document
      .querySelector('.btn-warning')
      .addEventListener('click', async () => {
        // Check if user logged in or not
        const userInfoElement = document.getElementById('user-information');
        const userId = userInfoElement.dataset.userId;
        // Validate check-in check-out
        const checkInDate = document.getElementById('checkIn').value;
        const checkOutDate = document.getElementById('checkOut').value;
        if (!userId) {
          showAlert('error', 'You must log in to make booking');
        } else if (!checkInDate || !checkOutDate) {
          showAlert('error', 'Enter your check-in check-out date');
        } else {
          const pathSegments = window.location.pathname.split('/');
          const roomId = pathSegments[pathSegments.length - 1];
          const numberOfGuests =
            document.querySelector('select.form-select').value;
          const serviceCheckboxes = document.querySelectorAll(
            '.service-checkbox:checked'
          );
          const serviceIds = Array.from(serviceCheckboxes).map(
            (checkbox) => checkbox.dataset.serviceId
          );
          createBooking(
            roomId,
            userId,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            serviceIds
          );
        }
      });
  }
  // Update Info On Summary
  const urlParams = new URLSearchParams(window.location.search);
  const bookingId = urlParams.get('bookingId');
  if (bookingId) {
    updateBookingSummary(bookingId);
  }

  // Payment
  const bookingSummary = document.querySelector('.booking-summary');
  if (bookingSummary) {
    document.querySelector('.btn-book').addEventListener('click', async () => {
      if (bookingId) {
        const total_amount_text =
          document.getElementById('total-price').textContent;
        const total_amount =
          parseFloat(total_amount_text.replace('$', '')) || 0;
        createPayment(bookingId, total_amount);
      }
    });
  }

  // Apply discount
  const discountInput = document.querySelector('.discount-field input');
  const applyButton = document.querySelector('.discount-field button');

  if (discountInput && applyButton) {
    applyButton.addEventListener('click', () => {
      const discountCode = discountInput.value.trim();

      if (discountCode === '') {
        showAlert('error', 'Please enter a discount code.');
        return;
      }
      getDiscount(discountCode);
    });
  }
});
