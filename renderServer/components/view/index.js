import React from "react";
import styles from "../common/others/index.module.scss";
import Title from "../common/others/title";
import Blog from "../common/others/blog";
import Body from "../common/others/body";
import Tags from "./tags";
import Link from "./link";

function View(props) {
  return (
    <div className={styles.container}>
      <Title titleInfo={props.view.header} />

      <ul className={styles.ul}>
        {props.view.list.map((element, idx) => {
          return (
            <li className={styles.li} key={idx}>
              <div className={styles.content}>
                <Blog
                  blog={element.blog}
                  id={"blog" + idx}
                  colorScheme={props.view.colorScheme}
                />
                <Body body={element.body} />
              </div>
              <Tags tags={element.tags} />
              <Link link={element.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default View;
