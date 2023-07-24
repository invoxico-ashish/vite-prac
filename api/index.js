const express = require("express");
const app = express();
const cors = require("cors");
const Users = require("./Users");
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];
  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(Search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});
app.listen(8000, (err) => {
  if (!err) {
    console.log("Server in running");
  } else {
    console.log(err);
  }
});
