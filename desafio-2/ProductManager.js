class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (this.validateCode(product.code)) {
            console.log("Error! Producto Existente");
        } else {
            const producto = {id:this.generateId(), title:product.title, description:product.description, price:product.price, thumbnail:product.thumbnail, code:product.code, stock:product.stock};
            this.products.push(producto);
            console.log("Producto Agregado!");
        }
    }

    getProduct(){
        return this.products;
    }

    getProductById(id){
        return this.products.find(item => item.id === id) || "Not found";
    }

    validateCode(code){
        return this.products.some(item => item.code === code);
    }

    generateId() {
        let max = 0;

        this.products.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });return max+1;
    }
    
}


export default ProductManager;