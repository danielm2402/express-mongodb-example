const userModel = require("../models/user");

module.exports={
    allUsers: async (req, res)=>{
        try{
            const users = await userModel.find();
            res.send(users);
        } catch (error){
        
        }
    },

    createUser: async (req,res)=>{
        try{
            const usuario = req.body;
            const user = await userModel.create(usuario);
            res.send(user);
        }catch(error){
            res.status(500).send({
                msg: "El usuario no se pudo crear"
            })
        }
    },
    updateUser: async (req,res)=>{
        try {
            const { id }=req.body;
            const entrada = req.body;
            const userUpdate = await userModel.findOneAndUpdate({ _id: id},entrada)
        } catch (error) {
            
        }
    },
    deleteUser: async (req, res)=>{
        try {
            const { id }=req.body;
            const deleteUser = await userModel.findOneAndDelete({_id: id});
            res.send(deleteUser)
        } catch (error) {
            
        }
    }
}