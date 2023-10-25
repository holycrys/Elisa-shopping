import { useState } from 'react';
import classes from './checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameIsValid = !isEmpty(name);
    const addressIsValid = !isEmpty(address);
    const cityIsValid = !isEmpty(city);
    const postalCodeIsValid = isSixChars(postalCode);

    setFormInputsValidity({
      name: nameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && addressIsValid && cityIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name,
      address,
      city,
      postalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Nume Prenume</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Adresa</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {!formInputsValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Cod Postal</label>
        <input
          type="text"
          id="postal"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (6 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Oras</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
