import React from "react";
import styles from "./webtoonList.module.scss";
import Webtoon from "./webtoon";
import MoreWebtoon from "./moreWebtoon";

function WebtoonList(props) {
  return (
    <div className={styles.webtoonInfo}>
      <ul className={styles.webtoonList}>
        {props.webtoon.list.map((webtoonContent, idx) => {
          return <Webtoon webtoon={webtoonContent} id={idx} />;
        })}
        {props.webtoon.more.href !== "" && (
          <MoreWebtoon more={props.webtoon.more} />
        )}
      </ul>
    </div>
  );
}

export default WebtoonList;
