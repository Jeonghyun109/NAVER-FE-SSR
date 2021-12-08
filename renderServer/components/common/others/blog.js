import React from "react";
import styles from "./blog.module.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Blog(props) {
  return (
    <>
      <a href={props.blog.href} className={styles.blogLink}>
        <img src={props.blog.src} className={styles.image}></img>
        <div className={styles.title}>{props.blog.title}</div>
        {props.blog.influencer === "true" && (
          <>
            <div className={styles.bar} />
            <div className={styles.influencer}>인플루언서</div>
          </>
        )}
        <div className={styles.bar} />
        <div className={styles.time}>{props.blog.time}</div>
      </a>

      <div className={styles.saveKeep}>
        <div className = {styles.hide}>
          <input type="checkbox" className ={styles.clickKeep} id = {props.id}/>
          <div className={styles.keepMenu}>
            <label for={props.id} className={styles.modalBg}></label>
            <div className={styles.keepSave}>
              Keep에 저장 <i className={"far fa-bookmark " + styles.Right}></i>
            </div>
            <div className={styles.keepGo}>
              Keep 바로가기 <i className={"fas fa-chevron-right " + styles.Right}></i>
            </div>
          </div>
          <label for={props.id} className = {styles.circles}>
            <MoreVertIcon sx={{ fontSize: 30, color: "#d1d3d6" }}/>
          </label>
        </div>   
      </div>

    </>
  );
}

export default Blog;
