import React from "react";
import styles from "./title.module.scss";

function Title(props) {
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.mainTitle}>{props.title.name}</h2>
      <div className={styles.saveKeep}>
        <a className={styles.circlesLink}>
          <div className={styles.circles}></div>
        </a>
        <div className={styles.saveKeepLayer}>
          <div className={styles.saveToKeep}>Keep에 저장</div>
          <div className={styles.goToKeep}>Keep 바로가기</div>
        </div>
      </div>
      <div className={styles.subTitle} style = {{ color: props.colorScheme.subTitle }}>
        <span className={styles.subTextSpan}>{props.title.type}</span>
        <span className={styles.subBarSpan} />
        <span className={styles.subTextSpan}>{props.title.subName}</span>
      </div>
    </div>
  );
}

export default Title;
