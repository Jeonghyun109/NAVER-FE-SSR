import React from "react";
import styles from "./title.module.scss";

function Title(props) {
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.mainTitle}>독립일기</h2>
      <div className={styles.subTitle}>
        <span className={styles.subTextSpan}>웹툰</span>
        <span className={styles.subBarSpan} />
        <span className={styles.subTextSpan}>연재중</span>
      </div>
    </div>
  );
}

export default Title;
