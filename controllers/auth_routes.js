const {response} = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user")

const crearUsuario = async (req, res = response) =>{
    const{email, name, password} = req.body;

    try{
        //verificamos el email 
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                ok:false,
                msg:"El email ya existe en otro usuario"
            })
        }
        //Creamos usuario con el modelo
        const dbuser = new User(req.body);

        //Contraseña
        const randomNumber = bcrypt.genSaltSync(); //Encriptacion
        dbuser.password = bcrypt.hashSync(password, randomNumber); //Se encripta la contraseña

        //Crear usuairo en la BD.
        await dbuser.save();

        //Genera una respuesta, como correcta.
        return res.status(201).json({
            ok:true,
            uid:dbuser.id,
            name
        })

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:"Ocurrio un error."
        })

    }
}

const loginUsuario = (req, res = response)=>{
    return res.json({
        ok:true,
        msg:"Login usuario"
    })
}

const renovarUsuario = (req, res = response)=>{
    return res.json({
        ok:true,
        msg:"renovar usuario"
    })
}

module.exports = {
    crearUsuario, loginUsuario, renovarUsuario
}