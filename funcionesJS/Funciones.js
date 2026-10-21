//----------------some()---------------------------------
//Sintaxis:array.some(callback)
//----------------------------------------------------
const numeros = [3, 7, 10, 18, 21];
//Verificar si hay un numero mayor a 15
const resultado1 = numeros.some(numero => numero > 15);
//Verificar si un numero es par
const resultado2 = numeros.some(numero => numero % 2 === 0);
//Resultados...
console.log("-----1.-Resultados some()-----");
console.log("Resultado 1: ", resultado1);
console.log("Resultado 2: ", resultado2);


//----------------every()---------------------------------
//Sintaxis:array.every(callback)
//----------------------------------------------------
const edades = [18, 22, 30, 25, 19];
// Verificar si todos son mayores o iguales a 18
const resultado3 = edades.every(edad => edad >= 18);
// Verifica si todos son numeros pares
const resultado4 = edades.every(edad => edad % 2 === 0);
//Resultados...
console.log("-----2.-Resultados every()-----");
console.log("Resultado 1: ", resultado3);
console.log("Resultado 2: ", resultado4);


//----------------fill()------------------------------
//Sintaxis:array.fill(valor,inicio,fin)
//----------------------------------------------------
let letras = ['a', 'b', 'c', 'd', 'e'];
let letras1 = ['a', 'b', 'c', 'd', 'e'];
// Rellena las tres primeras posiciones con 'x'
letras.fill('x', 0, 3);
// Rellena desde la posicion 2 hasta la 4 con 'z'
letras1.fill('z', 2, 4);
//Resultados...
console.log("-----3.-Resultados fill()-----");
console.log("Resultado 1: ", letras);
console.log("Resultado 2: ", letras1);


//----------------filter()------------------------------
//Sintaxis:array.filter(callback)
//----------------------------------------------------
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];
// Filtrar los productos que cuesten ms de 100
const resultado5 = productos.filter( producto => producto.precio > 100);
// Filtra los productos cuyo nombre tenga mas de 5 letras
const resultado6 = productos.filter( producto => producto.nombre.length > 5);
//Resultados...
console.log("-----4.-Resultados filter()-----");
console.log("Resultado 1: ", resultado5);
console.log("Resultado 2: ", resultado6);


//----------------find()------------------------------
//Sintaxis:array.find(callback)
//----------------------------------------------------
const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carmen', edad: 19 }
];
// Encuentra al primer alumno mayor de 18 años
const resultado7 = alumnos.find(alumno => alumno.edad > 18);
// Encuentra al alumno cuyo nombre sea 'Luis'
const resultado8 = alumnos.find(alumno => alumno.nombre === 'Luis');
//Resultados...
console.log("-----5.-Resultados find()-----");
console.log("Resultado 1: ", resultado7);
console.log("Resultado 2: ", resultado8);


//----------------find()------------------------------
//Sintaxis:array.findIndex(callback)
//----------------------------------------------------
const frutas = ['manzana', 'platano', 'pera', 'fresa', 'uva'];
// Encontrar el indice de 'pera'
const resultado9 = frutas.findIndex(fruta => fruta === 'pera');
// Encontrar el ndice de la primera fruta con mas de 5 letras
const resultado10 = frutas.findIndex(fruta => fruta.length > 5);
//Resultados...
console.log("-----6.-Resultados findIndex()-----");
console.log("Resultado 1: El indice es ", resultado9);
console.log("Resultado 2: El indice es ", resultado10);


//----------------Set()------------------------------
//Sintaxis:new Set (iterable)
//----------------------------------------------------
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
console.log("-----7.-Resultados Set()-----");//muestra el texto que esta entre parentesis
//Crear un Set para eliminar los duplicados
const resultado11 = new Set(numerosDuplicados);
console.log("Set sin numeros duplicados:", resultado11);
//Convertir el Set nuevamente a un arreglo sin duplicados
const resultado12 = [...resultado11];
console.log("cambio a arreglo:", resultado12);
// Agregar un nuevo numero al Set
resultado11.add(6);
console.log("Set con nuevo numero: ", resultado11);
// Verifica si el numero 6 existe
console.log("El numero nuevo exite: ", resultado11.has(6));

//----------------------------------------------------
//----------------Ejercicio 8------------------------------
//----------------------------------------------------
// Arreglo de objetos llamado personas
const personas = [
    { nombre: 'Azucena', edad: 21, ciudad: 'Mexico' },
    { nombre: 'Luis', edad: 21, ciudad: 'Alemania' },
    { nombre: 'liz', edad: 15, ciudad: 'Brasil' },
    { nombre: 'Paola', edad: 25, ciudad: 'Mexico' },
    { nombre: 'Said', edad: 30, ciudad: 'Madrid' }
];
console.log("-----8.-Ejercicios-----");//muestra el texto que esta entre parentesis
// 1. Filtra las personas mayores de 18 años
const mayorEdad = personas.filter(persona => persona.edad > 18);
console.log("1. Personas mayores de 18 años: ", mayorEdad);
// 2. Usar some() para saber si hay alguien de Madrid
const ciudad = personas.some(persona => persona.ciudad === 'Madrid');
console.log("2. Hay alguien de Madrid?: ", ciudad);
// 3. Usar every() para verificar si todos son mayores de edad
const mayores = personas.every(persona => persona.edad >= 18);
console.log("3. Todos son mayores de edad?: ", mayores);
// 4. Usar find() para obtener la primera persona de Mexico
const personaMexico = personas.find(persona => persona.ciudad === 'Mexico');
console.log("4. Primera persona de Mexico:", personaMexico);
// 5. Usar findIndex() para obtener la posicion de alguien llamado Luis
const posicion = personas.findIndex(persona => persona.nombre === 'Luis');
console.log("5. indice de Luis:", posicion);