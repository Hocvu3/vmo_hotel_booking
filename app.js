const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const roomRouter = require('./src/routes/room.route');
const userRouter = require('./src/routes/user.route');
const viewRouter = require('./src/routes/view.route');
const authRouter = require('./src/routes/auth.route');
const errorHandler = require('./src/middlewares/error.middleware');

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));

// Config static file
app.use(express.static(path.join(__dirname, 'public')));

// Body parser/cookie parser
app.use(cookieParser());
app.use(express.json());

// Put all routes here
app.use('/', viewRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/rooms', roomRouter);

// Put all middlewares after router
// Error handling middleware
app.use(errorHandler);

module.exports = app;
