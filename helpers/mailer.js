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
      htmlContent: `<!DOCTYPE html>
      <html lang="en">
        <body>
          <div
            style="
              font-family: Helvetica, Arial, sans-serif;
              min-width: 1000px;
              overflow: auto;
              line-height: 2;
            "
          >
            <div style="margin: 50px auto; width: 70%; padding: 20px 0">
              <div style="border-bottom: 1px solid #eee">
                <a
                  href=""
                  style="
                    font-size: 1.4em;
                    color: #609cf5;
                    text-decoration: none;
                    font-weight: 600;
                  "
                  >AceDrops</a
                >
              </div>
              <p style="font-size: 1.1em">Hi ${name.split(" ")[0]},</p>
              <p>
                Thank you for choosing AceDrops. Use the following OTP to complete
                your Sign Up procedures. OTP is valid for 5 minutes.
              </p>
              <h2
                style="
                  background: #0a449a;
                  margin: 0 auto;
                  width: max-content;
                  padding: 0 10px;
                  color: #fff;
                  border-radius: 4px;
                "
              >
                ${otp}
              </h2>
              <p style="font-size: 0.9em">Regards,<br />AceDrops Team</p>
              <hr style="border: none; border-top: 1px solid #eee" />
              <div
                style="
                  float: right;
                  padding: 8px 0;
                  color: #aaa;
                  font-size: 0.8em;
                  line-height: 1;
                  font-weight: 300;
                "
              >
                <p>Acedrops,</p>
                <p>27th km milestone,</p>
                <p>Delhi-Meerut Highway,</p>
                <p>Ajay Kumar Garg Engineering College,</p>
                <p>Ghaziabad</p>
              </div>
            </div>
          </div>
        </body>
      </html>`,
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
