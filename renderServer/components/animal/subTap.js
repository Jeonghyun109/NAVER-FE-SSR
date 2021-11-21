import React from "react";
import styles from "./subTap.module.scss";

function SubTap(props) {
  const subTapArray = ["기본정보", "포토", "함께 찾은 품종"];

  return (
    <div className={styles.subTapArea}>
      <div className={styles.scrollMainTap}>
        <ul className={styles.tapList}>
          <li className={styles.subTap}>
            <a className={styles.subTapEntireLink}>
              <span className={styles.subTapText}>전체</span>
            </a>
          </li>
          {subTapArray.map((subTapInfo, idx) => {
            return (
              <li className={styles.subTap} key={idx}>
                <a className={styles.subTapLink}>
                  {idx !== 0 && <span className={styles.subTapBar} />}
                  <span className={styles.subTapText}>{subTapInfo}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SubTap;
