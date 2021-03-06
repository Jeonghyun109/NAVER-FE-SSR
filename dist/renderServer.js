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
                defaultValue: e.keyword,
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
        E = "zqKn3ms1EpXpaqiFHl16",
        u = "i6FQaKGV1z6FfHYcGW71",
        d = require("@mui/icons-material/MoreVert");
      var f = t.n(d);
      const N = function (e) {
        return a().createElement(
          "span",
          { className: "AXFg08RuG4hRXDldMa8i" },
          a().createElement(
            "div",
            { className: "MQF0aWez7_V5hRwamw0V" },
            a().createElement("input", {
              type: "checkbox",
              className: "I8rIEiy46tKFggzexx_o",
              id: e.id,
            }),
            a().createElement(
              "div",
              { className: "peC6RO6lSf4yWpZwTfTh" },
              a().createElement("label", {
                for: e.id,
                className: "If7BXkk_A6mKwIfNn21k",
              }),
              a().createElement(
                "div",
                { className: "QXCFTsbZ0G1AgjoCAsJk" },
                a().createElement(
                  "div",
                  { className: "VB76yMq4Uo8uUSCO4WGN" },
                  "Keep에 저장 ",
                  a().createElement("i", { className: "far fa-bookmark " + u })
                ),
                a().createElement(
                  "div",
                  { className: "hmLRnenGO1Wn22eFVD3Q" },
                  "Keep 바로가기",
                  " ",
                  a().createElement("i", {
                    className: "fas fa-chevron-right " + u,
                  })
                )
              )
            ),
            a().createElement(
              "label",
              { for: e.id, className: "t90PJ1aT8fKkztqMNAHH" },
              a().createElement(f(), {
                sx: {
                  fontSize: 30,
                  color: e.color.circleColor,
                  "&:hover": { color: e.color.circleHover },
                },
              })
            )
          )
        );
      };
      function h(e) {
        return a().createElement(
          "div",
          { className: "w8v97tusKPqi0f50smB4" },
          a().createElement(
            "h2",
            { className: "qQxVniB5CMxBq70RkIZ1" },
            e.title.name
          ),
          a().createElement(N, { color: e.colorScheme, id: "clickKeep" }),
          a().createElement(
            "div",
            {
              className: "spl1Tmt2bzFQ_o9HGiHW",
              style: { color: e.colorScheme.subTitle },
            },
            a().createElement("span", { className: E }, e.title.type),
            a().createElement("span", {
              className: "rE_2CjSK6Au6HP7CFwK6",
              style: { backgroundColor: e.colorScheme.subTapBar },
            }),
            a().createElement("span", { className: E }, e.title.subName)
          )
        );
      }
      const p = "ZD5uPrErEIoI8Czs6osS",
        b = "UpenaO3fzWKfrRWhnXOR",
        g = "FkbXTj3ln4sHSSPj3L2z",
        v = "F6JlJdKozDTguLRNhEHX",
        y = "fcLye7hIRyUBIsHOYXmW",
        k = "HOW7s48xMS79rdeewPcr",
        w = function (e) {
          return a().createElement(
            "div",
            { className: "AKvpsA5VvILGVv40MapP" },
            "last" === e.subTap.mainTap.order &&
              a().createElement(
                "ul",
                { className: p },
                a().createElement("li", { className: "s5s6dHhPWh4w9zpGH9vP" }),
                e.subTap.list.map(function (t, l) {
                  return a().createElement(
                    "li",
                    { className: b, key: l },
                    a().createElement(
                      "a",
                      {
                        href: t.href,
                        className: y,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        a().createElement("span", {
                          className: k,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      a().createElement("span", { className: v }, t.title)
                    )
                  );
                }),
                a().createElement(
                  "li",
                  { className: b },
                  a().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: g,
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
                { className: p },
                a().createElement(
                  "li",
                  { className: b },
                  a().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: g,
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
                    { className: b, key: l },
                    a().createElement(
                      "a",
                      {
                        href: t.href,
                        className: y,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        a().createElement("span", {
                          className: k,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      a().createElement("span", { className: v }, t.title)
                    )
                  );
                })
              )
          );
        },
        x = function (e) {
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
                    ),
                    e.sub_text
                      ? a().createElement(
                          "div",
                          { className: "TKqCA7U0RCbd_Vke8i9U" },
                          e.sub_text
                        )
                      : a().createElement(a().Fragment, null)
                  );
                })
              )
            )
          );
        },
        S = function (e) {
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
        C = function (e) {
          return a().createElement(
            "div",
            null,
            a().createElement(
              "li",
              { className: "viPC45wUUT7f7wJVFPcQ", key: e.id },
              a().createElement(
                "a",
                { href: e.webtoon.href, className: "q9HpM3oK8cToynXEI9HM" },
                a().createElement(S, { thumbnail: e.webtoon, id: e.id }),
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
        I = require("@mui/icons-material/ArrowForward");
      var T = t.n(I);
      const F = function (e) {
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
                  a().createElement(T(), { className: "MVD9gFMgWZVAw7TtakmA" }),
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
        L = function (e) {
          return a().createElement(
            "div",
            { className: "YIDB6c1_0UceDa5lseVj" },
            a().createElement(
              "ul",
              { className: "G9rjOFeiZd03FuyMwp0B" },
              e.webtoon.list.map(function (e, t) {
                return a().createElement(C, { webtoon: e, id: t });
              }),
              "" !== e.webtoon.more.href &&
                a().createElement(F, { more: e.webtoon.more })
            )
          );
        },
        q = function (e) {
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
        R = function (e) {
          return a().createElement(
            "div",
            { className: "s5orwz_4geOSDxrgcgfz" },
            a().createElement(q, { titleInfo: e.common.together.header }),
            a().createElement(L, { webtoon: e.common.together }),
            a().createElement(q, { titleInfo: e.common.life.header }),
            a().createElement(L, { webtoon: e.common.life }),
            a().createElement(q, { titleInfo: e.common.new.header }),
            a().createElement(L, { webtoon: e.common.new }),
            a().createElement(q, { titleInfo: e.common.weekly.header }),
            a().createElement(L, { webtoon: e.common.weekly })
          );
        },
        U = require("@mui/icons-material/ErrorOutline");
      var K = t.n(U);
      const z = function (e) {
          return a().createElement(
            "div",
            { className: "ncFkgqRp3LFD2PLDEq2w" },
            a().createElement(q, { titleInfo: e.similar.header }),
            a().createElement(L, { webtoon: e.similar }),
            a().createElement(
              "div",
              { className: "R1wNawsdO4nTrcBztfUo" },
              a().createElement("span", null, e.similar.text),
              a().createElement(K(), {
                className: "py3HpTZ2zM5mShMhRkn4",
                sx: { color: "#0068c3", fontSize: "18px" },
              })
            )
          );
        },
        M = function (e) {
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
        _ = function (e) {
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
        H = function (e) {
          return a().createElement(
            "div",
            { className: "mKVpa2NVZMsG58qsvqNp" },
            a().createElement(M, {
              mainImage: e.common.mainImage,
              smallImage: e.common.smallImage,
            }),
            a().createElement(_, { basicInfo: e.common.basicInfo })
          );
        },
        B = function (e) {
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
        G = "MJwqi1QXoetX0Rpc0VF4",
        O = function (e) {
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
                            { key: "td" + l, className: G },
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
                              { key: "td" + l, className: G },
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
                { className: "Atn0U7ocYw0S3C2ExXi3" },
                a().createElement("input", {
                  type: "checkbox",
                  id: "modal",
                  className: "TJiph3cKydz7rpLypr_v",
                }),
                a().createElement(
                  "div",
                  { className: "QLEeOilUcQEsGxMXkusk" },
                  a().createElement("label", {
                    for: "modal",
                    className: "Y8K4T6NFn7RDPltz8pXA",
                  }),
                  a().createElement(
                    "div",
                    { className: "xjrzL9HSsX2fqN2lN5Sb" },
                    a().createElement(
                      "label",
                      { for: "modal", className: "HX97eUF9mbFL8hzZYcax" },
                      a().createElement("i", { className: "fas fa-times" })
                    ),
                    a().createElement(
                      "div",
                      { className: "y04NuSNEEGyW4kw1XrEN" },
                      "공유하기"
                    ),
                    a().createElement("div", {
                      id: "shareBtn",
                      className: "CjvBQ0FZASd2cnPqd0JN",
                    }),
                    a().createElement(
                      "div",
                      { className: "JRAlToDJfonIFXDmIwg5" },
                      "블로그"
                    ),
                    a().createElement(
                      "div",
                      { className: "sHq6MBi5D4eYK_jxYlSb" },
                      a().createElement(
                        "table",
                        { className: "MOOFyQE0WxZj_KSxMhvD" },
                        a().createElement(
                          "tbody",
                          null,
                          a().createElement(
                            "tr",
                            null,
                            a().createElement(
                              "td",
                              { className: "yu9UCn2yJKzxKmSYTFCr" },
                              a().createElement(
                                "a",
                                {
                                  href: e.shortenUrl,
                                  className: "O360tU8nKf8gi9Axk4LA",
                                },
                                e.shortenUrl
                              )
                            ),
                            a().createElement(
                              "td",
                              { className: "fT4QZ8mbd9F3yiJut2IQ" },
                              "URL복사"
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                a().createElement(
                  "label",
                  { for: "modal", className: "KMvcqJzTmSTTQEYF9fSY" },
                  a().createElement("i", { className: "fas fa-share-square" })
                )
              )
            )
          );
        },
        J = function (e) {
          return a().createElement(
            "div",
            { className: "AI2MWm_9lJfaJVeLEZU4" },
            a().createElement(B, { common: e.common }),
            a().createElement(O, { common: e.common, shortenUrl: e.shortenUrl })
          );
        },
        Q = function (e) {
          return a().createElement(
            "div",
            {
              className: "Bn0XRpftswNx9EPiPPsQ",
              style: { backgroundColor: e.mainCard.colorScheme.background },
            },
            a().createElement(
              "div",
              {
                className: "YxduKarJd57Gp5tqPOjB",
                style: { backgroundColor: e.mainCard.colorScheme.background },
              },
              a().createElement("div", {
                className: "hp_QfyBgFrgd2sabiD7X",
                style: { backgroundColor: e.mainCard.colorScheme.topBorder },
              }),
              a().createElement(h, {
                title: e.mainCard.title,
                colorScheme: e.mainCard.colorScheme,
              }),
              a().createElement(w, {
                subTap: e.mainCard.subTap,
                colorScheme: e.mainCard.colorScheme,
              })
            ),
            a().createElement(
              "div",
              { className: "ug_K208GTX5ib2lFbVx3" },
              "동물" === e.mainCard.title.type &&
                a().createElement(H, { common: e.mainCard.common }),
              "문화재" === e.mainCard.title.type &&
                a().createElement(J, {
                  common: e.mainCard.common,
                  shortenUrl: e.shortenUrl,
                }),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(R, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(z, { similar: e.mainCard.similar }),
              "웹툰" !== e.mainCard.title.type &&
                a().createElement(x, { similar: e.mainCard.similar })
            )
          );
        },
        A = "iZOu4FsfVAomVvnBaKUq",
        P = "i3SGqYLhgds4VhKasTwJ",
        V = "Cz2azLu9sjBkLkQhXtvj",
        X = "jJ_2XORafRmWfevJcACF",
        W = require("@mui/icons-material/Circle");
      var j = t.n(W);
      const Y = function (e) {
          return a().createElement(
            "div",
            { className: "scBiIhLQvvVFaQZXo00W" },
            a().createElement(
              "h2",
              { className: "d3w92phMabrQhHlqh6r9" },
              e.titleInfo.title,
              "인플루언서" === e.titleInfo.title &&
                a().createElement(K(), {
                  className: "OjntPDvbXjss_ttuzkDK",
                  sx: { color: "#0068c3", fontSize: "18px" },
                })
            ),
            "뉴스" === e.titleInfo.title &&
              a().createElement(
                "div",
                { className: "WgeFueAJe2LDM4MYwRl7" },
                a().createElement(
                  "span",
                  { className: "Xke8belThGTxKDjORgRh" },
                  a().createElement(j(), { className: "tmLmwUon7VXwnapOfR2P" }),
                  e.titleInfo.condition
                ),
                a().createElement(
                  "a",
                  {
                    href: e.titleInfo.subcondition.href,
                    className: "xqT1IITkJbanPjPV0vbM",
                  },
                  a().createElement(j(), { className: "MoqsnkcMpL7IsbngM_lY" }),
                  e.titleInfo.subcondition.text
                )
              ),
            "인플루언서" === e.titleInfo.title &&
              a().createElement(
                "div",
                { className: "NDHUKfhlNdl6dpH5AzuY" },
                a().createElement(
                  "a",
                  {
                    href: e.titleInfo.subtitle.href,
                    className: "OHqBdwtIzCpnTLYfN7kE",
                  },
                  e.titleInfo.subtitle.text
                )
              )
          );
        },
        Z = "snSvrP_fhpixsUTCfpn_",
        D = function (e) {
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
                      { className: Z, key: t },
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
                      { href: e.url, className: Z, key: t },
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
        $ = "f4xw5EevA5ZPLQC4I8ET",
        ee = "SFyZOiehaHmsk_x43fu3",
        ae = function (e) {
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
                    className: $,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid gold" },
                  })
                ),
                a().createElement(
                  "div",
                  { className: ee, style: { backgroundColor: "gold" } },
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
                    className: $,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid silver" },
                  })
                ),
                a().createElement(
                  "div",
                  { className: ee, style: { backgroundColor: "silver" } },
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
                    className: $,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid #CD7F32" },
                  })
                ),
                a().createElement(
                  "div",
                  { className: ee, style: { backgroundColor: "#CD7F32" } },
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
                    className: $,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid white" },
                  })
                )
              )
          );
        },
        te = require("@mui/icons-material/FiberManualRecord");
      var le = t.n(te);
      const re = function (e) {
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
                        a().createElement(le(), {
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
                          a().createElement(le(), {
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
        ne = function (e) {
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
        ce = function (e) {
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
                  a().createElement(ae, { influencer: t }),
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
                a().createElement(re, {
                  colorScheme: e.colorScheme,
                  influencer: t,
                }),
                a().createElement(ne, { influencer: t, images: t.images }),
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
        me = function (e) {
          return a().createElement(
            "a",
            { href: e.more.href, style: { textDecoration: "None" } },
            a().createElement(
              "div",
              { className: "SYb16Fa7UwU2VE47_NaE" },
              e.more.text,
              a().createElement("i", { className: "fas fa-arrow-right" })
            )
          );
        },
        se = function (e) {
          return a().createElement(
            "div",
            { className: A },
            a().createElement(Y, { titleInfo: e.influencer.header }),
            a().createElement(D, { tabList: e.influencer["tab-lists"] }),
            a().createElement(ce, {
              influencers: e.influencer.influencers,
              colorScheme: e.influencer.colorScheme,
            }),
            a().createElement(me, { more: e.influencer.influencerLink })
          );
        },
        ie = "Qg8uKGCj6t2KXt8WvrsS",
        oe = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "a",
              { href: e.blog.href, className: "klgIhuKJg95GLpBJs5MQ" },
              a().createElement("img", {
                src: e.blog.src,
                className: "dJ4gF7s8DQpH3U6ilynM",
              }),
              a().createElement(
                "div",
                { className: "Hs9MTsNNfriXA511uBA8" },
                e.blog.title
              ),
              "true" === e.blog.influencer &&
                a().createElement(
                  a().Fragment,
                  null,
                  a().createElement("div", { className: ie }),
                  a().createElement(
                    "div",
                    { className: "kJIyp0_a83KeQLIHXwtI" },
                    "인플루언서"
                  )
                ),
              a().createElement("div", { className: ie }),
              a().createElement(
                "div",
                { className: "snlLOyL840Ztnf3pGU0c" },
                e.blog.time
              )
            ),
            a().createElement(N, { color: e.colorScheme, id: e.id })
          );
        },
        Ee = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "a",
              { href: e.body.href, className: "Ldh6XNHcR4CnCN11NFwT" },
              e.body.title
            ),
            a().createElement(
              "div",
              { className: "wE1T7nvaV29E7nfLR55Y" },
              a().createElement(
                "div",
                { className: "k6ut1Z1n9LFuEP7Va16w" },
                a().createElement(
                  "a",
                  { href: e.body.href, className: "FHy6xA05jkLYdiTbC3lx" },
                  e.body.detail
                )
              ),
              a().createElement(
                "a",
                { href: e.body.href, className: "iSEOfz0oeTDF5Gs7S0O6" },
                a().createElement("img", {
                  src: e.body.src,
                  className: "woFUeqGW9wBWCeOTaHlO",
                })
              )
            )
          );
        },
        ue = function (e) {
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
        de = function (e) {
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
        fe = function (e) {
          return a().createElement(
            "div",
            { className: A },
            a().createElement(Y, { titleInfo: e.view.header }),
            a().createElement(
              "ul",
              { className: P },
              e.view.list.map(function (t, l) {
                return a().createElement(
                  "li",
                  { className: V, key: l },
                  a().createElement(
                    "div",
                    { className: X },
                    a().createElement(oe, {
                      blog: t.blog,
                      id: "blog" + l,
                      colorScheme: e.view.colorScheme,
                    }),
                    a().createElement(Ee, { body: t.body })
                  ),
                  a().createElement(ue, { tags: t.tags }),
                  a().createElement(de, { link: t.link })
                );
              })
            )
          );
        },
        Ne = function (e) {
          return a().createElement(
            "div",
            { className: A },
            a().createElement(Y, { titleInfo: e.news.header }),
            a().createElement(
              "ul",
              { className: P },
              e.news.list.map(function (t, l) {
                return a().createElement(
                  "li",
                  { className: V, key: l },
                  a().createElement(
                    "div",
                    { className: X },
                    a().createElement(oe, {
                      blog: t.blog,
                      id: "news" + l,
                      colorScheme: e.news.colorScheme,
                    }),
                    a().createElement(Ee, { body: t.body })
                  )
                );
              })
            ),
            a().createElement(me, { more: e.news.newsLink })
          );
        },
        he = function (e) {
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
      var pe = t(860),
        be = t(986),
        ge = (t(689), t(582)),
        ve = t(771),
        ye = t(684),
        ke = ve.get("serverAddress"),
        we = ve.get("renderServerPort"),
        xe = pe.Router(),
        Se = pe();
      Se.use(ge()),
        Se.use(be.urlencoded({ extended: !1 })),
        Se.use(be.json()),
        Se.use("/", xe),
        xe.post("/", function (e, t) {
          var l;
          t.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n          <link rel="stylesheet" href="style.css">\n          <script src=\'https://kit.fontawesome.com/a076d05399.js\' crossorigin=\'anonymous\'></script>\n          <link rel="preconnect" href="https://fonts.googleapis.com">\n          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">\n          <script\n            src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n            data-auto-a11y="true"\n          ></script>\n          <script>\n            function share() {\n              var url = encodeURI(encodeURIComponent("'
              .concat(
                e.body[1],
                '"));\n              var title = encodeURI("공유하기");\n              var shareURL = "https://share.naver.com/web/shareView?url=" + url + "&title=" + title;\n              document.location = shareURL;\n            }\n          </script>\n        </head>\n        <body>\n          '
              )
              .concat(
                ye.renderToString(
                  ((l = e.body),
                  a().createElement(
                    "div",
                    { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                    a().createElement(o, { keyword: l[0].keyword }),
                    a().createElement(
                      "div",
                      { className: "lwMSkhbL51TI_MbpDTZQ" },
                      l[0].order.map(function (e, t) {
                        return a().createElement(
                          "div",
                          { key: t },
                          "mainCard" === e &&
                            a().createElement(Q, {
                              mainCard: l[0].mainCard,
                              shortenUrl: l[1],
                            }),
                          "influencers" === e &&
                            a().createElement(se, {
                              influencer: l[0].influencer,
                            }),
                          "view" === e &&
                            a().createElement(fe, { view: l[0].view }),
                          "news" === e &&
                            a().createElement(Ne, { news: l[0].news }),
                          "error" === e &&
                            a().createElement(he, { error: l[0].content })
                        );
                      }),
                      a().createElement("br", null),
                      a().createElement("br", null)
                    )
                  ))
                ),
                '\n          <script type="text/javascript">\n            document.getElementById("shareBtn").innerHTML = \'<div onclick="share()"></div>\';\n          </script>\n        </body>\n    </html>\n'
              )
          );
        }),
        Se.listen(we, function () {
          console.log("Render Server listening at ".concat(ke, ":").concat(we));
        });
    })();
})();
