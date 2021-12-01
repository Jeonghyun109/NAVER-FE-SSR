import React from "react";
import styles from "./blog.module.scss";

function Blog(props) {
  return (
    <>
      <a href={props.blog.href} className={styles.blogLink}>
        <img src={props.blog.src} className={styles.image}></img>
        <div className={styles.title}>{props.blog.title}</div>
        <div className={styles.bar} />
        <div className={styles.time}>{props.blog.time}</div>
      </a>

      <div className={styles.saveKeep}>
        <a className={styles.circlesLink}>
          <div className={styles.circles}></div>
        </a>
      </div>
    </>
  );
}

export default Blog;
