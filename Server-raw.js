/*  TP integrador 2 Backend UNTREF
*   API accceso a BD SQL. ver 1.0
*   Versión usando Raw Queries
*   Ignacio Manso 19/10/2023    */

const express = require("express");
const app = express();
const {
  inicializa,
  catalogoraw,
  actor,
  catId,
  catgenero,
  catalogocat,
  catnombre,
  generosdisp,
  categoriasdisp,
  poster,
} = require("./src/controladores/raw");

const validar = require("./src/utils/validador");

// Para usar en el body
const bodyParser = require("body-parser");
app.use(bodyParser.text());

/* Rutas. ---> (Ctrl + click) abre las URL de ejemplo */

// Authenticate y sync
app.use(inicializa);

// Géneros disponibles
app.get("/generosdisp", generosdisp); // http://localhost:3000/generosdisp

// Categorias disponibles
app.get("/categoriasdisp", categoriasdisp); // http://localhost:3000/categoriasdisp

// Catálogo completo
app.get("/catalogo", catalogoraw); // http://localhost:3000/catalogo

// Búsqueda por id
app.get("/catalogo/id/:id", catId); // http://localhost:3000/catalogo/id/3

// Búsqueda por nombre de la película
app.get("/catalogo/peli/:nombre", catnombre); // http://localhost:3000/catalogo/peli/anne

// Búsqueda por género
app.get("/catalogo/genero/:genero", catgenero); // http://localhost:3000/catalogo/genero/Drama

// Búsqueda por categoria
app.get("/catalogo/categorias/:categoria", catalogocat); // http://localhost:3000/catalogo/categorias/Serie

// Búsqueda por nombre de actor/actriz
app.get("/catalogo/actor/:nombre", actor); // http://localhost:3000/catalogo/actor/Jennifer

// Endpoint para cargar posts
app.get("/posters/:posterid", poster); // http://localhost:3000/posters/1.jpg

app.use((req, res) => {
  console.log("Este path ---> ", req.path, " ...Naaaaa");
  if (validar.detectarNull(!req.params.nombre)) {
    res
      .status(404)
      .send("El campo está vacío, incompleto o la pagina no existe");
  } else {
    res
      .status(404)
      .send("La página buscada no existe o falta el parámetro de búsqueda.");
  }
});

puerto = process.env.PORT;
app.listen(puerto || 3000, () => {
  console.log(`Servidor WEB iniciado en el puerto ${puerto}`);
});
