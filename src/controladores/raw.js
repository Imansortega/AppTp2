/* Controladores para las rutas */
const sequelize = require("../conexion/connection");
const { QueryTypes } = require("sequelize");
const { Query1, Query2, Query3 } = require("../querys/listados");
const {
  Query10,
  Query11,
  Query12,
  Query13,
  Query14,
} = require("../querys/querys");
const validar = require("../utils/validador");

// Categorias disponibles
async function categoriasdisp(req, res) {
  try {
    const Todos = await sequelize.query(Query3, { type: QueryTypes.SELECT });
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

// Generos disponibles
async function generosdisp(req, res) {
  try {
    const Todos = await sequelize.query(Query2, { type: QueryTypes.SELECT });
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

// Catalogo completo
async function catalogoraw(req, res) {
  try {
    const Todos = await sequelize.query(Query1, { type: QueryTypes.SELECT });
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

// Búsqueda por id
async function catId(req, res) {
  {
    // Valida que el id sea numerico
    if (!validar.validarNumberInputs(req.params.id)) {
      res.status(400).send("Id inválido");
      return;
    }
    try {
      // Se reemplaza el query con lo que ingreso el usuario
      const Querynew11 = Query11.replace("Consulta", req.params.id);

      const QueryRes = await sequelize.query(Querynew11, {
        type: QueryTypes.SELECT,
      });
      if (QueryRes.length == 0) {
        console.log("No se encontró la búsqueda !");
        // 404: No found, 204: No content 
        res.status(404).send("No se encontró la búsqueda !");
      } else {
        res.status(200).json(QueryRes);
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error en el servidor 1", description: error.message });
    }
  }
}

// Búsqueda por nombre de película
async function catnombre(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.nombre)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    // Se reemplaza el query con lo que ingreso el usuario
    const Querynew14 = Query14.replace("Consulta", req.params.nombre);

    const QueryRes = await sequelize.query(Querynew14, {
      type: QueryTypes.SELECT,
    });
    if (QueryRes.length == 0) {
      console.log("No se encontró la búsqueda !");
      // 404: No found
      res.status(404).send("No se encontró la búsqueda !");
    } else {
      res.status(200).json(QueryRes);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 2", description: error.message });
  }
}

// Búsqueda por genero
async function catgenero(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.genero)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    // Se reemplaza el query con lo que ingreso el usuario
    const Querynew12 = Query12.replace("Consulta", req.params.genero);

    const QueryRes = await sequelize.query(Querynew12, {
      type: QueryTypes.SELECT,
    });
    if (QueryRes.length == 0) {
      console.log("No se encontró la búsqueda !");
      // 404: No found
      res.status(404).send("No se encontró la búsqueda !");
    } else {
      res.status(200).json(QueryRes);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 3", description: error.message });
  }
}

// Busqueda por categoria
async function catalogocat(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.categoria)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  try {
    // Se reemplaza el query con lo que ingreso el usuario
    const Querynew13 = Query13.replace("Consulta", req.params.categoria);

    const QueryRes = await sequelize.query(Querynew13, {
      type: QueryTypes.SELECT,
    });
    if (QueryRes.length == 0) {
      console.log("No se encontró la búsqueda !");
      // 404: No found
      res.status(404).send("No se encontró la búsqueda !");
    } else {
      res.status(200).json(QueryRes);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor 4", description: error.message });
  }
}

// Búsqueda por actor de reparto
async function actor(req, res) {
  // Valida que el texto sea alfabético
  if (!validar.validarTextInputs(req.params.nombre)) {
    res.status(400).send("Nombre inválido");
    return;
  }
  {
    try {
      // Se reemplaza el query con lo que ingreso el usuario
      const Querynew10 = Query10.replace("Consulta", req.params.nombre);

      const QueryRes = await sequelize.query(Querynew10, {
        type: QueryTypes.SELECT,
      });
      if (QueryRes.length == 0) {
        console.log("No se encontró la búsqueda !");
        res.status(404).json("No se encontró la búsqueda !");
      } else {
        res.status(200).json(QueryRes);
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error en el servidor 5", description: error.message });
    }
  }
}

async function poster(req, res) {
  try {
    const mipath = path.resolve(__dirname, "..", "..") + "/posters/" + req.params.posterid;
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
      .json({ error: "Error en el servidor 0", description: error.message })
  }
}

module.exports = {
  catalogoraw,
  actor,
  catId,
  catgenero,
  catalogocat,
  catnombre,
  generosdisp,
  categoriasdisp,
  poster
};
