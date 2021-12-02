import React from "react";
import styles from "./basicInfo.module.scss";

function BasicInfo(props) {
  function renderInformation(lst) {
    var keys = Object.keys(lst);
    var temp = [];
    for (var i = 0; i < keys.length; i++) {
      if (lst[keys[i]].link) {
        temp.push(
          <tr key={i}>
            <td className={styles.infoHeading} key={"td" + i}>
              {keys[i]}
            </td>
            <td key={"td" + i} className={styles.infoDetail}>
              <a href={lst[keys[i]].url} className={styles.Link}>
                {lst[keys[i]].detail}
              </a>
            </td>
          </tr>
        );
      } else {
        temp.push(
          <tr key={i}>
            <td className={styles.infoHeading} key={"td" + i}>
              {keys[i]}
            </td>
            <td key={"td" + i} className={styles.infoDetail}>
              {lst[keys[i]].detail}
            </td>
          </tr>
        );
      }
    }
    return temp;
  }

  return (
    <div className={styles.infoArea}>
      <a href={props.common.descriptionURL} className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.common.title}</h3>
        <div className={styles.arrow}>
          <i className="fas fa-arrow-right"></i>
        </div>
      </a>
      <div className={styles.details}>
        <table className={styles.infoTable}>
          <tbody>{renderInformation(props.common.information)}</tbody>
        </table>
      </div>
      <div style={{ fontSize: "12pt", color: "#424242" }}>
        {props.common.descriptionText}
      </div>
      <div className={styles.btn}>
        <a href={props.common.place}>
          <span className={styles.mapBtn}>
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "#06c755" }}
            ></i>{" "}
            지도
          </span>
        </a>
        <span className={styles.shareBtn}>
          <i className="fas fa-share-square"></i>
        </span>
      </div>
    </div>
  );
}

export default BasicInfo;
