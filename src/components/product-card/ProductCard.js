
import { Link } from 'react-router-dom';
import classes from './ProductCard.module.css';

const ProductCard = ( product ) => {
  const { name, price, image } = product;
 
  return (
    <div className={classes['product-card-container']}>
      <img src={image} alt={name} />
      <div className={classes.footer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>Lei{price}</span>
      </div>
      <p className={classes.view}><Link to={`/product/${name}`} > Shop Now</Link> </p>
      
    </div>
  );
};
export default ProductCard;