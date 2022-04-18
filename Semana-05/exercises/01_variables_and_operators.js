console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
// de ambos números en una 3er variable.

console.log('-Exercise 1.a:');
var v1 = 3;
var v2 = 7;
var result1a = v1+v2;
console.log('If we add v1: ' + v1 + ' to v2: ' + v2 + ', the result is: ');
console.log(result1a);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b:');
var s1 = 'Hello';
var s2 = 'World';
var result1b = s1+' '+s2;
console.log('If we concatenate s1: ' + s1 + ' with s2: ' + s2 + ', the result is: ');
console.log(result1b);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
// guardando el resultado de la suma en una 3er variable.

console.log('-Exercise 1.c:');
var c1 = 'Goodbye';
var c2 = 'People';
var result1c = c1.length+c2.length;
console.log('If we sum the lemgth of c1: ' + c1 + ' with the length of c2: ' + c2 + ', the result is: ');
console.log(result1c);