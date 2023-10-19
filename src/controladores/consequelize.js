const sequelize = require("../conexion/connection");
const { Sequelize, QueryTypes } = require("sequelize");
const { Op } = require("sequelize");

const fs = require("fs");
const path = require("path");
const validar = require("../utils/validador");

const Pelicula = require("../modelos/peliculas");
const Actor = require("../modelos/actores");
const Reparto = require("../modelos/repartosinter");
const Genero = require("../modelos/generos.js");
const Generointer = require("../modelos/generosinter.js");
const Categoria = require("../modelos/categorias.js");
const Categoriainter = require("../modelos/categoriasinter.js");
const Generosdisponibles = require("../modelos/generosdisponibles");
const Peliculasview = require("../modelos/peliculasview");

Pelicula.belongsToMany(Categoria, {
  through: Categoriainter,
  foreignKey: "idpeli", // Foreign key in Categoriainter that references Pelicula
  otherKey: "idcategoria", // Foreign key in Categoriainter that references Categoria
});
Categoria.belongsToMany(Pelicula, {
  through: Categoriainter,
  foreignKey: "idcategoria", // Foreign key in Categoriainter that references Categoria
  otherKey: "idpeli", // Foreign key in Categoriainter that references Pelicula
});

Pelicula.belongsToMany(Genero, {
  through: Generointer,
  foreignKey: "idpeli", // Foreign key in Generointer that references Pelicula
  otherKey: "idgenero", // Foreign key in Generointer that references Genero
});
Genero.belongsToMany(Pelicula, {
  through: Generointer,
  foreignKey: "idgenero", // Foreign key in Genero that references Genero
  otherKey: "idpeli", // Foreign key in Generointer that references Pelicula
});

