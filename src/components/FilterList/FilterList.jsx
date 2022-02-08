import React from 'react';
import styles from './FilterList.module.scss';
import FilterItem from '../FilterItem/FilterItem';



const FilterList = (props) => {

  const {checked, setChecked, checkedOne, setCheckedOne, checkedTwo, setCheckedTwo} =props;
  
 
  

  return (
    <div className={styles.list}>
      <FilterItem label="High ABV (> 6.0%)" checked={checked} setChecked={setChecked} key={1}/>
      <FilterItem label="Classic Range" checked={checkedOne} setChecked={setCheckedOne} key={2}/> 
      <FilterItem label="Acidic (ph <4%)" checked={checkedTwo} setChecked={setCheckedTwo} key={3}/> 
      
    </div>
  )
};

export default FilterList;
