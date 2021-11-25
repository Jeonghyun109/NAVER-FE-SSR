import React from "react";
import styles from "./header.module.scss";

function header({ props }) {
  return (
    <div className={styles.cardheader}>
      <div className={styles.cardTitle}>{props["title"]}</div>
      <div className={styles.cardSubTitle}>
        <span>{props["sub-titles"][0]}</span>
        <span className={styles.cm_bar}></span>
        <span>{props["sub-titles"][1]}</span>
      </div>
      <i className={"fas fa-ellipsis-v " + styles.topRight}></i>
      <div className={styles.subTapArea}>
        <ul className={styles.tapList}>
          {props["tab-lists"].map((subTapInfo, idx) => {
            if (subTapInfo["selected"]) {
              return (
                <li className={styles.subTap} key={idx}>
                  <a className={styles.subTapEntireLink}>
                    <span className={styles.subTapText}>
                      {subTapInfo["title"]}
                    </span>
                  </a>
                </li>
              );
            }
            return (
              <li className={styles.subTap} key={idx}>
                <a className={styles.subTapLink}>
                  {idx !== 1 && <span className={styles.subTapBar} />}
                  <span className={styles.subTapText}>
                    {subTapInfo["title"]}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default header;
