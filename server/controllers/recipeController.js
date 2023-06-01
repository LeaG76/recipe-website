require('../models/database');
const Category = require('../models/Category');

/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('index', {title: "Recipe Website - Homepage", categories});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

async function insertCategoryData() {
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
}

//insertCategoryData();