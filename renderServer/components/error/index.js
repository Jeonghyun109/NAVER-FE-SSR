import React from "react";
import styles from "./index.module.scss";

function Error(props) {
  return (
    <div className={styles.commonModule}>
      <div className={styles.container}>
        <div className={styles.title}>
          {props.error.title}            
        </div>
        <ul className={styles.ul}>
            <li>{props.error.text1}</li>
            <li>{props.error.text2}</li>
        </ul>
      </div>
    </div>
  );
}

export default Error;
