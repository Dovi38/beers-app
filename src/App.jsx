import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import CardList from "./components/CardList/CardList";
import Navbar from "./components/Navbar/Navbar";
import { getBeers } from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const updateApiBeers = async () => {
    const apiBeers = await getBeers();
    return setBeers(apiBeers);
  };

  useEffect(() => {
    updateApiBeers();
  }, []);

  return (
    <div className={styles.parent}>
      <section className={styles.nav}>
        <Navbar
          beers={beers}
          input={input}
          setInput={setInput}
          checked={checked}
          setChecked={setChecked}
          checkedOne={checkedOne}
          setCheckedOne={setCheckedOne}
          checkedTwo={checkedTwo}
          setCheckedTwo={setCheckedTwo}
        />
      </section>
      <section className={styles.wrapper}>
        <CardList
          beers={beers}
          input={input}
          checked={checked}
          checkedOne={checkedOne}
          checkedTwo={checkedTwo}
        />
      </section>
    </div>
  );
};

export default App;
