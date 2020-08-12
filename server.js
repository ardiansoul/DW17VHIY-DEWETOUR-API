const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// Router
const loginRouter = require("./routes/loginRouter");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server jalan");
});

app.use("/api/v1", loginRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running`);
});
