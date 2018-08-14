import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
/* eslint-disable no-console */
var https = require('https');
var fs = require('fs');

const port = 3000;
const app = express();
const compiler = webpack(config);

var sslOptions = {
  key: fs.readFileSync('./tools/key.pem'),
  cert: fs.readFileSync('./tools/cert.pem'),
  passphrase: 'admin' 
};

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`https://localhost:${port}`);
//   }
// });

https.createServer(sslOptions, app).listen(port,function(err)
{
  if (err) {
    console.log(err);
  } else {
    open(`https://localhost:${port}`);
  }
});