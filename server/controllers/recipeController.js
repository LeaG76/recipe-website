


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    res.render('index', {title: "Recipe Website - Homepage"});
}