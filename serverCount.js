const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3010, () => {
  console.log(`Server CountDown Running on 3010`);
});
