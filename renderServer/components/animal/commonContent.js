import React from "react";
import styles from "./commonContent.module.scss";

function CommonContent(props) {
  return (
    <div className={styles.commonContentArea}>
      <ul className={styles.photoList}>
        <li className={styles.mainPhoto}>
          <a className={styles.linkMainPhoto}>
            <img
              src="https://search.pstatic.net/common?type=f&amp;size=518x522&amp;quality=95&amp;direct=true&amp;src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210110_224%2F1610262906543iYaiJ_JPEG%2F46398515690451726_622079393.jpeg"
              style={{
                width: "260.6px",
                height: "260.6px",
                borderRadius: "8px 0 0 0",
              }}
            />
          </a>
        </li>
        <li className={styles.smallPhoto}>1</li>
        <li className={styles.smallPhoto}>2</li>
        <li className={styles.smallPhoto}>
          <img
            src="https://search.pstatic.net/common?type=f&amp;size=260x260&amp;quality=95&amp;direct=true&amp;src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200401_12%2F1585730100281Sa5Vj_JPEG%2F21865709587741555_647870209.jpg"
            style={{
              width: "129.8px",
              height: "129.8px",
              borderRadius: "0 8px 0 0",
            }}
          />
        </li>
        <li className={styles.smallPhoto}>4</li>
        <li className={styles.smallPhoto}>5</li>
        <li className={styles.smallPhoto}>6</li>
      </ul>
    </div>
  );
}

export default CommonContent;
