var express = require("express");
var router = express.Router();

let dressStoreController = require("../controllers/dressStore");
/* GET users listing. */
router.get("/", dressStoreController.create);
router.get("/products", dressStoreController.getProducts);
router.get("/products/:id", dressStoreController.getProduct);
router.post("/products", dressStoreController.addProduct);
router.put("/products/:id", dressStoreController.updateProduct);
router.delete("/products/:id", dressStoreController.removeProduct);
module.exports = router;
