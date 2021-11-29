import React from "react";
import styles from "./index.module.scss";
import Title from "./title";
import SubTap from "./subTap";
import SimilarContent from "./similarContent";

import AnimalContent from "../../animal/animalContent";
import WebtoonContent from "../../webtoon/webtoonContent";

function MainCard(props) {
  return (
    <div className={styles.commonModule}>
      <div className={styles.topWrap}>
        <Title title={props.mainCard.title} />
        <SubTap subTap={props.mainCard.subTap} />
      </div>

      <div className={styles.contentWrap}>
        {props.mainCard.title.type === "동물" && (
          <AnimalContent common={props.mainCard.common} />
        )}
        {props.mainCard.title.type === "문화재" && (
          <div>TODO: 불국사 기본정보 및 사진</div>
        )}
        {props.mainCard.title.type === "웹툰" && (
            <WebtoonContent common={props.mainCard.common} />
        )}
        <SimilarContent similar={props.mainCard.similar} />
      </div>
    </div>
  );
}

export default MainCard;
