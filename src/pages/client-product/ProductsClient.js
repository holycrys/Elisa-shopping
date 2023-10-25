import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';

import classes from '../shop/Products.module.css';




const ProductsClient = () => {

  const {filteredProducts} = useContext(SearchContext)
  const {clientId} = useParams();


  return (
    <div className={classes.container}>
      { filteredProducts
          .filter((product) => product.clientId === clientId)
          .map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
      ))}  
    </div>
  );
};

export default ProductsClient;
