import express from "express";
import { addProduct, addProductItem, allProduct, productByCategory, productByName,productById, menu, getItems, deleteItem, productByType, search, updateProduct, updateProduct1 } from "../controllers/product.controller.js";
import { validateToken } from "../middlewares/jwt.js";
import { ItemUpload } from "../middlewares/multerUpload.js";


const router = express.Router();

router
.post("/new",validateToken,addProduct)
.get("/all",allProduct)
.post("/item/new",[validateToken,ItemUpload.single('image')],addProductItem)
.post("/item/category",productByCategory)
.post("/item/name",productByName)
.post("/item/id",productById)
.get("/menu",menu)
.get("/item/all",getItems)
.post("/item/delete",validateToken,deleteItem)
.post("/item/type",productByType)
.post("/search",search)
.post("/edit",[validateToken,ItemUpload.single('image')],updateProduct)
.post("/edit1",validateToken,updateProduct1)

export {router as ProductRouter}