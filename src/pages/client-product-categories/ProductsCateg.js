import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { SearchContext } from '../../contexts/SearchContext';

import ProductCard from '../../components/product-card/ProductCard';

import classes from '../shop/Products.module.css';


const ProductsCateg = () => {

  const {filteredProducts} = useContext(SearchContext)
  const {clientId, categId} = useParams();



  return (
    <div  className={classes.container}>
      {filteredProducts
        .filter((product) =>
           product.clientId === clientId &&
           product.categId === categId
        )
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

export default ProductsCateg;
