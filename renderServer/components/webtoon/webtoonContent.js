import React from "react";
import styles from "./webtoonContent.module.scss";

function WebtoonContent(props) {
  return (
    <div className={styles.commonContentArea}>
      <div className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.common.together.header.title}</h3>
      </div>
      <div className={styles.webtoonInfo}>
        <ul className={styles.webtoonList}>
          {props.common.together.list.map((togetherContent, idx) => {
            return (
              <li className={styles.webtoon_together} key={idx}>
                <a
                  href={togetherContent.href}
                  className={styles.linkWebtoon_together}
                >
                  <div className={styles.webtoonDiv_together}>
                    <span className={styles.rank_together}>{idx + 1}</span>
                    <img
                      src={togetherContent.src}
                      className={styles.webtoonThumb_together}
                    />
                  </div>
                  <div className={styles.titles_together}>
                    <div className={styles.titleBox_together}>{togetherContent.title}</div>
                    <div className={styles.subtitleBox_together}>
                        {togetherContent.sub_text}
                    </div>
                  </div>
                  <hr class={styles.divideline}/>
                  <div className={styles.preference}>{togetherContent.preference}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>
          <span className={styles.span}>{props.common.life.header.button}</span>
          {props.common.life.header.title}
        </h3>
      </div>
      <div className={styles.webtoonInfo}>
        <ul className={styles.webtoonList}>
          {props.common.life.list.map((lifeContent, idx) => {
            return (
              <li className={styles.webtoon} key={idx}>
                <a href={lifeContent.href} className={styles.linkWebtoon}>
                  <div className={styles.webtoonDiv}>
                    <span className={styles.rank}>{idx + 1}</span>
                    <img
                      src={lifeContent.src}
                      className={styles.webtoonThumb}
                    />
                  </div>
                  <div className={styles.titleBox}>{lifeContent.title}</div>
                  <div className={styles.subtitleBox}>
                    {lifeContent.sub_text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.common.new.header.title}</h3>
      </div>
      <div className={styles.webtoonInfo}>
        <ul className={styles.webtoonList}>
          {props.common.new.list.map((newContent, idx) => {
            return (
              <li className={styles.webtoon} key={idx}>
                <a href={newContent.href} className={styles.linkWebtoon}>
                  <div className={styles.webtoonDiv}>
                    <span className={styles.rank}>{idx + 1}</span>
                    <img src={newContent.src} className={styles.webtoonThumb} />
                  </div>
                  <div className={styles.titleBox}>{newContent.title}</div>
                  <div className={styles.subtitleBox}>
                    {newContent.sub_text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.common.weekly.header.title}</h3>
      </div>
      <div className={styles.webtoonInfo}>
        <ul className={styles.webtoonList}>
          {props.common.weekly.list.map((weeklyContent, idx) => {
            return (
              <li className={styles.webtoon} key={idx}>
                <a href={weeklyContent.href} className={styles.linkWebtoon}>
                  <div className={styles.webtoonDiv}>
                    <span className={styles.rank}>{idx + 1}</span>
                    <img
                      src={weeklyContent.src}
                      className={styles.webtoonThumb}
                    />
                  </div>
                  <div className={styles.titleBox}>{weeklyContent.title}</div>
                  <div className={styles.subtitleBox}>
                    {weeklyContent.sub_text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default WebtoonContent;
