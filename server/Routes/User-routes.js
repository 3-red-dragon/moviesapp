const express=require("express");
const{ getAllUser, signup, login } =require( "../Controllers/User-controller");
const userrouter= express.Router()
userrouter.get("/",getAllUser)
userrouter.post("/signup",signup)
userrouter.post("/login",login)
module.exports =userrouter;