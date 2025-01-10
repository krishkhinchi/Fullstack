const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userModel = require("./model/userSchema");
const bcrypt = require("bcrypt");

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
  const salt = await bcrypt.genSalt();
  console.log(salt);
  const hash_password = await bcrypt.hash(password, salt);
  const newUser = new userModel({ name, email, password: hash_password });
  await newUser.save();
  res.send({ message: "User Created Successfully" });
});

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

app.listen(3000, () => {
  console.log("Server is running... ");
});
