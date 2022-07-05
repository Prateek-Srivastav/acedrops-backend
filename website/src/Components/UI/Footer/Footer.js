import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import Logo from "../../../Assets//logo+name.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainDiv}>
        <img className={classes.logo} src={Logo} alt="Logo" />
        <p className={classes.para}>
          An e commerce market place made for small social media sellers
          operating through instagram, whatsapp and telegram.
        </p>
        <p className={classes.copyright}>All copyrights are reserved @acedrops.in</p>
      </div>
      <div className={classes.contact}>
        <Link to="/contact">
          <h3 className={classes.heading}>Contact Us</h3>
        </Link>
        <span>
          <i className="fa-solid fa-phone"></i> +91-6392970547
        </span>
        <span>
          <i className="fa-solid fa-phone"></i> +91-9565973316
        </span>
        <span className={classes.email}>
          <i className="fa-solid fa-envelope"></i>
          <span>info.acedrops@gmail.com</span>
        </span>
      </div>
      <div className={classes.address}>
        <h3 className={classes.heading}>Address</h3>
        <span>27 milestone</span>
        <span>delhi-meerut highway</span>
        <span>Ajay Kumar Garg Engineering</span>
        <span>College</span>
        <span>Ghaziabad,</span>
        <span>UP</span>
      </div>
    </div>
  );
};

export default Footer;
