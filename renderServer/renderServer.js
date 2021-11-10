const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const app = express();
const port = 4000;

app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/handle", (req, res) => {
  res.send("aa");
});

app.listen(port, () => {
  console.log(`Render Server listening at http://localhost:${port}`);
});
