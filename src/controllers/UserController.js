const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const User = require('../../models').users;
const Item = require('../../models').Item;
const Permission = require('../../models').Permission;

const path = require('path')
const {resolve} = require('path');
//Add User Info
const addUser = async (req, res) => {
    try{
        let userInfo = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            imageUrl: req.body.imageName
        } 
        const user = await User.create(userInfo)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}
const allUsers = async (req, res) => {
    try{
        const users = await User.findAll({
            include: [Item]
        })
    res.status(200).send(users)
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}

const userImage = async (req, res) => {
    try {
        let id = req.params.id
        const user =  await User.findOne({
            where:{ id: id}
        })
        if(user){
            let imageName = user.imageUrl
            let picturePath =  resolve(`D:/migration/pictures/${imageName}`)
            res.sendFile(picturePath)
        }
        else{
            res.send({
                message: 'Invalid UserId '
            })
        }
    }

    catch(err)
    {
        res.status(500).send({ message: err.message});
    }
}
const updateUser = async (req, res) =>{
    try{
        let id = req.params.id
        const updateUser = await User.update(req.body, {where: {id:id}})
        res.status(200).send('item Updated')
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
const loginUser = async (req, res) =>{
    const jwtToken = process.env.JWT_SECRET_KEY
    try{
        const getUser = await User.findOne({where: {email : req.body.email, password : req.body.password}})
        if(getUser){

        const token = jwt.sign({id: getUser.id, name : getUser.name}, jwtToken, {
            expiresIn: '1d' });
      
        res.status(200).send({user : getUser, jwtToken : token});
        }
        else
        {
        res.status(200).send({message:'invalid Password or Login'});
        }
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}
const getUsers = async (req, res) => {
    res.send(req.middlewaredata)
}
const deleteUser =async (req, res) =>{
    try{
        let id = req.params.id
        const deleteItem = await User.destroy({
            where: {id: id}
        })
        res.status(200).send(deleteItem)
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}
module.exports = {
    addUser,allUsers,deleteUser,updateUser,loginUser,getUsers,userImage
}