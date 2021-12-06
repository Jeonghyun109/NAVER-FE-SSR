const express = require("express");
const bodyParser = require("body-parser");
const React = require("react");
const cors = require("cors");
const config = require("config");
const ReactDomServer = require("react-dom/server");
import App from "./components/common/app";

const serverAddress = config.get("serverAddress");
const renderServerPort = config.get("renderServerPort");
const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

router.post("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
        <head>
        <link rel="stylesheet" href="style.css">
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <script
          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
          data-auto-a11y="true"
        ></script>
        </head>
        <body>
            ${ReactDomServer.renderToString(App(req.body))}
        </body>
    </html>
`);
});

app.listen(renderServerPort, () => {
  console.log(
    `Render Server listening at ${serverAddress}:${renderServerPort}`
  );
});
