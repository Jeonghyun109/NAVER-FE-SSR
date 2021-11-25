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
      const l = "kMoZqpvCJlCjKN0CKqx5",
        s = require("@mui/icons-material/Cancel");
      var n = t.n(s);
      const r = require("@mui/icons-material/MicNone");
      var c = t.n(r);
      const m = require("@mui/icons-material/Search");
      var o = t.n(m);
      const i = function (e) {
          return a().createElement(
            "div",
            null,
            a().createElement(
              "div",
              { className: "HAEtXPENSPgnLkX2D4l7" },
              a().createElement(
                "div",
                { className: "tr79q7xoDHZudGbCXq5A" },
                "N"
              ),
              a().createElement("input", {
                className: "NZahLDX5ppDZZ8oZnw39",
                placeholder: "검색어를 입력해주세요.",
                defaultValue: "독립일기 함께 많이보는 웹툰",
              }),
              a().createElement(n(), {
                className: "MGI43Dg4NYlQdyUZR87Y",
                sx: { fontSize: 30 },
              }),
              a().createElement(c(), {
                className: "q1JzWrQIvlXdHkYF55EJ",
                sx: { fontSize: 45 },
              }),
              a().createElement(o(), {
                className: "A4EUc87XT2GuC48iBhiv",
                sx: { fontSize: 45 },
              })
            ),
            a().createElement(
              "div",
              { className: "EOfI4CtZCPKHJoTEhiQH" },
              a().createElement(
                "a",
                { className: "XNMyOfILdSUfP0br59UX", href: "#home" },
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
        E = "h5s_6O7EXORkFS_u1zU9",
        u = function (e) {
          var t = e.props;
          return a().createElement(
            "div",
            { className: "BvloLp_iow7DfUgzMpR3" },
            a().createElement(
              "h2",
              { className: "HFjfCAGmhOGQDAmK3l6L" },
              t.title
            ),
            a().createElement(
              "div",
              { className: "N9SkT_cp1ZO3Vx027jq5" },
              a().createElement("span", { className: E }, t["sub-titles"][0]),
              a().createElement("span", { className: "tLRzbd0J1al3udNyliLl" }),
              a().createElement("span", { className: E }, t["sub-titles"][1])
            )
          );
        },
        p = "WnYc2mj6MmmG7GiMWUSf",
        d = "hJpt9DDNy7k3oJQxDbPC",
        N = function (e) {
          var t = e.props;
          return a().createElement(
            "div",
            { className: "c88R62dRdvOSbQyWB2Af" },
            a().createElement(
              "ul",
              { className: "VeT_4wYALocbBWMBm8ht" },
              t["tab-lists"].map(function (e, t) {
                return e.selected
                  ? a().createElement(
                      "li",
                      { className: p },
                      a().createElement(
                        "a",
                        { className: "Ef7tAgj8vYO_D_bpTZ_9" },
                        a().createElement("span", { className: d }, e.title)
                      )
                    )
                  : a().createElement(
                      "li",
                      { className: p, key: t },
                      a().createElement(
                        "a",
                        { className: "ijxg1F04VEkFjkZD54Gc" },
                        0 !== t &&
                          a().createElement("span", {
                            className: "vfTM1ncmxsFOn63fdTLR",
                          }),
                        a().createElement("span", { className: d }, e.title)
                      )
                    );
              })
            )
          );
        },
        f = {
          commonContentArea: "RMD_lMZDCjCGq3wqhtLF",
          photoList: "nEnUQAuWQcf9WznFPSYQ",
          mainPhoto: "cuwYPvtAraFSTuPqDW5b",
          linkMainPhoto: "lxpDLvee_tk8lTg5we53",
          mainPhotoImg: "LZyoITbxO3DaTdse4mz1",
          smallPhoto: "xj7ylC3P_evKXM35eMb5",
          linkSmallPhoto: "T1fjaE8SaH1VcYWZYzzp",
          smallPhotoImg: "MKDfXeZdFuo2aXPzy1j5",
          smallPhotoRoundImg: "XVGD2lhVjmJIGhsR_5CC",
          middleTitle: "nzSWK3Ocn968UxJHrEWD",
          linkMiddleTitle: "c6FyDN3yb4XIYGig60NF",
          h3: "oJ58mbWpoTSFSrIHROyY",
          detailInfo: "C4O1pZWFOTbpVN4MK47Y",
          text: "JiO2P_XcyBsvxoHTfV1S",
          a: "pzK3sYsh07WyxeLBn9kA",
          ul: "pKlfOOk0qWxOXYloy6km",
          webtoonList: "eNz52tBcAsMEwTH99dDe",
          webtoonElem: "uHFNn_s_aDQNhAbxgP4j",
        },
        h = function (e) {
          var t = e.props;
          return a().createElement(
            "div",
            { className: f.commonContentArea },
            t.rankings.map(function (e, t) {
              return a().createElement(
                "div",
                null,
                a().createElement(
                  "div",
                  { className: f.middleTitle },
                  a().createElement(
                    "a",
                    { className: f.linkMiddleTitle },
                    a().createElement("h3", { className: f.h3 }, e.name)
                  )
                ),
                a().createElement(
                  "div",
                  { className: f.detailInfo },
                  a().createElement(
                    "ul",
                    { className: f.webtoonList },
                    e.list.map(function (e, t) {
                      return a().createElement(
                        "li",
                        { className: f.webtoonElem, key: t },
                        a().createElement("span", { className: "rank" }, t + 1),
                        a().createElement(
                          "a",
                          { className: f.webtoonLink },
                          a().createElement("imag", {
                            src: e.image,
                            className: f.webtoonImg,
                          })
                        ),
                        a().createElement(
                          "div",
                          { class: "title_box" },
                          a().createElement(
                            "strong",
                            { class: "name type_ell_2" },
                            a().createElement("a", { href: e.url }, e.title)
                          ),
                          a().createElement(
                            "span",
                            { class: "cartoonist" },
                            e["sub-title"]
                          ),
                          a().createElement(
                            "div",
                            { class: "bottom_info" },
                            a().createElement("span", { class: "divide_line" }),
                            a().createElement(
                              "span",
                              { class: "preference" },
                              "선호도 ",
                              e.preference,
                              "%"
                            )
                          )
                        )
                      );
                    })
                  )
                )
              );
            })
          );
        },
        v = function (e) {
          var t = e.props;
          return a().createElement(
            "div",
            { className: "wv4KY8QZ6JBGPnDpaSCK" },
            a().createElement(
              "div",
              { className: "KmXpkryWr_uRXiPMn477" },
              a().createElement(u, { props: t }),
              a().createElement(N, { props: t })
            ),
            a().createElement(
              "div",
              { className: "HRsNGFPiUxUWfFl34uE9" },
              a().createElement(h, { props: t })
            )
          );
        };
      require("@mui/system"), require("@mui/icons-material");
      var b = t(860),
        x = t(986),
        y = (t(689), t(582)),
        k = t(684),
        D = b.Router(),
        P = b();
      P.use(y()),
        P.use(x.urlencoded({ extended: !1 })),
        P.use(x.json()),
        P.use("/", D),
        D.post("/", function (e, t) {
          var l;
          t.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n        <script\n          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n          data-auto-a11y="true"\n        ></script>\n        </head>\n        <body>\n            '.concat(
              k.renderToString(
                ((l = e.body),
                a().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  a().createElement(i, null),
                  a().createElement(v, { props: l[1] })
                ))
              ),
              "\n        </body>\n    </html>\n"
            )
          );
        }),
        P.listen(4e3, function () {
          console.log(
            "Render Server listening at http://localhost:".concat(4e3)
          );
        });
    })();
})();
