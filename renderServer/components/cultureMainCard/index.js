import React from "react";
import styles from "./index.module.scss";
import Images from "./images";
import BasicInfo from "./basicInfo";

function CultureMainCard(props) {
  return (
    <div className={styles.bodyDiv}>
      <Images common={props.common} />
      <BasicInfo common={props.common} shortenUrl={props.shortenUrl} />
    </div>
  );
}

export default CultureMainCard;
