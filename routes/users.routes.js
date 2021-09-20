const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaPut, rutaDelete, deleteUser
 } = require('../controllers/users.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/', rutaGet)

router.post('/', rutaPost)

router.delete('/', rutaDelete)

module.exports = router;