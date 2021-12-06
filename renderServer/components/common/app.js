import React from "react";
import styles from "./app.module.scss";
import Header from "./header/index";
import MainCard from "./mainCard/index";
import View from "../view/index";
import News from "../news/index";
import Influencer from "../influencer/index";
import Error from "../error/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bodybackground}>
        {props[0].order.map((section, idx) => {
          return (
            <div key={idx}>
              {section === "mainCard" && (
                <MainCard mainCard={props[0].mainCard} />
              )}
              {section === "influencers" && (
                <Influencer influencer={props[0].influencer} />
              )}
              {section === "view" && <View view={props[0].view} />}
              {section === "news" && <News news={props[0].news} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
