const express = require("express");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
// initial db
const db = require("./models/");
db.sequelize.sync({ force: true }).then(() => {
  console.log("sequelize db sync");
});

// Router
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server jalan");
});

app.use("/api/v1", loginRouter);
app.use("/api/v1", registerRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running`);
});
