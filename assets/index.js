/*class ProductManager {
    constructor() {
        this.productos = [];
    }

    static precioBaseDeGanancia = 10000;

    getProductos() {
        return this.productos;
    }

    agregarProducto(nombre, detalle, precio, stock, imagenes) {
        let fecha = new Date();
        const producto = {
            id: this.getId(),
            nombre: nombre,
            detalle: detalle,
            precio: precio * 0.15,
            stock: stock,
            imagenes: imagenes,
            cliente: []
        };
        this.productos.push(producto);
    }

    agregarProductoEspera(idProducto, nombre, detalle, precio, stock, imagenes) {
        let pos = this.productos.findIndex(producto => producto.id === idProducto);
        if (pos > -1) {
            const producto = this.productos[pos]; // Producto Existe
            const nuevoProductoObj = {
                ...producto,
                id: producto.id,
                nombre: nombre,
                detalle: detalle,
                precio: precio * 0.15,
                stock: stock,
                imagenes: imagenes,
                cliente: []
            };
            this.productos.splice(pos, 1, nuevoProductoObj); // Reemplazar el producto existente
        } else {
            console.log("Error! No existe el producto!");
        }
    }

    getId() {
        let max = 0;

        this.productos.forEach(producto => {
            if (producto.id > max) {
                max = producto.id;
            }
        });

        return max + 1;
    }

    agregarCliente(idProducto, idCliente) {
        let pos = this.productos.findIndex(producto => producto.id === idProducto);

        if (pos > -1) {
            if (this.productos[pos].cliente.includes(idCliente)) {
                console.log("Error! Ya existe el Cliente!");
            } else {
                this.productos[pos].cliente.push(idCliente);
            }
        } else {
            console.log("Error! No existe el Cliente!");
        }
    }

    ponerNuevoProducto(idProducto, nuevoProducto, nuevaCosto, nuevoStock, nuevasImagenes) {
        let pos = this.productos.findIndex(producto => producto.id === idProducto);
        if (pos > -1) {
            const producto = this.productos[pos];
            producto.nombre = nuevoProducto;
            producto.precio = nuevaCosto * 0.15;
            producto.stock = nuevoStock;
            producto.imagenes = nuevasImagenes;
        } else {
            console.log("Error! No tenemos stock del producto!");
        }
    }
}

const TM = new ProductManager();
TM.agregarProducto("Dada honey", "dulce", 1500, 20, ["assets/imagenes/ficha-tecnica-frente-768x1084.png"]);
TM.agregarProducto("Cosecha Tardia", "Dulce", 1000, 20, ["assets/imagenes/cosecha.webp"]);
console.log(TM.getProductos());
TM.agregarCliente(1, 10);
TM.agregarCliente(1, 10);
TM.agregarCliente(1, 11);
TM.agregarCliente(3, 11);
console.log(TM.getProductos());
TM.ponerNuevoProducto(2, "Jagermeister", 10000, 10, ["assets/imagenes/jager.jpg"]);
console.log(TM.getProductos());

const productos = TM.getProductos();
productos.forEach(producto => {
    console.log("Imágenes del producto:", producto.imagenes);
});*/
