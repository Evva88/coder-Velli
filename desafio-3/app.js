const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');

app.get('/', (request, response) => {
    let contenido = `<html>
        <body>
            <h1 style='color:black; background:Pink; text-align:center;'>Bienvenidos/as</h1>
        </body>
    </html>`;
    response.send(contenido);
});

app.get('/productos', (request, response) => {
    fs.readFile('products.json', 'utf-8', (error, data) => {
        if (error) {
            console.log('Error reading file:', error);
            response.send('Error reading file');
        } else {
            try {
                const productos = JSON.parse(data);
                const { detalle } = request.query;
                const productosFiltrados = detalle && ["dulce", "herval", "blanca"].includes(detalle)
                    ? productos.filter(item => item.detalle === detalle)
                    : productos;

                response.send(productosFiltrados);
            } catch (error) {
                console.log('Error parsing JSON:', error);
                response.send('Error parsing JSON');
            }
        }
    });
});

app.listen(port, () => {
    console.log("Servidor activo en el puerto: " + port);
});
