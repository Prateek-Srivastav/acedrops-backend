import classes from "./Category.module.css";
import categoryPng from "../../Assets/categories.png";

const Category = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Categories</h2>
      <div className={classes.section}>
        <img className={classes.png} src={categoryPng} alt="categories" />
        <p className={classes.para}>
         Collection of variety that's second to none , with more than 15 categories to shop on, and that too with  customization  
        </p>
        
      </div>
    </div>
  );
};

export default Category;
