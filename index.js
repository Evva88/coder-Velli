class ProductManager {
    constructor() {
        this.productos = [];
    }

    static precioBaseDeGanancia = 10000;

    getProductos() {
        return this.productos;
    }

    agregarProducto(nombre, detalle, precio, stock) {
        let fecha = new Date();
        const producto = {
            id: this.getId(),
            nombre: nombre,
            detalle: detalle,
            precio: precio * 0.15,
            stock: stock,
            cliente: []
        };
        this.productos.push(producto);
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

    ponerEventoEnGira(idProducto, nuevoProducto, nuevaCosto) {
        let pos = this.productos.findIndex(producto => producto.id === idProducto);
        const producto = this.productos[pos]; // Evento Existe
        const nuevoProductoObj = {
            ...producto,
            id: this.getId(),
            nombre: nuevoProducto,
            precio: nuevaCosto,
            cliente: []
        };
        this.productos.push(nuevoProductoObj);
    }
}

const TM = new ProductManager();
TM.agregarProducto("Dada honey", "dulce", 1500, 20);
TM.agregarProducto("Cosecha Tardia", "Dulce", 1000, 20);
console.log(TM.getProductos());
TM.agregarCliente(1, 10);
TM.agregarCliente(1, 10);
TM.agregarCliente(1, 11);
TM.agregarCliente(3, 11);
console.log(TM.getProductos());
TM.ponerEventoEnGira(2, "Jagermeister", 10000);
console.log(TM.getProductos());
