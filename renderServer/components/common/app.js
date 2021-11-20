import React from "react";
import styles from "./app.module.scss";
import Animal from "../animal/index";
import News from "../news/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Animal />
      <News />
    </div>
  );
}

export default App;
