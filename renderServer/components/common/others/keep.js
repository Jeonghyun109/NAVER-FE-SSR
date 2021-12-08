import React from "react";
import styles from "./keep.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Keep(props) {
  return (
    <span className={styles.saveKeep}>
      <div className={styles.hide}>
        <input type="checkbox" className={styles.clickKeep} id={props.id} />
        <div className={styles.keepMenu}>
          <label for={props.id} className={styles.modalBg}></label>
          <div className={styles.keepContent}>
            <div className={styles.keepSave}>
              Keep에 저장 <i className={"far fa-bookmark " + styles.Right}></i>
            </div>
            <div className={styles.keepGo}>
              Keep 바로가기{" "}
              <i className={"fas fa-chevron-right " + styles.Right}></i>
            </div>
          </div>
        </div>
        <label for={props.id} className={styles.circles}>
          <MoreVertIcon
            sx={{
              fontSize: 30,
              color: props.color.circleColor,
              "&:hover": { color: props.color.circleHover },
            }}
          />
        </label>
      </div>
    </span>
  );
}
export default Keep;
