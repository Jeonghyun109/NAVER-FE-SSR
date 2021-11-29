import React from "react";
import styles from "./webtoonContent.module.scss";

function WebtoonContent(props) {
  return (
    <div className={styles.commonContentArea}>
      <ul className={styles.photoList}>
        <li className={styles.mainPhoto}>
          <a
            href={props.common.mainPhoto.href}
            className={styles.linkMainPhoto}
          >
            <img
              src={props.common.mainPhoto.src}
              className={styles.mainPhotoImg}
            />
          </a>
        </li>

        {props.common.smallPhoto.list.map((smallPhoto, idx) => {
          return (
            <li className={styles.smallPhoto} key={idx}>
              <a href={smallPhoto.href} className={styles.linkSmallPhoto}>
                {idx === 2 ? (
                  <img
                    src={smallPhoto.src}
                    className={styles.smallPhotoRoundImg}
                  />
                ) : (
                  <img src={smallPhoto.src} className={styles.smallPhotoImg} />
                )}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.middleTitle}>
        <a
          href={props.common.basicInfo.href}
          className={styles.linkMiddleTitle}
        >
          <h3 className={styles.h3}>{props.common.basicInfo.title}</h3>
          <div className={styles.arrow}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </a>
      </div>
      <div className={styles.detailInfo}>
        <span className={styles.text}>{props.common.basicInfo.detail}</span>
        <a href={props.common.basicInfo.moreDetails} className={styles.a}>
          더보기
        </a>
      </div>
    </div>
  );
}

export default WebtoonContent;