import React from "react";
import styles from "./index.module.scss";

function Error(props) {
  return (
    <div className={styles.container}>
      <div className={styles.errorpage}>Error page!</div>
    </div>
  );
}

export default Error;
