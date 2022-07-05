import React from "react";
import Card from "../UI/Card/Card";

import classes from "./Seller.module.css";

const SellerSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.heading}>Become a seller</h2>
        <p className={classes.para}>
          Give your dreamy business the attention it deserves by becoming a part of a revolution in indian shopping trends. By signing up to our sellers app you will be given a dedicated shop of a unique user name 
          from where you can manage your products just like you have been doing on social medias, bus the difference is you will be getting sales this time.
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.acedrops.acedropseller">
        <button className={classes.btn}>Download Seller app</button></a>
      </div>
      <div className={classes.card}>
        <Card
          name="Get your own store"
          text="After signingup in our seller app, you will be given a shop of a unique name just like profile pages on social media platforms which will help you to get more referals"
        />
        <Card
          name="Pricing"
          text=" signup for free, Not a single penny will be charged unless we bring you the customers"
        />
        <Card
          name="Required Documents"
          text="You only need an aadhar card to get startted on our platform making it the most convinient platform in the market, and perfect for small businesses "
        />
      </div>
    </div>
  );
};

export default SellerSection;
