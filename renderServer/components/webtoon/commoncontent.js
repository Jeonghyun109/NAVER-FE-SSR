import React from "react";
import styles from "./commonContent.module.scss";

function CommonContent(props) {
  const togetherWebtoonSrc = [
    "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e295146b-8729-4ea0-a332-1c6463d81bd6.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_25be10b5-729b-474d-ac9c-bae0a879e8cd.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c20e1412-a2fb-493d-8e1e-57234c0ab7e4.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_eefd3fab-24d0-4734-a4e7-d9cdd3de742b.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d44348af-7f3b-44a4-88e3-6ff1430256c1.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20161031214436_t220x202.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_b822d5ad-0cd6-4313-976a-aa60238375ed.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20160601180804_t220x202.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_9a66efb3-2d4f-4013-b43f-03ebe0d8d373.jpg",
  ];
  const lifeRankingSrc = [
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_73f1aaef-824f-4790-a70b-f3b1e3aa22b4.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c614978a-da9b-462e-9e8c-f5ba49400109.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_af8ac713-8563-48f9-9028-325668ed4d2c.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_54e93171-9019-484d-9696-0f492d9a9772.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_85ae070d-7677-45e6-a034-e25116c900c1.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_4ef07c1d-5daa-4cc8-b75c-7b9ef20146ed.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_7db34970-7fe9-4b1c-8e3d-91c255981829.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a13551ff-0c82-422e-beff-454e91915ddb.jpg",
  ];
  const weeklyNewRankingSrc = [
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e295146b-8729-4ea0-a332-1c6463d81bd6.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_2ac4c0ab-5fa8-4b8e-8561-7113782a057a.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_1f6cc767-2c3e-4a7e-9fb4-e6a8628f98bd.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c24f84ca-4d6a-4651-9a14-0f1fd2ad4fe2.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_35e3b752-6c15-466f-bef5-f75245161fc8.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_7a5497b2-98a2-4966-9940-6f501af33f9f.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_b1ed2d69-abc6-43a3-8a17-41af6f972168.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_0572dea8-def9-413e-a9d4-3c8a273147ae.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_96cfb2dc-54b6-40fb-8c15-65f728fb3820.jpg",
  ];
  const weeklyRankingSrc = [
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_c04fd4ec-8bbf-4765-ab13-2281b1eb254e.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_256e08d0-dfd0-454a-9a74-1743bad87e81.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_fe828dc9-84a2-4329-9d83-2f4afc981031.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_67290a02-fe7f-448d-aed9-6ec88e558088.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_e50a911a-aeed-4cd1-abb9-1efba754f68b.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…ail%2Ftitle_thumbnail_20150323153418_t220x202.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_225f310e-c16c-4ac3-b164-987d0cec46a7.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_96bede54-a8da-47ca-a9ac-3ae610addbfe.jpg",
    "https://search.pstatic.net/common?type=f&size=210x…l_IMAG19_510971eb-e1d0-45ce-ac81-51df7edfd9d6.jpg",
  ];

  return (
    <div className={styles.commonContentArea}>
      <div className={styles.middleTitle}>
        <a className={styles.linkMiddleTitle}>
          <h3 className={styles.h3}>함께 많이 보는 웹툰</h3>
        </a>
      </div>

      <div className={styles.detailInfo}>
        <a className={styles.linkMainPhoto}>
          <img src={togetherWebtoonSrc} className={styles.mainPhotoImg} />
        </a>
      </div>

      <div className={styles.middleTitle}>
        <a className={styles.linkMiddleTitle}>
          <h3 className={styles.h3}>일상 웹툰 랭킹</h3>
        </a>
      </div>

      <div className={styles.detailInfo}>
        <a className={styles.linkMainPhoto}>
          <img src={lifeRankingSrc} className={styles.mainPhotoImg} />
        </a>
      </div>

      <div className={styles.middleTitle}>
        <a className={styles.linkMiddleTitle}>
          <h3 className={styles.h3}>주간 신작 랭킹</h3>
        </a>
      </div>

      <div className={styles.detailInfo}>
        <a className={styles.linkMainPhoto}>
          <img src={weeklyNewRankingSrc} className={styles.mainPhotoImg} />
        </a>
      </div>

      <div className={styles.middleTitle}>
        <a className={styles.linkMiddleTitle}>
          <h3 className={styles.h3}>주간 랭킹</h3>
        </a>
      </div>

      <div className={styles.detailInfo}>
        <a className={styles.linkMainPhoto}>
          <img src={weeklyRankingSrc} className={styles.mainPhotoImg} />
        </a>
      </div>
    </div>
  );
}

export default CommonContent;

{
  /* <div class="cm_content_area">
<div class="middle_title">
  <h3>함께 많이 보는 웹툰</h3>
</div>
<div class="scroll_box">
  <div class="list_info">
    <div>
      <ul class="list">
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="middle_title">
  <h3 class="title"><span>일상</span>"웹툰 랭킹"</h3>
</div>
<div class="scroll_box">
  <div class="list_info">
    <div>
      <ul class="list">
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="middle_title">
  <h3>주간 신작 랭킹</h3>
</div>
<div class="scroll_box">
  <div class="list_info">
    <div>
      <ul class="list">
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="middle_title">
  <h3>주간 랭킹</h3>
</div>
<div class="scroll_box">
  <div class="list_info">
    <div>
      <ul class="list">
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="area_card">
            <a href="https://m.naver.com" class="area_link_box">
              <div class="thumb">
                <span class="cm_thumb_rank_number">
                  <span class="this_bg"></span>
                  <span class="this_text">1</span>
                </span>
                <Image src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg" class="bg_nimg2" width="105" height="105"/>
              </div>
            </a>
            <div class="title_box">
              <strong class="name type_ell_2">
                <a href="https://m.naver.com">먹는 인생</a>
              </strong>
              <span class="sub_text type_ell_2">
                "홍끼"
              </span>
              <div class="bottom_info">
                <span class="divide_line"></span>
                <span class="sub_text type_state">선호도 99%</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</div> */
}
