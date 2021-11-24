import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav, Button, ButtonToolbar, Image } from "react-bootstrap";

function app(props) {
  return (
    <div>
      {/* <div className="header">Header</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div> */}
      <div className="search">검색창</div>
      <Card>
        <Card.Header>
          <div>
            <h2>
              <a href="https://m.comic.naver.com/webtoon">
                <strong>독립일기</strong>
              </a>
            </h2>
          </div>
          <div>
            <span class="txt">웹툰</span>
            <span class="cm_bar">|</span>
            <span class="txt">연재중</span>
          </div>
          <Nav variant="pills" defaultActiveKey="#together">
            <Nav.Item>
              <Nav.Link href="#total">전체</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#episode">회차보기</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#others">작가의 다른작품</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#together">함께 많이보는 웹툰</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <div class="cm_content_area">
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
              <h3 class="title">
                <span>일상</span>"웹툰 랭킹"
              </h3>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
                            <Image
                              src="https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg"
                              class="bg_nimg2"
                              width="105"
                              height="105"
                            />
                          </div>
                        </a>
                        <div class="title_box">
                          <strong class="name type_ell_2">
                            <a href="https://m.naver.com">먹는 인생</a>
                          </strong>
                          <span class="sub_text type_ell_2">"홍끼"</span>
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
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default app;
