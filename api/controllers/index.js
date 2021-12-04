const express = require('express');
const router = express.Router();

const categoriesController = require('./categories');
// Load each controller
const postsController = require('./posts.js');
const usersController = require('./users');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/categories', categoriesController);
router.use('/users', usersController);
router.use('/application-configuration', appConfigController);


module.exports = router;