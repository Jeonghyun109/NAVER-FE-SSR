import React from "react";
import styles from "./app.module.scss";
import Animal from "../animal/index";
import News from "../news/index";
import Header from "./header";

function App(props) {
  return (
    <div className={styles.container}>
      <Header/>
      <div className = {styles.bodybackground}>
        <Animal />
        <News />
      </div>
      
    </div>
  );
}

export default App;
