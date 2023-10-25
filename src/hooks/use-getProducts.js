import { useEffect,  useState } from 'react';
import { collection, onSnapshot} from 'firebase/firestore';
import { db } from '../init';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ref = collection(db, 'products');

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })
      setProducts(results)
    })  
    return () => unsub()
  }, []);
  return { products };
};

export default useGetProducts;


// const getProducts = async () => {
    //   const products = await getDocs(ref);
    //   let results = products.docs.map((doc) => {
    //     let product = doc.data(); //  Creez un obiect nou
    //     product.id = doc.id; // adaug ID-ul în obiectul "produs" (trebuie!)

    //     return product;
    //   });

    //   setProducts(results); //  Actualizez obiectul "state"
    // };
    // getProducts();