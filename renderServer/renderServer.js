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
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
          <script
            src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
            data-auto-a11y="true"
          ></script>
          <script>
            function share() {
              var url = encodeURI(encodeURIComponent("${req.body[1]}"));
              var title = encodeURI("공유하기");
              var shareURL = "https://share.naver.com/web/shareView?url=" + url + "&title=" + title;
              document.location = shareURL;
            }
          </script>
        </head>
        <body>
          ${ReactDomServer.renderToString(App(req.body))}
          <script type="text/javascript">
            document.getElementById("shareBtn").innerHTML = '<div onclick="share()"></div>';
          </script>
        </body>
    </html>
`);
});

app.listen(renderServerPort, () => {
  console.log(
    `Render Server listening at ${serverAddress}:${renderServerPort}`
  );
});
