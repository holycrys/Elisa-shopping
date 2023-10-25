import classes from './cartItem.module.css';
import { formatCurrency } from '../../util';

const CartItem = (props) => {
  const { addToCart, removeToCart } = props;

  return (
    <li key={props.id} className={classes['cart-item']}>
      <div>
        <div className={classes.title}>
          <img src={props.image} />
          <h2>{props.name}</h2>
        </div>
        <div className={classes.summary}>
          <span className={classes.price}>
            Lei {formatCurrency(props.price)}
          </span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeToCart}>−</button>
        <button onClick={addToCart}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
