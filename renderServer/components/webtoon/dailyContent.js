import React from "react";
// import styles from "./webtoonContent.module.scss";
import styles from "./dailyContent.module.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Popover from '@mui/material/Popover';

function dailyContent(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.commonContentArea}>
      <div className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>{props.similar.header.title}</h3>
      </div>
      <div className={styles.webtoonInfo}>
        <ul className={styles.webtoonList}>
          {props.similar.list.map((similarContent, idx) => {
            return (
              <li className={styles.webtoon} key={idx}>
                <a href={similarContent.href} className={styles.linkWebtoon}>
                  <div className={styles.webtoonDiv}>
                    <span className={styles.rank}>{idx + 1}</span>
                    <img
                      src={similarContent.src}
                      className={styles.webtoonThumb}
                    />
                  </div>
                  <div className={styles.titleBox}>{similarContent.title}</div>
                  <div className={styles.subtitleBox}>
                    {similarContent.sub_text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.daily}>
        <span>네이버 웹툰 2021-11-30</span>
        <ErrorOutlineIcon
            className={styles.alert}
            sx={{ color: "#0068c3", fontSize: "18px" }}
            onClick={handleClick}
        />
        <Popover
            className={styles.popover}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            본 정보는 네이버 웹툰 인기순 로직에 따라 제공되며, 데이터 보정 등의 사유로 변동/지연될 수 있습니다.
        </Popover>           


      </div>
    </div>
  );
}

export default dailyContent;
