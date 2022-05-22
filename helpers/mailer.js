const nodemailer = require("nodemailer");
// const nodemailersendgrid = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   nodemailersendgrid({
//     auth: { api_key: process.env.API_KEY },
//   })
// );

//for otps

// exports.send_mail = (email, name, otp, text) => {
//   transporter.sendMail({
//     from: "info.acedrops@gmail.com",
//     to: email,
//     subject: text,
//     text: "Hello " + name + ",\n\n" + "your otp is:" + otp + "\n\nThank You!\n",
//   });
// };

//for any other information

exports.general_mail = (email, name, sub, text) => {
  transporter.sendMail({
    from: "info.acedrops@gmail.com",
    to: email,
    subject: sub,
    text: "Hello " + name + ",\n\n" + text + "\n\nThank You!\n",
  });
};

exports.send_mail = async (email, name, otp, text) => {
  // async..await is not allowed in global scope, must use a wrapper
  // async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: "587",
    secure: "true", // true for 465, false for other ports
    auth: {
      user: "info.acedrops@gmail.com", // generated ethereal user
      pass: "myacedrops.info", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Acedrops" <info.acedrops@gmail.com> `, // sender address
    to: email, // list of receivers
    subject: text, // Subject line
    text:
      "Hello " + name + ",\n\n" + "Your otp is: " + otp + "\n\nThank You!\n", // plain text body
    // html:<html></html>, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  // }

  // main().catch(console.error);
};

// module.exports = send_mail;
