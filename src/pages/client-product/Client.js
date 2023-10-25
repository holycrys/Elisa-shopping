import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom';

import ProductsCategClient from '../client-product-categories/ProductsCategClient';
import ProductsClient from './ProductsClient';
import {customers} from '../../shop-data';

import classes from './Client.module.css';




const Client = () => {
 
  const { url, path } = useRouteMatch();
  const {clientId} = useParams();
  
  const client = customers.find((client) => client.id === clientId);

  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            {client.categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={`${url}/${category.id}`}
                  activeClassName={classes.active}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path={`${path}/:categId`}>
          <ProductsCategClient />
        </Route>
        <ProductsClient/>
      </Switch>
    </div>
  );
};

export default Client;
