const Student = require('../../models').student;
const City = require('../../models').city;

const AddStudent = async(req,res) => {
    try{
        let myData = await Student.create(req.body)
        res.status(200).send(myData )
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}

const StudentInnerJoin = async(req,res) => {
    try{
        let mydata = await Student.findAll({
            include:[City]
            // include:{model: City, required: true}
        })
        // let mydata = await City.findAll({
        //     include:[Student]
        //     // include:{model: Student, required: true}
        // })
        res.status(200).send(mydata)
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

module.exports = {
    AddStudent,StudentInnerJoin
}