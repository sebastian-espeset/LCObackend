const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;
app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.get("/api/instagram", (req, res) => {
  const instaSocial = {
    username: "midiGoblins",
    followers: 100,
    follows: 1000,
    date: format.asString("MM[dd]-hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});
app.get("/api/facebook", (req, res) => {
  const facebookSocial = {
    username: "sebastian",
    followers: 99,
    follows: 1012,
    date: format.asString("MM[dd]-hh:mm:ss", new Date()),
  };

  res.status(200).json(facebookSocial);
});
app.get("/api/linkedIn", (req, res) => {
  const linkedInSocial = {
    username: "sebastian",
    followers: 199,
    follows: 1042,
    date: format.asString("MM[dd]-hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedInSocial);
});
app.get("/api/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
