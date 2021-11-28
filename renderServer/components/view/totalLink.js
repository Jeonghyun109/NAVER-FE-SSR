import React from "react";
import styles from "./totalLink.module.scss";

function TotalLink(props) {
  return (
    <div className={styles.totalLinkArea}>
      <a href={props.totalLink.href} className={styles.innerLink}>
        {props.totalLink.text}
      </a>
    </div>
  );
}

export default TotalLink;
