const Theatre = require('../Models/Theatre');
const getAllTheatres = async(req, res, next)=>{
    let theatres;
    try{
        theatres = await Theatre.find();
    }catch(err){
        console.log(err);
    }
    if(!theatres){
        return res.status(404).json({message:"No theatres found"})
    }
    return res.status(200).json(theatres)
};
const getById = async(req,res,next)=>{
    const id=req.params.id;
    let theatre;
    try{
        theatre = await Theatre.findById(id);
    } catch(err){
        console.log(err); 
    }
    if(!theatre){
        return res.status(404).json({message:"No Theatre found"})
    }
    return res.status(200).json({theatre})
}
const addTheatre = async(req, res, next)=>{
    const {name,image,theaterId,price,slot1,
    slot2,slot3,slot4,} = req.body;
    let theatres;
    try{
        theatres = new Theatre({
            name,image,theaterId,price,slot1,
    slot2,slot3,slot4,
        });
        await theatres.save();
    }catch(err){
        console.log(err);
    }
    if(!theatres){
        return res.status(500).json({message:'Unable to Add Theatre'})
    }
    return res.status(201).json({theatres});
};
const updateTheatre = async(req,res,next)=>{
    const id = req.params.id;
    const {name,image,theaterId,price,slot1,
        slot2,slot3,slot4,} = req.body
    let theatres;
    try{
        theatres = await Theatre.findByIdAndUpdate(id,{
            name,image,theaterId,price,slot1,
    slot2,slot3,slot4,
        });
        theatres = await theatres.save();
    }catch (err){
        console.log(err);
    }
    if(!theatres){
        return res.status(404).json({message:"Unable to Update By this ID"})
    }
    return res.status(200).json({theatres})
}
const deleteTheatre = async(req, res, next)=>{
    const id = req.params.id;
    let theatres;
    try{
        theatres = await Theatre.findByIdAndRemove(id);
    }catch (err){
        console.log(err);
    }
    if(!theatres){
        return res.status(404).json({message:"Unable to Delete By this ID"})
    }
    return res.status(200).json({message:"theatre successfully Deleted"})
}
exports.addTheatre = addTheatre;
exports.getAllTheatres = getAllTheatres;
exports.getById = getById;
exports.updateTheatre = updateTheatre;
exports.deleteTheatre = deleteTheatre;