// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'String';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 100;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
 return str;
}

function suma(x, y) {
var suma = x + y;
return suma;
}

function resta(x, y) {
var resta = x - y;
return resta;
}

function multiplica(x, y) {
var producto = x * y;
return producto;

}

function divide(x, y) {
var cociente = x / y;
return cociente;
}

function sonIguales(x, y) {
  if (x == y){
    resultado = true;
  }
  else{
    resultado = false;
  }
  return resultado;
}

function tienenMismaLongitud(str1, str2) {
  resultado = false;
  if(str1.length == str2.length){
    resultado = true;
  }
  return resultado;
}

function menosQueNoventa(num) {
  if (num < 90){
    resultado = true;
  }
  else{
    resultado = false;
  }
  return resultado;
}

function mayorQueCincuenta(num) {
  if (num > 50){
    resultado = true;
  }
  else{
    resultado = false;
  }
  return resultado;
}


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var module = x%y;
  return module;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
    var par = false;
    if (num%2 == 0){
      par = true;
    }
  return par;
  }


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
    var impar = true;
      if (num%2 == 0){
        impar = false;
      }
    return impar;
  }

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var square = Math.pow(num, 2);
  return square;
}

function elevarAlCubo(num) {
  var cube = Math.pow(num, 3);
  return cube;
}

function elevar(num, exponent) {
  var power = Math.pow(num, exponent);
  return power;
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  var round = Math.round(num);
  return round;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  var ceil = Math.ceil(num);
  return ceil;
}


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var stringPlus = str + "!";
  return stringPlus;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreApellido = nombre + " " + apellido;
  return nombreApellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = "Hola " + nombre + "!";
  return saludo; 
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  var areaRectangulo = alto * ancho;
  return areaRectangulo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
