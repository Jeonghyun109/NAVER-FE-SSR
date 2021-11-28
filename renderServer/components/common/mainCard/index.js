import React from "react";
import styles from "./index.module.scss";
import Title from "./title";
import SubTap from "./subTap";
import SimilarContent from "./similarContent";
import CulturalAssetContent from "../../cultural_asset/culturalAssetContent";
import AnimalContent from "../../animal/animalContent";

function MainCard(props) {
  return (
    <div className={styles.commonModule} style = {{ backgroundColor: props.mainCard.colorScheme.background }}>
      <div className = {styles.topBorder} style = {{ backgroundColor: props.mainCard.colorScheme.topBorder }}/>
      <div className={styles.topWrap}>
        <Title title={props.mainCard.title} colorScheme={props.mainCard.colorScheme}/>
        <SubTap subTap={props.mainCard.subTap} colorScheme={props.mainCard.colorScheme}/>
      </div>

      <div className={styles.contentWrap}>
        {props.mainCard.title.type === "동물" && (
          <AnimalContent common={props.mainCard.common} />
        )}
        {props.mainCard.title.type === "문화재" && (
          <CulturalAssetContent common={props.mainCard.common}/>
        )}
        <SimilarContent similar={props.mainCard.similar} />
      </div>
    </div>
  );
}

export default MainCard;
