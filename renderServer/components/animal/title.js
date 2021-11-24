import React from "react";
import styles from "./title.module.scss";

function Title(props) {
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.mainTitle}>샴(샤미즈)</h2>
      <div className={styles.subTitle}>
        <span className={styles.subTextSpan}>동물</span>
        <span className={styles.subBarSpan} />
        <span className={styles.subTextSpan}>Siamese cat</span>
      </div>
    </div>
  );
}

export default Title;
