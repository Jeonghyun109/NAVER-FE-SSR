import React from "react";
import styles from "./subTap.module.scss";

function SubTap(props) {
  return (
    <div className={styles.subTapArea}>
      <ul className={styles.tapList}>
        <li className={styles.subTap}>
          <a
            href={props.subTap.mainTap.href}
            className={styles.subTapEntireLink}
          >
            <span className={styles.subTapText}>
              {props.subTap.mainTap.title}
            </span>
          </a>
        </li>
        {props.subTap.list.map((subTapInfo, idx) => {
          return (
            <li className={styles.subTap} key={idx}>
              <a href={subTapInfo.href} className={styles.subTapLink}>
                {idx !== 0 && <span className={styles.subTapBar} />}
                <span className={styles.subTapText}>{subTapInfo.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubTap;
