import React from "react";
import styles from "./moreWebtoon.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function MoreWebtoon(props) {
  return (
    <div>
      <li className={styles.list_more}>
        <a href={props.more.href} className={styles.more}>
          <span className={styles.inner_box}>
            <ArrowForwardIcon className={styles.arrow} />
            <span className={styles.inner_text}>
              {props.more.text1}
              <br />
              {props.more.text2}
            </span>
          </span>
        </a>
      </li>
    </div>
  );
}
export default MoreWebtoon;
