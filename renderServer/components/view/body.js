import React from "react";
import styles from "./body.module.scss";

function Body(props) {
  return (
    <>
      <a href={props.body.href} className={styles.titleLink}>
        {props.body.title}
      </a>

      <div className={styles.totalGroup}>
        <div className={styles.textDiv}>
          <a href={props.body.href} className={styles.textLink}>
            {props.body.detail}
          </a>
        </div>

        <a href={props.body.href} className={styles.imageLink}>
          <img src={props.body.src} className={styles.image} />
        </a>
      </div>
    </>
  );
}

export default Body;
