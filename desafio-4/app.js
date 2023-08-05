import express from 'express';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url'; 
import path from 'path'; 
import router from './routes/products.router.js';
import { Server } from 'socket.io';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();
const puerto = 8080;

const httpServer = app.listen(puerto, () => {
  console.log(`Servidor escuchando en puerto ${puerto}`);
});
const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

socketServer.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');
  socket.on('message', (data) => {
    console.log(data);
  });

  socket.emit('socket_individual', 'Hola cliente #1');
});
