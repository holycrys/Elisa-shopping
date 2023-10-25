
import { NavLink, Route, Switch } from 'react-router-dom';

import Client from '../client-product/Client';
import Products from './Products';
import {customers} from '../../shop-data';

import classes from './Shop.module.css';


const Shop = () => {

  return (
    <div >
       <header className={classes.header}> 
        <nav className={classes.nav}>
          <ul>
            {customers.map((client) => (
                <li key={client.id}>
                  <NavLink
                    to={`/products/${client.id}`}
                    activeClassName={classes.active}
                  >
                    {client.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
       </header> 
      <Switch>
        <Route path="/products/:clientId">
          <Client />
        </Route>
        <Products/>
      </Switch> 
    </div>
  );
};

export default Shop;
