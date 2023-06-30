const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String,
        required: 'This field is required.'
    },
    category: {
        // type: Category,
        type: String, /// ???
        required: 'This field is required.'
    },
    link: {
        type: String
    },
    ingredients: {
        type: Array,
        required: 'This field is required.',
    },
    tools: {
        type: Array,
        required: 'This field is required.',
    },
    steps: {
        type: Array,
        required: 'This field is required.',
    },
    tags: {
        type: Array,
        required: 'This field is required.',
    },
    totalTime: {
        type: Number,
        min: 0,
        required: 'This field is required.',
    },
    preparationTime: {
        type: Number,
        min: 0,
        required: 'This field is required.',
    },
    cookingTime: {
        type: Number,
        min: 0,
        required: 'This field is required.',
    },
    level: {
        type: String,
        enum: ['Débutant', 'Intermédiaire', 'Expert'],
        required: 'This field is required.',
    },
    numberPerson: {
        type: Number,
        min: 0,
        required: 'This field is required.',
    },
    pictures: {
        type: Array, /// ???
        required: 'This field is required.',
    },
    favorite: {
        type: Boolean,
        required: 'This field is required.',
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);