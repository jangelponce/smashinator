const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: { 
        type: String,
        minLength: [4, 'El nombre debe contener al menos 3 caracteres'],
        maxLength: [16, 'El nombre no debe pasar de 16 caracteres'],
        required:  [true, 'El nombre no debe estar en blanco']
    },
    status: { 
        type: String, 
        enum: {
            values: [
                'active',
                'disabled'
            ],
            message: '{VALUE} no es una opcion valida'
        }
    },
    createdAt: String
});

module.exports = mongoose.model('players', PlayerSchema);