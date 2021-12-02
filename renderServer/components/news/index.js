import React from "react";
import styles from "./index.module.scss";
import TotalWrap from "./totalWrap";

function News(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.h2}>{props.news.header.title}</h2>
      </div>
      <ul className={styles.ul}>
        {props.news.list.map((element, idx) => {
          return (
            <li className={styles.li} key={idx}>
              <TotalWrap totalWrap={element.totalWrap} />
            </li>
          );
        })}
      </ul>
      <div className={styles.newsButton}>{props.news.button.text}</div>
    </div>
  );
}

export default News;
