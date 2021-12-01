import React from "react";
import styles from "./images.module.scss";

function Images(props) {
  return (
    <div className={styles.imgdiv}>
      <ul className={styles.img_list}>
        {props.common.imageList.map((imgInfo, idx) => {
          const imgStyle =
            idx === 0
              ? styles.imgFirst
              : idx === props.common.imageList.length - 1
              ? styles.imgLast
              : styles.img;

          return (
            <li key={idx}>
              <a href={props.common.imgURL}>
                <img
                  className={imgStyle}
                  src={imgInfo["src"]}
                  alt={imgInfo["alt"]}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Images;
