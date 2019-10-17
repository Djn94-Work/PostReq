const http = require("http");
const port = 3000;
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
const data = JSON.stringify({
  quote: randomQuote
});
const options = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const requestHandler = (req, res) => {
  console.log(req.url);
  res.end(randomQuote);
};
const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log("serv listening on port " + port);
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", d => {
      process.stdout.write(d);
    });
  });
  req.on("error", err => {
    throw err;
  });
  req.write(data);
  req.end();
});

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
