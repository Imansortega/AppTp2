/* Querys que devuelven listados */

// Catálogo completo
const Query1 = `SELECT 
pelis.idpeli,
pelis.poster,
pelis.titulo,
cat.categoria AS "Categoria",
(SELECT GROUP_CONCAT(DISTINCT gen.genero SEPARATOR ',') FROM generosinter genin
    JOIN generos gen ON genin.idgenero = gen.idgenero
    WHERE genin.idpeli = pelis.idpeli) AS Genero,
pelis.resumen,
pelis.temporadas,
(SELECT GROUP_CONCAT(DISTINCT act.nombreyapellido SEPARATOR ',') FROM repartosinter repin
    JOIN actores act ON repin.idactor = act.idactor
    WHERE repin.idpeli = pelis.idpeli) AS 'Reparto',
pelis.trailer
FROM
peliculas pelis
    JOIN
categoriasinter catin ON (pelis.idpeli = catin.idpeli)
    JOIN 
categorias cat ON (catin.idcategoria = cat.idcategoria)
GROUP BY pelis.idpeli, cat.categoria
ORDER by pelis.idpeli`

// Listado de generos disponibles
const Query2 = `SELECT 
GROUP_CONCAT(gen.genero SEPARATOR ', ') AS "Generos Disponibles"
FROM
tp2_dev.generos gen;`

// Listado de categorias disponibles
const Query3 = `SELECT 
GROUP_CONCAT(cat.categoria SEPARATOR ', ') AS "Categorias Disponibles"
FROM
categorias cat;`

module.exports = {Query1, Query2, Query3};