import classes from "./About.module.css";
import aboutPng from "../../Assets/about.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>About Us</h2>
      <div className={classes.section}>
        <img className={classes.aboutPng} src={aboutPng} alt="about us" />
        <div className={classes.infoDiv}>
          <p className={classes.para}>
            AceDrops is a Ecommerce marketplace that is made by a dreamer for dreamers. Our vision is to give all the social media 
            business owners a platform where they can sell their products, with their identity, and royalty
            to know more about us ........
          </p>
          <Link to="/about">
            <p className={classes.btn}>more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
