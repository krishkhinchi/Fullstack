const express = require("express");
const app = express();
const cors = require('cors')
const userRouter = require("./Routes/user.route")
const router = express.Router()

const connectDb = require("./Config/db");
const userModel = require("./Model/userSchema");
const bcrypt = require("bcrypt");
require('dotenv').config()

connectDb();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HEllO");
});

app.use("/user", router)

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      res.send({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (isMatch) {
      res.send({ message: "Login Successfully" });
    }
    res.send({ message: "Invalid Username or Password" });
  } catch (err) {
    res.send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const userDelete = await userModel.findOneAndDelete(id);
  if (userDelete) {
    res.send({ message: "User Deleted Successfully" });
  } else {
    res.send({ message: "User not exist" });
  }
});

app.put("/update/:id", async (req, res) => {
  const itemId = req.params.id;
  const updatedId = req.body;
  const userUpdate = await userModel.findByIdAndUpdate(
    { _id: itemId },
    updatedId,
    { new: true }
  );
  if (userUpdate) {
    res.send({ message: "User Updated Successfully" });
  } else {
    res.send({ message: "User not updated Successfully" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});
