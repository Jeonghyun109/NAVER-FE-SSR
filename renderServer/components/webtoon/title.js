import React from "react";
import styles from "./title.module.scss";

function Title({props}) {
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.mainTitle}>{props["title"]}</h2>
      <div className={styles.subTitle}>
        <span className={styles.subTextSpan}>{props["sub-titles"][0]}</span>
        <span className={styles.subBarSpan} />
        <span className={styles.subTextSpan}>{props["sub-titles"][1]}</span>
      </div>
    </div>
  );
}

export default Title;
