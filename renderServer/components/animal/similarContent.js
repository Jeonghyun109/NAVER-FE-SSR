import React from "react";
import styles from "./similarContent.module.scss";

function SimilarContent(props) {
  const similarContents = [
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200404_26%2F1585927365775bRHz7_JPEG%2F22062982153525771_563887820.jpg",
      "페르시안",
    ],

    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200211_31%2F15813769677674O1jm_JPEG%2F17494093570992638_-2015122258.jpg",
      "터키시앙고라",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210420_66%2F1618904982543B0DMt_JPEG%2F56751inbound3624853760158885307.jpg",
      "코리안쇼트헤어",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210419_229%2F16188387804943w6Gi_JPEG%2F54974378374701201_-1400302756.jpeg",
      "아비시니안",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210428_100%2F1619579011968iOvwG_JPEG%2F521691553955926931.jpg",
      "아메리칸쇼트헤어",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200209_214%2F1581229340435aTrFL_JPEG%2F336871579074606436.jpg",
      "스핑크스",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200417_12%2F1587097896420NMF0k_JPEG%2F23233512751650562_-497029573.jpeg",
      "스코티시폴드",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200410_88%2F1586528677443mWmL3_JPEG%2F22664286438461903_1995956204.jpeg",
      "브리티시쇼트헤어",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201214_149%2F1607923841240cr73r_JPEG%2F44059437129620739_279034542.jpg",
      "뱅갈",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200229_125%2F15829517228846MU0i_JPEG%2F19087320512185316_-1365682391.jpeg",
      "먼치킨",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200314_158%2F15841507513157jLbn_JPEG%2F20286360954779067_944745824.jpeg",
      "러시안블루",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210430_26%2F1619734359178HggHS_JPEG%2F55869975744703816_1166239455.jpeg",
      "랙돌",
    ],
    [
      "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20190830_134%2F15671596689398dlKe_JPEG%2F3295265083785307_-72202893.jpg",
      "노르웨이숲고양이",
    ],
  ];

  return (
    <div className={styles.similarContentArea}>
      <a className={styles.linkMiddleTitle}>
        <h3 className={styles.h3}>함께 찾은 품종</h3>
      </a>
      <div className={styles.similarInfo}>
        <ul className={styles.photoList}>
          {similarContents.map((similarContent, idx) => {
            return (
              <li className={styles.photo} key={idx}>
                <a className={styles.linkPhoto}>
                  <div className={styles.photoDiv}>
                    <img src={similarContent[0]} className={styles.photoImg} />
                  </div>
                  <div className={styles.titleBox}>{similarContent[1]}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SimilarContent;
