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
const userRouter = require("./routes/userRouter");
const countryRouter = require("./routes/countryRouter");
const tripRouter = require("./routes/tripRouter");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server jalan");
});

app.use("/api/v1", loginRouter);
app.use("/api/v1", registerRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", countryRouter);
app.use("/api/v1", tripRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running`);
});
