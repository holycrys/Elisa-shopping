
import classes from './ProductsFilter.module.css';

const ProductsFilter = (props) => {
  return (
    <div className={classes.filter}>
      <div>{props.count} Products</div>
      <div>
        Order {''}
        <select selected={props.sort} onChange={props.sortProducts}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
     
    </div>
  );
};

export default ProductsFilter;
