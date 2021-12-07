import React from "react";
import styles from "./thumbnail.module.scss";

function Thumbnail(props) {
  return (
    <div className={styles.webtoonDiv}>
      <span className={styles.rank}>{props.id + 1}</span>
      {props.thumbnail.same !== "none" && props.thumbnail.same !== "" && (
        <span className={styles.same}>{props.thumbnail.same}</span>
      )}
      <img src={props.thumbnail.src} className={styles.webtoonThumb} />
    </div>
  );
}
export default Thumbnail;
