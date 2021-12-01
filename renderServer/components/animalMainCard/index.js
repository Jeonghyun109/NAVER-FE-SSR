import React from "react";
import styles from "./index.module.scss";
import Images from "./images";
import BasicInfo from "./basicInfo";

function AnimalMainCard(props) {
  return (
    <div className={styles.commonContentArea}>
      <Images
        mainImage={props.common.mainImage}
        smallImage={props.common.smallImage}
      />
      <BasicInfo basicInfo={props.common.basicInfo} />
    </div>
  );
}

export default AnimalMainCard;
