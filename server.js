// const http = require("http");
// const hostname = "127.0.0.1";
// const url = require("url");
// const port = 3000;
const array = [
  "A good ol movie quote",
  "Honey? Wheeeere's my super suit??",
  "They speak English in What?",
  "Why come you don't have your tattoo?",
  "Me, me, me......me, too.",
  "You betta watch yaself the way ya touch my crispy bacon",
  "Caaaaalifornia loooove",
  "You're killin me, smalls",
  "Nearly two million Americans are incarcerated In the prison system, prison system of the U.S.",
  "You are about to witness the strength of street knowledge"
];
let randomQuote = array[Math.floor(Math.random() * 9)];
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("content-type", "text/plain");
//   res.end(randomQuote);
// });
// server.listen(port, hostname, () => {
//   console.log("server successfully listening at port" + port);
//   const data = JSON.stringify({
//     quote: randomQuote
//   });
//   const options = {
//     host: "127.0.0.1",
//     path: "/",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Content-Length": data.length
//     }
//   };
//   const req = http.request(options, res => {
//     res.on("data", function(data) {
//       process.stdout.write(data);
//     });
//   });

//   req.write(data);
//   req.end();
// });
// const httpServer = http.createServer(function(req, res) {
//   const reqUrlString = req.url;
//   const pathName = url.parse(reqUrlString, true, false).pathname;
//   if ("/login" == pathName) {
//     const method = req.method;
//     if ("POST" == method) {
//       req.on("data", function(chunk) {
//         let postData = "";
//         postData += chunk;
//       });
//       req.on("end", function() {
//         console.log("client post");
//         let postDataObject = JSON.parse(postData);
//         let userName = postDataObject.user_name;
//         let password = postDataObject.password;
//         res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
//       });
//     }
//   }
// });
// httpServer.listen(8888);

// console.log("web server listening on 8888");

const express = require("express");
const app = express();
// app.use(express.bodyParser());
const PORT = 8000;
const router = express.Router();
app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);

router.get("/", function(req, res) {
  res.send("get route");
});

router.post("/submit", function(req, res) {
  console.log(randomQuote);
  res.send(randomQuote);
});

app.listen(PORT, () => console.log("server listens"));
