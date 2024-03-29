const express = require('express');
const cookieParser = require('cookie-parser');
const expressLayouts = require ('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

/*const navigationRoutes = require('./server/routes/navRoutes.js');
const recipesRoutes = require('./server/routes/recipeRoutes.js');
app.use('/', navigationRoutes);
app.use('/recipes', recipesRoutes);*/

const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(port, () => console.log(`Listening to port ${port}`));