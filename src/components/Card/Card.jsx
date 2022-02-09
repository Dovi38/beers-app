import React from 'react';
import styles from './Card.module.scss';


const Card = (props) => {
  const {image_url, name, abv, ph, description} = props.beer;
 
  return (
    <div className={styles.card}>
      <section className={styles.imgSection}>
      <img src={image_url} alt="beer bottle" />
      </section>
      <section className={styles.description}>
        <h2 className={styles.name}>{name}</h2>     
        <h4 className={styles.abv}>Abv {abv}%, <span>Ph {ph}</span></h4>
       <p className={styles.text}>{description}</p>
      </section>
    </div>
  )
};

export default Card;
