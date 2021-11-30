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
    var s = a[l];
    if (void 0 !== s) return s.exports;
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
        s = require("@mui/icons-material/Cancel");
      var r = t.n(s);
      const m = require("@mui/icons-material/MicNone");
      var c = t.n(m);
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
              a().createElement(c(), {
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
        E = "zqKn3ms1EpXpaqiFHl16",
        N = function (e) {
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
              ),
              a().createElement(
                "div",
                { className: "lROImE0uuJBzjsTgroGs" },
                a().createElement(
                  "div",
                  { className: "WhijbfyeQ0_SRfOkauus" },
                  "Keep에 저장"
                ),
                a().createElement(
                  "div",
                  { className: "uXD06qG20lv9cYkZ98gs" },
                  "Keep 바로가기"
                )
              )
            ),
            a().createElement(
              "div",
              { className: "spl1Tmt2bzFQ_o9HGiHW" },
              a().createElement("span", { className: E }, e.title.type),
              a().createElement("span", { className: "rE_2CjSK6Au6HP7CFwK6" }),
              a().createElement("span", { className: E }, e.title.subName)
            )
          );
        },
        u = (require("@mui/system"), "AKvpsA5VvILGVv40MapP"),
        d = "ZD5uPrErEIoI8Czs6osS",
        f = "UpenaO3fzWKfrRWhnXOR",
        h = "FkbXTj3ln4sHSSPj3L2z",
        p = "F6JlJdKozDTguLRNhEHX",
        v = "fcLye7hIRyUBIsHOYXmW",
        b = "HOW7s48xMS79rdeewPcr",
        k = function (e) {
          return a().createElement(
            "div",
            { className: u },
            "last" === e.subTap.mainTap.order &&
              a().createElement(
                "ul",
                { className: d },
                a().createElement("li", { className: "s5s6dHhPWh4w9zpGH9vP" }),
                e.subTap.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: f, key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: v },
                      0 !== t && a().createElement("span", { className: b }),
                      a().createElement("span", { className: p }, e.title)
                    )
                  );
                }),
                a().createElement(
                  "li",
                  { className: f },
                  a().createElement(
                    "a",
                    { href: e.subTap.mainTap.href, className: h },
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
                  { className: f },
                  a().createElement(
                    "a",
                    { href: e.subTap.mainTap.href, className: h },
                    a().createElement(
                      "span",
                      { className: p },
                      e.subTap.mainTap.title
                    )
                  )
                ),
                e.subTap.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: f, key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: v },
                      0 !== t && a().createElement("span", { className: b }),
                      a().createElement("span", { className: p }, e.title)
                    )
                  );
                })
              )
          );
        },
        g = function (e) {
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
        x = function (e) {
          return a().createElement(
            "div",
            { className: "XuzVGkUX32HNTZOm2QVi" },
            a().createElement(
              "ul",
              { className: "MJFwQkOgMC6fxFTuSgcg" },
              a().createElement(
                "li",
                { className: "hlVX9yggxf1hALWcZCc4" },
                a().createElement(
                  "a",
                  {
                    href: e.common.mainPhoto.href,
                    className: "HhA2F6tpIxDNbli5TWwi",
                  },
                  a().createElement("img", {
                    src: e.common.mainPhoto.src,
                    className: "kLIBEJfdD72N4_VzLYtk",
                  })
                )
              ),
              e.common.smallPhoto.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: "FpKgevi7dspBPSexig8c", key: t },
                  a().createElement(
                    "a",
                    { href: e.href, className: "XPwzGnhYCbsozOkYr3Ig" },
                    2 === t
                      ? a().createElement("img", {
                          src: e.src,
                          className: "qZnvU9Hwvyu6B_gL5Blf",
                        })
                      : a().createElement("img", {
                          src: e.src,
                          className: "XPkriJNeLmE4tU1DrgP9",
                        })
                  )
                );
              })
            ),
            a().createElement(
              "div",
              { className: "MH0H70PV5APGtKeuJvJJ" },
              a().createElement(
                "a",
                {
                  href: e.common.basicInfo.href,
                  className: "iYVF1xa88EYaVF2VVR0g",
                },
                a().createElement(
                  "h3",
                  { className: "bi7e4MmKxezi02MS7A9_" },
                  e.common.basicInfo.title
                ),
                a().createElement(
                  "div",
                  { className: "LOBYhmjtHxG9RLnW7ZEM" },
                  a().createElement("i", { className: "fas fa-arrow-right" })
                )
              )
            ),
            a().createElement(
              "div",
              { className: "S55r7xAhtvAK30JSkZXz" },
              a().createElement(
                "span",
                { className: "nsdBNkm20UbxgnCVclvm" },
                e.common.basicInfo.detail
              ),
              a().createElement(
                "a",
                {
                  href: e.common.basicInfo.moreDetails,
                  className: "DFnobMWXnmEi8UVT7Uj5",
                },
                "더보기"
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
          function t(e) {
            return e + 1;
          }
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
                e.common.together.list.map(function (e, l) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: l },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon_together },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t(l)),
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
                e.common.life.list.map(function (e, l) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: l },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t(l)),
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
                e.common.new.list.map(function (e, l) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: l },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t(l)),
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
                e.common.weekly.list.map(function (e, l) {
                  return a().createElement(
                    "li",
                    { className: w.webtoon, key: l },
                    a().createElement(
                      "a",
                      { href: e.href, className: w.linkWebtoon },
                      a().createElement(
                        "div",
                        { className: w.webtoonDiv },
                        a().createElement("span", { className: w.rank }, t(l)),
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
            { className: "Bn0XRpftswNx9EPiPPsQ" },
            a().createElement(
              "div",
              { className: "YxduKarJd57Gp5tqPOjB" },
              a().createElement(N, { title: e.mainCard.title }),
              a().createElement(k, { subTap: e.mainCard.subTap })
            ),
            a().createElement(
              "div",
              { className: "ug_K208GTX5ib2lFbVx3" },
              "동물" === e.mainCard.title.type &&
                a().createElement(x, { common: e.mainCard.common }),
              "문화재" === e.mainCard.title.type &&
                a().createElement("div", null, "TODO: 불국사 기본정보 및 사진"),
              "웹툰" === e.mainCard.title.type &&
                a().createElement(T, { common: e.mainCard.common }),
              a().createElement(g, { similar: e.mainCard.similar })
            )
          );
        },
        W = "fk6h2I5Scyn4E5ksiByU",
        y = function (e) {
          return a().createElement(
            "div",
            { className: "VCPuPzQy1cJW1KHxD5tE" },
            a().createElement(
              "a",
              {
                href: e.totalWrap.blog.href,
                className: "dewrCRdmmKGtdS2Svokp",
              },
              a().createElement("img", {
                src: e.totalWrap.blog.src,
                className: W,
              }),
              a().createElement(
                "div",
                { className: "qUv3bDzKltNtmCsR1Cqn" },
                e.totalWrap.blog.title
              ),
              a().createElement("div", { className: "pJ8CNecopqgErJ37aF1H" }),
              a().createElement(
                "div",
                { className: "jwGCCIRionnv1uZLYURg" },
                e.totalWrap.blog.time
              )
            ),
            a().createElement(
              "div",
              { className: "Gy3uqA1SMmJ5bpAzGmH9" },
              a().createElement(
                "a",
                { className: "zx2fWclSJA7DpkMzVblc" },
                a().createElement("div", { className: "yz7oujv6IghJEU9eDgvB" })
              )
            ),
            a().createElement(
              "a",
              {
                href: e.totalWrap.text.href,
                className: "lD8b3hLbG1Dc6X2mBz1k",
              },
              e.totalWrap.text.title
            ),
            a().createElement(
              "div",
              { className: "A2CBKMBr9Z6I3SDGsloL" },
              a().createElement(
                "div",
                { className: "hRHQVFt2PNBjyXhkAkXY" },
                a().createElement(
                  "a",
                  {
                    href: e.totalWrap.text.href,
                    className: "nGscgJKPclX8bhVjnEjn",
                  },
                  e.totalWrap.text.detail
                )
              ),
              a().createElement(
                "a",
                {
                  href: e.totalWrap.text.href,
                  className: "tqJId75y36fXrTj5iT8g",
                },
                a().createElement("img", {
                  src: e.totalWrap.text.src,
                  className: W,
                })
              )
            )
          );
        },
        L = function (e) {
          return a().createElement(
            "div",
            { className: "rnRrpK1LCu2c_lO5ZNQg" },
            e.totalTag.list.map(function (e, t) {
              return a().createElement(
                "a",
                { href: e.href, className: "le9TuqTklKEVEGUuL8dD", key: t },
                "#",
                e.title
              );
            })
          );
        },
        B = function (e) {
          return a().createElement(
            "div",
            { className: "AHO9ey9CLWgL1wnPyi23" },
            a().createElement(
              "a",
              { href: e.totalLink.href, className: "ZokQQen41X7cac2KV0_4" },
              e.totalLink.text
            )
          );
        },
        I = function (e) {
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
                  a().createElement(y, { totalWrap: e.totalWrap }),
                  a().createElement(L, { totalTag: e.totalTag }),
                  a().createElement(B, { totalLink: e.totalLink })
                );
              })
            )
          );
        },
        K = {
          container: "B8tU4obS226xap_otu8o",
          title: "O1kfEVJGox2AkhVXB4J1",
          h2: "CZ1coumT_8ij2EJ2i1Fj",
          ul: "ioJKCs6sameAUuZ1HB7M",
          li: "U58yQNi7_CIAPC6jA5Gi",
          totalTagArea: "stqXkY1eankyot5DWcNg",
          totalLinkArea: "z6AbV1L9PqL9JcqKMQYP",
        },
        P = "ce3351zEWCUbaw2YTIkL",
        S = "xJg1YBeIxO0I0GXIFZWE",
        X = "UE64ATcyuKIaUQoix9ct",
        q = "HtQrL85QmKvGRtF0EAkk",
        V = function (e) {
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
                className: P,
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
            "" === e.totalWrap.text.src &&
              a().createElement(
                "div",
                { className: S },
                a().createElement(
                  "div",
                  { className: X },
                  a().createElement(
                    "a",
                    { href: e.totalWrap.text.href, className: q },
                    e.totalWrap.text.detail
                  )
                )
              ),
            "" !== e.totalWrap.text.src &&
              a().createElement(
                "div",
                { className: S },
                a().createElement(
                  "div",
                  { className: X },
                  a().createElement(
                    "a",
                    { href: e.totalWrap.text.href, className: q },
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
                    className: P,
                  })
                )
              )
          );
        },
        H = function (e) {
          return a().createElement(
            "div",
            { className: K.container },
            a().createElement(
              "div",
              { className: K.title },
              a().createElement("h2", { className: K.h2 }, e.news.header.title)
            ),
            a().createElement(
              "ul",
              { className: K.ul },
              e.news.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: K.li, key: t },
                  a().createElement(V, { totalWrap: e.totalWrap })
                );
              })
            ),
            a().createElement(
              "div",
              { className: K.newsButton },
              e.news.button.text
            )
          );
        };
      var z = t(860),
        R = t(986),
        _ = (t(689), t(582)),
        D = t(684),
        G = z.Router(),
        U = z();
      U.use(_()),
        U.use(R.urlencoded({ extended: !1 })),
        U.use(R.json()),
        U.use("/", G),
        G.post("/", function (e, t) {
          var l;
          t.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n<script src=\'https://kit.fontawesome.com/a076d05399.js\' crossorigin=\'anonymous\'></script>\n        <script\n          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n          data-auto-a11y="true"\n        ></script>\n        </head>\n        <body>\n            '.concat(
              D.renderToString(
                ((l = e.body),
                a().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  a().createElement(o, null),
                  a().createElement(
                    "div",
                    { className: "lwMSkhbL51TI_MbpDTZQ" },
                    a().createElement(C, { mainCard: l[0].mainCard }),
                    "동물" === l[0].mainCard.title.type &&
                      a().createElement(I, { view: l[0].view }),
                    "동물" === l[0].mainCard.title.type &&
                      a().createElement(H, { news: l[0].news })
                  )
                ))
              ),
              "\n        </body>\n    </html>\n"
            )
          );
        }),
        U.listen(4e3, function () {
          console.log(
            "Render Server listening at http://localhost:".concat(4e3)
          );
        });
    })();
})();
