import React from "react";
import styles from "./index.module.scss";
import Pictures from "./pictures";
import BasicInfo from "./basicInfo";

function AnimalMainCard(props) {
  return (
    <div className={styles.commonContentArea}>
      <Pictures
        mainPhoto={props.common.mainPhoto}
        smallPhoto={props.common.smallPhoto}
      />
      <BasicInfo basicInfo={props.common.basicInfo} />
    </div>
  );
}

export default AnimalMainCard;
