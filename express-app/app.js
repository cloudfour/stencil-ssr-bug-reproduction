const express = require("express");
const path = require("path");
const fs = require("fs");
const { renderToString } = require("../stencil-components/hydrate");

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine("stencil-ssr", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err);

    const htmlString = content.toString();

    return renderToString(htmlString).then((resp) => {
      return callback(null, resp.html);
    });
  });
});

app.set("view engine", "stencil-ssr");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

module.exports = app;
