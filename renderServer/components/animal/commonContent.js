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
  const detailInfo =
    "성격이 독특하면서도 영리하고 애정이 깊다. 감수성도 예민해 공격적이거나 신경질적인 반응을 보이기도 하고, 자기 과시욕을 드러내면서 언제나 주인의 관심을 끌려고 하기 때문에 안아주거나 쓰다듬어 주는 것을 좋아한다. ";
  const seeMoreDetails =
    "https://terms.naver.com/entry.naver?docId=1110852&cid=40942&categoryId=32624";

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
            <li className={styles.smallPhoto} key={idx}>
              <a className={styles.linkSmallPhoto}>
                {idx === 2 ? (
                  <img src={smallPhoto} className={styles.smallPhotoRoundImg} />
                ) : (
                  <img src={smallPhoto} className={styles.smallPhotoImg} />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={styles.middleTitle}>
        <a className={styles.linkMiddleTitle}>
          <h3 className={styles.h3}>기본정보</h3>
        </a>
      </div>

      <div className={styles.detailInfo}>
        <span className={styles.text}>{detailInfo}</span>
        <a href={seeMoreDetails} className={styles.a}>
          더보기
        </a>
      </div>
    </div>
  );
}

export default CommonContent;
