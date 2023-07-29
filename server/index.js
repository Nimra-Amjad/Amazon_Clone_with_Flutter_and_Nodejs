const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.js");
const cors = require("cors");

const PORT = 3000;
const app = express();

//middleware
app.use(express.json());
app.use(authRouter);
app.use(
  cors({
    origin: "*",
    allowedHeaders: "X-Requested-With, Content-Type, auth-token",
  })
);

//Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/AmazonClone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log("connected at port " + PORT);
});
