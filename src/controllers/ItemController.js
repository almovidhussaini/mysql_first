const User = require('../../models').User;
const Item = require('../../models').Item;


//Add User Info
const addItem = async (req, res) => {
    try{
        let userInfo = {
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId
        } 
        const item = await Item.create(userInfo)
        res.status(200).send({
            result: "success",
            data: item
        })
    }
    catch(err){
        res.status(500).send({
            result:"error",
            message: err.message});
    }
    
}
const allItem = async (req, res) => {
    try{
        const items = await Item.findAll({
            // include:[User]
            include:{model: User, attributes: ['name']}
            
        })
    res.status(200).send({
        result:'success',
        data : items
    })
    }
    catch(err){
         res.status(500).send({
            result:"error",
            message: err.message});
    }
}

const deleteItems =async (req, res) =>{
    try{
        let id = req.params.id
        const deleteItem = await Item.destroy({
            where: {id: id}
        })
        res.status(200).send({
            result:"success",
            data: deleteItem
})
    }
    catch(err){
        res.status(500).send({
            result:"error",
            message: err.message});
    
    }
}
const updateItem = async (req, res) =>{
    try{
        let id = req.params.id
        const updateItem = await Item.update(req.body, {where: {id:id}})
        res.status(200).send({
            result:"success",
            data: updateItem
        })
    }catch(err){
        res.status(500).send({
            result:"error",
            message: err.message});
    
    }
}

const getItem = async (req, res) =>{
    try{  
         let id = req.params.id
         const getItem = await Item.findOne({where: {id:id}})
         res.status(200).send({
            result: 'success',
            data: getItem
         })
    }

    catch(err){
        res.status(500).send({
            result:"error",
            message: err.message});
    }
}
module.exports = {
    addItem,allItem,deleteItems, updateItem,getItem
}