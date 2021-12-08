import React from "react";
import styles from "../common/others/index.module.scss";
import Title from "../common/others/title";
import Blog from "../common/others/blog";
import Body from "../common/others/body";
import More from "../common/others/more";

function News(props) {
  return (
    <div className={styles.container}>
      <Title titleInfo={props.news.header} />
      <ul className={styles.ul}>
        {props.news.list.map((element, idx) => {
          return (
            <li className={styles.li} key={idx}>
              <div className={styles.content}>
                <Blog
                  blog={element.blog}
                  id={"news" + idx}
                  colorScheme={props.news.colorScheme}
                />
                <Body body={element.body} />
              </div>
            </li>
          );
        })}
      </ul>
      <More more={props.news.newsLink} />
    </div>
  );
}

export default News;
