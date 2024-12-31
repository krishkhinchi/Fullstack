const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userModel = require("./model/userSchema");

connectDb();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("HEllo");
});

app.post("/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.send({ message: "user Exist" });
    }
    const user = await userModel.create(req.body.name);
    userModel.save();
    return res.send({ message: "User Created Successfully" });
  } catch (err) {
    return res.send(err);
  }
});

app.listen(4000, () => {
  console.log("Server is running... ");
});
