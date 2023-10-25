
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { db } from '../../init'
import classes from './Product.module.css'

const Product = () => {

	const history = useHistory();

	const { id } = useParams()

	const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

	useEffect(() => {
 
		const docRef = doc(db, "products", id);
  
    const unsub = onSnapshot(docRef, (doc => {
      if (doc.exists) {
        setProduct(doc.data())
      } else {
        setError(`Could not find that product`)
      }
		}))
		return () => unsub()

  }, [id])

	const handleClick = () => {
		const docRef = doc(db, 'products', id)
	 updateDoc(docRef, {price:'234.99'})

	 history.push('/home')
	}

  return (
		<Container className={classes['product-container']}>
			{error && <p className="error">{error}</p>}
			{product && (
				<>
					<img src={product.image} alt={product.name} />
					<div className={classes.footer}>
						<span className={classes.name}>{product.name}</span>
						<span className={classes.price}>{product.price}</span>
					</div>
					<Button onClick={ handleClick}>Update me</Button>
				</>
			)}
				
	  </Container>
  )
}
export default Product;



				