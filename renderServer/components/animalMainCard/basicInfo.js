import React from "react";
import styles from "./basicInfo.module.scss";

function BasicInfo(props) {
  return (
    <>
      <div className={styles.middleTitle}>
        <a href={props.basicInfo.href} className={styles.linkMiddleTitle}>
          <h3 className={styles.h3}>{props.basicInfo.title}</h3>
          <div className={styles.arrow}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </a>
      </div>
      <div className={styles.detailInfo}>
        <span className={styles.text}>{props.basicInfo.detail}</span>
        <a href={props.basicInfo.moreDetails} className={styles.a}>
          더보기
        </a>
      </div>
    </>
  );
}

export default BasicInfo;
