const express = require("express");
const router = require("./src/routes");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send("Express Server Up");
});

app.use(router);

app.listen(port, (err) => {
  console.log(`http://localhost:${port}`);
  if (err) throw err;
});
