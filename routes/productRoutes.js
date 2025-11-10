const express = require("express");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");
const router = express.Router();

router
  .route("/")
  .post([authenticateUser, authorizePermissions("admin")], createProduct)
  .get(getAllProducts);
router
  .route("/uploadImage")
  .post([authenticateUser, authorizePermissions], uploadImage);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermissions("admin")], updateProduct)
  .delete([authenticateUser, authorizePermissions("admin")], deleteProduct);

module.exports = router;
