import React from "react";
import styles from "./content.module.scss";
import UserThumbnail from "./userThumbnail";
import UserDetail from "./userDetail";
import Images from "./images";

function content(props) {
  return (
    <>
      {props.influencers.map((influencer) => {
        return (
          <div className={styles.contentWrapper}>
            <div className={styles.userBox}>
              <UserThumbnail influencer={influencer} />
              <div
                className={styles.btnArea}
                style={{
                  color: props.colorScheme.main,
                  borderColor: props.colorScheme.border,
                }}
              >
                <i
                  className="far fa-smile"
                  style={{
                    marginRight: "5px",
                    fontSize: "18px",
                    fontWeight: "300",
                  }}
                ></i>{" "}
                팬하기
              </div>
              <div className={styles.userInner}>
                <div className={styles.userArea}>
                  <a href={influencer.thumbnail.url} className={styles.name}>
                    {influencer.title}
                  </a>
                  <span className={styles.fanCount}>
                    {influencer.subtitles.fans}
                  </span>
                </div>
                <div className={styles.userEtc}>
                  <span style={{ color: props.colorScheme.main }}>
                    {influencer.subtitles.title}
                  </span>
                  <span className={styles.bar} />
                  {influencer.subtitles.expertise}
                </div>
              </div>
            </div>
            <UserDetail
              colorScheme={props.colorScheme}
              influencer={influencer}
            />
            <Images influencer={influencer} images={influencer.images} />
            <div className={styles.descArea}>
              <a href={influencer.link} className={styles.descHeader}>
                {influencer.description.title}
              </a>
              <a href={influencer.link} className={styles.descDesc}>
                {influencer.description.descriptionText}
              </a>
              <div className={styles.date}>{influencer.description.date}</div>
            </div>
            <a
              href={influencer.description.moreUrl}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.additionalContent}>
                <i className="fas fa-link" style={{ marginRight: "10px" }}></i>
                <b>{influencer.title}</b>
                {influencer.description.moreText}
                <span className={styles.Right}>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default content;
