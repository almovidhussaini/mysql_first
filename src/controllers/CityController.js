const City = require('../../models').city;

const addCity = async(req,res) => {
    try{
        let addCity = await City.create(req.body)
        res.status(200).send({
            success: true,
            data: addCity
        })

    }
    catch(err){
        res.status(500).send({
            success : false,
            message : err.message
        });
    }
}

module.exports = {
    addCity
}