
const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const bodyparser = require("body-parser");
const  jwt = require("jsonwebtoken")
const checkauth = require("../middlewere/checkauth")
const { Router } = require("express");
const encoder=bodyparser.urlencoded();
const {con}=require("../db")
var app = express();
app.use(express.json());

module.exports = router;