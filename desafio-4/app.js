import express from 'express';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const puerto = 8080;

app.engine("handlebars", handlebars.engine);
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let testUser = {
        name: "Eva",
        last_nsme: "Velli",
    };

    res.render("index", testUser);
});

app.listen(puerto, () => {
    console.log("Servidor activo en el puerto: " + puerto);
});
