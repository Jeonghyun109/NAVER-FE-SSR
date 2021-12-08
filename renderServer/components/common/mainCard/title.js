import React from "react";
import styles from "./title.module.scss";
import Keep from "../others/keep";

export default function Title(props) {
  return (
    <div className={styles.titleArea}>
      <h2 className={styles.mainTitle}>{props.title.name}</h2>
      <Keep color={props.colorScheme} id={"clickKeep"} />
      <div
        className={styles.subTitle}
        style={{ color: props.colorScheme.subTitle }}
      >
        <span className={styles.subTextSpan}>{props.title.type}</span>
        <span
          className={styles.subBarSpan}
          style={{ backgroundColor: props.colorScheme.subTapBar }}
        />
        <span className={styles.subTextSpan}>{props.title.subName}</span>
      </div>
    </div>
  );
}
