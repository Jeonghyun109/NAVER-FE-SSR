import React from "react";
import styles from "./totalTag.module.scss";

function TotalTag(props) {
  return (
    <div className={styles.totalTagArea}>
      {props.totalTag.list.map((tag, idx) => {
        return (
          <a href={tag.href} className={styles.tagLink} key={idx}>
            #{tag.title}
          </a>
        );
      })}
    </div>
  );
}

export default TotalTag;
