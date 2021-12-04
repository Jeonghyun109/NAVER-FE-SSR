import React from "react";
import styles from "./userDetail.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function userDetail(props) {
  return (
    <div className={styles.detail}>
      <div
        className={styles.keywords}
        style={{ color: props.colorScheme.main }}
      >
        {props.influencer.keywords.map((keyword, idx) => (
          <div key={idx}>
            {idx === 0 ? (
              <div>
                {keyword.type === "Blog" && (
                  <i className="fas fa-stop" style={{ marginRight: "5px" }}></i> //blog 아이콘이 없어서 그냥 박스로 대체
                )}
                {keyword.type === "YouTube" && (
                  <i
                    className="fab fa-youtube"
                    style={{ marginRight: "5px" }}
                  ></i>
                )}
                {keyword.type === "Company" && (
                  <i
                    className="fas fa-briefcase"
                    style={{ marginRight: "5px" }}
                  ></i>
                )}
                <b>{keyword.title}</b>
                <FiberManualRecordIcon
                  sx={{
                    color: props.colorScheme.border,
                    fontSize: "4pt",
                    marginBottom: "2.5pt",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                />
              </div>
            ) : (
              <div>
                <span key={idx}>{keyword.value}</span>
                {idx !== props.influencer.keywords.length - 1 && (
                  <FiberManualRecordIcon
                    sx={{
                      color: props.colorScheme.border,
                      fontSize: "4pt",
                      marginBottom: "2.5pt",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        className={styles.viewDetail}
        style={{ borderColor: props.colorScheme.border }}
      >
        <i
          className="fas fa-chevron-down"
          style={{ color: props.colorScheme.main }}
        ></i>
      </div>
    </div>
  );
}

export default userDetail;
