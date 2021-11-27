import React from "react";
import styles from "./images.module.scss";

function images({ props }) {
  return (
    <div className={styles.imgdiv}>
      <div className={styles.imgContainer}>
        <div className={styles.thumbnail}>
          <i className="far fa-images"></i>
          <b>30</b>
        </div>
      </div>
      <ul className={styles.img_list}>
        {props["image-lists"].map((imgInfo, idx) => {
          if (idx === 0) {
            return (
              <li key={idx}>
                <a>
                  <img
                    className={styles.imgFirst}
                    src={imgInfo["src"]}
                    alt={imgInfo["alt"]}
                  />
                </a>
              </li>
            );
          } else if (idx === props["image-lists"].length - 1) {
            return (
              <li key={idx}>
                <a>
                  <img
                    className={styles.imgLast}
                    src={imgInfo["src"]}
                    alt={imgInfo["alt"]}
                  />
                </a>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <a>
                  <img
                    className={styles.img}
                    src={imgInfo["src"]}
                    alt={imgInfo["alt"]}
                  />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default images;
