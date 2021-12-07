import React from "react";
import styles from "./more.module.scss";

function More(props) {
  return (
    <a href={props.more.href} style={{ textDecoration: "None" }}>
    <div className={styles.more}>
      {props.more.text}
      <i className="fas fa-arrow-right"></i>
    </div>
  </a>
  );
}
export default More;