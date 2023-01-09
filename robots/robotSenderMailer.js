// ./robots/robotSenderMailer.js

const nodemailer = require("nodemailer");

async function robot(template) {
  console.log("robotSenderMailer() - begin");

  const transporter = await nodemailer.createTransport({
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
    html: template,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log("E-mail sent: %s", info.response);
  } catch (err) {
    console.error(err);
  }

  console.log("robotSenderMailer() - end");
}

module.exports = robot;
