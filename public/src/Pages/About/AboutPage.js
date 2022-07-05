import { useEffect } from "react";
import classes from "./AboutPage.module.css";
import Logo from "../../Assets/acedrops-logo-removebg-preview.png";

const About = () => {
  function Card1(props) {
    return (
      <>
        <div className={classes.cardContainer}>
          <p>{props.text}</p>
        </div>
      </>
    );
  }

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>About Us</h2>
      <div className={classes.mainDiv}>
        <img className={classes.logo} src={Logo} alt="logo" />
        <div className={classes.infoDiv}>
          <p>
            AceDrops is an initiative to give platform to those thousands of small business owners who have been operating on social media platforms such as Instagram, whatsapp and facebook.
            A place where they can over-shadoww the brands and overcome the reselleing traps and identity threft. At Acedrops, we offer more than 15 categories for seller to list their products.<br/>
            From painting to thrift shops, from crystal decoratives to hand stiched wearables, home decoratives to jewelleries and many more. A seller can sign up for free on our seller app and 
            get their own storefront on our platform with a unique name and bio. <br/><br/>
            Our vision for buyers is to provide a secure shopping and facilities like customization option which could have been never achived while shopping on social media, as there was no security with their money and 
            no gurantee of refunds in case the products fails to impress them.

          </p>
        </div>
      </div>
      <div className={classes.cardDiv}>
       <Card1 
       text=" A marketplace that is built for you and built by one of you. A marketplace that fit completely to your social media habbits and needs" />
         <Card1 
       text=" Foundation of this platform lies in the hand of a business owner just like you, we know all your problems, and we will more than happy to serve you " />
       <Card1 
       text=" From Shipping to payments, form customer care to refund issues, we will take care of everything, all you need to to is keep uploading your beautiful products" />

      </div>
    </div>
  );
};

export default About;
