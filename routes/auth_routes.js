const {Router} = require("express");
const { check } = require("express-validator");
const controller = require("../controllers/auth_routes.js");
const {validarCampos} = require("../middlewares/validarCampos.js")

const router = Router();

//crear nuevo usuario
router.post('/new', [

        check('name', 'El nombre de un campo es obligatorio.').not().isEmpty(),
        check('email', 'El email esta mal.').isEmail(),
        validarCampos
    
    ] ,controller.crearUsuario);

//login usuario
router.post('/',[
        check('name', 'El nombre de un campo es obligatorio.').not().isEmpty(),
        check('email', 'El email esta mal.').isEmail(),
        validarCampos
],controller.loginUsuario);

//renovar  usuario
router.get('/renew', controller.renovarUsuario);

module.exports = router;