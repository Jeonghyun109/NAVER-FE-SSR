"use strict";

var axios = require("axios");

var express = require("express");

var cors = require("cors");

var path = require("path");

var config = require("config");

var proxy = require("express-http-proxy");

var bodyParser = require("body-parser");

var webServerPort = config.get("webServerPort");
var renderServerPort = config.get("renderServerPort");
var serverAddress = config.get("serverAddress");
var renderServerAddress = String(serverAddress) + ":" + String(renderServerPort);
var webServerAddress = String(serverAddress) + ":" + String(webServerPort);

var payloadSelector = require("./payloadSelector");

var _require = require("./openApi"),
    UrlShortener = _require.UrlShortener;

var app = express();
app.use(cors());
app.use(express["static"]("dist"));
app.use("/proxy", proxy(renderServerAddress));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res, next) {
  var keys = req.query.keys;

  if (keys !== undefined) {
    keys = keys.split(",");
  }

  payload = payloadSelector.select(keys);
  var options = {
    url: renderServerAddress,
    method: "POST",
    data: payload
  };
  axios(options).then(function (axiosRes) {
    res.send(axiosRes.data);
  })["catch"](next);
});
app.post("/open-apis/url-shortener", function (req, res, next) {
  var url = req.body.url;
  UrlShortener["do"](url).then(function (axiosRes) {
    res.send({
      url: axiosRes.data.result.url
    });
  })["catch"](next);
});
app.listen(webServerPort, function () {
  console.log("Web Server listening at ".concat(webServerAddress));
});