
const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user');
const auth = require("./auth")
const checkauth = require(".//middlewere/checkauth")
const users=require("./users")
var app = express();
app.use(cookieParser());
dotenv.config();
app.use(bodyparser.json());
app.use(express.json());
const encoder=bodyparser.urlencoded();
let PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is up and running on 9000 ...`);
  });  
  app.post("/signup", auth.signup)
  app.post("/login",auth.login)
  app.get("/users",checkauth, users.getallusers)
  app.get("/users/:id",checkauth,users.getuserbyid)
  app.delete("/users/:id",checkauth,users.deletebyid)
  app.put("/users/:id",checkauth,users.updateuserbyid)

 

