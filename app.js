const express = require("express");
const app = express();
app.use(express.json()); // Thêm dòng này để parse JSON body

const userRouter = require("./routes/userRoute");

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