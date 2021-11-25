import React from "react";
import styles from "./app.module.scss";
import Header from "./header";
import Webtoon from "../webtoon/index";
import Animal from "../animal/index";
import News from "../news/index";
import CulturalAsset from "../cultural_asset/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <Webtoon props={props[2]} />
    </div>
  );
}

export default App;
