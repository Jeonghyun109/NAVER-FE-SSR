import React from "react";
import styles from "./subTap.module.scss";

function SubTap(props) {
  return (
    <div className={styles.subTapArea}>
      {props.subTap.mainTap.order === "last" && (
        <ul className={styles.tapList}>
          <li className={styles.tapMargin}></li>
          {props.subTap.list.map((subTapInfo, idx) => {
            return (
              <li className={styles.subTap} key={idx}>
                <a
                  href={subTapInfo.href}
                  className={styles.subTapLink}
                  style={{ color: props.colorScheme.subTapColor }}
                >
                  {idx !== 0 && (
                    <span
                      className={styles.subTapBar}
                      style={{ backgroundColor: props.colorScheme.subTapBar }}
                    />
                  )}
                  <span className={styles.subTapText}>{subTapInfo.title}</span>
                </a>
              </li>
            );
          })}

          <li className={styles.subTap}>
            <a
              href={props.subTap.mainTap.href}
              className={styles.subTapEntireLink}
              style={{ backgroundColor: props.colorScheme.subTapColor }}
            >
              <span className={styles.subTapText}>
                {props.subTap.mainTap.title}
              </span>
            </a>
          </li>
        </ul>
      )}
      {props.subTap.mainTap.order === "first" && (
        <ul className={styles.tapList}>
          <li className={styles.subTap}>
            <a
              href={props.subTap.mainTap.href}
              className={styles.subTapEntireLink}
              style={{ backgroundColor: props.colorScheme.subTapColor }}
            >
              <span className={styles.subTapText}>
                {props.subTap.mainTap.title}
              </span>
            </a>
          </li>
          {props.subTap.list.map((subTapInfo, idx) => {
            return (
              <li className={styles.subTap} key={idx}>
                <a
                  href={subTapInfo.href}
                  className={styles.subTapLink}
                  style={{ color: props.colorScheme.subTapColor }}
                >
                  {idx !== 0 && (
                    <span
                      className={styles.subTapBar}
                      style={{ backgroundColor: props.colorScheme.subTapBar }}
                    />
                  )}
                  <span className={styles.subTapText}>{subTapInfo.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SubTap;
