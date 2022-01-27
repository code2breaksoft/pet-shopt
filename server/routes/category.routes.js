import express from "express";
import { addCategory,allCategories } from "../controllers/product.controller.js";
import { catIconUpload } from "../middlewares/multerUpload.js";
import multer from "multer";


const router = express.Router();




router
.post("/new",catIconUpload.single("icon"),addCategory)
.get("/all",allCategories);

export {router as CategoryRouter};