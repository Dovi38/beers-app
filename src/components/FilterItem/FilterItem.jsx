import React from 'react';
import styles from './FilterItem.module.scss';


const FilterItem = (props) => {
  const {label, checked, setChecked, checkedOne, setCheckedOne, checkedTwo, setCheckedTwo, id} = props;
  const tickBox = (key) => {
    if(key=1 ) {
     return <input type="checkbox"  checked={checked} onChange={() => setChecked(!checked)} key={id}/> 
    } else if (key = 2) {
      return <input type="checkbox"  checked={checkedOne} onChange={() => setCheckedOne(!checkedOne)} key={id}/>
    } else if (key = 3) {
     return <input type="checkbox"  checked={checkedTwo} onChange={() => setCheckedTwo(!checkedTwo)} key={id}/>
    }
  }
  
//<input type="checkbox"  checked={checked} onChange={() => setChecked(!checked)} key={id}/>
  return (
    <div className={styles.textLabel}>
      <label className="container">{label}
      {tickBox()}
      </label>
    </div>
  )
};

export default FilterItem;
