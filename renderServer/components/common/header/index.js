import React from "react";
import styles from "./index.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
  return (
    <div>
      <div className={styles.searchBar}>
        <div className={styles.Logo}>N</div>
        <input
          className={styles.searchBox}
          placeholder="검색어를 입력해주세요."
          defaultValue="불국사"
        />
        <CancelIcon className={styles.Erase} sx={{ fontSize: 30 }} />
        <MicNoneIcon className={styles.voiceSearch} sx={{ fontSize: 45 }} />
        <SearchIcon className={styles.searchIcon} sx={{ fontSize: 45 }} />
      </div>
      <div className={styles.scrollMenu}>
        <a className={styles.menuhome} href="#home">
          통합
        </a>
        <a className={styles.menu} href="#image">
          이미지
        </a>
        <a className={styles.menu} href="#knowledge">
          지식백과
        </a>
        <a className={styles.menu} href="#view">
          VIEW
        </a>
        <a className={styles.menu} href="#kin">
          지식iN
        </a>
        <a className={styles.menu} href="#influencer">
          인플루언서
        </a>
        <a className={styles.menu} href="#video">
          동영상
        </a>
        <a className={styles.menu} href="#shopping">
          쇼핑
        </a>
        <a className={styles.menu} href="#news">
          뉴스
        </a>
        <a className={styles.menu} href="#dictionary">
          어학사전
        </a>
        <a className={styles.menu} href="#map">
          지도
        </a>
        <a className={styles.menu} href="#book">
          책
        </a>
        <a className={styles.menu} href="#music">
          뮤직
        </a>
        <a className={styles.menu} href="#audio">
          오디오클립
        </a>
      </div>
    </div>
  );
}

export default Header;
