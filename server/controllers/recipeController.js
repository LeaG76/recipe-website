//require('../models/database');
//const Category = require('../models/Category');

const aboutPictures = require('../../data/about-pictures.json');

/**
 * GET /
 * Homepage
 */
exports.homePage = async(req, res) => {
    try {
        const limitNumber = 5;
        //const categories = await Category.find({}).limit(limitNumber);
        res.render('index', {title: "PaléoDélices - Accueil", currentPage: "home"});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

/**
 * GET /about
 * About
 */
exports.aboutPage = async(req, res) => {
    try {
        const json = JSON.parse(JSON.stringify(aboutPictures));
        const aboutPicturesData = json.map(data => [data.url, data.name]);
        breadcrumbsData = [
            ["À Propos", "about"]
        ];
        res.render('about', {title: "PaléoDélices - À propos", currentPage: "about", breadcrumbs: breadcrumbsData, aboutpictures: aboutPicturesData});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

/**
 * GET /recipes
 * All recipes in alphabetical order 
 */
exports.exploreRecipes = async(req, res) => {
    try {
        breadcrumbsData = [
            ["Recettes", "recipes"],
            ["Toutes les recettes", "recipes"]
        ];
        res.render('recipes', {title: "PaléoDélices - Recettes", currentPage: "recipes", breadcrumbs: breadcrumbsData});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

/**
 * GET /latest
 * All recipes, from the most recent to the oldest
 */
exports.exploreLatest = async(req, res) => {
    try {
        breadcrumbsData = [
            ["Recettes", "recipes"],
            ["Dernières recettes", "latest"]
        ];
        res.render('recipes', {title: "PaléoDélices - Recettes", currentPage: "recipes", breadcrumbs: breadcrumbsData});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async(req, res) => {
    try {
        breadcrumbsData = [
            ["Recettes", "recipes"],
            ["Catégories", "categories"]
        ];
        res.render('categories', {title: "PaléoDélices - Catégories", currentPage: "recipes", breadcrumbs: breadcrumbsData});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

/**
 * GET /categories/:id
 * Categories by Id
 */
exports.exploreCategoriesById = async(req, res) => {
    try {
        const categoryId = req.params.id;
        //const category = await Category.find({'category': categoryId});
        breadcrumbsData = [
            ["Recettes", "recipes"],
            ["Catégories", "categories"],
            [categoryId, "categories/" + categoryId]
        ];
        res.render('category', {title: "PaléoDélices - Catégories", currentPage: "recipes", breadcrumbs: breadcrumbsData});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}


/*async function insertCategoryData() {
    try {
        await Category.insertMany([
            {
                "name": "Salades",
                "image": "salad.jpg",
                "code": "salads"
            },
            {
                "name": "Pains",
                "image": "bread.jpg",
                "code": "breads"
            },
            {
                "name": "Pâtisseries",
                "image": "pastry.jpg",
                "code": "pastry"
            },
            {
                "name": "Noël",
                "image": "christmas.jpg",
                "code": "christmas"
            },
            {
                "name": "Apéritifs",
                "image": "appetizer.jpg",
                "code": "appetizer"
            },
            {
                "name": "Plats",
                "image": "meal.jpg",
                "code": "meals"
            },
            {
                "name": "Soupes",
                "image": "soups.jpg",
                "code": "soups"
            },
            {
                "name": "Tartines",
                "image": "toast.jpg",
                "code": "toasts"
            },
            {
                "name": "Desserts",
                "image": "desserts.jpg",
                "code": "desserts"
            }
        ]);
    } catch(error) {
        console.log('err', + error);
    }
}*/

//insertCategoryData();