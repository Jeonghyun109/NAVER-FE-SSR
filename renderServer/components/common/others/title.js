import React from "react";
import styles from "./title.module.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CircleIcon from "@mui/icons-material/Circle";

function Title(props) {
  return (
    <div className={styles.title_area}>
        <h2 className={styles.title}>
            {props.titleInfo.title}
            {props.titleInfo.title === "인플루언서" && (
                <ErrorOutlineIcon
                    className={styles.alert}
                    sx={{ color: "#0068c3", fontSize: "18px" }}
                />
            )}
        </h2>
        {props.titleInfo.title === "뉴스" && (
            <div className={styles.subtitle}>
            <span className={styles.condition}>
                <CircleIcon className={styles.conditionDot} />
                {props.titleInfo.condition}
            </span>
            <a
                href={props.titleInfo.subcondition.href}
                className={styles.subcondition}
            >
                <CircleIcon className={styles.subconditionDot} />
                {props.titleInfo.subcondition.text}
            </a>
            </div>        
        )}
        {props.titleInfo.title === "인플루언서" && (
        <div className={styles.subtitle_influencer}>
            <a href={props.titleInfo.subtitle.href} className={styles.Link}>
                {props.titleInfo.subtitle.text}
            </a>
        </div>
        )}

    </div>
  );
}
export default Title;