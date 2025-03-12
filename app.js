const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const roomRouter = require('./src/routes/room.route');
const userRouter = require('./src/routes/user.route');
const viewRouter = require('./src/routes/view.route');
const authRouter = require('./src/routes/auth.route');
const mailRouter = require('./src/routes/mail.route');
const bookingRouter = require('./src/routes/booking.route');
const webhookRouter = require('./src/routes/webhook.route');
const paymentRouter = require('./src/routes/payment.route');
const notificationRouter = require('./src/routes/notification.route');
const { handleErrors } = require('./src/middlewares/error.middleware');

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));

// Config static file
app.use(express.static(path.join(__dirname, 'public')));

// Webhook
// Put before express.json
app.use('/', webhookRouter);

// Body parser/cookie parser
app.use(cookieParser());
app.use(express.json());

// Put all routes here
// Api
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/rooms', roomRouter);
app.use('/api/v1/payment', paymentRouter);
app.use('/api/v1/bookings', bookingRouter);
app.use('/', mailRouter);
// Notification
app.use('/', notificationRouter);
// Front
app.use('/', viewRouter);

// Put all middlewares after router
// Error handling middleware
app.use(handleErrors);

module.exports = app;
