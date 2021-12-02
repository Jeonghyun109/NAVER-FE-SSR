import React from "react";
// import styles from "./webtoonContent.module.scss";
import styles from "./dailyContent.module.scss";

function dailyContent(props) {
  return (
    <div className={styles.commonContentArea}>
      <div className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.similar.header.title}</h3>
      </div>
      <div className={styles.webtoonInfo}>
        <ul className={styles.webtoonList}>
          {props.similar.list.map((similarContent, idx) => {
            return (
              <li className={styles.webtoon} key={idx}>
                <a href={similarContent.href} className={styles.linkWebtoon}>
                  <div className={styles.webtoonDiv}>
                    <span className={styles.rank}>{idx + 1}</span>
                    <img
                      src={similarContent.src}
                      className={styles.webtoonThumb}
                    />
                  </div>
                  <div className={styles.titleBox}>{similarContent.title}</div>
                  <div className={styles.subtitleBox}>
                    {similarContent.sub_text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.daily}>네이버 웹툰 2021-11-30</div>
    </div>
  );
}

export default dailyContent;
