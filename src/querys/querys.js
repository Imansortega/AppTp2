/*  Querys que devuelven consultas específicas.
    El query Se modifica por programa para insertar el parámetro necesario
    en la plabra clave "%Consulta%"
 */

// Búsqueda por actor de reparto
const Query10 = `SELECT 
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
WHERE (SELECT GROUP_CONCAT(DISTINCT act.nombreyapellido SEPARATOR ',') FROM repartosinter repin
    JOIN actores act ON repin.idactor = act.idactor
    WHERE repin.idpeli = pelis.idpeli) LIKE "%Consulta%"
GROUP BY pelis.idpeli, cat.categoria`;

// Busqueda por id
const Query11 = `SELECT 
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
WHERE pelis.idpeli = Consulta
GROUP BY pelis.idpeli, cat.categoria`;

// Busqueda por genero
const Query12 = `SELECT 
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
WHERE (SELECT GROUP_CONCAT(DISTINCT gen.genero SEPARATOR ',') FROM generosinter genin
    JOIN generos gen ON genin.idgenero = gen.idgenero
    WHERE genin.idpeli = pelis.idpeli) LIKE "%Consulta%"
GROUP BY pelis.idpeli, cat.categoria`;

// Busqueda por categoria
const Query13 = `SELECT 
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
WHERE cat.categoria LIKE "%Consulta%"
GROUP BY pelis.idpeli, cat.categoria`;

// Busqueda por nombre de película
const Query14 = `
SELECT 
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
WHERE pelis.titulo LIKE "%Consulta%"
GROUP BY pelis.idpeli, cat.categoria`;

module.exports = { Query10, Query11, Query12, Query13, Query14 };
