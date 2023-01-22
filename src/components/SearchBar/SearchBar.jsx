import './SearchBar.css'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  return (
    <>
      <div className='search-div'>
        <AiOutlineSearch size="27px" color='var(--base-color-white)' />
        <input className='search-input' type="text" placeholder='Pesquisar' name="movie" />
      </div>
    </>
  );
}

export default SearchBar;