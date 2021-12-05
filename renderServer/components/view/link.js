import React from "react";
import styles from "./link.module.scss";

function Link(props) {
  return (
    <>
      {Object.keys(props.link).length !== 0 && (
        <div className={styles.linkArea}>
          <a href={props.link.href} className={styles.innerLink}>
            {props.link.text}
          </a>
        </div>
      )}
    </>
  );
}

export default Link;
