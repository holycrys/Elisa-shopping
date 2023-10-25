
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../init';

import classes from './AddProduct.module.css';

const FormProduct = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [categId, setCategId] = useState('');
  const [cod_prod, setCod_prod] = useState('');

  const history = useHistory();

  const submitHandler = async(e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      price,
      description,
      clientId,
      categId,
      cod_prod
    };
    await addDoc(collection(db, 'products'), product);
    
    history.push('/');
  };


  return (
    <Container className={classes.new}>
      <h2 className={classes['page-title']}>Add a New Product</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Product title:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          <span>Product image:</span>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
        </label>
        <label>
          <span>Product price:</span>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </label>
        <label>
          <span>Product description:</span>
          <textarea rows="5"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        <label>
          <span>Product Client Id:</span>
          <input
            type="text"
            onChange={(e) => setClientId(e.target.value)}
            value={clientId}
            required
          />
        </label>

        <label>
          <span>Product Categ Id:</span>
          <input
            type="text"
            onChange={(e) => setCategId(e.target.value)}
            value={categId}
            required
          />
        </label>
        <label>
          <span>Product Cod product:</span>
          <input
            type="text"
            onChange={(e) => setCod_prod(e.target.value)}
            value={cod_prod}
            required
          />
        </label>
        <button className={classes.submit}>submit</button>
      </form>
    </Container>
  );
};

export default FormProduct;
