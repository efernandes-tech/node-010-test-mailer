const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const mailOptions = {
  from: "edersonlrf.dbc@gmail.com",
  to: "edersonlrf.dbc@gmail.com",
  subject: "Email Test",
  html: "<h1>Test</h1><p>only test!</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("E-mail sent: " + info.response);
  }
});
