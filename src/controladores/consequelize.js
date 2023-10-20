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
const catalogoview = require("../modelos/catalogoview");
const Generoview = require("../modelos/generosview")

Pelicula.belongsToMany(Categoria, {
  through: Categoriainter,
  foreignKey: "idpeli",
  otherKey: "idcategoria",
});
Categoria.belongsToMany(Pelicula, {
  through: Categoriainter,
  foreignKey: "idcategoria",
  otherKey: "idpeli",
});

Pelicula.belongsToMany(Genero, {
  through: Generointer,
  foreignKey: "idpeli",
  otherKey: "idgenero",
});
Genero.belongsToMany(Pelicula, {
  through: Generointer,
  foreignKey: "idgenero",
  otherKey: "idpeli",
});

Pelicula.belongsToMany(Actor, {
  through: Reparto,
  foreignKey: "idpeli",
  otherKey: "idactor",
});
Actor.belongsToMany(Pelicula, {
  through: Reparto,
  foreignKey: "idactor",
  otherKey: "idpeli",
});

async function inicializa(req, res, next) {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos");
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

async function generosdispvista(req,res) {
  try {
    const todos = await Generoview.findAll();
    todos.length !== 0
      ? res.status(200).json(todos)
      : res.status(404).json({ error: "Tabla vacia" });
    
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", descripción: error.message });
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
      attributes: ["idcategoria", "categoria"],
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

async function catalogovista(req,res) {
  try {
    const todos = await catalogoview.findAll();
    todos.length !== 0
      ? res.status(200).json(todos)
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
      group: [
        "idpeli",
        "poster",
        "titulo",
        "resumen",
        "temporadas",
        "trailer",
        "categoria",
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });

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
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
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
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
    if (Todos.length == 0) {
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
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
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
    });
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
      ],
      order: [["idpeli", "ASC"]],
      //---------------------------
    });
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
  catalogovista,
  catalogo,
  generosdispvista,
  generosdisp,
  categoriasdisp,
  catId,
  catnombre,
  catgenero,
  catalogocat,
  actor,
  poster,
};
