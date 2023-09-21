const express = require('express');
const { CategoryController } = require('../../controllers');
const { AuthMiddleware } = require('../../middlewares');
const router = express.Router();

/**
 * /api/v1/category
 */

router.post('/', AuthMiddleware.verifyToken, CategoryController.addCategory);
router.get('/', AuthMiddleware.verifyToken, CategoryController.getCategories);
router.get('/:id', AuthMiddleware.verifyToken, CategoryController.getCategory);
module.exports = router;