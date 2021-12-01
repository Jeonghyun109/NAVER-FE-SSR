import React from "react";
import styles from "./photos.module.scss";

function AnimalPictures(props) {
  return (
    <>
      <ul className={styles.photoList}>
        <li className={styles.mainPhoto}>
          <a href={props.mainPhoto.href} className={styles.linkMainPhoto}>
            <img src={props.mainPhoto.src} className={styles.mainPhotoImg} />
          </a>
        </li>

        {props.smallPhoto.list.map((smallPhoto, idx) => {
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
    </>
  );
}

export default AnimalPictures;
