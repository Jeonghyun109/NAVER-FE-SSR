import React from "react";
import styles from "./app.module.scss";
import Header from "./header";
import Webtoon from "../webtoon/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <Webtoon />
    </div>
  );
}

export default App;
