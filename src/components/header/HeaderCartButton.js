import CartIcon from '../cart/cartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const { cartItems } = props;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default HeaderCartButton;
