import express from "express";
import ProductManager from "../ProductManager.js"; 
const router = express.Router();
const pm = new ProductManager(); 

router.get("/", (req, res) => {
  pm.getProducts((err, products) => {
    if (err) {
      console.log("Error al cargar los productos:", err);
      res.status(500).send("Error al cargar los productos");
    } else {
      res.render("index", { products }); 
    }
  });
});

export default router;
