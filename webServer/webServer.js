const axios = require("axios")
const express = require("express")
const cors = require("cors")
const path = require("path")
const config = require("config")
const proxy = require("express-http-proxy")
const bodyParser = require('body-parser')

const port = config.get("webServerPort")
const renderServerAddress = config.get("renderServerAddress")
const payloadSelector = require("./payloadSelector")
const { UrlShortener } = require("./openApi")


const app = express()
app.use(cors())
app.use("/proxy", proxy(renderServerAddress))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res, next) => {
  let keys = req.query.keys
  if (keys !== undefined) {
    keys = keys.split(",")
  }

  payload = payloadSelector.select(keys)

  const options = {
    "url": renderServerAddress,
    "method": "POST",
    "data": payload
  };

  axios(options)
    .then((axiosRes) => {
      res.send(axiosRes.data);
    })
    .catch(next)
})

app.post("/open-apis/url-shortener", (req, res, next) => {
  let url = req.body.url
  UrlShortener.do(url)
    .then(axiosRes => {
      res.send({
        "url": axiosRes.data.result.url
      })
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response.data)
      }
      next(err)
    })
})

app.listen(port, () => {
  console.log(`Web Server listening at http://localhost:${port}`);
})
