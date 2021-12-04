import React from "react";
import styles from "./filter.module.scss";

function filter(props) {
  return (
    <ul className={styles.filterDiv}>
      {props.tabList.map((tab, idx) => (
        <li key={idx}>
          {idx === 0 ? (
            <a className={styles.link} key={idx}>
              <div className={styles.tabFirst}>
                <span className={styles.tabTitle}>{tab["title"]}</span>{" "}
                <span className={styles.tabSubTitle}>{tab["subtitle"]}</span>
              </div>
            </a>
          ) : (
            <a href={tab["url"]} className={styles.link} key={idx}>
              <div className={styles.tabs}>
                <img
                  src={tab["image"]}
                  className={styles.tabThumbnail}
                  alt={idx}
                />
                <span className={styles.tabTitleTabs}>{tab["title"]}</span>{" "}
                <span className={styles.tabSubTitleTabs}>
                  {tab["subtitle"]}
                </span>
              </div>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default filter;
