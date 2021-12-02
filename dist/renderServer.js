(() => {
  "use strict";
  var e = {
      986: (e) => {
        e.exports = require("body-parser");
      },
      582: (e) => {
        e.exports = require("cors");
      },
      860: (e) => {
        e.exports = require("express");
      },
      689: (e) => {
        e.exports = require("react");
      },
      684: (e) => {
        e.exports = require("react-dom/server");
      },
    },
    a = {};
  function t(l) {
    var c = a[l];
    if (void 0 !== c) return c.exports;
    var r = (a[l] = { exports: {} });
    return e[l](r, r.exports, t), r.exports;
  }
  (t.n = (e) => {
    var a = e && e.__esModule ? () => e.default : () => e;
    return t.d(a, { a }), a;
  }),
    (t.d = (e, a) => {
      for (var l in a)
        t.o(a, l) &&
          !t.o(e, l) &&
          Object.defineProperty(e, l, { enumerable: !0, get: a[l] });
    }),
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (() => {
      var e = t(689),
        a = t.n(e);
      const l = "Gaofu0_WhLiZfSSlHHlK",
        c = require("@mui/icons-material/Cancel");
      var r = t.n(c);
      const m = require("@mui/icons-material/MicNone");
      var s = t.n(m);
      const n = require("@mui/icons-material/Search");
      var i = t.n(n);
      const o = function (e) {
          return a().createElement(
            "div",
            null,
            a().createElement(
              "div",
              { className: "yk2QQ0PLdw1FMQtzeoLK" },
              a().createElement(
                "div",
                { className: "raIWX0RIevESkKmDF5Wh" },
                "N"
              ),
              a().createElement("input", {
                className: "wO9AuZ1mSlqY8eEGb3qZ",
                placeholder: "검색어를 입력해주세요.",
                defaultValue: "불국사",
              }),
              a().createElement(r(), {
                className: "CvWCFkpm_Gfk1MrGVe1s",
                sx: { fontSize: 30 },
              }),
              a().createElement(s(), {
                className: "Rg0WwUXCTpI6XtH0HddY",
                sx: { fontSize: 45 },
              }),
              a().createElement(i(), {
                className: "txiw8yXn4NiOoG9GdPCJ",
                sx: { fontSize: 45 },
              })
            ),
            a().createElement(
              "div",
              { className: "HbbDATNACiQacSV__cwn" },
              a().createElement(
                "a",
                { className: "i5wVFzCNpmqROYJxu6aK", href: "#home" },
                "통합"
              ),
              a().createElement(
                "a",
                { className: l, href: "#image" },
                "이미지"
              ),
              a().createElement(
                "a",
                { className: l, href: "#knowledge" },
                "지식백과"
              ),
              a().createElement("a", { className: l, href: "#view" }, "VIEW"),
              a().createElement("a", { className: l, href: "#kin" }, "지식iN"),
              a().createElement(
                "a",
                { className: l, href: "#influencer" },
                "인플루언서"
              ),
              a().createElement(
                "a",
                { className: l, href: "#video" },
                "동영상"
              ),
              a().createElement(
                "a",
                { className: l, href: "#shopping" },
                "쇼핑"
              ),
              a().createElement("a", { className: l, href: "#news" }, "뉴스"),
              a().createElement(
                "a",
                { className: l, href: "#dictionary" },
                "어학사전"
              ),
              a().createElement("a", { className: l, href: "#map" }, "지도"),
              a().createElement("a", { className: l, href: "#book" }, "책"),
              a().createElement("a", { className: l, href: "#music" }, "뮤직"),
              a().createElement(
                "a",
                { className: l, href: "#audio" },
                "오디오클립"
              )
            )
          );
        },
        E = {
          commonModule: "Bn0XRpftswNx9EPiPPsQ",
          topBorder: "hp_QfyBgFrgd2sabiD7X",
          contentWrap: "ug_K208GTX5ib2lFbVx3",
        },
        N = "zqKn3ms1EpXpaqiFHl16",
        d = function (e) {
          return a().createElement(
            "div",
            { className: "w8v97tusKPqi0f50smB4" },
            a().createElement(
              "h2",
              { className: "qQxVniB5CMxBq70RkIZ1" },
              e.title.name
            ),
            a().createElement(
              "div",
              { className: "SGLLmckN7K323AlmRXT6" },
              a().createElement(
                "a",
                { className: "Qk2eREGyxz0SYFLcHTXf" },
                a().createElement("div", { className: "PxirEojwYS4HFNr5k2Wj" })
              )
            ),
            a().createElement(
              "div",
              {
                className: "spl1Tmt2bzFQ_o9HGiHW",
                style: { color: e.colorScheme.subTitle },
              },
              a().createElement("span", { className: N }, e.title.type),
              a().createElement("span", { className: "rE_2CjSK6Au6HP7CFwK6" }),
              a().createElement("span", { className: N }, e.title.subName)
            )
          );
        },
        u = (require("@mui/system"), "AKvpsA5VvILGVv40MapP"),
        f = "ZD5uPrErEIoI8Czs6osS",
        h = "UpenaO3fzWKfrRWhnXOR",
        p = "FkbXTj3ln4sHSSPj3L2z",
        v = "F6JlJdKozDTguLRNhEHX",
        b = "fcLye7hIRyUBIsHOYXmW",
        g = "HOW7s48xMS79rdeewPcr",
        k = function (e) {
          return a().createElement(
            "div",
            { className: u },
            "last" === e.subTap.mainTap.order &&
              a().createElement(
                "ul",
                { className: f },
                a().createElement("li", { className: "s5s6dHhPWh4w9zpGH9vP" }),
                e.subTap.list.map(function (t, l) {
                  return a().createElement(
                    "li",
                    { className: h, key: l },
                    a().createElement(
                      "a",
                      {
                        href: t.href,
                        className: b,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        a().createElement("span", {
                          className: g,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      a().createElement("span", { className: v }, t.title)
                    )
                  );
                }),
                a().createElement(
                  "li",
                  { className: h },
                  a().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: p,
                      style: { backgroundColor: e.colorScheme.subTapColor },
                    },
                    a().createElement(
                      "span",
                      { className: v },
                      e.subTap.mainTap.title
                    )
                  )
                )
              ),
            "first" === e.subTap.mainTap.order &&
              a().createElement(
                "ul",
                { className: f },
                a().createElement(
                  "li",
                  { className: h },
                  a().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: p,
                      style: { backgroundColor: e.colorScheme.subTapColor },
                    },
                    a().createElement(
                      "span",
                      { className: v },
                      e.subTap.mainTap.title
                    )
                  )
                ),
                e.subTap.list.map(function (t, l) {
                  return a().createElement(
                    "li",
                    { className: h, key: l },
                    a().createElement(
                      "a",
                      {
                        href: t.href,
                        className: b,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        a().createElement("span", {
                          className: g,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      a().createElement("span", { className: v }, t.title)
                    )
                  );
                })
              )
          );
        },
        y = function (e) {
          return a().createElement(
            "div",
            { className: "V_biLkhbpj1TiFQG01hN" },
            a().createElement(
              "a",
              {
                href: e.similar.header.href,
                className: "L6y7q4VqgJX6pEwGqCd1",
              },
              a().createElement(
                "h3",
                { className: "opYSgc_qU8NwiRPi258Q" },
                e.similar.header.title
              ),
              a().createElement(
                "div",
                { className: "B9UDz_BXyNdOgnlK4GU2" },
                a().createElement("i", { className: "fas fa-arrow-right" })
              )
            ),
            a().createElement(
              "div",
              { className: "QonCLKyMnH4EZTJtJX6a" },
              a().createElement(
                "ul",
                { className: "EZC4ZkUZhJOygFL52u_X" },
                e.similar.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: "iaNH7NzZRgviGNC1dBmX", key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: "OLwnrlzrFACPpAYMCoMg" },
                      a().createElement(
                        "div",
                        { className: "BJRAN0HWVVeLKtCkUlWO" },
                        a().createElement("img", {
                          src: e.src,
                          className: "TtgkT3w1qjE1T18xixS6",
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: "XsfPU1nN5WDOI9Yml29U" },
                        e.title
                      )
                    )
                  );
                })
              )
            )
          );
        },
        w = {
          commonContentArea: "ihSY5SbEFx0_eK_DYs7B",
          linkMiddleTitle: "fHzit4ULvzCTKKnp80HW",
          h3: "muyEcIhTnMjXipZBj6ea",
          span: "f2PT4c8DXNUrzhDVbb6n",
          webtoonInfo: "_4IrKRq61NUfjojkde7zH",
          webtoonList: "mpSfPXJ9oF9vpsmGjNiQ",
          webtoon: "bjwzNY69Ok0jPz9MMif4",
          linkWebtoon_together: "aEwidlpRvCmpgDXg65BR",
          webtoonDiv: "qmbYDd5nmvgabzCeqU9j",
          rank: "f00NOILBpTeiQEv_kaSq",
          webtoonThumb: "EIQHkLMRq84fnsW_9hIl",
          preference: "Cq7BR9zNC0eDA_gb5Mgv",
          titleBox: "lA9XmV1Pu5IN_skJu5BJ",
          subtitleBox: "FlCRrD5dIRg2CyVCbgiE",
          linkWebtoon: "FU75_1fLYS6SSRpo9nrE",
        },
        T = function (e) {
          return a().createElement(
            "div",
            { className: w.commonContentArea },
            a().createElement(
              "div",
              { className: w.linkMiddleTitle },
              a().createElement(
                "h3",
                { className: w.h3 },
                e.common.together.header.title
              )
            ),
            a().createElement(
              "div",
              { className: w.webtoonInfo },
              a().createElement(
                "ul",
                { className: w.webtoonList },
                e.common.together.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon_together },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t + 1),
                        a().createElement("img", {
                          src: e.src,
                          className: w.webtoonThumb,
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: w.titleBox },
                        e.title
                      ),
                      a().createElement(
                        "div",
                        { className: w.subtitleBox },
                        e.sub_text
                      ),
                      a().createElement(
                        "div",
                        { className: w.preference },
                        a().createElement("span", { class: w.divide_line }),
                        e.preference
                      )
                    )
                  );
                })
              )
            ),
            a().createElement(
              "div",
              { className: w.linkMiddleTitle },
              a().createElement(
                "h3",
                { className: w.h3 },
                a().createElement(
                  "span",
                  { className: w.span },
                  e.common.life.header.button
                ),
                e.common.life.header.title
              )
            ),
            a().createElement(
              "div",
              { className: w.webtoonInfo },
              a().createElement(
                "ul",
                { className: w.webtoonList },
                e.common.life.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t + 1),
                        a().createElement("img", {
                          src: e.src,
                          className: w.webtoonThumb,
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: w.titleBox },
                        e.title
                      ),
                      a().createElement(
                        "div",
                        { className: w.subtitleBox },
                        e.sub_text
                      )
                    )
                  );
                })
              )
            ),
            a().createElement(
              "div",
              { className: w.linkMiddleTitle },
              a().createElement(
                "h3",
                { className: w.h3 },
                e.common.new.header.title
              )
            ),
            a().createElement(
              "div",
              { className: w.webtoonInfo },
              a().createElement(
                "ul",
                { className: w.webtoonList },
                e.common.new.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t + 1),
                        a().createElement("img", {
                          src: e.src,
                          className: w.webtoonThumb,
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: w.titleBox },
                        e.title
                      ),
                      a().createElement(
                        "div",
                        { className: w.subtitleBox },
                        e.sub_text
                      )
                    )
                  );
                })
              )
            ),
            a().createElement(
              "div",
              { className: w.linkMiddleTitle },
              a().createElement(
                "h3",
                { className: w.h3 },
                e.common.weekly.header.title
              )
            ),
            a().createElement(
              "div",
              { className: w.webtoonInfo },
              a().createElement(
                "ul",
                { className: w.webtoonList },
                e.common.weekly.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t + 1),
                        a().createElement("img", {
                          src: e.src,
                          className: w.webtoonThumb,
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: w.titleBox },
                        e.title
                      ),
                      a().createElement(
                        "div",
                        { className: w.subtitleBox },
                        e.sub_text
                      )
                    )
                  );
                })
              )
            )
          );
        },
        C = function (e) {
          return a().createElement(
            "div",
            { className: "I15WjpNjbGNZEUxZVxZA" },
            a().createElement(
              "div",
              { className: "N55QFjMiz_jBc7I0fNOO" },
              a().createElement(
                "h3",
                { className: "ievetBPoEGEf9hjxPEKM" },
                e.similar.header.title
              )
            ),
            a().createElement(
              "div",
              { className: "jnjnphGFxlaDDII4cPxR" },
              a().createElement(
                "ul",
                { className: "AMOPr8Ay0JT3fTrUkUcu" },
                e.similar.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: "M1rptZoNsAWir05oPqke", key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: "xsTAj8pNoF3Bod7JTldT" },
                      a().createElement(
                        "div",
                        { className: "ZKjd7cusEBlFNPXM8k7B" },
                        a().createElement(
                          "span",
                          { className: "uO9AxqXPYx9x1QxySrP4" },
                          t + 1
                        ),
                        a().createElement("img", {
                          src: e.src,
                          className: "RDpcaRJxumalg36d2Dx9",
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: "V15jzZXuVNVKEhbGNnD2" },
                        e.title
                      ),
                      a().createElement(
                        "div",
                        { className: "jhJS72qT8qzFH3E4_7ag" },
                        e.sub_text
                      )
                    )
                  );
                })
              )
            ),
            a().createElement(
              "div",
              { className: "NJ8796DQVcvKwbc3TG_g" },
              "네이버 웹툰 2021-11-30"
            )
          );
        },
        x = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "ul",
              { className: "WxiekqtyUr7BdP58n1bP" },
              a().createElement(
                "li",
                { className: "Kt9p9SgnoPbdFvLcRySq" },
                a().createElement(
                  "a",
                  { href: e.mainImage.href, className: "Arl5d3fdDyFyzFhFffdA" },
                  a().createElement("img", {
                    src: e.mainImage.src,
                    className: "cMSuh5VzUCOn2YJVavc2",
                  })
                )
              ),
              e.smallImage.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: "rzakIO_nyAIdwEGr4Q8H", key: t },
                  a().createElement(
                    "a",
                    { href: e.href, className: "u1ySUEJkUEHH1H0Ilrcl" },
                    2 === t
                      ? a().createElement("img", {
                          src: e.src,
                          className: "EfiM7ANv1aMFljOCR9oG",
                        })
                      : a().createElement("img", {
                          src: e.src,
                          className: "VERd52ManLN8mR6JBJsf",
                        })
                  )
                );
              })
            )
          );
        },
        S = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "div",
              { className: "vP2QgGmdyFAbl3CqrG1N" },
              a().createElement(
                "a",
                { href: e.basicInfo.href, className: "uuVWS01zSxlf4Ge9eWFK" },
                a().createElement(
                  "h3",
                  { className: "wdX0IJmarE0jzckevmpk" },
                  e.basicInfo.title
                ),
                a().createElement(
                  "div",
                  { className: "sHx_H_1shk3I0VRjM8fJ" },
                  a().createElement("i", { className: "fas fa-arrow-right" })
                )
              )
            ),
            a().createElement(
              "div",
              { className: "hkPOC3cmG2So70H7eYen" },
              a().createElement(
                "span",
                { className: "dcpqblUXwdjUENZ3bA0S" },
                e.basicInfo.detail
              ),
              a().createElement(
                "a",
                {
                  href: e.basicInfo.moreDetails,
                  className: "Wj_CrBT9OoY0eL2Kuw8L",
                },
                "더보기"
              )
            )
          );
        },
        I = function (e) {
          return a().createElement(
            "div",
            { className: "mKVpa2NVZMsG58qsvqNp" },
            a().createElement(x, {
              mainImage: e.common.mainImage,
              smallImage: e.common.smallImage,
            }),
            a().createElement(S, { basicInfo: e.common.basicInfo })
          );
        },
        q = function (e) {
          return a().createElement(
            "div",
            { className: "MqKms0lrf0CEULJlxiuz" },
            a().createElement(
              "ul",
              { className: "rIgo2IAOkpGWECNYu17n" },
              e.common.imageList.map(function (t, l) {
                var c =
                  0 === l
                    ? "xZczpMtN8MvR9jLG93jy"
                    : l === e.common.imageList.length - 1
                    ? "OSm8GrXyUGa7J391Sgzb"
                    : "QwboBBqRJnQT_wkHCK3f";
                return a().createElement(
                  "li",
                  { key: l },
                  a().createElement(
                    "a",
                    { href: e.common.imgURL },
                    a().createElement("img", {
                      className: c,
                      src: t.src,
                      alt: t.alt,
                    })
                  )
                );
              })
            )
          );
        },
        W = "KCbYgkcFRSdeQtiWSrdc",
        B = "MJwqi1QXoetX0Rpc0VF4",
        F = function (e) {
          return a().createElement(
            "div",
            { className: "Ahrntx314hFVGwzHIUcc" },
            a().createElement(
              "a",
              {
                href: e.common.descriptionURL,
                className: "T8nc9ZF8_AnZx_tcNtz0",
              },
              a().createElement(
                "h3",
                { className: "WLPzHVEhwUSJMhdHX_4m" },
                e.common.title
              ),
              a().createElement(
                "div",
                { className: "CeInrxU_qvbcOJHzlNUX" },
                a().createElement("i", { className: "fas fa-arrow-right" })
              )
            ),
            a().createElement(
              "div",
              { className: "hipMqXSriBS0vAwkLauF" },
              a().createElement(
                "table",
                { className: "okPQTET8LpO47gulUQy0" },
                a().createElement(
                  "tbody",
                  null,
                  (function (e) {
                    for (
                      var t = Object.keys(e), l = [], c = 0;
                      c < t.length;
                      c++
                    )
                      e[t[c]].link
                        ? l.push(
                            a().createElement(
                              "tr",
                              { key: c },
                              a().createElement(
                                "td",
                                { className: W, key: "td" + c },
                                t[c]
                              ),
                              a().createElement(
                                "td",
                                { key: "td" + c, className: B },
                                a().createElement(
                                  "a",
                                  {
                                    href: e[t[c]].url,
                                    className: "FKBKlt3skRLtUnTzv1Dc",
                                  },
                                  e[t[c]].detail
                                )
                              )
                            )
                          )
                        : l.push(
                            a().createElement(
                              "tr",
                              { key: c },
                              a().createElement(
                                "td",
                                { className: W, key: "td" + c },
                                t[c]
                              ),
                              a().createElement(
                                "td",
                                { key: "td" + c, className: B },
                                e[t[c]].detail
                              )
                            )
                          );
                    return l;
                  })(e.common.information)
                )
              )
            ),
            a().createElement(
              "div",
              { style: { fontSize: "12pt", color: "#424242" } },
              e.common.descriptionText
            ),
            a().createElement(
              "div",
              { className: "YfpbIGwmvoybIN82ChLX" },
              a().createElement(
                "a",
                { href: e.common.place },
                a().createElement(
                  "span",
                  { className: "MrSJhfzhHQBe_Z0Ftmwo" },
                  a().createElement("i", {
                    className: "fas fa-map-marker-alt",
                    style: { color: "#06c755" },
                  }),
                  " ",
                  "지도"
                )
              ),
              a().createElement(
                "span",
                { className: "KMvcqJzTmSTTQEYF9fSY" },
                a().createElement("i", { className: "fas fa-share-square" })
              )
            )
          );
        },
        L = function (e) {
          return a().createElement(
            "div",
            { className: "AI2MWm_9lJfaJVeLEZU4" },
            a().createElement(q, { common: e.common }),
            a().createElement(F, { common: e.common })
          );
        },
        K = function (e) {
          return a().createElement(
            "div",
            {
              className: E.commonModule,
              style: { backgroundColor: e.mainCard.colorScheme.background },
            },
            a().createElement("div", {
              className: E.topBorder,
              style: { backgroundColor: e.mainCard.colorScheme.topBorder },
            }),
            a().createElement(
              "div",
              { className: E.topWrap },
              a().createElement(d, {
                title: e.mainCard.title,
                colorScheme: e.mainCard.colorScheme,
              }),
              a().createElement(k, {
                subTap: e.mainCard.subTap,
                colorScheme: e.mainCard.colorScheme,
              })
            ),
            a().createElement(
              "div",
              { className: E.contentWrap },
              "동물" === e.mainCard.title.type &&
                a().createElement(I, { common: e.mainCard.common }),
              "문화재" === e.mainCard.title.type &&
                a().createElement(L, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(T, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(C, { similar: e.mainCard.similar }),
              "웹툰" !== e.mainCard.title.type &&
                a().createElement(y, { similar: e.mainCard.similar })
            )
          );
        },
        M = "lTxjECTPG4UBmvZNHf3c",
        _ = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "a",
              { href: e.blog.href, className: "zfSMHO_y817q0EiXwMff" },
              a().createElement("img", {
                src: e.blog.src,
                className: "xPrffqq6D1SX61SZ3UB5",
              }),
              a().createElement(
                "div",
                { className: "ysRcTDfJeP1GZSPKSG_E" },
                e.blog.title
              ),
              "true" === e.blog.influencer &&
                a().createElement(
                  a().Fragment,
                  null,
                  a().createElement("div", { className: M }),
                  a().createElement(
                    "div",
                    { className: "I0xNw6ThnzgKwWBLMReQ" },
                    "인플루언서"
                  )
                ),
              a().createElement("div", { className: M }),
              a().createElement(
                "div",
                { className: "CPTRr9N6TiKd_rBNc5OG" },
                e.blog.time
              )
            ),
            a().createElement(
              "div",
              { className: "qlMiDvQ7_n15RrZWkajs" },
              a().createElement(
                "a",
                { className: "L81lakcm4Yq06KIAVwDa" },
                a().createElement("div", { className: "cCCXqieAOnphelnaskY7" })
              )
            )
          );
        },
        R = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "a",
              { href: e.body.href, className: "cpemBvARtrSEgz7lUkjA" },
              e.body.title
            ),
            a().createElement(
              "div",
              { className: "Mg9HO7I6fwc0hV44FYXG" },
              a().createElement(
                "div",
                { className: "z3pxbTcDRwvKxEjZUbrK" },
                a().createElement(
                  "a",
                  { href: e.body.href, className: "YKtqpuf_ZtMRydltQdMR" },
                  e.body.detail
                )
              ),
              a().createElement(
                "a",
                { href: e.body.href, className: "lCq_k39ZKfwQG8trWAtQ" },
                a().createElement("img", {
                  src: e.body.src,
                  className: "jF9hBfIOS2OK66ZrtT45",
                })
              )
            )
          );
        },
        U = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            0 !== e.tags.list.length &&
              a().createElement(
                "div",
                { className: "OlQTLqRbi1QIHzlwyrHs" },
                e.tags.list.map(function (e, t) {
                  return a().createElement(
                    "a",
                    { href: e.href, className: "Tg9q3QdcdPc23U3UZ661", key: t },
                    "#",
                    e.title
                  );
                })
              )
          );
        },
        P = function (e) {
          return a().createElement(
            "div",
            { className: "Hd2UNEr0aG2tf8bM6xJ2" },
            a().createElement(
              "a",
              { href: e.link.href, className: "eKCyJ71Kqd828donc8iP" },
              e.link.text
            )
          );
        },
        z = function (e) {
          return a().createElement(
            "div",
            { className: "yja0_WgnvkZy0Qfj5Fmx" },
            a().createElement(
              "div",
              { className: "XLD1f730RBaUCRhhHcC0" },
              a().createElement(
                "h2",
                { className: "MRmG8a87h4JafjtzI5hr" },
                "VIEW"
              )
            ),
            a().createElement(
              "ul",
              { className: "VsosLSygvvHF80EcKTmx" },
              e.view.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: "PN7t8uWKg24MvP9DZGtF", key: t },
                  a().createElement(
                    "div",
                    { className: "IiW4X4iQJ9DRfzQSxh7O" },
                    a().createElement(_, { blog: e.blog }),
                    a().createElement(R, { body: e.body })
                  ),
                  a().createElement(U, { tags: e.tags }),
                  a().createElement(P, { link: e.link })
                );
              })
            )
          );
        },
        H = {
          container: "B8tU4obS226xap_otu8o",
          title: "O1kfEVJGox2AkhVXB4J1",
          h2: "CZ1coumT_8ij2EJ2i1Fj",
          ul: "ioJKCs6sameAUuZ1HB7M",
          li: "U58yQNi7_CIAPC6jA5Gi",
          totalTagArea: "stqXkY1eankyot5DWcNg",
          totalLinkArea: "z6AbV1L9PqL9JcqKMQYP",
        },
        j = "ce3351zEWCUbaw2YTIkL",
        Q = function (e) {
          return a().createElement(
            "div",
            { className: "IOV4d5nQqNMXPVTnowfw" },
            a().createElement(
              "a",
              {
                href: e.totalWrap.article.href,
                className: "uCF254pie096DkXTVLsU",
              },
              a().createElement("img", {
                src: e.totalWrap.article.src,
                className: j,
              }),
              a().createElement(
                "div",
                { className: "F1OKZgnl18ldhVuSvGLn" },
                e.totalWrap.article.title
              ),
              a().createElement("div", { className: "XBTWlOCtipqwm6i_EMCR" }),
              a().createElement(
                "div",
                { className: "IbRTgo5LUgUUgLKPB9bw" },
                e.totalWrap.article.time
              )
            ),
            a().createElement(
              "div",
              { className: "wx5D1vH1xRcLDVlLBV_s" },
              a().createElement(
                "a",
                { className: "KysQL0ioQUlxAIhBQhpg" },
                a().createElement("div", { className: "pPKOU2sf99vZ3F7FKiC1" })
              )
            ),
            a().createElement(
              "a",
              {
                href: e.totalWrap.text.href,
                className: "rUnsVqobG_jfHH7Sqwka",
              },
              e.totalWrap.text.title
            ),
            a().createElement(
              "div",
              { className: "xJg1YBeIxO0I0GXIFZWE" },
              a().createElement(
                "div",
                { className: "UE64ATcyuKIaUQoix9ct" },
                a().createElement(
                  "a",
                  {
                    href: e.totalWrap.text.href,
                    className: "HtQrL85QmKvGRtF0EAkk",
                  },
                  e.totalWrap.text.detail
                )
              ),
              "" !== e.totalWrap.text.src &&
                a().createElement(
                  "a",
                  {
                    href: e.totalWrap.text.href,
                    className: "qCHriz6AKJuCIPJkFQXb",
                  },
                  a().createElement("img", {
                    src: e.totalWrap.text.src,
                    className: j,
                  })
                )
            )
          );
        },
        G = function (e) {
          return a().createElement(
            "div",
            { className: H.container },
            a().createElement(
              "div",
              { className: H.title },
              a().createElement("h2", { className: H.h2 }, e.news.header.title)
            ),
            a().createElement(
              "ul",
              { className: H.ul },
              e.news.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: H.li, key: t },
                  a().createElement(Q, { totalWrap: e.totalWrap })
                );
              })
            ),
            a().createElement(
              "div",
              { className: H.newsButton },
              e.news.button.text
            )
          );
        };
      var X = t(860),
        A = t(986),
        J = (t(689), t(582)),
        O = t(684),
        V = X.Router(),
        D = X();
      D.use(J()),
        D.use(A.urlencoded({ extended: !1 })),
        D.use(A.json()),
        D.use("/", V),
        V.post("/", function (e, t) {
          var l;
          t.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n<script src=\'https://kit.fontawesome.com/a076d05399.js\' crossorigin=\'anonymous\'></script>\n        <script\n          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n          data-auto-a11y="true"\n        ></script>\n        </head>\n        <body>\n            '.concat(
              O.renderToString(
                ((l = e.body),
                a().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  a().createElement(o, null),
                  a().createElement(
                    "div",
                    { className: "lwMSkhbL51TI_MbpDTZQ" },
                    a().createElement(K, { mainCard: l[0].mainCard }),
                    "동물" === l[0].mainCard.title.type &&
                      a().createElement(z, { view: l[0].view }),
                    "동물" === l[0].mainCard.title.type &&
                      a().createElement(G, { news: l[0].news })
                  )
                ))
              ),
              "\n        </body>\n    </html>\n"
            )
          );
        }),
        D.listen(4e3, function () {
          console.log(
            "Render Server listening at http://localhost:".concat(4e3)
          );
        });
    })();
})();
