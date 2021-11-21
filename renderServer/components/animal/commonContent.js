import React from "react";
import styles from "./commonContent.module.scss";

function CommonContent(props) {
  const mainPhotoSrc =
    "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201227_280%2F1609068536458M5qWj_JPEG%2F45204144294873432_1454722539.jpg";
  const smallPhotoSrc = [
    "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20180409_16%2Ftttl96_1523236149232DtdDB_JPEG%2F57274255118854483_1696344960.jpeg",
    "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200514_296%2F1589383522415fQAKv_JPEG%2F25519140244964356_836593714.jpg",
    "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210110_122%2F1610234036128HMFyn_JPEG%2F46369644538410444_1768298021.jpg",
    "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200401_297%2F1585705167644lVwso_JPEG%2F21840784152777463_-1772690182.jpg",
    "https://search.pstatic.net/common?type=f&size=258x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200107_100%2F1578368791570mWnGL_JPEG%2F14504400424424331_693284119.jpg",
    "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210722_241%2F1626949212669ih9J4_JPEG%2F63084821814135149_1699451494.jpeg",
  ];

  return (
    <div className={styles.commonContentArea}>
      <ul className={styles.photoList}>
        <li className={styles.mainPhoto}>
          <a className={styles.linkMainPhoto}>
            <img src={mainPhotoSrc} className={styles.mainPhotoImg} />
          </a>
        </li>
        {smallPhotoSrc.map((smallPhoto, idx) => {
          return (
            <li className={styles.smallPhoto}>
              <a className={styles.linkSmallPhoto}>
                {idx !== 2 && (
                  <img src={smallPhoto} className={styles.smallPhotoImg} />
                )}
                {idx === 2 && (
                  <img src={smallPhoto} className={styles.smallPhotoRoundImg} />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommonContent;
