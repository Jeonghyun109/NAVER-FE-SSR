import React from "react";
import styles from "./app.module.scss";
import Webtoon from "../webtoon/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Webtoon />
    </div>
  );
}

export default App;
