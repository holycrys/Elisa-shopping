
import { deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { db } from '../../init';
import useGetProducts from '../../hooks/use-getProducts';
import {ReactComponent as Trashcan} from '../../assets/trashcan.svg'
import classes from './ProductsList.module.css'

const ProductsList = () => {
	const { products } = useGetProducts();

	const handleClick = async(id) => {
		const docRef = doc(db, 'products', id)
		await deleteDoc(docRef)
	}

	return (
		<div className={classes['products-list']} >
			{products.map((product) => (
				<div key={product.id} className={classes['product-card-container']}>
						<img src={product.image} alt={product.name} />
						<div className={classes.footer}>
							<span className={classes.name}>{product.name}</span>
							<span className={classes.price}>{product.price}</span>
							<span 
								className={classes.delete}
								onClick={() => handleClick(product.id)}	>
									<Trashcan />
								</span>
              
						</div>
						<p className={classes.view}><Link to={`/home/${product.id}`} > VIEW</Link> </p>			
			</div>

			))}
			
		</div>
	)
}
export default ProductsList;