const express = require("express");
const app = express();
app.use(express.json()); // parser JSON request

const userRouter = require("./routes/user.route");

app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  });
  
module.exports = app;