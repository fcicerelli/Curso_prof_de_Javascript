/*
Tipos de datos primitivos     Objeto asociado
string                        String()
number                        Number()        BigInt()
boolean                       Boolean()   
undefined
symbol                        Symbol()
null
*/

let number = "Hola";       // inmutable
number = 20;               // apunta a otro valor

console.log(Number("20")); // convierte a number
console.log(String(20));   // convierte a string

console.log(parseInt("20.5"));    // convierte a number entero
console.log(parseFloat("20.5"));  // convierte a number decimal

console.log(Number(200).toString());  // convierte a string