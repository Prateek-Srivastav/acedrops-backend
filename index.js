const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv/config");

const authRoutes = require("./routes/auth");
const shopRoutes = require("./routes/shop");
const sellerRoutes = require("./routes/seller");
const prodRoutes = require("./routes/product");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const sequelize = require("./utils/db");

const cart_item = require("./models/cart_item");
const cart = require("./models/cart");
const categories = require("./models/categories");
const fav = require("./models/fav");
const imgUrl = require("./models/imgUrl");
const order_item = require("./models/order_item");
const order = require("./models/order");
const product = require("./models/product");
const reviews = require("./models/reviews");
const shop = require("./models/shop");
const user = require("./models/user");
const product_category = require("./models/product_category");
const address = require("./models/address");
const viewed = require("./models/viewed");

// app.use(express.static(__dirname + "/website/public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use("/auth", authRoutes);
/*signup, generate access token, login, logout, google signup and login, 
forgot password, change password*/

app.use("/shop", shopRoutes);
/*create shop, upload adhaar card, seller pic, shop cover pic and view one shop*/

app.use("/prod", prodRoutes);
/*create product, home page, view one product, view category wise products, add and remove from cart, 
delete whole product from cart, view cart, add and remove from wishlist, view wishlist*/

app.use("/user", userRoutes);
/*search, add ratings and reviews, add address, add phone number, get all your addresses,
order whole cart, order one product, cancel order, view your orders*/

app.use("/seller", sellerRoutes);
/*update product details, update shop details, get all products of your shop,
get all orders of your products, accept and reject orders, get all previous orders*/

app.use("/admin", adminRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.get("/privacyPolicy", (req, res, next) => {
  res.sendFile(__dirname + "/docs/privacyPolicy.html");
});

app.get("/", async (req, res) => {
  res.redirect("https://www.acedrops.in");
});

shop.hasMany(product, {
  foreignKey: "shopId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

product.belongsTo(shop);

shop.hasMany(imgUrl, {
  foreignKey: "shopId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

imgUrl.belongsTo(shop);

product.hasMany(imgUrl, {
  foreignKey: "productId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

product.hasMany(reviews, {
  foreignKey: "productId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

imgUrl.belongsTo(product);

user.belongsToMany(product, { through: fav, constraints: false });
product.belongsToMany(user, { through: fav, constraints: false });

user.belongsToMany(product, { through: reviews, constraints: false });
product.belongsToMany(user, { through: reviews, constraints: false });

user.belongsToMany(product, { through: viewed, constraints: false });
product.belongsToMany(user, { through: viewed, constraints: false });

user.hasOne(cart, {
  foreignKey: "userId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
cart.belongsTo(user);

user.hasMany(order, {
  foreignKey: "userId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
order.belongsTo(user);

order.belongsToMany(product, { through: order_item, constraints: false });
product.belongsToMany(order, { through: order_item, constraints: false });

cart.belongsToMany(product, { through: cart_item, constraints: false });
product.belongsToMany(cart, { through: cart_item, constraints: false });

categories.belongsToMany(product, {
  through: product_category,
  constraints: false,
});
product.belongsToMany(categories, {
  through: product_category,
  constraints: false,
});

user.hasMany(address, {
  foreignKey: "userId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
address.belongsTo(user);

address.hasMany(order, {
  foreignKey: "addressId",
  constraints: false,
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
order.belongsTo(address);

sequelize
  .sync()
  .then((result) => {
    return categories.findOne();
  })
  .then((cat) => {
    if (!cat)
      //create categories if it does not exists

      categories.bulkCreate([
        { category: "Jewellery" },
        { category: "Paintings and portraits" },
        { category: "Bakery and chocolates" },
        { category: "Crystal And resin art" },
        { category: "Under garments" },
        { category: "Thrift Shops" },
        { category: "Decorative items" },
        { category: "Customised gifts" },
        { category: "Closet and wearable" },
        { category: "Stickers and fun" },
        { category: "DIY's" },
        { category: "Makeup and accessories" },
        { category: "Others" },
      ]);
    return cat;
  })
  .then((cat) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
