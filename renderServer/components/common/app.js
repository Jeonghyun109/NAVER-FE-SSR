import React from "react";
import styles from "./app.module.scss";
import Header from "./header/index";
import MainCard from "./mainCard/index";
import View from "../view/index";
import News from "../news/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bodybackground}>
        <MainCard mainCard={props[0].mainCard} />
        <View view={props[0].view} />
        <News />
      </div>
    </div>
  );
}

export default App;
