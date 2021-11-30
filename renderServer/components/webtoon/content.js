import React from "react";
import styles from "./content.module.scss";

function Content({ props }) {
  function ranking(id) {
    return id + 1;
  }

  return (
    <div className={styles.commonContentArea}>
      {props["rankings"].map((rankingInfo, idx) => {
        return (
          <div>
            <div className={styles.middleTitle}>
              <a className={styles.linkMiddleTitle}>
                <h3 className={styles.h3}>{rankingInfo["name"]}</h3>
              </a>
            </div>

            <div className={styles.detailInfo}>
              <ul className={styles.webtoonList}>
                {rankingInfo["list"].map((webtoonInfo, idx) => {
                  return (
                    <li className={styles.webtoonElem} key={idx}>
                      <span className="rank">{ranking(idx)}</span>
                      <a className={styles.webtoonLink}>
                        <imag
                          src={webtoonInfo["image"]}
                          className={styles.webtoonImg}
                        />
                      </a>
                      <div class="title_box">
                        <strong class="name type_ell_2">
                          <a href={webtoonInfo["url"]}>
                            {webtoonInfo["title"]}
                          </a>
                        </strong>
                        <span class="cartoonist">
                          {webtoonInfo["sub-title"]}
                        </span>
                        <div class="bottom_info">
                          <span class="divide_line"></span>
                          <span class="preference">
                            선호도 {webtoonInfo["preference"]}%
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
