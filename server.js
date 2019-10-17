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
// httpServer.listen(3000);

//EXPRESS SOLUTION
const express = require("express");
const app = express();
const port = 3000;
app.get("/", function(req, res) {
  res.send("hello");
});
let quote = randomQuote.toString();
app.post("/submit", function(req, res) {
  res.send(quote);
});

app.listen(port, () => console.log("server listens on" + port));
