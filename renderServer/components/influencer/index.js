import React from "react";
import styles from "./index.module.scss";
import Filter from "./filter";
import Content from "./content";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function index(props) {
  return (
    <div className={styles.influencerBody}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>
          인플루언서
          <ErrorOutlineIcon
            className={styles.alert}
            sx={{ color: "#0068c3", fontSize: "18px" }}
          />
        </h2>
        <div className={styles.subtitle}>
          <a href="https://in.naver.com/" className={styles.Link}>
            서비스 홈 바로가기
          </a>
        </div>
      </div>
      <Filter tabList={props.influencer["tab-lists"]} />
      <Content
        influencers={props.influencer.influencers}
        colorScheme={props.influencer.colorScheme}
      />
      <a
        href={props.influencer.influencerLink}
        style={{ textDecoration: "None" }}
      >
        <div className={styles.more}>
          인플루언서 더보기 <i className="fas fa-arrow-right"></i>
        </div>
      </a>
    </div>
  );
}

export default index;
