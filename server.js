const express = require("express");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
// initial db
// const db = require("./models/");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("sequelize db sync");
// });
app.use(bodyParser.json());

// Router
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const userRouter = require("./routes/userRouter");
const countryRouter = require("./routes/countryRouter");
const tripRouter = require("./routes/tripRouter");
const transactionRouter = require("./routes/transactionRouter");

app.get("/", (req, res) => {
  res.send("server jalan");
});

app.use("/api/v1", loginRouter);
app.use("/api/v1", registerRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", countryRouter);
app.use("/api/v1", tripRouter);
app.use("/api/v1", transactionRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running`);
});
