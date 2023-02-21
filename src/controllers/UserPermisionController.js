// const  User= require('../../models').user;
// const Permission = require('../../models').permission;
const UserPermission = require('../../models').User_permission

const createUserPermission = async(req,res) => {
    try{
        let myData = await UserPermission.create(req.body)
        res.status(200).send(myData)
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {
    createUserPermission
}