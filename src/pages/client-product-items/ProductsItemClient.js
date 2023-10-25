import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import useGetProducts from '../../hooks/use-getProducts';
import { SearchContext } from '../../contexts/SearchContext';

import ProductsFilter from './ProductsFilter';
import ProductCard from '../../components/product-card/ProductCard';

import classes from '../shop/Products.module.css';



const ProductsItemClient = () => {

  const { products } = useGetProducts();
  const {filteredProducts} = useContext(SearchContext)
  const [sort, setSort] = useState('');
  const {clientId, categId, prodId} = useParams();

  const prod = products.filter((product) =>
      product.clientId === clientId &&
      product.categId === categId &&
      product.cod_prod === prodId
)
  const sortProducts = (event) => {
    const sort = event.target.value;

    setSort(() => ({
      sort: sort,
      sortProd: filteredProducts.sort((a, b) => {
        if (sort === 'lowest') return a.price - b.price;
        else if (sort === 'highest') return b.price - a.price;
        else return 0;
      }),
    }));
  };

  return (
    <div >
      <ProductsFilter
        sort={sort}
        sortProducts={sortProducts}
        count={prod.length}
      />
      <div className={classes.container}>
				{filteredProducts
          .filter((product) =>
				     product.clientId === clientId &&
					   product.categId === categId &&
					   product.cod_prod === prodId
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
    </div>
  );
};
export default ProductsItemClient;
