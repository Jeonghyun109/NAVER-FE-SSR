import React from "react";
import styles from "./index.module.scss";
import Photos from "./photos";
import BasicInfo from "./basicInfo";

function AnimalMainCard(props) {
  return (
    <div className={styles.commonContentArea}>
      <Photos
        mainPhoto={props.common.mainPhoto}
        smallPhoto={props.common.smallPhoto}
      />
      <BasicInfo basicInfo={props.common.basicInfo} />
    </div>
  );
}

export default AnimalMainCard;
