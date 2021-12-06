import React from "react";
import styles from "./index.module.scss";
import TotalWrap from "./totalWrap";
import CircleIcon from '@mui/icons-material/Circle';

function News(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>
            {props.news.header.title}
        </h2>
        <div className={styles.subtitle}>
          <span className={styles.condition}>
              <CircleIcon className={styles.conditionDot}/>
              {props.news.header.condition}
          </span>
          <a href={props.news.header.subcondition.href} className={styles.subcondition}>
            <CircleIcon className={styles.subconditionDot}/>
            {props.news.header.subcondition.text}
          </a>
        </div>
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
      <a
        href={props.news.newsLink.href}
        style={{ textDecoration: "None" }}
      >
        <div className={styles.more}>
            {props.news.newsLink.text}<i className="fas fa-arrow-right"></i>
        </div>
      </a>

    </div>
  );
}

export default News;
