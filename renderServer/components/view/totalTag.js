import React from "react";
import styles from "./totalTag.module.scss";

function TotalTag(props) {
  const tags = ["샴고양이", "샤미즈", "샴고양이성격"];

  return (
    <div className={styles.totalTagArea}>
      {tags.map((tag, idx) => {
        return (
          <a className={styles.tagLink} key={idx}>
            #{tag}
          </a>
        );
      })}
    </div>
  );
}

export default TotalTag;
