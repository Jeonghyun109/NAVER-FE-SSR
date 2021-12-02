import React from "react";
import styles from "./index.module.scss";
import Title from "./title";
import SubTap from "./subTap";
import SimilarContent from "./similarContent";
import WebtoonContent from "../../webtoon/webtoonContent";
import DailyContent from "../../webtoon/dailyContent";
import AnimalMainCard from "../../animalMainCard/index";
import CultureMainCard from "../../cultureMainCard/index";

function MainCard(props) {
  return (
    <div
      className={styles.commonModule}
      style={{ backgroundColor: props.mainCard.colorScheme.background }}
    >
      <div
        className={styles.topBorder}
        style={{ backgroundColor: props.mainCard.colorScheme.topBorder }}
      />
      <div className={styles.topWrap}>
        <Title
          title={props.mainCard.title}
          colorScheme={props.mainCard.colorScheme}
        />
        <SubTap
          subTap={props.mainCard.subTap}
          colorScheme={props.mainCard.colorScheme}
        />
      </div>

      <div className={styles.contentWrap}>
        {props.mainCard.title.type === "동물" && (
          <AnimalMainCard common={props.mainCard.common} />
        )}
        {props.mainCard.title.type === "문화재" && (
          <CultureMainCard common={props.mainCard.common} />
        )}
        {props.mainCard.title.type === "웹툰" && (
          <WebtoonContent common={props.mainCard.common} />
        )}
        {props.mainCard.title.type === "웹툰" && (
          <DailyContent similar={props.mainCard.similar} />
        )}
        {props.mainCard.title.type !== "웹툰" && (
          <SimilarContent similar={props.mainCard.similar} />
        )}
      </div>
    </div>
  );
}

export default MainCard;
