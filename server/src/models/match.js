const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');
const Player = require('./player');

const Schema = mongoose.Schema;

const MatchSchema = new Schema({
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
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  }],
  createdAt: String
});

MatchSchema.plugin(idValidator);

module.exports = mongoose.model('matches', MatchSchema);