const axios = require("axios");
const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("config");
const proxy = require("express-http-proxy");
const bodyParser = require("body-parser");

const webServerPort = config.get("webServerPort");
const renderServerPort = config.get("renderServerPort");
const serverAddress = config.get("serverAddress");
const renderServerAddress =
  String(serverAddress) + ":" + String(renderServerPort);
const webServerAddress = String(serverAddress) + ":" + String(webServerPort);
const payloadSelector = require("./payloadSelector");
const { UrlShortener } = require("./openApi");

const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use("/proxy", proxy(renderServerAddress));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  let keys = req.query.keys;
  let url =
    "http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000" +
    req.originalUrl;
  if (keys !== undefined) {
    keys = keys.split(",");
  }
  payload = payloadSelector.select(keys);

  UrlShortener.do(url)
    .then((axiosRes2) => {
      let shortenedURL = axiosRes2.data.result.url;
      payload.push(shortenedURL);

      const options = {
        url: renderServerAddress,
        method: "POST",
        data: payload,
      };

      axios(options)
        .then((axiosRes) => {
          res.send(axiosRes.data);
        })
        .catch(next);
    })
    .catch(next);
});

app.post("/open-apis/url-shortener", (req, res, next) => {
  let url = req.body.url;
  UrlShortener.do(url)
    .then((axiosRes) => {
      res.send({
        url: axiosRes.data.result.url,
      });
    })
    .catch(next);
});

app.listen(webServerPort, () => {
  console.log(`Web Server listening at ${webServerAddress}`);
});
