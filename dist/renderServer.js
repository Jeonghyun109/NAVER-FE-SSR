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
    t = {};
  function a(l) {
    var n = t[l];
    if (void 0 !== n) return n.exports;
    var r = (t[l] = { exports: {} });
    return e[l](r, r.exports, a), r.exports;
  }
  (a.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, { a: t }), t;
  }),
    (a.d = (e, t) => {
      for (var l in t)
        a.o(t, l) &&
          !a.o(e, l) &&
          Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = a(689),
        t = a.n(e);
      const l = "Gaofu0_WhLiZfSSlHHlK",
        n = require("@mui/icons-material/Cancel");
      var r = a.n(n);
      const c = require("@mui/icons-material/MicNone");
      var m = a.n(c);
      const s = require("@mui/icons-material/Search");
      var i = a.n(s);
      const o = function (e) {
          return t().createElement(
            "div",
            null,
            t().createElement(
              "div",
              { className: "yk2QQ0PLdw1FMQtzeoLK" },
              t().createElement(
                "div",
                { className: "raIWX0RIevESkKmDF5Wh" },
                "N"
              ),
              t().createElement("input", {
                className: "wO9AuZ1mSlqY8eEGb3qZ",
                placeholder: "검색어를 입력해주세요.",
                defaultValue: "불국사",
              }),
              t().createElement(r(), {
                className: "CvWCFkpm_Gfk1MrGVe1s",
                sx: { fontSize: 25 },
              }),
              t().createElement(m(), {
                className: "Rg0WwUXCTpI6XtH0HddY",
                sx: { fontSize: 40 },
              }),
              t().createElement(i(), {
                className: "txiw8yXn4NiOoG9GdPCJ",
                sx: { fontSize: 40 },
              })
            ),
            t().createElement(
              "div",
              { className: "HbbDATNACiQacSV__cwn" },
              t().createElement(
                "a",
                { className: "i5wVFzCNpmqROYJxu6aK", href: "#home" },
                "통합"
              ),
              t().createElement(
                "a",
                { className: l, href: "#image" },
                "이미지"
              ),
              t().createElement(
                "a",
                { className: l, href: "#knowledge" },
                "지식백과"
              ),
              t().createElement("a", { className: l, href: "#view" }, "VIEW"),
              t().createElement("a", { className: l, href: "#kin" }, "지식iN"),
              t().createElement(
                "a",
                { className: l, href: "#influencer" },
                "인플루언서"
              ),
              t().createElement(
                "a",
                { className: l, href: "#video" },
                "동영상"
              ),
              t().createElement(
                "a",
                { className: l, href: "#shopping" },
                "쇼핑"
              ),
              t().createElement("a", { className: l, href: "#news" }, "뉴스"),
              t().createElement(
                "a",
                { className: l, href: "#dictionary" },
                "어학사전"
              ),
              t().createElement("a", { className: l, href: "#map" }, "지도"),
              t().createElement("a", { className: l, href: "#book" }, "책"),
              t().createElement("a", { className: l, href: "#music" }, "뮤직"),
              t().createElement(
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
          return t().createElement(
            "div",
            { className: "w8v97tusKPqi0f50smB4" },
            t().createElement(
              "h2",
              { className: "qQxVniB5CMxBq70RkIZ1" },
              e.title.name
            ),
            t().createElement(
              "div",
              { className: "SGLLmckN7K323AlmRXT6" },
              t().createElement(
                "a",
                { className: "Qk2eREGyxz0SYFLcHTXf" },
                t().createElement("div", { className: "PxirEojwYS4HFNr5k2Wj" })
              )
            ),
            t().createElement(
              "div",
              {
                className: "spl1Tmt2bzFQ_o9HGiHW",
                style: { color: e.colorScheme.subTitle },
              },
              t().createElement("span", { className: u }, e.title.type),
              t().createElement("span", { className: "rE_2CjSK6Au6HP7CFwK6" }),
              t().createElement("span", { className: u }, e.title.subName)
            )
          );
        },
        d = "ZD5uPrErEIoI8Czs6osS",
        N = "UpenaO3fzWKfrRWhnXOR",
        h = "FkbXTj3ln4sHSSPj3L2z",
        p = "F6JlJdKozDTguLRNhEHX",
        g = "fcLye7hIRyUBIsHOYXmW",
        b = "HOW7s48xMS79rdeewPcr",
        v = function (e) {
          return t().createElement(
            "div",
            { className: "AKvpsA5VvILGVv40MapP" },
            "last" === e.subTap.mainTap.order &&
              t().createElement(
                "ul",
                { className: d },
                t().createElement("li", { className: "s5s6dHhPWh4w9zpGH9vP" }),
                e.subTap.list.map(function (a, l) {
                  return t().createElement(
                    "li",
                    { className: N, key: l },
                    t().createElement(
                      "a",
                      {
                        href: a.href,
                        className: g,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        t().createElement("span", {
                          className: b,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      t().createElement("span", { className: p }, a.title)
                    )
                  );
                }),
                t().createElement(
                  "li",
                  { className: N },
                  t().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: h,
                      style: { backgroundColor: e.colorScheme.subTapColor },
                    },
                    t().createElement(
                      "span",
                      { className: p },
                      e.subTap.mainTap.title
                    )
                  )
                )
              ),
            "first" === e.subTap.mainTap.order &&
              t().createElement(
                "ul",
                { className: d },
                t().createElement(
                  "li",
                  { className: N },
                  t().createElement(
                    "a",
                    {
                      href: e.subTap.mainTap.href,
                      className: h,
                      style: { backgroundColor: e.colorScheme.subTapColor },
                    },
                    t().createElement(
                      "span",
                      { className: p },
                      e.subTap.mainTap.title
                    )
                  )
                ),
                e.subTap.list.map(function (a, l) {
                  return t().createElement(
                    "li",
                    { className: N, key: l },
                    t().createElement(
                      "a",
                      {
                        href: a.href,
                        className: g,
                        style: { color: e.colorScheme.subTapColor },
                      },
                      0 !== l &&
                        t().createElement("span", {
                          className: b,
                          style: { backgroundColor: e.colorScheme.subTapBar },
                        }),
                      t().createElement("span", { className: p }, a.title)
                    )
                  );
                })
              )
          );
        },
        y = function (e) {
          return t().createElement(
            "div",
            { className: "V_biLkhbpj1TiFQG01hN" },
            t().createElement(
              "a",
              {
                href: e.similar.header.href,
                className: "L6y7q4VqgJX6pEwGqCd1",
              },
              t().createElement(
                "h3",
                { className: "opYSgc_qU8NwiRPi258Q" },
                e.similar.header.title
              ),
              t().createElement(
                "div",
                { className: "B9UDz_BXyNdOgnlK4GU2" },
                t().createElement("i", { className: "fas fa-arrow-right" })
              )
            ),
            t().createElement(
              "div",
              { className: "QonCLKyMnH4EZTJtJX6a" },
              t().createElement(
                "ul",
                { className: "EZC4ZkUZhJOygFL52u_X" },
                e.similar.list.map(function (e, a) {
                  return t().createElement(
                    "li",
                    { className: "iaNH7NzZRgviGNC1dBmX", key: a },
                    t().createElement(
                      "a",
                      { href: e.href, className: "OLwnrlzrFACPpAYMCoMg" },
                      t().createElement(
                        "div",
                        { className: "BJRAN0HWVVeLKtCkUlWO" },
                        t().createElement("img", {
                          src: e.src,
                          className: "TtgkT3w1qjE1T18xixS6",
                        })
                      ),
                      t().createElement(
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
          return t().createElement(
            "div",
            { className: "kctY_Gh1I_5CetLJmfOA" },
            t().createElement(
              "span",
              { className: "GFwtfSyIcJ2uBMqmooX8" },
              e.id + 1
            ),
            "none" !== e.thumbnail.same &&
              "" !== e.thumbnail.same &&
              t().createElement(
                "span",
                { className: "uvatixGFU9n7dnWT0pS9" },
                e.thumbnail.same
              ),
            t().createElement("img", {
              src: e.thumbnail.src,
              className: "ymxPYeh6ons4jbJmxpYw",
            })
          );
        },
        k = function (e) {
          return t().createElement(
            "div",
            null,
            t().createElement(
              "li",
              { className: "viPC45wUUT7f7wJVFPcQ", key: e.id },
              t().createElement(
                "a",
                { href: e.webtoon.href, className: "q9HpM3oK8cToynXEI9HM" },
                t().createElement(w, { thumbnail: e.webtoon, id: e.id }),
                t().createElement(
                  "div",
                  { className: "XiTNubUNlHVSQU88xCDi" },
                  t().createElement(
                    "div",
                    { className: "tTOJrn_rhCsUE1UuFlvk" },
                    e.webtoon.title
                  ),
                  t().createElement(
                    "div",
                    { className: "kSPqCzR_2Jm8v9gyfz3g" },
                    e.webtoon.sub_text
                  )
                ),
                "" !== e.webtoon.preference &&
                  t().createElement(
                    "div",
                    null,
                    t().createElement("hr", {
                      className: "Zwx_I2u2WdTbYd3HeaRn",
                    }),
                    t().createElement(
                      "div",
                      { className: "GHoX2ZVR_JjnMYTM7iNy" },
                      e.webtoon.preference
                    )
                  )
              )
            )
          );
        },
        x = require("@mui/icons-material/ArrowForward");
      var S = a.n(x);
      const C = function (e) {
          return t().createElement(
            "div",
            null,
            t().createElement(
              "li",
              { className: "uPb1cdhpligCyFuvtA7Q" },
              t().createElement(
                "a",
                { href: e.more.href, className: "DaT57tWciH1srSvuk5IS" },
                t().createElement(
                  "span",
                  { className: "bk9xqTkPt_qdGP2SrzI_" },
                  t().createElement(S(), { className: "MVD9gFMgWZVAw7TtakmA" }),
                  t().createElement(
                    "span",
                    { className: "PY87YT3qkggZrDk9fNA9" },
                    e.more.text1,
                    t().createElement("br", null),
                    e.more.text2
                  )
                )
              )
            )
          );
        },
        T = function (e) {
          return t().createElement(
            "div",
            { className: "YIDB6c1_0UceDa5lseVj" },
            t().createElement(
              "ul",
              { className: "G9rjOFeiZd03FuyMwp0B" },
              e.webtoon.list.map(function (e, a) {
                return t().createElement(k, { webtoon: e, id: a });
              }),
              "" !== e.webtoon.more.href &&
                t().createElement(C, { more: e.webtoon.more })
            )
          );
        },
        I = function (e) {
          return t().createElement(
            "div",
            { className: "j9LNCKid3In_AbXFpTVJ" },
            t().createElement(
              "h3",
              { className: "GRko11WACw8R7Xtch3OC" },
              "" !== e.titleInfo.button &&
                t().createElement(
                  "span",
                  { className: "gAq6d1SKw0bZB9bjqQ0_" },
                  e.titleInfo.button
                ),
              e.titleInfo.title
            )
          );
        },
        F = function (e) {
          return t().createElement(
            "div",
            { className: "s5orwz_4geOSDxrgcgfz" },
            t().createElement(I, { titleInfo: e.common.together.header }),
            t().createElement(T, { webtoon: e.common.together }),
            t().createElement(I, { titleInfo: e.common.life.header }),
            t().createElement(T, { webtoon: e.common.life }),
            t().createElement(I, { titleInfo: e.common.new.header }),
            t().createElement(T, { webtoon: e.common.new }),
            t().createElement(I, { titleInfo: e.common.weekly.header }),
            t().createElement(T, { webtoon: e.common.weekly })
          );
        },
        L = require("@mui/icons-material/ErrorOutline");
      var q = a.n(L);
      const R = function (e) {
          return t().createElement(
            "div",
            { className: "ncFkgqRp3LFD2PLDEq2w" },
            t().createElement(I, { titleInfo: e.similar.header }),
            t().createElement(T, { webtoon: e.similar }),
            t().createElement(
              "div",
              { className: "R1wNawsdO4nTrcBztfUo" },
              t().createElement("span", null, e.similar.text),
              t().createElement(q(), {
                className: "py3HpTZ2zM5mShMhRkn4",
                sx: { color: "#0068c3", fontSize: "18px" },
              })
            )
          );
        },
        z = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "ul",
              { className: "WxiekqtyUr7BdP58n1bP" },
              t().createElement(
                "li",
                { className: "Kt9p9SgnoPbdFvLcRySq" },
                t().createElement(
                  "a",
                  { href: e.mainImage.href, className: "Arl5d3fdDyFyzFhFffdA" },
                  t().createElement("img", {
                    src: e.mainImage.src,
                    className: "cMSuh5VzUCOn2YJVavc2",
                  })
                )
              ),
              e.smallImage.list.map(function (e, a) {
                return t().createElement(
                  "li",
                  { className: "rzakIO_nyAIdwEGr4Q8H", key: a },
                  t().createElement(
                    "a",
                    { href: e.href, className: "u1ySUEJkUEHH1H0Ilrcl" },
                    2 === a
                      ? t().createElement("img", {
                          src: e.src,
                          className: "EfiM7ANv1aMFljOCR9oG",
                        })
                      : t().createElement("img", {
                          src: e.src,
                          className: "VERd52ManLN8mR6JBJsf",
                        })
                  )
                );
              })
            )
          );
        },
        M = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "div",
              { className: "vP2QgGmdyFAbl3CqrG1N" },
              t().createElement(
                "a",
                { href: e.basicInfo.href, className: "uuVWS01zSxlf4Ge9eWFK" },
                t().createElement(
                  "h3",
                  { className: "wdX0IJmarE0jzckevmpk" },
                  e.basicInfo.title
                ),
                t().createElement(
                  "div",
                  { className: "sHx_H_1shk3I0VRjM8fJ" },
                  t().createElement("i", { className: "fas fa-arrow-right" })
                )
              )
            ),
            t().createElement(
              "div",
              { className: "hkPOC3cmG2So70H7eYen" },
              t().createElement(
                "span",
                { className: "dcpqblUXwdjUENZ3bA0S" },
                e.basicInfo.detail
              ),
              t().createElement(
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
          return t().createElement(
            "div",
            { className: "mKVpa2NVZMsG58qsvqNp" },
            t().createElement(z, {
              mainImage: e.common.mainImage,
              smallImage: e.common.smallImage,
            }),
            t().createElement(M, { basicInfo: e.common.basicInfo })
          );
        },
        _ = function (e) {
          return t().createElement(
            "div",
            { className: "MqKms0lrf0CEULJlxiuz" },
            t().createElement(
              "ul",
              { className: "rIgo2IAOkpGWECNYu17n" },
              e.common.imageList.map(function (a, l) {
                var n =
                  0 === l
                    ? "xZczpMtN8MvR9jLG93jy"
                    : l === e.common.imageList.length - 1
                    ? "OSm8GrXyUGa7J391Sgzb"
                    : "QwboBBqRJnQT_wkHCK3f";
                return t().createElement(
                  "li",
                  { key: l },
                  t().createElement(
                    "a",
                    { href: e.common.imgURL },
                    t().createElement("img", {
                      className: n,
                      src: a.src,
                      alt: a.alt,
                    })
                  )
                );
              })
            )
          );
        },
        B = "MJwqi1QXoetX0Rpc0VF4",
        K = function (e) {
          return t().createElement(
            "div",
            { className: "Ahrntx314hFVGwzHIUcc" },
            t().createElement(
              "a",
              {
                href: e.common.descriptionURL,
                className: "T8nc9ZF8_AnZx_tcNtz0",
              },
              t().createElement(
                "h3",
                { className: "WLPzHVEhwUSJMhdHX_4m" },
                e.common.title
              ),
              t().createElement(
                "div",
                { className: "CeInrxU_qvbcOJHzlNUX" },
                t().createElement("i", { className: "fas fa-arrow-right" })
              )
            ),
            t().createElement(
              "div",
              { className: "hipMqXSriBS0vAwkLauF" },
              t().createElement(
                "table",
                { className: "okPQTET8LpO47gulUQy0" },
                t().createElement(
                  "tbody",
                  null,
                  Object.keys(e.common.information).map(function (a, l) {
                    return t().createElement(
                      "tr",
                      { key: l },
                      t().createElement(
                        "td",
                        { className: "KCbYgkcFRSdeQtiWSrdc", key: l },
                        a
                      ),
                      e.common.information[a].link
                        ? t().createElement(
                            "td",
                            { key: "td" + l, className: B },
                            t().createElement(
                              "a",
                              {
                                href: e.common.information[a].url,
                                className: "FKBKlt3skRLtUnTzv1Dc",
                              },
                              e.common.information[a].detail
                            )
                          )
                        : t().createElement(
                            t().Fragment,
                            null,
                            t().createElement(
                              "td",
                              { key: "td" + l, className: B },
                              e.common.information[a].detail
                            )
                          )
                    );
                  })
                )
              )
            ),
            t().createElement(
              "div",
              { style: { fontSize: "12pt", color: "#424242" } },
              e.common.descriptionText
            ),
            t().createElement(
              "div",
              { className: "YfpbIGwmvoybIN82ChLX" },
              t().createElement(
                "a",
                { href: e.common.place },
                t().createElement(
                  "span",
                  { className: "MrSJhfzhHQBe_Z0Ftmwo" },
                  t().createElement("i", {
                    className: "fas fa-map-marker-alt",
                    style: { color: "#06c755" },
                  }),
                  " ",
                  "지도"
                )
              ),
              t().createElement(
                "span",
                { className: "KMvcqJzTmSTTQEYF9fSY" },
                t().createElement("i", { className: "fas fa-share-square" })
              )
            )
          );
        },
        P = function (e) {
          return t().createElement(
            "div",
            { className: "AI2MWm_9lJfaJVeLEZU4" },
            t().createElement(_, { common: e.common }),
            t().createElement(K, { common: e.common })
          );
        },
        G = function (e) {
          return t().createElement(
            "div",
            {
              className: E.commonModule,
              style: { backgroundColor: e.mainCard.colorScheme.background },
            },
            t().createElement("div", {
              className: E.topBorder,
              style: { backgroundColor: e.mainCard.colorScheme.topBorder },
            }),
            t().createElement(
              "div",
              { className: E.topWrap },
              t().createElement(f, {
                title: e.mainCard.title,
                colorScheme: e.mainCard.colorScheme,
              }),
              t().createElement(v, {
                subTap: e.mainCard.subTap,
                colorScheme: e.mainCard.colorScheme,
              })
            ),
            t().createElement(
              "div",
              { className: E.contentWrap },
              "동물" === e.mainCard.title.type &&
                t().createElement(H, { common: e.mainCard.common }),
              "문화재" === e.mainCard.title.type &&
                t().createElement(P, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                t().createElement(F, { common: e.mainCard.common }),
              "웹툰" === e.mainCard.title.type &&
                t().createElement(R, { similar: e.mainCard.similar }),
              "웹툰" !== e.mainCard.title.type &&
                t().createElement(y, { similar: e.mainCard.similar })
            )
          );
        },
        O = "iZOu4FsfVAomVvnBaKUq",
        U = "i3SGqYLhgds4VhKasTwJ",
        V = "Cz2azLu9sjBkLkQhXtvj",
        Q = "jJ_2XORafRmWfevJcACF",
        J = require("@mui/icons-material/Circle");
      var W = a.n(J);
      const A = function (e) {
          return t().createElement(
            "div",
            { className: "scBiIhLQvvVFaQZXo00W" },
            t().createElement(
              "h2",
              { className: "d3w92phMabrQhHlqh6r9" },
              e.titleInfo.title,
              "인플루언서" === e.titleInfo.title &&
                t().createElement(q(), {
                  className: "OjntPDvbXjss_ttuzkDK",
                  sx: { color: "#0068c3", fontSize: "18px" },
                })
            ),
            "뉴스" === e.titleInfo.title &&
              t().createElement(
                "div",
                { className: "WgeFueAJe2LDM4MYwRl7" },
                t().createElement(
                  "span",
                  { className: "Xke8belThGTxKDjORgRh" },
                  t().createElement(W(), { className: "tmLmwUon7VXwnapOfR2P" }),
                  e.titleInfo.condition
                ),
                t().createElement(
                  "a",
                  {
                    href: e.titleInfo.subcondition.href,
                    className: "xqT1IITkJbanPjPV0vbM",
                  },
                  t().createElement(W(), { className: "MoqsnkcMpL7IsbngM_lY" }),
                  e.titleInfo.subcondition.text
                )
              ),
            "인플루언서" === e.titleInfo.title &&
              t().createElement(
                "div",
                { className: "NDHUKfhlNdl6dpH5AzuY" },
                t().createElement(
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
        X = "snSvrP_fhpixsUTCfpn_",
        j = function (e) {
          return t().createElement(
            "ul",
            { className: "c8f3vgqoRT5NdXV5PMQs" },
            e.tabList.map(function (e, a) {
              return t().createElement(
                "li",
                { key: a },
                0 === a
                  ? t().createElement(
                      "a",
                      { className: X, key: a },
                      t().createElement(
                        "div",
                        { className: "TJVQPIH0ilV25kGPXx4o" },
                        t().createElement(
                          "span",
                          { className: "v6MLEfNdqWAjlZGzkkoj" },
                          e.title
                        ),
                        " ",
                        t().createElement(
                          "span",
                          { className: "SCH2aOclrvYlndtLl6xQ" },
                          e.subtitle
                        )
                      )
                    )
                  : t().createElement(
                      "a",
                      { href: e.url, className: X, key: a },
                      t().createElement(
                        "div",
                        { className: "Bxtzd_vVWQKE9PmADYtn" },
                        t().createElement("img", {
                          src: e.image,
                          className: "wC1KBy9RsoumJQpa6BwC",
                          alt: a,
                        }),
                        t().createElement(
                          "span",
                          { className: "DDS0MqIHwig5vZ6g3A7E" },
                          e.title
                        ),
                        " ",
                        t().createElement(
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
        Y = "f4xw5EevA5ZPLQC4I8ET",
        Z = "SFyZOiehaHmsk_x43fu3",
        D = function (e) {
          return t().createElement(
            "div",
            { className: "wCF_q_km6bUDq0OehARF" },
            "Gold" === e.influencer.thumbnail.highlighted &&
              t().createElement(
                t().Fragment,
                null,
                t().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  t().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: Y,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid gold" },
                  })
                ),
                t().createElement(
                  "div",
                  { className: Z, style: { backgroundColor: "gold" } },
                  t().createElement("i", { className: "fas fa-crown" })
                )
              ),
            "Silver" === e.influencer.thumbnail.highlighted &&
              t().createElement(
                t().Fragment,
                null,
                t().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  t().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: Y,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid silver" },
                  })
                ),
                t().createElement(
                  "div",
                  { className: Z, style: { backgroundColor: "silver" } },
                  t().createElement("i", { className: "fas fa-crown" })
                )
              ),
            "Bronze" === e.influencer.thumbnail.highlighted &&
              t().createElement(
                t().Fragment,
                null,
                t().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  t().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: Y,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid #CD7F32" },
                  })
                ),
                t().createElement(
                  "div",
                  { className: Z, style: { backgroundColor: "#CD7F32" } },
                  t().createElement("i", { className: "fas fa-crown" })
                )
              ),
            "None" === e.influencer.thumbnail.highlighted &&
              t().createElement(
                t().Fragment,
                null,
                t().createElement(
                  "a",
                  { href: e.influencer.thumbnail.url },
                  t().createElement("img", {
                    src: e.influencer.thumbnail.image,
                    className: Y,
                    alt: "thumbnail",
                    style: { padding: "2px", border: "2px solid white" },
                  })
                )
              )
          );
        },
        $ = require("@mui/icons-material/FiberManualRecord");
      var ee = a.n($);
      const te = function (e) {
          return t().createElement(
            "div",
            { className: "oc5_o8pxFLxI8Z8xJtqR" },
            t().createElement(
              "div",
              {
                className: "G9QaxRNIKUIBTaaKBYSB",
                style: { color: e.colorScheme.main },
              },
              e.influencer.keywords.map(function (a, l) {
                return t().createElement(
                  "div",
                  { key: l },
                  0 === l
                    ? t().createElement(
                        "div",
                        null,
                        "Blog" === a.type &&
                          t().createElement("i", {
                            className: "fas fa-stop",
                            style: { marginRight: "5px" },
                          }),
                        "YouTube" === a.type &&
                          t().createElement("i", {
                            className: "fab fa-youtube",
                            style: { marginRight: "5px" },
                          }),
                        "Company" === a.type &&
                          t().createElement("i", {
                            className: "fas fa-briefcase",
                            style: { marginRight: "5px" },
                          }),
                        t().createElement("b", null, a.title),
                        t().createElement(ee(), {
                          sx: {
                            color: e.colorScheme.border,
                            fontSize: "4pt",
                            marginBottom: "2.5pt",
                            marginLeft: "5px",
                            marginRight: "5px",
                          },
                        })
                      )
                    : t().createElement(
                        "div",
                        null,
                        t().createElement("span", { key: l }, a.value),
                        l !== e.influencer.keywords.length - 1 &&
                          t().createElement(ee(), {
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
            t().createElement(
              "div",
              {
                className: "Vkoy9BcVod1WrIPGBmfd",
                style: { borderColor: e.colorScheme.border },
              },
              t().createElement("i", {
                className: "fas fa-chevron-down",
                style: { color: e.colorScheme.main },
              })
            )
          );
        },
        ae = function (e) {
          return t().createElement(
            "div",
            { className: "zM0P8x37INmd5SMtTge8" },
            t().createElement(
              "ul",
              { className: "W4Y50_WKRrW6r7e9NO0D" },
              e.images.map(function (a, l) {
                var n =
                  0 === l
                    ? "yBc434N4AZpEGjKdRvQP"
                    : l === e.images.length - 1
                    ? "SBejqJ92woj7wqUE9gVf"
                    : "ICyQYcXvLgmj6ZjglyW1";
                return t().createElement(
                  "li",
                  { key: l },
                  t().createElement(
                    "a",
                    { href: e.influencer.link },
                    t().createElement("img", {
                      src: a,
                      className: n,
                      alt: "thumbnail",
                    })
                  )
                );
              })
            )
          );
        },
        le = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            e.influencers.map(function (a) {
              return t().createElement(
                "div",
                { className: "DyyyG_LI4K_gzTwkGumt" },
                t().createElement(
                  "div",
                  { className: "lozlf1dFAIxyOWj5ZAK0" },
                  t().createElement(D, { influencer: a }),
                  t().createElement(
                    "div",
                    {
                      className: "GjYMYaJuVTfpfbWSgAP_",
                      style: {
                        color: e.colorScheme.main,
                        borderColor: e.colorScheme.border,
                      },
                    },
                    t().createElement("i", {
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
                  t().createElement(
                    "div",
                    { className: "ODpXVwwA13GaqJKCrBmi" },
                    t().createElement(
                      "div",
                      { className: "NfoW9ILkzxfYLV05MqCd" },
                      t().createElement(
                        "a",
                        {
                          href: a.thumbnail.url,
                          className: "xMkYezUAZcCoTnv3BoHx",
                        },
                        a.title
                      ),
                      t().createElement(
                        "span",
                        { className: "LO1GoketnEUwBz9Mr8_3" },
                        a.subtitles.fans
                      )
                    ),
                    t().createElement(
                      "div",
                      { className: "cMKcWwLmE_N0wyVLSK2S" },
                      t().createElement(
                        "span",
                        { style: { color: e.colorScheme.main } },
                        a.subtitles.title
                      ),
                      t().createElement("span", {
                        className: "ZlaamkcByLlI7EX3kZe8",
                      }),
                      a.subtitles.expertise
                    )
                  )
                ),
                t().createElement(te, {
                  colorScheme: e.colorScheme,
                  influencer: a,
                }),
                t().createElement(ae, { influencer: a, images: a.images }),
                t().createElement(
                  "div",
                  { className: "qKy9gxKBT8iz6Zzlzytw" },
                  t().createElement(
                    "a",
                    { href: a.link, className: "PYw_KeCs61CjGOpxLCw1" },
                    a.description.title
                  ),
                  t().createElement(
                    "a",
                    { href: a.link, className: "q61BE74JeDObiTgSciAv" },
                    a.description.descriptionText
                  ),
                  t().createElement(
                    "div",
                    { className: "v3wYRc0kzx0B0PINmNTU" },
                    a.description.date
                  )
                ),
                t().createElement(
                  "a",
                  {
                    href: a.description.moreUrl,
                    style: { textDecoration: "none" },
                  },
                  t().createElement(
                    "div",
                    { className: "EtRtlXwIy18ydIX62R_j" },
                    t().createElement("i", {
                      className: "fas fa-link",
                      style: { marginRight: "10px" },
                    }),
                    t().createElement("b", null, a.title),
                    a.description.moreText,
                    t().createElement(
                      "span",
                      { className: "WKFQM7pUCJVvIkhBFx7f" },
                      t().createElement("i", {
                        className: "fas fa-chevron-right",
                      })
                    )
                  )
                )
              );
            })
          );
        },
        ne = function (e) {
          return t().createElement(
            "a",
            { href: e.more.href, style: { textDecoration: "None" } },
            t().createElement(
              "div",
              { className: "SYb16Fa7UwU2VE47_NaE" },
              e.more.text,
              t().createElement("i", { className: "fas fa-arrow-right" })
            )
          );
        },
        re = function (e) {
          return t().createElement(
            "div",
            { className: O },
            t().createElement(A, { titleInfo: e.influencer.header }),
            t().createElement(j, { tabList: e.influencer["tab-lists"] }),
            t().createElement(le, {
              influencers: e.influencer.influencers,
              colorScheme: e.influencer.colorScheme,
            }),
            t().createElement(ne, { more: e.influencer.influencerLink })
          );
        },
        ce = "Qg8uKGCj6t2KXt8WvrsS",
        me = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "a",
              { href: e.blog.href, className: "klgIhuKJg95GLpBJs5MQ" },
              t().createElement("img", {
                src: e.blog.src,
                className: "dJ4gF7s8DQpH3U6ilynM",
              }),
              t().createElement(
                "div",
                { className: "Hs9MTsNNfriXA511uBA8" },
                e.blog.title
              ),
              "true" === e.blog.influencer &&
                t().createElement(
                  t().Fragment,
                  null,
                  t().createElement("div", { className: ce }),
                  t().createElement(
                    "div",
                    { className: "kJIyp0_a83KeQLIHXwtI" },
                    "인플루언서"
                  )
                ),
              t().createElement("div", { className: ce }),
              t().createElement(
                "div",
                { className: "snlLOyL840Ztnf3pGU0c" },
                e.blog.time
              )
            ),
            t().createElement(
              "div",
              { className: "G2kw45QzEijgw2VpBujg" },
              t().createElement(
                "a",
                { className: "d7onBN2B0Rdb_jqzZEDp" },
                t().createElement("div", { className: "p5V8zRVn7N_kiAKTHTIP" })
              )
            )
          );
        },
        se = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              "a",
              { href: e.body.href, className: "Ldh6XNHcR4CnCN11NFwT" },
              e.body.title
            ),
            t().createElement(
              "div",
              { className: "wE1T7nvaV29E7nfLR55Y" },
              t().createElement(
                "div",
                { className: "k6ut1Z1n9LFuEP7Va16w" },
                t().createElement(
                  "a",
                  { href: e.body.href, className: "FHy6xA05jkLYdiTbC3lx" },
                  e.body.detail
                )
              ),
              t().createElement(
                "a",
                { href: e.body.href, className: "iSEOfz0oeTDF5Gs7S0O6" },
                t().createElement("img", {
                  src: e.body.src,
                  className: "woFUeqGW9wBWCeOTaHlO",
                })
              )
            )
          );
        },
        ie = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            0 !== e.tags.list.length &&
              t().createElement(
                "div",
                { className: "OlQTLqRbi1QIHzlwyrHs" },
                e.tags.list.map(function (e, a) {
                  return t().createElement(
                    "a",
                    { href: e.href, className: "Tg9q3QdcdPc23U3UZ661", key: a },
                    "#",
                    e.title
                  );
                })
              )
          );
        },
        oe = function (e) {
          return t().createElement(
            t().Fragment,
            null,
            0 !== Object.keys(e.link).length &&
              t().createElement(
                "div",
                { className: "Hd2UNEr0aG2tf8bM6xJ2" },
                t().createElement(
                  "a",
                  { href: e.link.href, className: "eKCyJ71Kqd828donc8iP" },
                  e.link.text
                )
              )
          );
        },
        Ee = function (e) {
          return t().createElement(
            "div",
            { className: O },
            t().createElement(A, { titleInfo: e.view.header }),
            t().createElement(
              "ul",
              { className: U },
              e.view.list.map(function (e, a) {
                return t().createElement(
                  "li",
                  { className: V, key: a },
                  t().createElement(
                    "div",
                    { className: Q },
                    t().createElement(me, { blog: e.blog }),
                    t().createElement(se, { body: e.body })
                  ),
                  t().createElement(ie, { tags: e.tags }),
                  t().createElement(oe, { link: e.link })
                );
              })
            )
          );
        },
        ue = function (e) {
          return t().createElement(
            "div",
            { className: O },
            t().createElement(A, { titleInfo: e.news.header }),
            t().createElement(
              "ul",
              { className: U },
              e.news.list.map(function (e, a) {
                return t().createElement(
                  "li",
                  { className: V, key: a },
                  t().createElement(
                    "div",
                    { className: Q },
                    t().createElement(me, { blog: e.blog }),
                    t().createElement(se, { body: e.body })
                  )
                );
              })
            ),
            t().createElement(ne, { more: e.news.newsLink })
          );
        },
        fe = function (e) {
          return t().createElement(
            "div",
            { className: "VwKNETIQcuzxVQs6hKMl" },
            t().createElement(
              "div",
              { className: "X10gHE18bRpnggHuhQra" },
              t().createElement(
                "div",
                { className: "F0MRqxaGKSfNWLOWYlv0" },
                e.error.title
              ),
              t().createElement(
                "ul",
                { className: "oUTAQDP2pA4Pdno0jJvW" },
                t().createElement("li", null, e.error.text1),
                t().createElement("li", null, e.error.text2)
              )
            )
          );
        };
      var de = a(860),
        Ne = a(986),
        he = (a(689), a(582)),
        pe = a(771),
        ge = a(684),
        be = pe.get("serverAddress"),
        ve = pe.get("renderServerPort"),
        ye = de.Router(),
        we = de();
      we.use(he()),
        we.use(Ne.urlencoded({ extended: !1 })),
        we.use(Ne.json()),
        we.use("/", ye),
        ye.post("/", function (e, a) {
          var l;
          a.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n        <script src=\'https://kit.fontawesome.com/a076d05399.js\' crossorigin=\'anonymous\'></script>\n        <link rel="preconnect" href="https://fonts.googleapis.com">\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">\n        <script\n          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n          data-auto-a11y="true"\n        ></script>\n        </head>\n        <body>\n            '.concat(
              ge.renderToString(
                ((l = e.body),
                t().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  t().createElement(o, null),
                  t().createElement(
                    "div",
                    { className: "lwMSkhbL51TI_MbpDTZQ" },
                    l[0].order.map(function (e, a) {
                      return t().createElement(
                        "div",
                        { key: a },
                        "mainCard" === e &&
                          t().createElement(G, { mainCard: l[0].mainCard }),
                        "influencers" === e &&
                          t().createElement(re, {
                            influencer: l[0].influencer,
                          }),
                        "view" === e &&
                          t().createElement(Ee, { view: l[0].view }),
                        "news" === e &&
                          t().createElement(ue, { news: l[0].news }),
                        "error" === e &&
                          t().createElement(fe, { error: l[0].content })
                      );
                    })
                  )
                ))
              ),
              "\n        </body>\n    </html>\n"
            )
          );
        }),
        we.listen(ve, function () {
          console.log("Render Server listening at ".concat(be, ":").concat(ve));
        });
    })();
})();
