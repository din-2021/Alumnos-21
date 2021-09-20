const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/User');
const Alumno = require('../models/User');

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    const users = await Alumno.find({ activo: true }) // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(users);
}

// Controlador que almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
    const { nombre_apellido, edad, domicilio, ciudad, celular, estadocivil, ocupacion, experiencialaboral,perfil_github, hobby,peliculafavorita, seriefavorita,  equipoDefutbol, deportefavorito, comidafavorita, animalfavorito, cantantefavorito, frutafavorita } = req.body;
    const user = new Alumno({nombre_apellido, edad, domicilio, ciudad, celular, estadocivil, ocupacion, experiencialaboral,perfil_github, hobby,peliculafavorita, seriefavorita,  equipoDefutbol, deportefavorito, comidafavorita, animalfavorito, cantantefavorito, frutafavorita});
    await user.save() 

    res.json({msg: 'El alumno fue creado correctamente'});
}

module.exports = ctrlHome;