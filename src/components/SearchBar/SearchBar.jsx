import React from 'react';
import styles from './SearchBar.module.scss';



const SearchBar = (props) => {
  const {placeholder, input, setInput} = props;
  
  return (
    <div className={styles.search}>
      <input  type="text" placeholder={placeholder} value={input} onChange={(event) => setInput(event.target.value)} />
      
    </div>
  )
};

export default SearchBar;
