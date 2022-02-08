import React from 'react';
import styles from './CardList.module.scss';
import Card from '../Card/Card';

const CardList = (props) => {
  const {input, beers, checked, checkedOne, checkedTwo} = props;
  
  const abvBeer = () => {
    let highAbv = [];
    beers.map((beer) => {
     let abv = beer.abv;
      if(abv > 6) {
        highAbv.push(beer);  
    } 
    return highAbv;
    })
    return highAbv.map((beer, id) => <Card key={id} beer={beer} />) 
  }

  const phBeer = () => {
    let lowPh = [];
    beers.map((beer) => {
     let ph = beer.ph;
      if(ph < 4) {
        lowPh.push(beer);  
    } 
    return lowPh;
    })
    return lowPh.map((beer, id) => <Card key={id} beer={beer} />) 
  }
  
  const classicBeer = () => {
    let classic = [];
    beers.map((beer) => {
     let ibu = beer.ibu;
      if(ibu > 50) {
        classic.push(beer);  
    } 
    return classic;
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
