"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("axios"),
    axios = _require["default"];

var config = require("config");

var querystring = require("querystring");

var UrlShortener = /*#__PURE__*/function () {
  function UrlShortener() {
    _classCallCheck(this, UrlShortener);

    this.url = config.get("urlShortenerAddress");
    this.clientId = config.get("naverClientId");
    this.clientSecret = config.get("naverClientSecret");
  }

  _createClass(UrlShortener, [{
    key: "do",
    value: function _do(url) {
      var data = querystring.stringify({
        url: url
      });
      var options = {
        url: this.url,
        method: "POST",
        data: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-naver-client-id": this.clientId,
          "x-naver-client-secret": this.clientSecret
        }
      };
      return axios(options);
    }
  }]);

  return UrlShortener;
}();

exports.UrlShortener = new UrlShortener();