const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3030;

app.use(cors());
app.use(bodyParser.json());

let users = [{ id: 1, username: "test", password: "1234" }];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, token: "fake-jwt-token" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Неправильный логин или пароль" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
