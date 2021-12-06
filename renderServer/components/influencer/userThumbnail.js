import React from "react";
import styles from "./userThumbnail.module.scss";

function userThumbnail(props) {
  return (
    <div className={styles.userThumbnail}>
      {props.influencer.thumbnail.highlighted === "Gold" && (
        <>
          <a href={props.influencer.thumbnail.url}>
            <img
              src={props.influencer.thumbnail.image}
              className={styles.influencerThumbnail}
              alt="thumbnail"
              style={{ padding: "2px", border: "2px solid gold" }}
            ></img>
          </a>
          <div className={styles.crown} style={{ backgroundColor: "gold" }}>
            <i className="fas fa-crown"></i>
          </div>
        </>
      )}
      {props.influencer.thumbnail.highlighted === "Silver" && (
        <>
          <a href={props.influencer.thumbnail.url}>
            <img
              src={props.influencer.thumbnail.image}
              className={styles.influencerThumbnail}
              alt="thumbnail"
              style={{ padding: "2px", border: "2px solid silver" }}
            ></img>
          </a>
          <div className={styles.crown} style={{ backgroundColor: "silver" }}>
            <i className="fas fa-crown"></i>
          </div>
        </>
      )}
      {props.influencer.thumbnail.highlighted === "Bronze" && (
        <>
          <a href={props.influencer.thumbnail.url}>
            <img
              src={props.influencer.thumbnail.image}
              className={styles.influencerThumbnail}
              alt="thumbnail"
              style={{ padding: "2px", border: "2px solid #CD7F32" }}
            ></img>
          </a>
          <div className={styles.crown} style={{ backgroundColor: "#CD7F32" }}>
            <i className="fas fa-crown"></i>
          </div>
        </>
      )}
      {props.influencer.thumbnail.highlighted === "None" && (
        <>
          <a href={props.influencer.thumbnail.url}>
            <img
              src={props.influencer.thumbnail.image}
              className={styles.influencerThumbnail}
              alt="thumbnail"
              style={{ padding: "2px", border: "2px solid white" }}
            ></img>
          </a>
        </>
      )}
    </div>
  );
}

export default userThumbnail;
