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
    t = {};
  function a(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var l = (t[s] = { exports: {} });
    return e[s](l, l.exports, a), l.exports;
  }
  (a.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, { a: t }), t;
  }),
    (a.d = (e, t) => {
      for (var s in t)
        a.o(t, s) &&
          !a.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = a(689),
        t = a.n(e);
      const s = "uYwjI_rKXJuHmvxEqSMw",
        r = function (e) {
          return t().createElement(
            "div",
            { className: "IJgUuVJYdPFmevAo_EBP" },
            t().createElement(
              "h2",
              { className: "TA0XCp6qqO7aixSdVRtW" },
              "샴(샤미즈)"
            ),
            t().createElement(
              "div",
              { className: "dEKB611RrCsk17muxQ9_" },
              t().createElement("span", { className: s }, "동물"),
              t().createElement("span", { className: "fvT_LBLrTxED5zzDUNYF" }),
              t().createElement("span", { className: s }, "Siamese cat")
            )
          );
        },
        l = "bbzweMyHmoGkLwjwzpjS",
        n = "wLmMJzeaG4MTowxsPPoh",
        c = function (e) {
          return t().createElement(
            "div",
            { className: "Yn8o3_iq5M2ffADmx8IO" },
            t().createElement(
              "div",
              { className: "PnezvvKkxPYNQQg4L3LN" },
              t().createElement(
                "ul",
                { className: "LxiTfSXuipp6xHc7jNXq" },
                t().createElement(
                  "li",
                  { className: "linxdBR0cwM9kNJNNAma" },
                  t().createElement(
                    "a",
                    { className: "T9eslrUHzITuXoKMqk2f" },
                    t().createElement("span", { className: l }, "전체")
                  )
                ),
                t().createElement(
                  "li",
                  { className: "gmTpnH7DIABKZEUYfWVg" },
                  t().createElement(
                    "a",
                    { className: "Rxbd5HrOykYZZ_zh5jWl" },
                    t().createElement("span", { className: l }, "기본정보")
                  )
                ),
                t().createElement(
                  "li",
                  { className: "y4UfznF6xf6pjlNjQkvj" },
                  t().createElement(
                    "a",
                    { className: "_0qNH_BwejmuEh0GkPN8" },
                    t().createElement("span", { className: n }),
                    t().createElement("span", { className: l }, "포토")
                  )
                ),
                t().createElement(
                  "li",
                  { className: "kwRIszHnd7a1t8owZ0Pb" },
                  t().createElement(
                    "a",
                    { className: "DIVf5RvvO9Uxwfjh4rfm" },
                    t().createElement("span", { className: n }),
                    t().createElement(
                      "span",
                      { className: l },
                      "함께 찾은 품종"
                    )
                  )
                )
              )
            )
          );
        },
        m = "VOP82NBLTNk2tw2v6n7R",
        i = function (e) {
          return t().createElement(
            "div",
            { className: "VN_xGneFY7CiSVyHwmGg" },
            t().createElement(
              "ul",
              { className: "gQakZarAHjnJPMIovW5g" },
              t().createElement(
                "li",
                { className: "Jjnwn0ZrYm1yb09Zl9eM" },
                t().createElement(
                  "a",
                  { className: "UL4PXhWJCe1m4SWZVbFQ" },
                  t().createElement("img", {
                    src: "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210110_224%2F1610262906543iYaiJ_JPEG%2F46398515690451726_622079393.jpeg",
                    style: {
                      width: "260.6px",
                      height: "260.6px",
                      borderRadius: "8px 0 0 0",
                    },
                  })
                )
              ),
              t().createElement("li", { className: m }, "1"),
              t().createElement("li", { className: m }, "2"),
              t().createElement(
                "li",
                { className: m },
                t().createElement("img", {
                  src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200401_12%2F1585730100281Sa5Vj_JPEG%2F21865709587741555_647870209.jpg",
                  style: {
                    width: "129.8px",
                    height: "129.8px",
                    borderRadius: "0 8px 0 0",
                  },
                })
              ),
              t().createElement("li", { className: m }, "4"),
              t().createElement("li", { className: m }, "5"),
              t().createElement("li", { className: m }, "6")
            )
          );
        },
        o = function (e) {
          return t().createElement(
            "div",
            { className: "Jv1iP6WEkuW2IjUDXNv5" },
            t().createElement(
              "div",
              { className: "ftcldmqCiOo0kRD9LTS2" },
              t().createElement(r, null),
              t().createElement(c, null)
            ),
            t().createElement(
              "div",
              { className: "TKOkH316u9qT8FY4mxY_" },
              t().createElement(i, null),
              t().createElement(
                "div",
                { className: "oZBz4AcFQRfX07Qi0hyv" },
                "xy"
              )
            )
          );
        },
        E = function (e) {
          return t().createElement("div", null, "News");
        };
      var u = a(860),
        d = a(986),
        N = (a(689), a(582)),
        p = a(684),
        v = u.Router(),
        h = u();
      h.use(N()),
        h.use(d.urlencoded({ extended: !1 })),
        h.use(d.json()),
        h.use("/", v),
        v.post("/", function (e, a) {
          a.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n        </head>\n        <body>\n            <div id="root">'.concat(
              p.renderToString(
                (e.body,
                t().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  t().createElement(o, null),
                  t().createElement(E, null)
                ))
              ),
              "</div>\n            <div>hello from server side</div>\n        </body>\n    </html>\n"
            )
          );
        }),
        h.listen(4e3, function () {
          console.log(
            "Render Server listening at http://localhost:".concat(4e3)
          );
        });
    })();
})();
