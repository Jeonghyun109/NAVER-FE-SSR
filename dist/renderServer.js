(() => {
  "use strict";
  var e = {
      986: (e) => {
        e.exports = require("body-parser");
      },
      771: (e) => {
        e.exports = require("config");
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
    var r = a[l];
    if (void 0 !== r) return r.exports;
    var n = (a[l] = { exports: {} });
    return e[l](n, n.exports, t), n.exports;
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
        r = require("@mui/icons-material/Cancel");
      var n = t.n(r);
      const c = require("@mui/icons-material/MicNone");
      var m = t.n(c);
      const s = require("@mui/icons-material/Search");
      var i = t.n(s);
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
              a().createElement(n(), {
                className: "CvWCFkpm_Gfk1MrGVe1s",
                sx: { fontSize: 25 },
              }),
              a().createElement(m(), {
                className: "Rg0WwUXCTpI6XtH0HddY",
                sx: { fontSize: 40 },
              }),
              a().createElement(i(), {
                className: "txiw8yXn4NiOoG9GdPCJ",
                sx: { fontSize: 40 },
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
        u = "zqKn3ms1EpXpaqiFHl16",
        f = function (e) {
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
              a().createElement("span", { className: u }, e.title.type),
              a().createElement("span", { className: "rE_2CjSK6Au6HP7CFwK6" }),
              a().createElement("span", { className: u }, e.title.subName)
            )
          );
        },
        d = "ZD5uPrErEIoI8Czs6osS",
        N = "UpenaO3fzWKfrRWhnXOR",
        h = "FkbXTj3ln4sHSSPj3L2z",
        p = "F6JlJdKozDTguLRNhEHX",
        g = "fcLye7hIRyUBIsHOYXmW",
        v = "HOW7s48xMS79rdeewPcr",
        b = function (e) {
          return a().createElement(
            "div",
            { className: "AKvpsA5VvILGVv40MapP" },
            "last" === e.subTap.mainTap.order &&
              a().createElement(
                "ul",
                { className: d },
                a().createElement("li", { className: "s5s6dHhPWh4w9zpGH9vP" }),
                e.subTap.list.map(function (t, l) {
                  return a().createElement(
                    "li",
                    { className: N, key: l },
                    a().createElement(
                      "a",
                      {
                        href: t.href,
                        className: g,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        a().createElement("span", {
                          className: v,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      a().createElement("span", { className: p }, t.title)
                    )
                  );
                }),
                a().createElement(
                  "li",
                  { className: N },
                  a().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: h,
                      style: { backgroundColor: e.colorScheme.subTapColor },
                    },
                    a().createElement(
                      "span",
                      { className: p },
                      e.subTap.mainTap.title
                    )
                  )
                )
              ),
            "first" === e.subTap.mainTap.order &&
              a().createElement(
                "ul",
                { className: d },
                a().createElement(
                  "li",
                  { className: N },
                  a().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: h,
                      style: { backgroundColor: e.colorScheme.subTapColor },
                    },
                    a().createElement(
                      "span",
                      { className: p },
                      e.subTap.mainTap.title
                    )
                  )
                ),
                e.subTap.list.map(function (t, l) {
                  return a().createElement(
                    "li",
                    { className: N, key: l },
                    a().createElement(
                      "a",
                      {
                        href: t.href,
                        className: g,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        a().createElement("span", {
                          className: v,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      a().createElement("span", { className: p }, t.title)
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
        w = function (e) {
          return a().createElement(
            "div",
            { className: "kctY_Gh1I_5CetLJmfOA" },
            a().createElement(
              "span",
              { className: "GFwtfSyIcJ2uBMqmooX8" },
              e.id + 1
            ),
            "none" !== e.thumbnail.same &&
              "" !== e.thumbnail.same &&
              a().createElement(
                "span",
                { className: "uvatixGFU9n7dnWT0pS9" },
                e.thumbnail.same
              ),
            a().createElement("img", {
              src: e.thumbnail.src,
              className: "ymxPYeh6ons4jbJmxpYw",
            })
          );
        },
        x = function (e) {
          return a().createElement(
            "div",
            null,
            a().createElement(
              "li",
              { className: "viPC45wUUT7f7wJVFPcQ", key: e.id },
              a().createElement(
                "a",
                { href: e.webtoon.href, className: "q9HpM3oK8cToynXEI9HM" },
                a().createElement(w, { thumbnail: e.webtoon, id: e.id }),
                a().createElement(
                  "div",
                  { className: "XiTNubUNlHVSQU88xCDi" },
                  a().createElement(
                    "div",
                    { className: "tTOJrn_rhCsUE1UuFlvk" },
                    e.webtoon.title
                  ),
                  a().createElement(
                    "div",
                    { className: "kSPqCzR_2Jm8v9gyfz3g" },
                    e.webtoon.sub_text
                  )
                ),
                "" !== e.webtoon.preference &&
                  a().createElement(
                    "div",
                    null,
                    a().createElement("hr", {
                      className: "Zwx_I2u2WdTbYd3HeaRn",
                    }),
                    a().createElement(
                      "div",
                      { className: "GHoX2ZVR_JjnMYTM7iNy" },
                      e.webtoon.preference
                    )
                  )
              )
            )
          );
        },
        k = require("@mui/icons-material/ArrowForward");
      var S = t.n(k);
      const C = function (e) {
          return a().createElement(
            "div",
            null,
            a().createElement(
              "li",
              { className: "uPb1cdhpligCyFuvtA7Q" },
              a().createElement(
                "a",
                { href: e.more.href, className: "DaT57tWciH1srSvuk5IS" },
                a().createElement(
                  "span",
                  { className: "bk9xqTkPt_qdGP2SrzI_" },
                  a().createElement(S(), { className: "MVD9gFMgWZVAw7TtakmA" }),
                  a().createElement(
                    "span",
                    { className: "PY87YT3qkggZrDk9fNA9" },
                    e.more.text1,
                    a().createElement("br", null),
                    e.more.text2
                  )
                )
              )
            )
          );
        },
        T = function (e) {
          return a().createElement(
            "div",
            { className: "YIDB6c1_0UceDa5lseVj" },
            a().createElement(
              "ul",
              { className: "G9rjOFeiZd03FuyMwp0B" },
              e.webtoon.list.map(function (e, t) {
                return a().createElement(x, { webtoon: e, id: t });
              }),
              "" !== e.webtoon.more.href &&
                a().createElement(C, { more: e.webtoon.more })
            )
          );
        },
        I = function (e) {
          return a().createElement(
            "div",
            { className: "j9LNCKid3In_AbXFpTVJ" },
            a().createElement(
              "h3",
              { className: "GRko11WACw8R7Xtch3OC" },
              "" !== e.titleInfo.button &&
                a().createElement(
                  "span",
                  { className: "gAq6d1SKw0bZB9bjqQ0_" },
                  e.titleInfo.button
                ),
              e.titleInfo.title
            )
          );
        },
        q = function (e) {
          return a().createElement(
            "div",
            { className: "s5orwz_4geOSDxrgcgfz" },
            a().createElement(I, { titleInfo: e.common.together.header }),
            a().createElement(T, { webtoon: e.common.together }),
            a().createElement(I, { titleInfo: e.common.life.header }),
            a().createElement(T, { webtoon: e.common.life }),
            a().createElement(I, { titleInfo: e.common.new.header }),
            a().createElement(T, { webtoon: e.common.new }),
            a().createElement(I, { titleInfo: e.common.weekly.header }),
            a().createElement(T, { webtoon: e.common.weekly })
          );
        },
        F = require("@mui/icons-material/ErrorOutline");
      var R = t.n(F);
      const K = function (e) {
          return a().createElement(
            "div",
            { className: "ncFkgqRp3LFD2PLDEq2w" },
            a().createElement(I, { titleInfo: e.similar.header }),
            a().createElement(T, { webtoon: e.similar }),
            a().createElement(
              "div",
              { className: "R1wNawsdO4nTrcBztfUo" },
              a().createElement("span", null, e.similar.text),
              a().createElement(R(), {
                className: "py3HpTZ2zM5mShMhRkn4",
                sx: { color: "#0068c3", fontSize: "18px" },
              })
            )
          );
        },
        W = function (e) {
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
        L = function (e) {
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
        P = function (e) {
          return a().createElement(
            "div",
            { className: "mKVpa2NVZMsG58qsvqNp" },
            a().createElement(W, {
              mainImage: e.common.mainImage,
              smallImage: e.common.smallImage,
            }),
            a().createElement(L, { basicInfo: e.common.basicInfo })
          );
        },
        M = function (e) {
          return a().createElement(
            "div",
            { className: "MqKms0lrf0CEULJlxiuz" },
            a().createElement(
              "ul",
              { className: "rIgo2IAOkpGWECNYu17n" },
              e.common.imageList.map(function (t, l) {
                var r =
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
                      className: r,
                      src: t.src,
                      alt: t.alt,
                    })
                  )
                );
              })
            )
          );
        },
        z = "MJwqi1QXoetX0Rpc0VF4",
        B = function (e) {
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
                  Object.keys(e.common.information).map(function (t, l) {
                    return a().createElement(
                      "tr",
                      { key: l },
                      a().createElement(
                        "td",
                        { className: "KCbYgkcFRSdeQtiWSrdc", key: l },
                        t
                      ),
                      e.common.information[t].link
                        ? a().createElement(
                            "td",
                            { key: "td" + l, className: z },
                            a().createElement(
                              "a",
                              {
                                href: e.common.information[t].url,
                                className: "FKBKlt3skRLtUnTzv1Dc",
                              },
                              e.common.information[t].detail
                            )
                          )
                        : a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                              "td",
                              { key: "td" + l, className: z },
                              e.common.information[t].detail
                            )
                          )
                    );
                  })
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
        G = function (e) {
          return a().createElement(
            "div",
            { className: "AI2MWm_9lJfaJVeLEZU4" },
            a().createElement(M, { common: e.common }),
            a().createElement(B, { common: e.common })
          );
        },
        _ = function (e) {
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
              a().createElement(f, {
                title: e.mainCard.title,
                colorScheme: e.mainCard.colorScheme,
              }),
              a().createElement(b, {
                subTap: e.mainCard.subTap,
                colorScheme: e.mainCard.colorScheme,
              })
            ),
            a().createElement(
              "div",
              { className: E.contentWrap },
              "동물" === e.mainCard.title.type &&
                a().createElement(P, { common: e.mainCard.common }),
              "문화재" === e.mainCard.title.type &&
                a().createElement(G, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(q, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(K, { similar: e.mainCard.similar }),
              "웹툰" !== e.mainCard.title.type &&
                a().createElement(y, { similar: e.mainCard.similar })
            )
          );
        },
        Q = "lTxjECTPG4UBmvZNHf3c",
        U = function (e) {
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
                  a().createElement("div", { className: Q }),
                  a().createElement(
                    "div",
                    { className: "I0xNw6ThnzgKwWBLMReQ" },
                    "인플루언서"
                  )
                ),
              a().createElement("div", { className: Q }),
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
        A = function (e) {
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
        H = function (e) {
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
        O = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            0 !== Object.keys(e.link).length &&
              a().createElement(
                "div",
                { className: "Hd2UNEr0aG2tf8bM6xJ2" },
                a().createElement(
                  "a",
                  { href: e.link.href, className: "eKCyJ71Kqd828donc8iP" },
                  e.link.text
                )
              )
          );
        },
        V = function (e) {
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
                    a().createElement(U, { blog: e.blog }),
                    a().createElement(A, { body: e.body })
                  ),
                  a().createElement(H, { tags: e.tags }),
                  a().createElement(O, { link: e.link })
                );
              })
            )
          );
        },
        X = "ce3351zEWCUbaw2YTIkL",
        Z = function (e) {
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
                className: X,
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
              a().createElement(
                "a",
                {
                  href: e.totalWrap.text.href,
                  className: "qCHriz6AKJuCIPJkFQXb",
                },
                a().createElement("img", {
                  src: e.totalWrap.text.src,
                  className: X,
                })
              )
            )
          );
        },
        J = require("@mui/icons-material/Circle");
      var j = t.n(J);
      const D = function (e) {
          return a().createElement(
            "div",
            { className: "B8tU4obS226xap_otu8o" },
            a().createElement(
              "div",
              { className: "Os5WsD0J7Oscom_hMz1W" },
              a().createElement(
                "h2",
                { className: "O1kfEVJGox2AkhVXB4J1" },
                e.news.header.title
              ),
              a().createElement(
                "div",
                { className: "guyzdnbJWyaobayiUS7x" },
                a().createElement(
                  "span",
                  { className: "jH8GfKEy7ZAhvfcCmol4" },
                  a().createElement(j(), { className: "epdYTD8PxSyjSudPbA9A" }),
                  e.news.header.condition
                ),
                a().createElement(
                  "a",
                  {
                    href: e.news.header.subcondition.href,
                    className: "SYZoB19p5lwHoqQtYItd",
                  },
                  a().createElement(j(), { className: "GMddK6QDOx6NSiQAXdLV" }),
                  e.news.header.subcondition.text
                )
              )
            ),
            a().createElement(
              "ul",
              { className: "ioJKCs6sameAUuZ1HB7M" },
              e.news.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: "U58yQNi7_CIAPC6jA5Gi", key: t },
                  a().createElement(Z, { totalWrap: e.totalWrap })
                );
              })
            ),
            a().createElement(
              "a",
              { href: e.news.newsLink.href, style: { textDecoration: "None" } },
              a().createElement(
                "div",
                { className: "esZDryZehYAfP5h8GFS3" },
                e.news.newsLink.text,
                a().createElement("i", { className: "fas fa-arrow-right" })
              )
            )
          );
        },
        Y = "snSvrP_fhpixsUTCfpn_",
        $ = function (e) {
          return a().createElement(
            "ul",
            { className: "c8f3vgqoRT5NdXV5PMQs" },
            e.tabList.map(function (e, t) {
              return a().createElement(
                "li",
                { key: t },
                0 === t
                  ? a().createElement(
                      "a",
                      { className: Y, key: t },
                      a().createElement(
                        "div",
                        { className: "TJVQPIH0ilV25kGPXx4o" },
                        a().createElement(
                          "span",
                          { className: "v6MLEfNdqWAjlZGzkkoj" },
                          e.title
                        ),
                        " ",
                        a().createElement(
                          "span",
                          { className: "SCH2aOclrvYlndtLl6xQ" },
                          e.subtitle
                        )
                      )
                    )
                  : a().createElement(
                      "a",
                      { href: e.url, className: Y, key: t },
                      a().createElement(
                        "div",
                        { className: "Bxtzd_vVWQKE9PmADYtn" },
                        a().createElement("img", {
                          src: e.image,
                          className: "wC1KBy9RsoumJQpa6BwC",
                          alt: t,
                        }),
                        a().createElement(
                          "span",
                          { className: "DDS0MqIHwig5vZ6g3A7E" },
                          e.title
                        ),
                        " ",
                        a().createElement(
                          "span",
                          { className: "imPrGM_YK6QlrJFnQm5R" },
                          e.subtitle
                        )
                      )
                    )
              );
            })
          );
        },
        ee = "f4xw5EevA5ZPLQC4I8ET",
        ae = "SFyZOiehaHmsk_x43fu3",
        te = function (e) {
          return a().createElement(
            "div",
            { className: "wCF_q_km6bUDq0OehARF" },
            "Gold" === e.influencer.thumbnail.highlighted &&
              a().createElement(
                a().Fragment,
                null,
                a().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  a().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: ee,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid gold" },
                  })
                ),
                a().createElement(
                  "div",
                  { className: ae, style: { backgroundColor: "gold" } },
                  a().createElement("i", { className: "fas fa-crown" })
                )
              ),
            "Silver" === e.influencer.thumbnail.highlighted &&
              a().createElement(
                a().Fragment,
                null,
                a().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  a().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: ee,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid silver" },
                  })
                ),
                a().createElement(
                  "div",
                  { className: ae, style: { backgroundColor: "silver" } },
                  a().createElement("i", { className: "fas fa-crown" })
                )
              ),
            "Bronze" === e.influencer.thumbnail.highlighted &&
              a().createElement(
                a().Fragment,
                null,
                a().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  a().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: ee,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid #CD7F32" },
                  })
                ),
                a().createElement(
                  "div",
                  { className: ae, style: { backgroundColor: "#CD7F32" } },
                  a().createElement("i", { className: "fas fa-crown" })
                )
              ),
            "None" === e.influencer.thumbnail.highlighted &&
              a().createElement(
                a().Fragment,
                null,
                a().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  a().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: ee,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid white" },
                  })
                )
              )
          );
        },
        le = require("@mui/icons-material/FiberManualRecord");
      var re = t.n(le);
      const ne = function (e) {
          return a().createElement(
            "div",
            { className: "oc5_o8pxFLxI8Z8xJtqR" },
            a().createElement(
              "div",
              {
                className: "G9QaxRNIKUIBTaaKBYSB",
                style: { color: e.colorScheme.main },
              },
              e.influencer.keywords.map(function (t, l) {
                return a().createElement(
                  "div",
                  { key: l },
                  0 === l
                    ? a().createElement(
                        "div",
                        null,
                        "Blog" === t.type &&
                          a().createElement("i", {
                            className: "fas fa-stop",
                            style: { marginRight: "5px" },
                          }),
                        "YouTube" === t.type &&
                          a().createElement("i", {
                            className: "fab fa-youtube",
                            style: { marginRight: "5px" },
                          }),
                        "Company" === t.type &&
                          a().createElement("i", {
                            className: "fas fa-briefcase",
                            style: { marginRight: "5px" },
                          }),
                        a().createElement("b", null, t.title),
                        a().createElement(re(), {
                          sx: {
                            color: e.colorScheme.border,
                            fontSize: "4pt",
                            marginBottom: "2.5pt",
                            marginLeft: "5px",
                            marginRight: "5px",
                          },
                        })
                      )
                    : a().createElement(
                        "div",
                        null,
                        a().createElement("span", { key: l }, t.value),
                        l !== e.influencer.keywords.length - 1 &&
                          a().createElement(re(), {
                            sx: {
                              color: e.colorScheme.border,
                              fontSize: "4pt",
                              marginBottom: "2.5pt",
                              marginLeft: "5px",
                              marginRight: "5px",
                            },
                          })
                      )
                );
              })
            ),
            a().createElement(
              "div",
              {
                className: "Vkoy9BcVod1WrIPGBmfd",
                style: { borderColor: e.colorScheme.border },
              },
              a().createElement("i", {
                className: "fas fa-chevron-down",
                style: { color: e.colorScheme.main },
              })
            )
          );
        },
        ce = function (e) {
          return a().createElement(
            "div",
            { className: "zM0P8x37INmd5SMtTge8" },
            a().createElement(
              "ul",
              { className: "W4Y50_WKRrW6r7e9NO0D" },
              e.images.map(function (t, l) {
                var r =
                  0 === l
                    ? "yBc434N4AZpEGjKdRvQP"
                    : l === e.images.length - 1
                    ? "SBejqJ92woj7wqUE9gVf"
                    : "ICyQYcXvLgmj6ZjglyW1";
                return a().createElement(
                  "li",
                  { key: l },
                  a().createElement(
                    "a",
                    { href: e.influencer.link },
                    a().createElement("img", {
                      src: t,
                      className: r,
                      alt: "thumbnail",
                    })
                  )
                );
              })
            )
          );
        },
        me = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            e.influencers.map(function (t) {
              return a().createElement(
                "div",
                { className: "DyyyG_LI4K_gzTwkGumt" },
                a().createElement(
                  "div",
                  { className: "lozlf1dFAIxyOWj5ZAK0" },
                  a().createElement(te, { influencer: t }),
                  a().createElement(
                    "div",
                    {
                      className: "GjYMYaJuVTfpfbWSgAP_",
                      style: {
                        color: e.colorScheme.main,
                        borderColor: e.colorScheme.border,
                      },
                    },
                    a().createElement("i", {
                      className: "far fa-smile",
                      style: {
                        marginRight: "5px",
                        fontSize: "18px",
                        fontWeight: "300",
                      },
                    }),
                    " ",
                    "팬하기"
                  ),
                  a().createElement(
                    "div",
                    { className: "ODpXVwwA13GaqJKCrBmi" },
                    a().createElement(
                      "div",
                      { className: "NfoW9ILkzxfYLV05MqCd" },
                      a().createElement(
                        "a",
                        {
                          href: t.thumbnail.url,
                          className: "xMkYezUAZcCoTnv3BoHx",
                        },
                        t.title
                      ),
                      a().createElement(
                        "span",
                        { className: "LO1GoketnEUwBz9Mr8_3" },
                        t.subtitles.fans
                      )
                    ),
                    a().createElement(
                      "div",
                      { className: "cMKcWwLmE_N0wyVLSK2S" },
                      a().createElement(
                        "span",
                        { style: { color: e.colorScheme.main } },
                        t.subtitles.title
                      ),
                      a().createElement("span", {
                        className: "ZlaamkcByLlI7EX3kZe8",
                      }),
                      t.subtitles.expertise
                    )
                  )
                ),
                a().createElement(ne, {
                  colorScheme: e.colorScheme,
                  influencer: t,
                }),
                a().createElement(ce, { influencer: t, images: t.images }),
                a().createElement(
                  "div",
                  { className: "qKy9gxKBT8iz6Zzlzytw" },
                  a().createElement(
                    "a",
                    { href: t.link, className: "PYw_KeCs61CjGOpxLCw1" },
                    t.description.title
                  ),
                  a().createElement(
                    "a",
                    { href: t.link, className: "q61BE74JeDObiTgSciAv" },
                    t.description.descriptionText
                  ),
                  a().createElement(
                    "div",
                    { className: "v3wYRc0kzx0B0PINmNTU" },
                    t.description.date
                  )
                ),
                a().createElement(
                  "a",
                  {
                    href: t.description.moreUrl,
                    style: { textDecoration: "none" },
                  },
                  a().createElement(
                    "div",
                    { className: "EtRtlXwIy18ydIX62R_j" },
                    a().createElement("i", {
                      className: "fas fa-link",
                      style: { marginRight: "10px" },
                    }),
                    a().createElement("b", null, t.title),
                    t.description.moreText,
                    a().createElement(
                      "span",
                      { className: "WKFQM7pUCJVvIkhBFx7f" },
                      a().createElement("i", {
                        className: "fas fa-chevron-right",
                      })
                    )
                  )
                )
              );
            })
          );
        },
        se = function (e) {
          return a().createElement(
            "div",
            { className: "ofPvNv_fXlE3RlxBpMwA" },
            a().createElement(
              "div",
              { className: "Ww4bR3TmxoTWMBOztVgA" },
              a().createElement(
                "h2",
                { className: "PtgqV5whDdiYKEJqEMTu" },
                "인플루언서",
                a().createElement(R(), {
                  className: "XV8gGngcgeZPo6Zx4Sb5",
                  sx: { color: "#0068c3", fontSize: "18px" },
                })
              ),
              a().createElement(
                "div",
                { className: "y3zRy1FvP1r9tgh3XeiE" },
                a().createElement(
                  "a",
                  {
                    href: "https://in.naver.com/",
                    className: "tCPDaIFhgIfkc3qQNEMK",
                  },
                  "서비스 홈 바로가기"
                )
              )
            ),
            a().createElement($, { tabList: e.influencer["tab-lists"] }),
            a().createElement(me, {
              influencers: e.influencer.influencers,
              colorScheme: e.influencer.colorScheme,
            }),
            a().createElement(
              "a",
              {
                href: e.influencer.influencerLink,
                style: { textDecoration: "None" },
              },
              a().createElement(
                "div",
                { className: "bYLKByF1iqniq6n6Aym8" },
                "인플루언서 더보기 ",
                a().createElement("i", { className: "fas fa-arrow-right" })
              )
            )
          );
        },
        ie = function (e) {
          return a().createElement(
            "div",
            { className: "VwKNETIQcuzxVQs6hKMl" },
            a().createElement(
              "div",
              { className: "X10gHE18bRpnggHuhQra" },
              a().createElement(
                "div",
                { className: "F0MRqxaGKSfNWLOWYlv0" },
                e.error.title
              ),
              a().createElement(
                "ul",
                { className: "oUTAQDP2pA4Pdno0jJvW" },
                a().createElement("li", null, e.error.text1),
                a().createElement("li", null, e.error.text2)
              )
            )
          );
        };
      var oe = t(860),
        Ee = t(986),
        ue = (t(689), t(582)),
        fe = t(771),
        de = t(684),
        Ne = fe.get("serverAddress"),
        he = fe.get("renderServerPort"),
        pe = oe.Router(),
        ge = oe();
      ge.use(ue()),
        ge.use(Ee.urlencoded({ extended: !1 })),
        ge.use(Ee.json()),
        ge.use("/", pe),
        pe.post("/", function (e, t) {
          var l;
          t.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n        <script src=\'https://kit.fontawesome.com/a076d05399.js\' crossorigin=\'anonymous\'></script>\n        <link rel="preconnect" href="https://fonts.googleapis.com">\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">\n        <script\n          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n          data-auto-a11y="true"\n        ></script>\n        </head>\n        <body>\n            '.concat(
              de.renderToString(
                ((l = e.body),
                a().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  a().createElement(o, null),
                  a().createElement(
                    "div",
                    { className: "lwMSkhbL51TI_MbpDTZQ" },
                    l[0].order.map(function (e, t) {
                      return a().createElement(
                        "div",
                        { key: t },
                        "mainCard" === e &&
                          a().createElement(_, { mainCard: l[0].mainCard }),
                        "influencers" === e &&
                          a().createElement(se, {
                            influencer: l[0].influencer,
                          }),
                        "view" === e &&
                          a().createElement(V, { view: l[0].view }),
                        "news" === e &&
                          a().createElement(D, { news: l[0].news }),
                        "error" === e &&
                          a().createElement(ie, { error: l[0].content })
                      );
                    })
                  )
                ))
              ),
              "\n        </body>\n    </html>\n"
            )
          );
        }),
        ge.listen(he, function () {
          console.log("Render Server listening at ".concat(Ne, ":").concat(he));
        });
    })();
})();
