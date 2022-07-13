const nodemailer = require("nodemailer");
const Sib = require("sib-api-v3-sdk");

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
  transEmailApi
    .sendTransacEmail({
      sender: sender,
      to: [{ email: email }],
      subject: sub,
      textContent: "Hello " + name + ",\n\n" + text + "\n\nThank You!\n",
    })
    .then(console.log)
    .catch((e) => e);
};

// for contact us emails
exports.contactUs_mail = (email, name, sub, text, query, phone) => {
  transEmailApi
    .sendTransacEmail({
      sender: sender,
      to: [{ email: email }],
      subject: sub,
      textContent: "Hello " + name + ",\n\n" + text,
    })
    .then(console.log)
    .catch((e) => e);

  transEmailApi
    .sendTransacEmail({
      sender: sender,
      to: [{ email: "info.acedrops@gmail.com" }],
      subject: "New Contact Query" + sub,
      textContent:
        "Hey there!" +
        "\n\n" +
        `Received a new request
        Name: ${name}.` +
        "\n\n" +
        `Phone number: ${phone}

        
        Query is as follows: 
      ${query}
      `,
    })
    .then(console.log)
    .catch((e) => e);
};

// module.exports = send_mail;
