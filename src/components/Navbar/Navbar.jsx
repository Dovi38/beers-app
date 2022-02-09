import React from 'react';
import styles from './Navbar.module.scss';
import FilterList from '../FilterList';
import SearchBar from '../SearchBar';

const Navbar = (props) => {
  const {beers, input, setInput, checked, setChecked, checkedOne, setCheckedOne, checkedTwo, setCheckedTwo} = props;
  return (
    <div className={styles.navbar}>
      <SearchBar placeholder='Search...' input={input} setInput={setInput} />
      
      <FilterList beers={beers} checked={checked} setChecked={setChecked} checkedOne={checkedOne} setCheckedOne={setCheckedOne} checkedTwo={checkedTwo} setCheckedTwo={setCheckedTwo} />

    </div>
  )
};

export default Navbar;
