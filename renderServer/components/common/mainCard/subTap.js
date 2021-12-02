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
<<<<<<< HEAD
            style = {{ backgroundColor: props.colorScheme.subTapColor }}
=======
            style={{ backgroundColor: props.colorScheme.subTapColor }}
>>>>>>> upstream/main
          >
            <span className={styles.subTapText}>
              {props.subTap.mainTap.title}
            </span>
          </a>
        </li>

        {props.subTap.list.map((subTapInfo, idx) => {
          return (
            <li className={styles.subTap} key={idx}>
<<<<<<< HEAD
              <a href={subTapInfo.href} className={styles.subTapLink} style = {{ color: props.colorScheme.subTapColor }}>
                {idx !== 0 && <span className={styles.subTapBar} style = {{ backgroundColor: props.colorScheme.subTapBar }}/>}
=======
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
>>>>>>> upstream/main
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
