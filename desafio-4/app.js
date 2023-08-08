import express from 'express';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url'; 
import path from 'path'; 
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io';
import ProductManager from './ProductManager.js';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();
const puerto = 8080;



const httpServer = app.listen(puerto, () => {
  console.log(`Servidor escuchando en puerto ${puerto}`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"))

app.engine("handlebars", handlebars.engine());
app.set("view engine","handlebars");
app.set("views", __dirname+"/views")
app.use("/", viewsRouter);



const PM = new ProductManager(__dirname + "/Products.json");
const socketServer = new Server(httpServer);

socketServer.on("connection", async (socket) => {
  console.log("Cliente conectado con ID:", socket.id);

  const updatedProducts = await PM.getProducts({});
  socketServer.emit("vistaProductos", updatedProducts);

  socket.on("addProduct", async (productos) => {
    await PM.addProduct(productos);
    const updatedProducts = await PM.getProducts({});
    socketServer.emit("vistaProductos", updatedProducts);
  });

  socket.on("deleteProduct", async (id) => {
    await PM.deleteProduct(id);
    const updatedProducts = await PM.getProducts({});
    socketServer.emit("vistaProductos", updatedProducts);
  });
});