Pelicula.belongsToMany(Actor, {
  through: Reparto,
  foreignKey: "idpeli", // Foreign key in Generointer that references Pelicula
  otherKey: "idactor", // Foreign key in Generointer that references Genero
});
Actor.belongsToMany(Pelicula, {
  through: Reparto,
  foreignKey: "idactor", // Foreign key in Genero that references Genero
  otherKey: "idpeli", // Foreign key in Generointer that references Pelicula
});
async function inicializa(req, res, next) {
  try {
    await sequelize.authenticate();
    await Pelicula.sync();
    await Categoria.sync();
    await Categoriainter.sync();
    await Genero.sync();
    await Generointer.sync();
    await Actor.sync();
    await Reparto.sync();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
}

async function generosdisp(req, res) {
  try {
    const todoslosgeneros = await Genero.findAll({
      attributes: ["genero"],
    });

    todoslosgeneros.length !== 0
      ? res.status(200).json(todoslosgeneros)
      : res.status(404).json({ error: "Tabla vacia" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", descripción: error.message });
  }
}

async function categoriasdisp(req, res) {
  try {
    const todaslascategorias = await Categoria.findAll({
      attributes: ["categoria"],
    });

    todaslascategorias.length !== 0
      ? res.status(200).json(todaslascategorias)
      : res.status(404).json({ error: "Tabla vacia" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", descripción: error.message });
  }
}

async function catalogo(req, res) {
  try {
    let Todos = await Pelicula.findAll({
      //----------------------------------
      attributes: [
        "idpeli",
        "poster",
        "titulo",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT categoria.categoria SEPARATOR ',')`
          ),
          "categoria",
        ],
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT generos.genero SEPARATOR ',')`
          ),
          "genero",
        ],
        "resumen",
        "temporadas",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT nombreyapellido SEPARATOR ',')`
          ),
          "reparto",
        ],
        "trailer",
      ],
      include: [
        {
          model: Categoria,
          attributes: [],
          through: {
            model: Categoriainter,
            attributes: [],
          },
        },
        {
          model: Genero,
          attributes: [],
          through: {
            model: Generointer,
            attributes: [],
          },
        },
        {
          model: Actor,
          attributes: [],
          through: {
            model: Reparto,
            attributes: [],
          },
        },
      ],
      //where: { titulo: { [Op.like]: "%Crown%" } },
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
        //"genero",
        //"apellido",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    /* Todos = Todos.map(result => ({
              ...result.toJSON(),
              categoria: result.getDataValue('categoria').replace(/\"/g, ''),
          })); */

    console.log(JSON.stringify(Todos, null, 2));
    if (Todos === null) {
      console.log("No se encontró la búsqueda !");
      res.status(404).json("No se encontró la búsqueda !");
    } else {
      res.status(200).json(Todos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

async function catId(req, res) {
  // Valida que el id sea numerico
  if (!validar.validarNumberInputs(req.params.id)) {
    res.status(400).send("Id inválido");
    return;
  }
  try {
    let Todos = await Pelicula.findAll({
      //----------------------------------
      attributes: [
        "idpeli",
        "poster",
        "titulo",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT categoria.categoria SEPARATOR ',')`
          ),
          "categoria",
        ],
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT generos.genero SEPARATOR ',')`
          ),
          "genero",
        ],
        "resumen",
        "temporadas",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT nombreyapellido SEPARATOR ',')`
          ),
          "reparto",
        ],
        "trailer",
      ],
      include: [
        {
          model: Categoria,
          attributes: [],
          through: {
            model: Categoriainter,
            attributes: [],
          },
        },
        {
          model: Genero,
          attributes: [],
          through: {
            model: Generointer,
            attributes: [],
          },
        },
        {
          model: Actor,
          attributes: [],
          through: {
            model: Reparto,
            attributes: [],
          },
        },
      ], //
      where: { idpeli: req.params.id },
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
        //"genero",
        //"apellido",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    /* Todos = Todos.map(result => ({
              ...result.toJSON(),
              categoria: result.getDataValue('categoria').replace(/\"/g, ''),
          })); */

    //console.log(JSON.stringify(Todos, null, 2));
    if (Todos.length == 0) {
      console.log("No se encontró la búsqueda !");
      res.status(404).send("No se encontró la búsqueda !");
    } else {
      res.status(200).json(Todos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

async function catnombre(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.nombre)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    let Todos = await Pelicula.findAll({
      //----------------------------------
      attributes: [
        "idpeli",
        "poster",
        "titulo",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT categoria.categoria SEPARATOR ',')`
          ),
          "categoria",
        ],
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT generos.genero SEPARATOR ',')`
          ),
          "genero",
        ],
        "resumen",
        "temporadas",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT nombreyapellido SEPARATOR ',')`
          ),
          "reparto",
        ],
        "trailer",
      ],
      include: [
        {
          model: Categoria,
          attributes: [],
          through: {
            model: Categoriainter,
            attributes: [],
          },
        },
        {
          model: Genero,
          attributes: [],
          through: {
            model: Generointer,
            attributes: [],
          },
        },
        {
          model: Actor,
          attributes: [],
          through: {
            model: Reparto,
            attributes: [],
          },
        },
      ],
      where: { titulo: { [Op.like]: `%${req.params.nombre}%` } },
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
        //"genero",
        //"apellido",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    /* Todos = Todos.map(result => ({
              ...result.toJSON(),
              categoria: result.getDataValue('categoria').replace(/\"/g, ''),
          })); */

    //console.log(JSON.stringify(Todos, null, 2));
    if (Todos.length == 0) {
      // 404: No found
      res.status(404).send("No se encontró la búsqueda !");
      console.log("No se encontró la búsqueda !");
    } else {
      res.status(200).json(Todos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

async function catgenero(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.genero)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    let Todos = await Pelicula.findAll({
      //----------------------------------
      attributes: [
        "idpeli",
        "poster",
        "titulo",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT categoria.categoria SEPARATOR ',')`
          ),
          "categoria",
        ],
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT generos.genero SEPARATOR ',')`
          ),
          "genero",
        ],
        "resumen",
        "temporadas",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT nombreyapellido SEPARATOR ',')`
          ),
          "reparto",
        ],
        "trailer",
      ],
      include: [
        {
          model: Categoria,
          attributes: [],
          through: {
            model: Categoriainter,
            attributes: [],
          },
        },
        {
          model: Genero,
          attributes: [],
          through: {
            model: Generointer,
            attributes: [],
          },
        },
        {
          model: Actor,
          attributes: [],
          through: {
            model: Reparto,
            attributes: [],
          },
        },
      ],
      //where: { genero: { [Op.like]: `%${req.params.genero}%` }} ,
      where: {},
      having: Sequelize.literal(`genero LIKE '%${req.params.genero}%'`),
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
        //"genero",
        //"apellido",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    /* Todos = Todos.map(result => ({
              ...result.toJSON(),
              categoria: result.getDataValue('categoria').replace(/\"/g, ''),
          })); */

    //console.log(JSON.stringify(Todos, null, 2));
    if (Todos.length == 0) {
      console.log("No se encontró la búsqueda !");
      res.status(404).json("No se encontró la búsqueda !");
    } else {
      res.status(200).json(Todos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

async function catalogocat(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.categoria)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    let Todos = await Pelicula.findAll({
      //----------------------------------
      attributes: [
        "idpeli",
        "poster",
        "titulo",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT categoria.categoria SEPARATOR ',')`
          ),
          "categoria",
        ],
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT generos.genero SEPARATOR ',')`
          ),
          "genero",
        ],
        "resumen",
        "temporadas",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT nombreyapellido SEPARATOR ',')`
          ),
          "reparto",
        ],
        "trailer",
      ],
      include: [
        {
          model: Categoria,
          attributes: [],
          through: {
            model: Categoriainter,
            attributes: [],
          },
        },
        {
          model: Genero,
          attributes: [],
          through: {
            model: Generointer,
            attributes: [],
          },
        },
        {
          model: Actor,
          attributes: [],
          through: {
            model: Reparto,
            attributes: [],
          },
        },
      ],
      //where: { genero: { [Op.like]: `%${req.params.genero}%` }} ,
      where: {},
      having: Sequelize.literal(`categoria LIKE '%${req.params.categoria}%'`),
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
        //"genero",
        //"apellido",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    /* Todos = Todos.map(result => ({
              ...result.toJSON(),
              categoria: result.getDataValue('categoria').replace(/\"/g, ''),
          })); */

    console.log(JSON.stringify(Todos, null, 2));
    if (Todos.length == 0) {
      console.log("No se encontró la búsqueda !");
      res.status(404).json("No se encontró la búsqueda !");
    } else {
      res.status(200).json(Todos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

async function actor(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.nombre)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    let Todos = await Pelicula.findAll({
      //----------------------------------
      attributes: [
        "idpeli",
        "poster",
        "titulo",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT categoria.categoria SEPARATOR ',')`
          ),
          "categoria",
        ],
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT generos.genero SEPARATOR ',')`
          ),
          "genero",
        ],
        "resumen",
        "temporadas",
        [
          Sequelize.literal(
            `GROUP_CONCAT(DISTINCT nombreyapellido SEPARATOR ',')`
          ),
          "reparto",
        ],
        "trailer",
      ],
      include: [
        {
          model: Categoria,
          attributes: [],
          through: {
            model: Categoriainter,
            attributes: [],
          },
        },
        {
          model: Genero,
          attributes: [],
          through: {
            model: Generointer,
            attributes: [],
          },
        },
        {
          model: Actor,
          attributes: [],
          through: {
            model: Reparto,
            attributes: [],
          },
        },
      ],
      //where: { nombreyapellido: { [Op.like]: `%${req.params.nombre}%` }} ,
      where: {},
      having: Sequelize.literal(`reparto LIKE '%${req.params.nombre}%'`),
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
        //"genero",
        //"apellido",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    /* Todos = Todos.map(result => ({
              ...result.toJSON(),
              categoria: result.getDataValue('categoria').replace(/\"/g, ''),
          })); */

    console.log(JSON.stringify(Todos, null, 2));
    if (Todos.length == 0) {
      console.log("No se encontró la búsqueda !");
      res.status(404).json("No se encontró la búsqueda !");
    } else {
      res.status(200).json(Todos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

async function poster(req, res) {
  try {
    const mipath =
      path.resolve(__dirname, "..", "..") + "/posters/" + req.params.posterid;
    fs.access(mipath, fs.constants.F_OK, (err) => {
      if (err) {
        res.status(404).json(`El archivo ${mipath} ---> no existe !`);
        //console.error(`El archivo ${mipath} no existe.`);
      } else {
        //console.log(`El archivo ${mipath} existe.`);
        res.sendFile(mipath);
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 0", description: error.message });
  }
}

module.exports = {
  inicializa,
  catalogo,
  generosdisp,
  categoriasdisp,
  catId,
  catnombre,
  catgenero,
  catalogocat,
  actor,
  poster,
};

/* actor,
    catId,
    catgenero,
    catalogocat,
    catnombre,
    generosdisp,
    categoriasdisp, */
