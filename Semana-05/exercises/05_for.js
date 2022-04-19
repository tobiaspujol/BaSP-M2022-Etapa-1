console.log('--EXERCISE 5: FOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
// JavaScript para mostrar una alerta utilizando cada una de las palabras.

console.log('-Exercise 5.a:');
var numbers = ['one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < 5; i++) {
    alert(numbers[i]);
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta
// por cada palabra modificada.

console.log('-Exercise 5.b:');
for (let i = 0; i < 5; i++) {
    alert(numbers[i].substring(0,1).toUpperCase() + numbers[i].substring(1).toLowerCase());
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con
// un bucle for para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa.

console.log('-Exercise 5.c:');
var sentence = '';
for (let i = 0; i < 5; i++) {
    sentence = sentence + numbers[i] + ' ';
}
alert(sentence);

// d.  Crear una array vacío y con un bucle for de 10 repeticiones, llenar el array con el número de la repetición,
// es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde
// el número 0 hasta al número 9. Mostrar por la consola del navegador el array final.

console.log('-Exercise 5.d:');
var array5d = [];
for (let i = 0; i < 10; i++) {
    array5d[i] =  i;
}
console.log(array5d);