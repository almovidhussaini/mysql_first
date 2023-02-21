const Permission = require('../../models').Permission;
const User = require('../../models').User;
const jwt = require('jsonwebtoken')

const JwtAuthMiddleware =  async function (req,res, next)  {
    


    try{

        const token = req.headers?.authorization.split(' ')[1]
        const userId = jwt.verify(token, process.env.JWT_SECRET_KEY).id;
        
        const myUser = await User.findOne({
            where:{id:userId },
            include: [Permission]
        })

        let permissionVar = myUser.Permissions.find((item=> item.label === req.method))
        if(permissionVar) {
               req.middlewaredata = myUser;
               next();
        } 
        else
         {
            return res.status(500).send({
                error: false,
                message :` This user is not allowed to access this route `
            })
        }

    }catch(err){
        return res.status(500).send({
            error: false,
            message :` This user is not allowed to access this route sd`
        })
    }
}

module.exports = {
    JwtAuthMiddleware
}