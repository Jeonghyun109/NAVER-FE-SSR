import React from "react";
import styles from "./index.module.scss";
import Blog from "./blog";
import Body from "./body";
import Tags from "./tags";
import Link from "./link";

function View(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.h2}>VIEW</h2>
      </div>

      <ul className={styles.ul}>
        {props.view.list.map((element, idx) => {
          return (
            <li className={styles.li} key={idx}>
              <div className={styles.content}>
                <Blog blog={element.blog} />
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
