const { validationResult } = require("express-validator");

const imgUrl = require("../models/imgUrl");
const path = require("path");
const fs = require("fs");
const Shop = require("../models/shop");
const product = require("../models/product");
const product_category = require("../models/product_category");
const Category = require("../models/categories");
const mailer = require("../helpers/mailer");

const clearImg = (imgArray) => {
  for (let i = 0; i < imgArray.length; ++i) {
    var filepath = path.join(__dirname, "../images", imgArray[i]);
    fs.unlink(filepath, (err) => console.log(err));
  }
};

exports.verifyShop = async (req, res, next) => {
  try {
    const { shopName } = req.body;
    const shop = await Shop.findOne({ where: { shopName: shopName } });
    if (!shop) {
      const err = new Error("this shop does not exists");
      err.statusCode = 404;
      throw err;
    }
    await shop.update({ isVerified: true });
    mailer.general_mail(
      shop.email,
      shop.name,
      "shop verification status",
      "You are now a verified seller"
    );
    return res.status(200).json({ message: "verified" });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.sendContactMail = async (req, res, next) => {
  try {
    const { name, phone, email, query } = req.body;

    if (!email || !name || !phone || !query)
      return res.status(400).send({ message: "Please enter required fields." });

    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    )
      return res.status(400).send({ message: " Please enter a valid email." });

    if (phone.length !== 10)
      return res
        .status(400)
        .send({ message: "Please enter a valid phone number." });

    mailer.contactUs_mail(
      email,
      name,
      "Request received",
      `We have received your query which states as:

       ${query}
       
       Our team will contact you soon on ${phone} or on this email.

       Regards,
       Acedrops Team
       `,
      query,
      phone
    );
    return res.status(200).json({ message: "Received your query" });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};
