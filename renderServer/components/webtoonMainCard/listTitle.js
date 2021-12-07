import React from "react";
import styles from "./listTitle.module.scss";

function ListTitle(props) {
  return (
    <div className={styles.linkMiddleTitle}>
      <h3 className={styles.h3}>
        {props.titleInfo.button !== "" && (
          <span className={styles.span}>{props.titleInfo.button}</span>
        )}
        {props.titleInfo.title}
      </h3>
    </div>
  );
}
export default ListTitle;
