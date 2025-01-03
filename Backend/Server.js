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

app.delete('/delete/:id',async(req,res)=>{
  const id=req.params.id;
  const userDelete=await userModel.findOneAndDelete(id)
  if(userDelete){
    res.send({message:"User Deleted Successfully"})
  } else{
  res.send({message:"User not exist"})
  }
})

app.listen(3000, () => {
  console.log("Server is running... ");
});
