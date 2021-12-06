import React from "react";
import styles from "./totalWrap.module.scss";

function TotalWrap(props) {
  return (
    <div className={styles.totalWrap}>
      <a href={props.totalWrap.article.href} className={styles.blogLink}>
        <img src={props.totalWrap.article.src} className={styles.image}></img>
        <div className={styles.title}>{props.totalWrap.article.title}</div>
        <div className={styles.bar} />
        <div className={styles.time}>{props.totalWrap.article.time}</div>
      </a>

      <div className={styles.saveKeep}>
        <a className={styles.circlesLink}>
          <div className={styles.circles}></div>
        </a>
      </div>

      <a href={props.totalWrap.text.href} className={styles.titleLink}>
        {props.totalWrap.text.title}
      </a>

      <div className={styles.totalGroup}>
        <div className={styles.textDiv}>
          <a href={props.totalWrap.text.href} className={styles.textLink}>
            {props.totalWrap.text.detail}
          </a>
        </div>
        <a href={props.totalWrap.text.href} className={styles.imageLink}>
            <img src={props.totalWrap.text.src} className={styles.image} />
        </a>
      </div>
    </div>
  );
}

export default TotalWrap;
