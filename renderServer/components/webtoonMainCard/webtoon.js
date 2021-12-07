import React from "react";
import styles from "./webtoon.module.scss";
import Thumbnail from "./thumbnail";

function Webtoon(props) {
  return (
    <div>
      <li className={styles.webtoon} key={props.id}>
        <a href={props.webtoon.href} className={styles.linkWebtoon}>
          <Thumbnail thumbnail={props.webtoon} id={props.id} />
          <div className={styles.titles}>
            <div className={styles.titleBox}>{props.webtoon.title}</div>
            <div className={styles.subtitleBox}>{props.webtoon.sub_text}</div>
          </div>
          {props.webtoon.preference !== "" && (
            <div>
              <hr className={styles.divideline} />
              <div className={styles.preference}>
                {props.webtoon.preference}
              </div>
            </div>
          )}
        </a>
      </li>
    </div>
  );
}

export default Webtoon;
