import { useContext, useState } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import Cart from './components/cart/cart';
import Header from './components/header/Header';
import Shop from './pages/shop/Shop';
import ProductDetails from './pages/product-details/ProductDetails';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import ProductsList from './pages/products-list/ProductsList';
import Product from './pages/product/Product';
import AddProduct from './pages/newProduct/AddProduct';
import NotFound from './notfound';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const {user,authIsReady} = useContext(AuthContext)



  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const removeToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

 

  return (
    <div className="App">
      {authIsReady && ( 
        <BrowserRouter>
         {cartIsShown && (
           <Cart
             onClose={hideCartHandler}
             cartItems={cartItems}
             addToCart={addToCart}
             removeToCart={removeToCart}
             clearCart={clearCart}
             
           />
         )}
         <div className="App-container">
           <Header
             onShowCart={showCartHandler}
             cartItems={cartItems}
             addToCart={addToCart}
             removeToCart={removeToCart}
           />
           <Switch>
             <Route path="/" exact>
               <Redirect to="/products" />
             </Route> 
             <Route path='/products'>
               <Shop />
             </Route>
             <Route path="/product/:prodName">
               <ProductDetails addToCart={addToCart} />
             </Route>
             <Route path="/formular">
               <AddProduct  />  
             </Route>
             <Route path='/signup'>
               {!user && <Signup />}
             </Route>
             <Route path='/login'>
               {!user && <Login />}
             </Route>
             <Route exact path='/home' >
                <ProductsList />
             </Route>
             <Route path='/home/:id' >
                <Product />
             </Route>
             <Route path='*'>
               <NotFound/>
             </Route> 
           </Switch>
         </div>
      </BrowserRouter>
     )}  
    
    </div>
  );
}
export default App;
