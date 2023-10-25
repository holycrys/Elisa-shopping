import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { useLogout } from '../../hooks/useLogout';

import HeaderCartButton from './HeaderCartButton';
import Searchbar from '../search-box/search-bar';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import classes from './Header.module.css';



const Header = (props) => {
  const {logout} = useLogout()
  const {user} = useContext(AuthContext)

  const { cartItems, addToCart, removeToCart } = props;

  return (
   
      <div className={classes.header}>
        <div  className={classes['logo-container']}>
          <Link to='/'> <CrwnLogo /></Link>  
          <h2 className='logo'>Elisa <span>shop</span></h2>
        </div>
        <div className='search'> <Searchbar /></div>
        <ul className={classes.nav}>
          {user && user.email === "holi_crys@yahoo.com" && 
           <>
            <li><Link to='/formular'>Add Product</Link> </li> 
            <li><Link to='/home'>Home</Link> </li>
           </>}
            {!user && (
              <>
               <li><Link to="/login" >Login</Link></li>
               <li><Link to="/signup" >Signup</Link> </li>
              </>
            )}
            {user && (
               <li className={classes.btn} onClick={logout}>Logout</li>
            )} 
        </ul>
         <HeaderCartButton
            onClick={props.onShowCart}
            cartItems={cartItems}
            addToCart={addToCart}
            removeToCart={removeToCart}
         />    
      </div> 
  );
};

export default Header;
