const Permission = require('../../models').Permission;
const User = require('../../models').User;

const UserPermission = async function (req,res, next) {
    try {
        const userId = req.body.userId;

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

    } catch(err) {
        return res.status(500).send(err.message)
    }
}

module.exports = {
    UserPermission
}
