const userController = require("../controllers/users");
module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.send("")
    })
    app.get("/usuarios",userController.allUsers);
    app.post("/usuario",userController.createUser);
    app.post("/updateusuario",userController.updateUser);
    app.delete("/deleteusuario",userController.deleteUser);
}