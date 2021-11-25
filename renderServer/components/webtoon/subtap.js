import React from "react";
import styles from "./subtap.module.scss";

function SubTap({ props }) {
  return (
    <div className={styles.subTapArea}>
      <ul className={styles.tapList}>
        {props["tab-lists"].map((subTapInfo, idx) => {
          if (subTapInfo["selected"]) {
            return (
              <li className={styles.subTap}>
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
                {idx !== 0 && <span className={styles.subTapBar} />}
                <span className={styles.subTapText}>{subTapInfo["title"]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubTap;
