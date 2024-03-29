const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    }
});
const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre){
    const schema = Joi.object({name: Joi.string().min(3).max(15).required()});
    return schema.validate(genre);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;