const path = require("path");
const express = require("express");
const app = express();
const config = require("./config");
const sassMiddleware = require("node-sass-middleware");

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.use(
  sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css/"),
    outputStyle: "compressed",
    prefix: "/css"
  })
);

app.use(express.static("public"));

app.listen(config.server.port, config.server.host);
