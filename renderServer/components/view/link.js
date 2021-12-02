import React from "react";
import styles from "./link.module.scss";

function Link(props) {
  return (
    <div className={styles.linkArea}>
      <a href={props.link.href} className={styles.innerLink}>
        {props.link.text}
      </a>
    </div>
  );
}

export default Link;
