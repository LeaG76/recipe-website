const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */
router.get('/', recipeController.homePage);
router.get('/about', recipeController.aboutPage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipes', recipeController.exploreRecipes);

module.exports = router;