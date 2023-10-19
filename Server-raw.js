/* Versión usando Raw Queries */
const dotenv = require("dotenv").config;
const express = require("express");
const app = express();
const {
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

// Rutas. ---> (Ctrl + click) abre las URL de ejemplo
app.get("/generosdisp", generosdisp); // http://localhost:3000/generosdisp
app.get("/categoriasdisp", categoriasdisp); // http://localhost:3000/categoriasdisp
app.get("/catalogo", catalogoraw); // http://localhost:3000/catalogo
app.get("/catalogo/id/:id", catId); // http://localhost:3000/catalogo/id/3
app.get("/catalogo/peli/:nombre", catnombre); // http://localhost:3000/catalogo/peli/anne
app.get("/catalogo/genero/:genero", catgenero); // http://localhost:3000/catalogo/genero/Drama
app.get("/catalogo/categorias/:categoria", catalogocat); // http://localhost:3000/catalogo/categorias/Serie
app.get("/catalogo/actor/:nombre", actor); // http://localhost:3000/catalogo/actor/Jennifer
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

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor WEB iniciado en el puerto 3000");
});
