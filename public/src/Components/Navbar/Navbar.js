import classes from "./Navbar.module.css";
import Logo from "../../Assets/logo+name.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Link to="/">
          <img className={classes.logo} src={Logo} alt="Ace Drops" />
        </Link>
        <ul className={classes.navs}>
          <Link to="/seller">
            <li>Seller</li>
          </Link>
          <Link to="/contact">
            <li>ContactUs</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
