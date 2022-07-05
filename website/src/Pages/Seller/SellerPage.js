import classes from "./SellerPage.module.css";

import Header from "../../Assets/Group35.png";
import Seller from "../../Assets/Group_31.png";
import becomeASeller from "../../Assets/become a seller.png";

const SellerPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.heading}>Get Your Own Store</h3>
        <img className={classes.headerImg} src={Header} alt="category" />
        
        <h3 className={classes.sellerheading} >Become a seller</h3>
        <div className={classes.sellerDiv}>
          <img className={classes.sellerDivImg} src={Seller} alt="Seller" />
          <div className={classes.sellerInfo}>     
            <p >
              AceDrops is offering free prime membership for 3 months to the first 50 onboarding sellers and the will also be included in our marketing campaign. So download our app today.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.pricing}>
        <h3 className={classes.pricingHeading}>Pricing</h3>
        <div className={classes.pricingInfo}>
          <ul className={classes.pricinglist}>
            <li className={classes.listitems}><p>
              For the first 15 transaction we will charge 3.68% of transaction cost. After those 15 sales, seller will be given two choices either to take premium plan or to keep going without premium
               </p>
            </li>
            <li className={classes.listitems}><p>
               Premium plan will costs 149rs/mo. After premium membership, on each transaction there will be a transaction cost charged, that will be 3.68% of the transaction amount
               </p>
            </li>
            <li className={classes.listitems}><p>
               Those sellers who are not willing to get premium plan will have to pay 6.75% transaction cost of the transaction amount
               </p>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
