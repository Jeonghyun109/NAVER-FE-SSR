import React from "react";
import styled from "styled-components";
import Title from "./title";
import SubTap from "./subTap";
import CommonContent from "./commonContent";
import styles from "./index.module.scss";

function SiameseCat(props) {
  return (
    <div className={styles.commonModule}>
      <div className={styles.topWrap}>
        <Title />
        <SubTap />
      </div>

      <div className={styles.contentWrap}>
        <CommonContent />
        <div className={styles.similarContentArea}>xy</div>
      </div>
    </div>
  );
}

export default SiameseCat;
