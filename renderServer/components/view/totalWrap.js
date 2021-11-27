import React from "react";
import styles from "./totalWrap.module.scss";

function TotalWrap(props) {
  const img =
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMTAyMDNfMjky%2FMDAxNjEyMzM2NTY4NzA2.fo-KxpG1dxa_RQqlepV7k_ANF_W8SL6FrEFWfiidhjwg.bFWiSyH0sQX-0vdSxOWKnbHheAGSOithDLVinEQ_nocg.JPEG.yarolove%2F%2525EA%2525B9%252580%2525EC%25258B%2525A4%2525EC%25259E%2525A5.JPG&type=f54_54";

  const img2 =
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTVfNzQg%2FMDAxNjE1ODAzMTQ4ODkz.jgUwcx6sLi2nm7RUUaKxiiZsUgA8jb5J6avOYJygNM4g.reFXgjXYUCqV3JfRGV0m499pzsi2OilKejwgcaAdiGAg.JPEG.yarolove%2F1615645073916%25A3%25AD7.jpg%23900x900&type=ff192_192";

  return (
    <div className={styles.totalWrap}>
      <a className={styles.blogLink}>
        <img src={img} className={styles.image}></img>
        <div className={styles.title}>교육정보 캐며 요리하는 주부KIM실장</div>
        <div className={styles.bar} />
        <div className={styles.time}>2021.03.15.</div>
      </a>

      <div className={styles.saveKeep}>
        <a className={styles.circlesLink}>
          <div className={styles.circles}></div>
        </a>
      </div>

      <a className={styles.titleLink}>
        샤미즈 샴고양이 특성과 예민하게 화장실 사용하는 로브
      </a>

      <div className={styles.totalGroup}>
        <div className={styles.textDiv}>
          <a className={styles.textLink}>
            저희 집에는 똑똑이 샤미즈 샴고양이 로브도 있거든요. 오늘은 로브를
            소개할게요. 화장실 쓰는 게 너무 귀여워서 올려봐요. 샴고양이 샤미즈
            샤미즈가 샴고양이 맞아요. 샴고양이...
          </a>
        </div>

        <a className={styles.imageLink}>
          <img src={img2} className={styles.image} />
        </a>
      </div>
    </div>
  );
}

export default TotalWrap;
