import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom';

import ProductsItemClient from '../client-product-items/ProductsItemClient';
import ProductsCateg from './ProductsCateg';
import {customers} from '../../shop-data';

import classes from './ProductsCategClient.module.css';


const ProductsCategClient = () => {
  const { url, path } = useRouteMatch();
  const{clientId, categId} = useParams();

  const categ = customers
    .find((client) => client.id === clientId)
    .categories.find((category) => category.id === categId);

  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            {categ.products.map((product) => (
              <li key={product.id}>
                <NavLink
                  to={`${url}/${product.id}`}
                  activeClassName={classes.active}
                >
                  {product.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path={`${path}/:prodId`}>
          <ProductsItemClient />
        </Route>
        <ProductsCateg />
      </Switch>
    </div>
  );
};

export default ProductsCategClient;
