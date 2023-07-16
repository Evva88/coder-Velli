import ProductManager from "./ProductManager.js";

const PM = new ProductManager();
console.log(PM.getProduct());
PM.addProduct({title:"Dada Honey", description:"3 cuotas sin interes de $500", price:1500, thumbnail:"assets/imagenes/ficha-tecnica-frente-768x1084.png", code:"BLANCO", stock:10});
console.log(PM.getProduct());
PM.addProduct({title:"Dada Honey 2", description:"3 cuotas sin interes de $1000", price:3000, thumbnail:"assets/imagenes/ficha-tecnica-frente-768x1084.png", code:"BLANCO", stock:9});
PM.addProduct({title:"Dada Honey 3", description:"3 cuotas sin interes de $2000", price:6000, thumbnail:"assets/imagenes/ficha-tecnica-frente-768x1084.png", code:"BLANCO 2", stock:8});
console.log(PM.getProduct());
console.log(PM.getProductById(2));
console.log(PM.getProductById(3));

