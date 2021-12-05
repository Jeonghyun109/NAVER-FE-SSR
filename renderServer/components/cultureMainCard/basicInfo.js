import React from "react";
import styles from "./basicInfo.module.scss";

function BasicInfo(props) {
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
          <tbody>
            {Object.keys(props.common.information).map((info, idx) => (
              <tr key = {idx}>
                <td className={styles.infoHeading} key={idx}>
                  {info}
                </td>
                {props.common.information[info].link ? (
                  <td key={"td" + idx} className={styles.infoDetail}>
                    <a
                      href={props.common.information[info].url}
                      className={styles.Link}
                    >
                      {props.common.information[info].detail}
                    </a>
                  </td>
                ) : (
                  <>
                    <td key={"td" + idx} className={styles.infoDetail}>
                      {props.common.information[info].detail}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
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
