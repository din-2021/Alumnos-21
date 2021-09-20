const router = require('express').Router();

const { 
    rutaGet, rutaPost
 } = require('../controllers/user.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/', rutaGet)

router.post('/', rutaPost)


module.exports = router;
