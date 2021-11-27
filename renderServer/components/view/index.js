import React from "react";
import styles from "./index.module.scss";
import TotalWrap from "./totalWrap";
import TotalTag from "./totalTag";
import TotalLink from "./totalLink";

function View(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.h2}>VIEW</h2>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <TotalWrap />
        </li>
      </ul>
    </div>
  );
}

export default View;
