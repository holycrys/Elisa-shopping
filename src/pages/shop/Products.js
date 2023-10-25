
import { useContext} from 'react';
import { SearchContext } from '../../contexts/SearchContext';

import ProductCard from '../../components/product-card/ProductCard';
import classes from './Products.module.css';



const Products = () => {

  const {filteredProducts} = useContext(SearchContext)
  return (
    <div className={classes.container}>
      {filteredProducts.map((product) => (
         <ProductCard key={product.id}
            image={product.image}
            name={product.name}  
            price={product.price} 
          />
      ))}
   </div> 
  );
};

export default Products;
