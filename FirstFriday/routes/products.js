const express = require("express");
const {
  getProducts,
  createProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
