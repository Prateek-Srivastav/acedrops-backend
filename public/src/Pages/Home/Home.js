import { useEffect } from 'react'
import classes from "./Home.module.css";

//import components
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Category from "../../Components/Category/Category";
import SellerSection from "../../Components/Seller/SellerSection";

const Home = () => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div className={classes.container}>
      <Header />
      <About />
      <Category />
      <SellerSection />
    </div>
  );
};

export default Home;
