import Modal from '../UI/modal';
import { formatCurrency } from '../../util';
import classes from './cart.module.css';
import CartItem from './cartItem';
import Checkout from './checkout';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../init';

const Cart = (props) => {
  const [isCheckout, setIsCkeckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const { cartItems, addToCart, removeToCart, clearCart } = props;

  const hasItems = cartItems.length >0;

  const totalAmount = cartItems.reduce(
    (price, item) => price + item.quantity * formatCurrency(item.price),
    0
  );
  const submitOrderHandler = async (userData) => {
   
     await addDoc(collection(db, 'orders'), {
        user: userData,
        orderedItems: cartItems,
      });
   
    setDidSubmit(true);
    clearCart();
  };

  const cItems = (
    <ul className={classes['cart-items']}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          removeToCart={() => removeToCart(item)}
          addToCart={() => addToCart(item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCkeckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!didSubmit && (
      <React.Fragment>
        {cItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>Lei {totalAmount}</span>
        </div>
        {isCheckout && (
          <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
        )}
        {!isCheckout && modalActions}
      </React.Fragment>
      )}
      {didSubmit && (
      <React.Fragment>
        <span>Successfully sent the order!</span>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>  
        </div>
      </React.Fragment>
      )}      
    </Modal>
  );
};

export default Cart;


