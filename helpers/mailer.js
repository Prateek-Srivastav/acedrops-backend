const nodemailer = require("nodemailer");
const Sib = require("sib-api-v3-sdk");
// const nodemailersendgrid = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   nodemailersendgrid({
//     auth: { api_key: process.env.API_KEY },
//   })
// );

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API_KEY;

const transEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
  email: "info.acedrops@gmail.com",
  name: "Acedrops",
};

//for otps

exports.send_mail = (email, name, otp, text) => {
  transEmailApi
    .sendTransacEmail({
      sender: sender,
      to: [{ email: email }],
      subject: text,
      textContent:
        "Hello " + name + ",\n\n" + "your otp is: " + otp + "\n\nThank You!\n",
    })
    .then(console.log)
    .catch(console.log);
};

//for any other information

exports.general_mail = (email, name, sub, text) => {
  transporter.sendMail({
    from: "info.acedrops@gmail.com",
    to: email,
    subject: sub,
    text: "Hello " + name + ",\n\n" + text + "\n\nThank You!\n",
  });
};

// module.exports = send_mail;
