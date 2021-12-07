import React from "react";
import styles from "./dailyWebtoon.module.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ListTitle from "./listTitle";
import WebtoonList from "./webtoonList";

function dailyContent(props) {
  return (
    <div className={styles.commonContentArea}>
      <ListTitle titleInfo={props.similar.header} />
      <WebtoonList webtoon={props.similar} />

      <div className={styles.daily}>
        <span>{props.similar.text}</span>
        <ErrorOutlineIcon
          className={styles.alert}
          sx={{ color: "#0068c3", fontSize: "18px" }}
        />
      </div>
    </div>
  );
}
export default dailyContent;
