const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// app.use("/views", express.static(path.join(__dirname, "views")));

app.listen(PORT, (error) => {
  if (!error) console.log("LISTENING ON PORT: " + PORT);
  else console.log("AN ERROR OCCURRED");
});

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/about", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).sendFile(path.join(__dirname, "views/about.html"));
 
});

app.get("/works", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).sendFile(path.join(__dirname, "views/works.html"));
});
