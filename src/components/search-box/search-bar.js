
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import './search-bar.css';


const Searchbar = () => {

  const {setSearchField} = useContext(SearchContext);
  
  return (
    <div className="searchbar">
        <input 
          className='searchbar'
          type="search" 
          placeholder='search product'
          onChange={(e) => setSearchField(e.target.value)}       
        />
    </div>
  )
}
export default Searchbar;