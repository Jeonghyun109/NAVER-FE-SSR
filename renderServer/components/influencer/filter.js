import React from "react";
import styles from "./filter.module.scss";

function filter({ props }) {
  return (
    <div style={{ width: "100%" }} className={styles.filterDiv}>
      <ul className={styles.filterList}>
        {props["tab-lists"].map((tab, idx) => {
          if (idx === 0) {
            return (
              <li className={styles.tabFirst} key={idx}>
                <span className={styles.tabTitle}>{tab["title"]}</span>{" "}
                <span className={styles.tabSubTitle}>{tab["subtitle"]}</span>
              </li>
            );
          }
          return (
            <a href={tab["url"]} className={styles.link}>
              <li className={styles.tabs} key={idx}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={tab["image"]}
                          className={styles.tabThumbnail}
                          alt={idx}
                        />
                      </td>
                      <td>
                        <span className={styles.tabTitleTabs}>
                          {tab["title"]}
                        </span>{" "}
                        <span className={styles.tabSubTitleTabs}>
                          {tab["subtitle"]}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default filter;
