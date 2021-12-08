import React from "react";
import styles from "./title.module.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Title(props) {

  return (
    <div className={styles.titleArea}>
      <h2 className={styles.mainTitle}>{props.title.name}</h2>

      <div className={styles.saveKeep}>
        <div className = {styles.hide}>
          <input type="checkbox" className ={styles.clickKeep} id = "clickKeep"/>
          <div className={styles.keepMenu}>
            <label for="clickKeep" className={styles.modalBg}></label>
            <div className={styles.keepSave}>
              Keep에 저장 <i className={"far fa-bookmark " + styles.Right}></i>
            </div>
            <div className={styles.keepGo}>
              Keep 바로가기 <i className={"fas fa-chevron-right " + styles.Right}></i>
            </div>
          </div>
          <label for="clickKeep" className = {styles.circles}>
            <MoreVertIcon sx={{ fontSize: 30, color: props.colorScheme.circleColor, '&:hover':{color: props.colorScheme.circleHover }}}/>
          </label>
        </div>   
      </div>

      <div
        className={styles.subTitle}
        style={{ color: props.colorScheme.subTitle }}
      >
        <span className={styles.subTextSpan}>{props.title.type}</span>
        <span
          className={styles.subBarSpan}
          style={{ backgroundColor: props.colorScheme.subTapBar }}
        />
        <span className={styles.subTextSpan}>{props.title.subName}</span>
      </div>
    </div>
  );
}
