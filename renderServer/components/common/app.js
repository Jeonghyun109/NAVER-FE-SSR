import React from "react";
import styles from "./app.module.scss";
import Animal from "../animal/index";
import Influencer from "../influencer/index"
import News from "../news/index";
import Header from "./header";
import CulturalAsset from "../cultural_asset/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header/>
      <div className = {styles.bodybackground}>
        <CulturalAsset props = {props[0]["mainCard"]}/>
        <Influencer />
        <News />
      </div>
      
    </div>
  );
}

export default App;
