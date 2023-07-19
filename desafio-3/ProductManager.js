const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "Products.json";
    this.createFile();
  }

  createFile() {
    fs.access(this.path, fs.constants.F_OK, (err) => {
      if (err) {
        fs.writeFile(this.path, JSON.stringify(this.products), (err) => {
          if (err) {
            console.log("Error creating file:", err);
          } else {
            console.log("File created!");
          }
        });
      }
    });
  }

  addProduct(product) {
    this.getProducts((err, products) => {
      if (err) {
        console.log("Error reading products:", err);
      } else {
        const producto = {
          id: this.generateId(),
          nombre: product.nombre,
          detalle: product.detalle,
          precio: product.precio,
          stock: product.stock,
          img: product.img
        };

        products.push(producto);

        this.saveProducts(products, () => {
          console.log("Product added!");
        });
      }
    });
  }

  updateProduct(id, product) {
    this.getProducts((err, products) => {
      if (err) {
        console.log("Error reading products:", err);
      } else {
        let pos = products.findIndex((item) => item.id === id);

        if (pos > -1) {
          products[pos].nombre = product.nombre;
          products[pos].detalle = product.detalle;
          products[pos].precio = product.precio;
          products[pos].stock = product.stock;
          products[pos].img = product.img;

          this.saveProducts(products, () => {
            console.log("Product updated!");
          });
        } else {
          console.log("Not found!");
        }
      }
    });
  }

  deleteProduct(id) {
    this.getProducts((err, products) => {
      if (err) {
        console.log("Error reading products:", err);
      } else {
        let pos = products.findIndex((item) => item.id === id);

        if (pos > -1) {
          products.splice(pos, 1);

          this.saveProducts(products, () => {
            console.log("Product #" + id + " deleted!");
          });
        } else {
          console.log("Not found!");
        }
      }
    });
  }

  getProducts(callback) {
    fs.readFile(this.path, "utf-8", (err, data) => {
      if (err) {
        callback(err);
      } else {
        let products = JSON.parse(data);
        callback(null, products);
      }
    });
  }

  getProductById(id) {
    this.getProducts((err, products) => {
      if (err) {
        console.log("Error reading products:", err);
      } else {
        let product = products.find((item) => item.id === id);
        console.log(product || "Not found");
      }
    });
  }

  validateCode(code) {
    return this.products.some((item) => item.code === code);
  }

  generateId() {
    let max = 0;

    this.products.forEach((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });

    return max + 1;
  }

  saveProducts(products, callback) {
    fs.writeFile(this.path, JSON.stringify(products), (err) => {
      if (err) {
        console.log("Error saving products:", err);
      } else {
        callback();
      }
    });
  }
}

const PM = new ProductManager();
console.log(PM.getProducts());
/*PM.addProduct({nombre:"Dada honey", description:"3 cuotas sin interes de 3 cuotas sin interes de $500", precio:1500, img:"assets/imagenes/ficha-tecnica-frente-768x1084.png", code:"DADA", stock:10});
console.log(PM.getProducts());
PM.addProduct({nmbre:"Cosecha Tardia", description:"3 cuotas sin interes de $500", precio:1500, img:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"DADA", stock:9});
PM.addProduct({nombre:"Jagermeister", description:"3 cuotas sin interes de $3334", precio:10000, img:"https://vcp.com.ar/cdn/shop/files/Topo6_81943047-662b-4e1c-82ae-9e26fb212505.jpg?v=1688741569&width=700", code:"JAGER", stock:8});*/
//console.log(PM.getProductById(3));
//console.log(PM.getProductById(1));
//PM.deleteProduct(1);
//PM.updateProduct(2, {nombre:"Bombay Sapphire London Dry", description:"3 cuotas sin interes de $2500", precio:7500, img:"https://http2.mlstatic.com/D_NQ_NP_2X_669612-MLA43643320606_102020-F.webp", code:"BOMBAY", stock:10})
//console.log(PM.getProducts());
