const Admin =require("../Models/Admin")
const bcrypt =require("bcryptjs");

 const getAllAdmin=async(req,res,next)=>{
  let adminusers;
  try{
    adminusers=await Admin.find()
  }catch(err){
    console.log(err)
  }
  if(!adminusers){
    return res.status(404).json({message:"No User Found"})
  }
  return res.status(200).json({adminusers})
}

 const signup = async(req,res,next)=>{
  const {name, email, password}=req.body
  let existingAdmin;
  try{
    existingAdmin = await Admin.findOne({email})
  }catch(err){
    return console.log(err)
  }
  if(existingAdmin){
    return res.status(400).json({message:"User Already Exists, Please Login"})
  }

  const hashedPassword =bcrypt.hashSync(password)
  const admin = new Admin({
    name,email,password:hashedPassword
  })
  try{
    admin.save()
  }catch(err){
    return console.log(err)
  }
  return res.status(201).json({admin})
}

 const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingAdmin) {
    return res.status(404).json({ message: "Couldnt Find User By This Email" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingAdmin.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull",user: existingAdmin});
};
exports.getAllAdmin=getAllAdmin;
// exports.isPasswordCorrect=this.isPasswordCorrect;
exports.signup=signup;
exports.login=login;