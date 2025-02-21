const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const roomRouter = require('./src/routes/room.route');
const userRouter = require('./src/routes/user.route');
const errorHandler = require('./src/middlewares/error.middleware');

// Body parser/cookie parser
app.use(cookieParser());
app.use(express.json());

// Put all routes here
app.use('/api/v1/users', userRouter);
app.use('/api/v1/rooms', roomRouter);

// Put all middlewares after router
// Error handling middleware
app.use(errorHandler);

module.exports = app;
