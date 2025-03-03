import axios from 'axios';
import { showAlert, hideAlert } from './alert';
const updateInfo = async (
  user_id,
  name,
  date_of_birth,
  email,
  phone_number
) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `api/v1/users/${user_id}`,
      data: {
        name,
        date_of_birth,
        email,
        phone_number,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Update info successfully!');

      document.getElementById('user_name').value = name;
      document.getElementById('user_email').value = email;
      document.getElementById('user_phone').value = phone_number;
      document.getElementById('user_date').value = date_of_birth.split('T')[0]; // Take from timestamp
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

export { updateInfo };
