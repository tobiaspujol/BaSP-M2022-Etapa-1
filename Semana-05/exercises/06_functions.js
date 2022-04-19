console.log('--EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y
// guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');
function suma(p1,p2) {
    return p1 + p2;
}
var sumaPrueba6a = suma(6,8);
console.log(sumaPrueba6a);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
// no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error
// y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');
function sumaVerif(v1,v2) {
    if ((typeof v1) != 'number' || (typeof v2) != 'number') {
        alert('Error');
        return NaN;
    } else {
        return v1 + v2;
    }
}
var sumaPrueba6b = sumaVerif('6',10);
console.log(sumaPrueba6b);

// c. Crear una función validate integer que reciba un número como parámetro y devuelva True si es un número entero.

console.log('-Exercise 6.c:');
function validateInteger(vi1) {
    return ((vi1 % 1) === 0);
}
var sumaPrueba6c = validateInteger(10);
console.log(sumaPrueba6c);

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
// En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');
function sumaVerifInteger(svi1,svi2) {
    if ((typeof svi1) != 'number' || (typeof svi2) != 'number') {
        alert('Error');
        return NaN;
    } else if (((svi1 % 1) !== 0) || ((svi2 % 1) !== 0)) {
        alert('The numbers have been rounded');
        return Math.round(svi1) + Math.round(svi2);
    } else {
        return svi1 + svi2;
    }
}
var sumaPrueba6d = sumaVerifInteger(10.4,12);
console.log(sumaPrueba6d);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
// probando que todo siga funcionando igual.

console.log('-Exercise 6.e:');
function valid(val1,val2) {
    if (((val1 % 1) !== 0) || ((val2 % 1) !== 0)) {
        alert('The numbers have been rounded (valid function)');
        return Math.round(val1) + Math.round(val2);
    }
}

function sumaVerif2(vv1,vv2) {
    if ((typeof vv1) != 'number' || (typeof vv2) != 'number') {
        alert('Error');
        return NaN;
    } else {
        return valid(vv1,vv2);
    }
}
var sumaPrueba6e = sumaVerif2(3,12.8);
console.log(sumaPrueba6e);