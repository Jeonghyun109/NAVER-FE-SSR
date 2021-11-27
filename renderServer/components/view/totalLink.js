import React from "react";
import styles from "./totalLink.module.scss";

function TotalLink(props) {
  return (
    <div className={styles.totalLinkArea}>
      <a className={styles.innerLink}>
        샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)
      </a>
    </div>
  );
}

export default TotalLink;
