console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula.

console.log('-Exercise 2.a:');
var s2a = 'Hello, I am Tobi';
var result2a = s2a.toUpperCase();
console.log(result2a);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
// caracteres guardando el resultado en una nueva variable.

console.log('-Exercise 2.b:');
var s2b = 'Goodbye Tobi';
var result2b = s2b.substring(0,5);
console.log(result2b);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
// caracteres guardando el resultado en una nueva variable.

console.log('-Exercise 2.c:');
var s2c = 'How are you doing';
var result2c = s2c.substring(s2c.length - 3);
console.log(result2c);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
// en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable.

console.log('-Exercise 2.d:');
var s2d = 'compUterstation';
var result2d = s2d.substring(0,1).toUpperCase() + s2d.substring(1).toLowerCase();
console.log(result2d);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
// la posición del primer espacio en blanco y guardarla en una variable.

console.log('-Exercise 2.e:');
var s2e = 'How are you doing';
var result2e = s2e.indexOf(' ',0);
console.log(result2e);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
// ambas palabras en mayúscula y las demás letras en minúscula.

console.log('-Exercise 2.f:');
var s2f = 'computer staTion';
var positionSpace = s2f.indexOf(' ',0);
var result2f = s2f.substring(0,1).toUpperCase() + s2f.substring(1,positionSpace).toLowerCase() + ' ' +
s2f.substring(positionSpace+1,positionSpace+2).toUpperCase() + s2f.substring(positionSpace+2).toLowerCase();
console.log(result2f);