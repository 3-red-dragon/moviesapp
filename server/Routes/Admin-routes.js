const express=require("express");
const { getAllAdmin, signup, login }=require( "../Controllers/Admin-controllers");
const adminrouter= express.Router()
adminrouter.get("/",getAllAdmin)
adminrouter.post("/signup",signup)
adminrouter.post("/login",login)
module.exports= adminrouter;