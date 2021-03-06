const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        //unique: [true, "Email ya existe, intente con uno diferente"],
        required: [true, "Este campo es requerido"]        
    },
    alias: {
       type: String,
       required: [true, "Este campo es requerido"]
    },
    email: {
        type: String,
        unique: [true, "Email ya existe, intente con uno diferente"],
        required: [true, "Este campo es requerido"]
    },
    password: {
        type: String,
        required: [true, "Este campo es requerido"]
    }, 
    likes: {
        type: Number,
        default: 0
    }
},
{timestamps: true}
);

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

const User = mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator);

module.exports = User;