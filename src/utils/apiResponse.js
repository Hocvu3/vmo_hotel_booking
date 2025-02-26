const apiResponse = (res, status, message, data = null) => {
  return res.status(status).json({
    status: status < 400 ? 'success' : 'error',
    message,
    data,
  });
};

module.exports = apiResponse;
