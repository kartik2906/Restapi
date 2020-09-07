const Routejob = require("./routes/job.js");

//http request handler
const http = require("http");
const path = require("path");
var cors = require("cors");
const express = require("express");
const app = express();
//file system
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Middleware for bodyParser
app.use(bodyParser.json());

app.use(cors());
//connect to local mongodb
mongoose
  .connect("mongodb://localhost/job", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected"))
  .catch((err) => console.log(err));

// initialize port
const PORT = process.env.PORT || 5000;

//listen to port
app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});

//this is just to get one by by one folder
// app.get("/", function (req, res) {
//   //The Express framework provides a sendFile() method available on the response object which can be used to send static files to the client.
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use("/", Routejob);

//make the whole folder static such public folder
app.use(express.static(path.join(__dirname, "public")));

//Nodejs
// const server = http.createServer(function (req, res) {
//   if (req.url === "/") {
//     //read file
//     //join  __direname = "/Users/kartik/Desktop/jsnode"
//     fs.readFile(path.join(__dirname, "public", "index.html"), function (
//       err,
//       data
//     ) {
//       res.writeHead("200", { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }
// });

// server.listen(PORT, function () {
//   console.log(`server is listening ${PORT}`);
// });
