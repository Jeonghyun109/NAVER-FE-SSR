import React from "react";
import styles from "../common/others/index.module.scss";
import Title from "../common/others/title";
import Filter from "./filter";
import Content from "./content";
import More from "../common/others/more";

function index(props) {
  return (
    <div className={styles.container}>
      <Title titleInfo={props.influencer.header} />
      <Filter tabList={props.influencer["tab-lists"]} />
      <Content
        influencers={props.influencer.influencers}
        colorScheme={props.influencer.colorScheme}
      />
      <More more={props.influencer.influencerLink} />
    </div>
  );
}

export default index;
