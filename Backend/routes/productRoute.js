import express from "express";
import { productsController } from "../controller/productController.js";

const router = express.Router();

router.get("/products", productsController);
export default router;
