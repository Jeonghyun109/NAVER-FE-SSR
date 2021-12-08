import React from "react";
import styles from "./blog.module.scss";
import Keep from "./keep";

function Blog(props) {
  return (
    <>
      <a href={props.blog.href} className={styles.blogLink}>
        <img src={props.blog.src} className={styles.image}></img>
        <div className={styles.title}>{props.blog.title}</div>
        {props.blog.influencer === "true" && (
          <>
            <div className={styles.bar} />
            <div className={styles.influencer}>인플루언서</div>
          </>
        )}
        <div className={styles.bar} />
        <div className={styles.time}>{props.blog.time}</div>
      </a>
      <Keep color={props.colorScheme} id={props.id} />
    </>
  );
}

export default Blog;
