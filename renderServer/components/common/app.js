import React from "react";
import styles from "./app.module.scss";
import Header from "./header/index";
import MainCard from "./mainCard/index";
import News from "../news/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bodybackground}>
        <MainCard mainCard={props[0].mainCard} />
        <News />
      </div>
    </div>
  );
}

export default App;
