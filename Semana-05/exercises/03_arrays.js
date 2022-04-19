console.log('--EXERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
// "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.

console.log('-Exercise 3.a:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4] + ' ' + meses[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola.

console.log('-Exercise 3.b:');
meses.sort();
console.log(meses);

// c. Agregar un elemento al principio y al final del array.

console.log('-Exercise 3.c:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.unshift("Primero");
meses.push("Último");
console.log(meses);

// d. Quitar un elemento del principio y del final del array.

console.log('-Exercise 3.d:');
meses.shift();
meses.pop();
console.log(meses);

// e. Invertir el orden del array.

console.log('-Exercise 3.e:');
meses.reverse();
console.log(meses);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión.

console.log('-Exercise 3.f:');
var mesesString = meses.join('-');
console.log(mesesString);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre.

console.log('-Exercise 3.g:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesSlice = meses.slice(4,11);
console.log(mesesSlice);