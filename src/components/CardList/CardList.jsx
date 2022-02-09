import React from 'react';
import styles from './CardList.module.scss';
import Card from '../Card/Card';

const CardList = (props) => {
  const {input, beers, checked, checkedOne, checkedTwo} = props;
  
  const abvBeer = () => {
    const highAbv = beers.filter((beer) => {
      let abv = beer.abv;
      return abv > 6;
    })
    return highAbv.map((beer, id) => <Card key={id} beer={beer} />) 
  }

  const phBeer = () => {
    const lowPh = beers.filter((beer) => {
      let ph = beer.ph;
      return ph < 4;
    })
    return lowPh.map((beer, id) => <Card key={id} beer={beer} />) 
  }
  
  const classicBeer = () => {
    const classic = beers.filter((beer) => {
      let ibu = beer.ibu;
      return ibu > 50;
    })
    return classic.map((beer, id) => <Card key={id} beer={beer} />) 
  }
  
  const filterSearch = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(input.toLowerCase());
  })

  return (
    <div className={styles.cardList}>
      {checked ? abvBeer()
         : checkedOne ? classicBeer()
         : checkedTwo ?   phBeer()
         : filterSearch.map((beer, id) => <Card key={id} beer={beer} />)}       
    </div>
  )
};

export default CardList;
