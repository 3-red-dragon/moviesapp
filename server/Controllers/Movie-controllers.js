const Movie = require('../Models/Movie');
const getAllMovies = async(req, res, next)=>{
    let movies;
    try{
        movies = await Movie.find();
    }catch(err){
        console.log(err);
    }
    if(!movies){
        return res.status(404).json({message:"No movies found"})
    }
    return res.status(200).json(movies)
    // console.log([movies])
};
const getById = async(req,res,next)=>{
    const id=req.params.id;
    let movie;
    try{
        movie = await Movie.findById(id);
    } catch(err){
        console.log(err); 
    }
    if(!movie){
        return res.status(404).json({message:"No movie found"})
    }
    return res.status(200).json({movie})
}
const addmovie = async(req, res, next)=>{
    const {name,description,image,image2,about,trailer,
        cast1,cast2,cast3,cast4,cast5,cast6,castName1,
        castName2,castName3,castName4,castName5,castName6,} = req.body;
    let movie;
    try{
        movie = new Movie({
            name,description,image,image2,about,trailer,
    cast1,cast2,cast3,cast4,cast5,cast6,castName1,
    castName2,castName3,castName4,castName5,castName6,
        });
        await movie.save();
    }catch(err){
        console.log(err);
    }
    if(!movie){
        return res.status(500).json({message:'Unable to Add'})
    }
    return res.status(201).json({movie});
};
const updatemovie = async(req,res,next)=>{
    const id = req.params.id;
    const {name,description,image,image2,about,trailer,
    cast1,cast2,cast3,cast4,cast5,cast6,castName1,
    castName2,castName3,castName4,castName5,castName6,} = req.body
    let movie;
    try{
        movie = await Movie.findByIdAndUpdate(id,{
            name,description,image,
            image2,about,trailer,
            cast1,cast2,cast3,cast4,cast5,cast6,castName1,
            castName2,castName3,castName4,castName5,castName6,
        });
        movie = await movie.save();
    }catch (err){
        console.log(err);
    }
    if(!movie){
        return res.status(404).json({message:"Unable to Update By this ID"})
    }
    return res.status(200).json({movie})
}
const deletemovie = async(req, res, next)=>{
    const id = req.params.id;
    let movie;
    try{
        movie = await Movie.findByIdAndRemove(id);
    }catch (err){
        console.log(err);
    }
    if(!movie){
        return res.status(404).json({message:"Unable to Delete By this ID"})
    }
    return res.status(200).json({message:"movie successfully Deleted"})
}
exports.addmovie = addmovie;
exports.getAllMovies = getAllMovies;
exports.getById = getById;
exports.updatemovie = updatemovie;
exports.deletemovie = deletemovie;

