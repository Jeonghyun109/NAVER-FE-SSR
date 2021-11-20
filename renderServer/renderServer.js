const express = require("express");
const bodyParser = require("body-parser");
const React = require("react");
const cors = require("cors");
const ReactDomServer = require("react-dom/server");
import App from "./components/common/app";

const router = express.Router();
const app = express();
const port = 4000;

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
        </head>
        <body>
            <div id="root">${ReactDomServer.renderToString(App(req.body))}</div>
            <div>hello from server side</div>
        </body>
    </html>
`);
});

app.listen(port, () => {
  console.log(`Render Server listening at http://localhost:${port}`);
});
