import React from "react";
import styles from "./images.module.scss";

function Images(props) {
  return (
    <>
      <ul className={styles.imageList}>
        <li className={styles.mainImage}>
          <a href={props.mainImage.href} className={styles.linkMainImage}>
            <img src={props.mainImage.src} className={styles.mainImageSrc} />
          </a>
        </li>

        {props.smallImage.list.map((smallImage, idx) => {
          return (
            <li className={styles.smallImage} key={idx}>
              <a href={smallImage.href} className={styles.linkSmallImage}>
                {idx === 2 ? (
                  <img
                    src={smallImage.src}
                    className={styles.smallImageRoundSrc}
                  />
                ) : (
                  <img src={smallImage.src} className={styles.smallImageSrc} />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Images;
