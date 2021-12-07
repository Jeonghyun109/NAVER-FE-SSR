import React from "react";
import styles from "./similarContent.module.scss";

function SimilarContent(props) {
  return (
    <div className={styles.similarContentArea}>
      <a href={props.similar.header.href} className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.similar.header.title}</h3>
        <div className={styles.arrow}>
          <i className="fas fa-arrow-right"></i>
        </div>
      </a>

      <div className={styles.similarInfo}>
        <ul className={styles.photoList}>
          {props.similar.list.map((similarContent, idx) => {
            return (
              <li className={styles.photo} key={idx}>
                <a href={similarContent.href} className={styles.linkPhoto}>
                  <div className={styles.photoDiv}>
                    <img src={similarContent.src} className={styles.photoImg} />
                  </div>
                  <div className={styles.titleBox}>{similarContent.title}</div>
                </a>
                {similarContent.sub_text ? <div className={styles.subtitleBox}>{similarContent.sub_text}</div>:<></>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SimilarContent;
