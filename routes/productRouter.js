const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.route("/").get(productController.getAllProducts);
router.route("/low").get(productController.getProductsLowQuantity);

module.exports = router;
