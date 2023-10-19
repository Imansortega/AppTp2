### TP integrador 2 Backend UNTREF
### API accceso a BD SQL. ver 1.0
#### Ignacio Manso 19/10/2023
---
### Descripción
#### En este trabajo práctico la aplicación tiene dos opciones separadas, Server.js y Server-raw.js, las cuales comparten algunos módulos.

**Server.js**:

Emplea sequalize para acceder a la base y realizar las consultas.

Para usar nodemon hay que utilizar el comando "npm run devs".

El controlador es con sequelize.js y emplea los modelos definidos en la correspondiente carpeta.

La validación de los inputs de usuario se realiza con las funciones en /src/utils/validador.

**Server-raw.js**:

Emplea la opción raw queries de sequalize, usando scripts Mysql, los cuales están definidos en /src/querys.

En listados.js están los listados estaticos para consultas sin búsquedas.

En querys.js están las consultas para búsquedas. En dicho modulo las consultas tienen una palabra clave ("Consulta") la cual será reemplazada en la aplicación por el parámetro de búsqueda id, nombre, gemero, etc.

Para usar nodemon hay que utilizar el comando "npm run devr".

---

**Info adicional**

/posters ---> *hay tres posters para los registros 1,2 y 3 de la base. Se pueden consultar desde el resultado Json en el navegador.*

/SQL dump ---> *El dump de la base lista para cargarse.*

/Documentacion y Postman Json ---> *El Dbdesigner DER de la base, Model de Mysql para la base tp2_dev, JPG del esquema y Json para importar a Postman*


P.D. Se envía un archivo ".env para renombrar" con todos los datos menos pwd.

---
#### Rutas:

- app.get("/generosdisp", generosdisp); ---> *Muestra los generos disponibles*

[Link Generos disponibles](http://localhost:3000/generosdisp)
- app.get("/categoriasdisp", categoriasdisp); ---> *Muestra las categorias disponibles*

[Link Categorías disponibles](http://localhost:3000/categoriasdisp)
- app.get("/catalogo", catalogoraw); ---> *Catalogo completo*

[Link Catálogo completo](http://localhost:3000/catalogo)
- app.get("/catalogo/id/:id", catId); ---> *Filtra por id de la película*

[Link búsqueda por id](http://localhost:3000/catalogo/id/3)
- app.get("/catalogo/peli/:nombre", catnombre); ---> *Filtra por nombre de la película. Admite busquedas parciales. No es case sensitive*

[Link búsqueda por nombre](http://localhost:3000/catalogo/peli/anne)
- app.get("/catalogo/genero/:genero", catgenero); ---> *Filtra por genero. Admite busquedas parciales. No es case sensitive*

[Link búsqueda por genero](http://localhost:3000/catalogo/genero/Drama)
- app.get("/catalogo/categorias/:categoria", catalogocat); ---> *Filtra por categorias. Admite busquedas parciales. No es case sensitive*

[Link búqueda por categorías](http://localhost:3000/catalogo/categorias/Serie)
- app.get("/catalogo/actor/:nombre", actor); ---> *Filtra por actor. Admite busquedas parciales. No es case sensitive*

[Link búsqueda por actor/actriz](http://localhost:3000/catalogo/actor/Jennifer%20A)


- app.get("/posters/:posterid", poster); ---> *Muestra los posters al hacer click en el campo posters del Json resultado.
Solo disponible para los tres primeros registros.*

[Link para ver posters](http://localhost:3000/posters/1.jpg)

- app.use((req, res) => {.... ---> *Ruta para paths no definidos o campos vacios.*
  
[Link PATH incorrecto](http://localhost:3000/)

---

**Tablas de la base de datos**

```
| *PELICULAS* |
|-------------|

| idpeli | poster | titulo | resumen | temporada | trailer |
|--------|--------|--------|---------|-----------|---------|

| *CATEGORIAS* |
|--------------|

| idcategoria | categoria |
|-------------|-----------|

| *CATEGORIASINTER* |
|-------------------|

| idcategoriainter | Idpeli (fk4) | idcategoria (fk3) |
|------------------|--------------|-------------------|

| *ACTORES* |
|-----------|

| idactor | nombreyapellido | apellido | nombre |
|---------|-----------------|----------|--------|

| *REPARTOSINTER* |
|-----------------|

| idrep | idpeli (fk1) | idactor1 (fk6) |
|-------|--------------|----------------|

| *GENEROS* |
|-----------|

| idgenero | genero |
|----------|--------|

| *GENEROSINTER* |
|----------------|

| idgenerointer | idpeli (fk2) | idgenero (fk5) |
|---------------|--------------|----------------|

```
 
