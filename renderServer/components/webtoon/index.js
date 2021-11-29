import React from "react";
import styles from "./index.module.scss";
import Title from "./title";
import SubTap from "./subtap";
import Content from "./content";

function Webtoon({ props }) {
  return (
    <div className={styles.commonModule}>
      <div className={styles.topWrap}>
        <Title props={props} />
        <SubTap props={props} />
      </div>

      <div className={styles.contentWrap}>
        <Content props={props} />
      </div>
    </div>
  );
}

export default Webtoon;
