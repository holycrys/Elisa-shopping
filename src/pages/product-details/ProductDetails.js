
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useGetProducts from '../../hooks/use-getProducts';

import { formatCurrency } from '../../util';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
 
  const { products } = useGetProducts();

  const params = useParams();

  const { addToCart } = props;

  return (
    
      <Container className={classes.container}>
        {products &&
          products
            .filter((product) => product.name === params.prodName)
            .map((prod) => (
              <Card key={prod.id} className={classes.card}>
                <Card.Img
                  variant="top"
                  src={prod.image}
                  className={classes.img}
                />
                <Card.Body className={classes.body}>
                  <h2 className={classes.title}>{prod.name}</h2>
                  <h5>{prod.description}</h5>
                  <h4 className={classes.price}>
                    Lei {formatCurrency(prod.price)}
                  </h4>
                  <Link to="/products">
                  <Button
                    className={classes.btn}
                    onClick={() => addToCart(prod)}
                  >
                    Add To Cart
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
      </Container>
    
  );
};

export default ProductDetails;
