const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userModel = require("./model/userSchema");

connectDb();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("HEllO");
});
app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    res.send({ message: "User Exist" });
  }
  const newUser = new userModel({ name, email, password });
  await newUser.save();
  res.send({ message: "User Created Successfully" });
});
app.listen(4000, () => {
  console.log("Server is running... ");
});
