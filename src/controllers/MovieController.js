const Movie = require('../../models').movie;
const Actor = require('../../models').actor;

const addMovie = async (req, res) => {
    try{
        let userInfo = {
            title: req.body.title,
        }
        let myMovie = await Movie.create(userInfo)
        res.status(200).send(myMovie)
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}
const getMovies = async (req, res) => {
    try{
        const movies = await Movie.findAll({
            include:[Actor]
        } )
        res.status(200).send(movies)
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    addMovie, getMovies
}