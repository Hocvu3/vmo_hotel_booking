import axios from 'axios';
import { showAlert, hideAlert } from './alert';
const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'api/v1/auth/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
// Log out
const logout = async () => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'api/v1/auth/logout',
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged out successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', 'Unexpected error, try later.');
  }
};

export { login, logout };
