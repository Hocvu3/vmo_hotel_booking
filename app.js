const express = require('express');
const app = express();
const userRouter = require('./src/routes/user.route');
const errorHandler = require('./src/middlewares/error.middleware');

// Body parser
app.use(express.json());

// Put all routes here
app.use('/api/v1/users', userRouter);

// Put all middlewares after router
// Error handling middleware
app.use(errorHandler);

module.exports = app;
