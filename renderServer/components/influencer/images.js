import React from "react";
import styles from "./images.module.scss";

function images(props) {
  return (
    <div className={styles.imgDiv}>
      <ul className={styles.imgList}>
        {props.images.map((imgsrc, idx) => {
          const imgStyle =
            idx === 0
              ? styles.imgFirst
              : idx === props.images.length - 1
              ? styles.imgLast
              : styles.img;

          return (
            <li key={idx}>
              <a href={props.influencer.link}>
                <img src={imgsrc} className={imgStyle} alt="thumbnail" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default images;
