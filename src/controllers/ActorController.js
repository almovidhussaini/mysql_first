const Actor = require('../../models').actor;
const Movie = require('../../models').movie;

const addActor = async (req, res) => {

    try{

        let userInfo = {
            name: req.body.name,
        }
        let myActor = Actor.create(userInfo)

        res.status(200).send( {
            success : true,
            data : myActor
        })
    }

    catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        });
    }
}
const getActers = async (req, res) => {
    try{
        const acters = await Actor.findAll({
            include : [Movie]
        } )
        res.status(200).send(
            {
                success : true,
                data : acters
            }
        )
    }
    catch(err){
        res.status(500).send({
            success : false,
            message: err.message
        });
    }
}

module.exports = {
    addActor,getActers
}