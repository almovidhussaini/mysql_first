const Movieactor = require('../../models').movie_actors;

const addMovAct = async (req, res) => {

    try{

        let UserInfo = {
            movie_id:req.body.movie_id,
            actor_id:req.body.actor_id
        }

        let AddData = await Movieactor.create(UserInfo)

        res.status(200).send({
       
            success : true,
            data : AddData
        }
            )
    }
    
    catch(err)

    {
        res.status(500).send({
            success : false,
            message : err.message
        })
    }
}

module.exports = {
    addMovAct
}