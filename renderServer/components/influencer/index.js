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
          {props.influencer.header.title}
          <ErrorOutlineIcon
            className={styles.alert}
            sx={{ color: "#0068c3", fontSize: "18px" }}
          />
        </h2>
        <div className={styles.subtitle}>
          <a href={props.influencer.header.subtitle.href} className={styles.Link}>
          {props.influencer.header.subtitle.text}
          </a>
        </div>
      </div>
      <Filter tabList={props.influencer["tab-lists"]} />
      <Content
        influencers={props.influencer.influencers}
        colorScheme={props.influencer.colorScheme}
      />
      <a
        href={props.influencer.influencerLink.href}
        style={{ textDecoration: "None" }}
      >
        <div className={styles.more}>
          {props.influencer.influencerLink.text} <i className="fas fa-arrow-right"></i>
        </div>
      </a>
    </div>
  );
}

export default index;
