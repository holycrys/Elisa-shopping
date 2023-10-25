import { createContext, useEffect, useState} from "react";
import useGetProducts from "../hooks/use-getProducts";

export const SearchContext = createContext({
    searchField: '',
    filteredProducts: '',
   
});

export const SearchProvider = ({children}) => {
    const { products } = useGetProducts();
    const [searchField, setSearchField] = useState('');
    const [filteredProducts, setFilterProducts] = useState(products)
    const value = {searchField, setSearchField, filteredProducts};

    useEffect(() => { 
        const newFilteredProducts = products.filter((product) => {
          return product.name.toLocaleLowerCase().includes(searchField);
        });
    
        setFilterProducts(newFilteredProducts);
      }, [products, searchField]);

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
};