import React from "react";
import styles from "./index.module.scss";
import WebtoonList from "./webtoonList";
import ListTitle from "./listTitle";

function WebtoonMainCard(props) {
  return (
    <div className={styles.commonContentArea}>
      <ListTitle titleInfo={props.common.together.header} />
      <WebtoonList webtoon={props.common.together} />

      <ListTitle titleInfo={props.common.life.header} />
      <WebtoonList webtoon={props.common.life} />

      <ListTitle titleInfo={props.common.new.header} />
      <WebtoonList webtoon={props.common.new} />

      <ListTitle titleInfo={props.common.weekly.header} />
      <WebtoonList webtoon={props.common.weekly} />
    </div>
  );
}

export default WebtoonMainCard;
