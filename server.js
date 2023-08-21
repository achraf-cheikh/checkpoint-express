const express = require("express");

const app = express();

const Port = process.env.Port || 5000;

app.use(function (req, res, next) {
  let ts = Date.now();
  let date = new Date(ts);
  let day = date.getDay();
  let hour = date.getHours();
  if (day > 0 && day < 6 && hour > 9 && hour < 17) {
    next();
  } else {
    res.send("This website works only on work time");
  }
});

app.use(express.static("Application"));

app.listen(Port, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${Port}`)
);
