const axios = require("axios")
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("config")
const port = config.get("webServerPort")
const payloadSelector = require("./payloadSelector")

app.use(cors());

app.get("/", (req, res, next) => {
  let keys = req.query.keys
  if (keys !== undefined) {
    keys = keys.split(",")
  }

  payload = payloadSelector.select(keys)

  const options = {
    "url": config.get("renderServerAddress"),
    "method": "POST",
    "data": payload
  };

  axios(options)
    .then(axiosRes => {
      res.send(axiosRes.data)
    })
    .catch(next)
});

app.listen(port, () => {
  console.log(`Web Server listening at http://localhost:${port}`);
});
