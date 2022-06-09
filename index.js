const express = require("express");
const router = require("./src/routes");
const app = express();

const port = process.env.PORT || 5000;

app.use(router);
app.listen(port, (err) => {
  if (err) throw err;
});
