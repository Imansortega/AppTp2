/* Validadores ---> Match = true para todas las funciones */

// Valida que solo haya caracteres alfabéticos
function validarTextInputs(query) {
  let ExpRegSoloLetras = "^[a-zA-_ZñÑáéíóúÁÉÍÓÚ' ]+$";
  // Distinto de NULL, hay match ---> true !!
  if (query.match(ExpRegSoloLetras) != null) {
    return true;
  } else {
    return false;
  }
}

// Valida que solo haya caracteres alfabéticos
function validarTextInputsExtendido(query) {
  let ExpRegSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9% ]+$/;
  // Distinto de NULL, hay match ---> true !!
  if (query.match(ExpRegSoloLetras) != null) {
    return true;
  } else {
    return false;
  }
}

// Valida que solo haya numeros(modo texto). Igual Postman no los admite
function validarNumberInputs(numero) {
  let ExpRegSoloNumeros = "^[0-9]+$"; // Retorna NULL si no hay match
  if (numero.match(ExpRegSoloNumeros) != null) {
    //console.log("*Texto OK ");
    return true;
  } else {
    //console.log("*Texto NO OK ");
    return false;
  }
}

// Detectar campos nulos
function detectarNull(busqueda) {
  if (busqueda != "") {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  validarTextInputs,
  validarTextInputsExtendido,
  validarNumberInputs,
  detectarNull
};
