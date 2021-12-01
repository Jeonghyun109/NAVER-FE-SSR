import React from "react";
import styles from "./tags.module.scss";

function Tags(props) {
  return (
    <div className={styles.tagArea}>
      {props.tags.list.map((tag, idx) => {
        return (
          <a href={tag.href} className={styles.tagLink} key={idx}>
            #{tag.title}
          </a>
        );
      })}
    </div>
  );
}

export default Tags;
