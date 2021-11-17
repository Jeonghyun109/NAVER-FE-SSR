const express = require("express");
const bodyParser = require("body-parser");
const React = require("react");
const cors = require("cors");
const ReactDomServer = require("react-dom/server");
import App from "./components/common/app";
import { renderToNodeStream } from "react-dom/server";
import styled, { ServerStyleSheet } from "styled-components";

const router = express.Router();
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

router.post("/", (req, res) => {
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(<App body={req.body} />);
  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  stream.pipe(res, { end: false });
});

app.listen(port, () => {
  console.log(`Render Server listening at http://localhost:${port}`);
});
