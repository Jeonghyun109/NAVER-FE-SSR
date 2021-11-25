import React from "react";
import styles from "./index.module.scss";
import Title from "./title";
import SubTap from "./subTap";
import CommonContent from "./commonContent";
import SimilarContent from "./similarContent";

function Animal(props) {
  return (
    <div className={styles.commonModule}>
      <div className={styles.topWrap}>
        <Title />
        <SubTap />
      </div>

      <div className={styles.contentWrap}>
        <CommonContent />
        <SimilarContent />
      </div>
    </div>
  );
}

export default Animal;
