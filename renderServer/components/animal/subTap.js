import React from "react";
import styles from "./subTap.module.scss";

function SubTap(props) {
  return (
    <div className={styles.subTapArea}>
      <div className={styles.scrollMainTap}>
        <ul className={styles.tapList}>
          <li className={styles.tapEntire}>
            <a className={styles.linkEntire}>
              <span className={styles.subTapText}>전체</span>
            </a>
          </li>
          <li className={styles.tapBasicInfo}>
            <a className={styles.linkBasicInfo}>
              <span className={styles.subTapText}>기본정보</span>
            </a>
          </li>
          <li className={styles.tapPhoto}>
            <a className={styles.linkPhoto}>
              <span className={styles.subTapBar} />
              <span className={styles.subTapText}>포토</span>
            </a>
          </li>
          <li className={styles.tapSimilar}>
            <a className={styles.linkSimilar}>
              <span className={styles.subTapBar} />
              <span className={styles.subTapText}>함께 찾은 품종</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubTap;
