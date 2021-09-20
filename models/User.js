const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    nombre_apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    estadocivil: {
        type: String,
        required: true
    },
    ocupacion: {
        type: String,
        required: true
    },
    experiencialaboral: {
        type: String,
        required: true
    },
    perfil_github: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    peliculafavorita: {
        type: String,
        required: true
    },
    seriefavorita: {
        type: String,
        required: true
    },
    equipoDefutbol: {
        type: String,
        required: true
    },
    deportefavorito: {
        type: String,
        required: true
    },
    comidafavorita: {
        type: String,
        required: true
    },
    animalfavorito: {
        type: String,
        required: true
    },
    cantantefavorito: {
        type: String,
        required: true
    },
    frutafavorita: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Alumno', UserSchema);