import classes from "./Header.module.css";
import headPng from "../../Assets/header2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.conatiner}>
      <img className={classes.headerPng} src={headPng} alt="header" />
      <div className={classes.content}>
      <div className={classes.paracontent}>
        <p className={classes.para}>
          A Marketplace for social media sellers is here
        </p></div>
        <a href="https://play.google.com/store/apps/details?id=com.acedrops.acedrops">
          <button className={classes.btn}>Download Our App</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
