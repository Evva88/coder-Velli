import express from "express";
import ProductManager from "../ProductManager.js";
import { __dirname } from "../utils.js";

const router = express.Router();
const PM = new ProductManager(__dirname + "./Products.json");

router.get("/", async (req, res) => {
  try {
    const products = await PM.getProducts();
    res.render("layouts/main", { products });
  } catch (err) {
    console.log("Error al cargar los productos:", err);
    res.status(500).send("Error al cargar los productos");
  }
});

router.get("/realtimeproducts", (req,res)=>{
  res.render("layouts/realtimeproducts");
});

export default router;



