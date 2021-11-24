import React from "react";
import styles from "./subTap.module.scss";

function SubTap(props) {
  const subTapArray = [
    "전체",
    "회차보기",
    "작가의 다른 작품",
    "함께 많이보는 웹툰",
  ];

  return (
    <div className={styles.subTapArea}>
      <ul className={styles.tapList}>
        <li className={styles.subTap}>
          <a className={styles.subTapEntireLink}>
            <span className={styles.subTapText}>함께 많이보는 웹툰</span>
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
  );
}

export default SubTap;
