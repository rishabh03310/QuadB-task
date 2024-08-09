const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const router = require("./src/routes/route");
const cors =require("cors");

app.use(cors());

//here we are using inbuiltmiddleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Here we are creating the connection between mongodb and express..
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
//here we are creating middleware for sending request coming from the /
app.use("/", router);

//Here we are creating the server
app.listen(process.env.PORT, () => {
  console.log(`The Backend server listining at PORT ${process.env.PORT}`);
});



module.exports = router;
