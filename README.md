### TP integrador 2
### API accceso a BD SQL. 1.0
#### Ignacio Manso 19/10/2023
---
### Descripción
#### En este trabajo práctico la aplicación tiene dos opciones separadas las cuales comparten algunos módulos.

**Server.js**: Emplea sequalize para acceder a la base y realizar las consultas.
Para usar nodemon hay que utilizar el comando npm run devs.
El controlador es consequelize.js y emplea los modelos definidos en la correspondiente carpeta.
La validación se realiza con las funciones en /src/utils/validador.

**Server-raw.js**: Emplea scripts Mysql los cuales están definidos en /src/querys. En listados.js están los listados estaticos para consultas sin búsquedas. En querys.js están las consultas para búsquedas. En dicho modulo las consultas tienen una palabra clave la cual será reemplazada en la aplicación por el parámetro de búsqueda.
Para usar nodemon hay que utilizar el comando npm run devr.

**Info adicional**

/posters ---> hay tres posters para los registros 1,2 y 3 de la base. Se pueden consultar desde el resultado en el navegador.

/SQL dump ---> El dump de la base lista a cargarse

/Documentacion y Postman Json ---> El DER de la base y Json para importar a Postman


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


- app.get("/posters/:posterid", poster); 

[Link para ver posters](http://localhost:3000/posters/1.jpg)

- app.use((req, res) => {.... ---> *Ruta para paths no definidos o campos vacios.*
  
[Link PATH incorrecto](http://localhost:3000/)

---
 #### Breve descripción de la aplicación:
El programa principal es Server-raw.js. El mismo procesa las rutas entrantes y las pasa a sus correspondientes
funciones que están en /src/controladores/raw.js.

Las funciones en el controlador ejecutan Querys que están en /src/querys.
Hay dos archivos en dicho directorio: 
- listados.js contiene constantes con los querys estáticos (sin parámetros) o vistas
- querys.js contiene querys conteniendo la palabra clave "Consulta", la cual será reemplazada
    por el id, nombre, actor...etc contenido en la consulta realizada por el usuario.

 

**nota:** No pude realizar el chequeo de campo vacío y caracteres no numéricos en los campos id e importe debido a que Postman no admite dichos campos erroneos. Por lo que veo el parser de Postman lo rechaza. Igual dejo las funciones de chequeo de dichos errores ya que creo que si el frontend no está bien codeado podría dejar pasar campos con null y erroneos.
