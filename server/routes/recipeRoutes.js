const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */
router.get('/', recipeController.homePage);
router.get('/about', recipeController.aboutPage);
router.get('/recipes', recipeController.exploreRecipes);
router.get('/latest', recipeController.exploreLatest);
router.get('/categories', recipeController.exploreCategories);

module.exports = router;