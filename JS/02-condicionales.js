// Pedir al usuario una edad y decir si es mayor de edad o no
// 18 años es mayor de edad

// condicionales simples
/*
if(condicion){
    codigo a ejecutar si se cumple la condicones
}
*/
// condicionales dobles
/*
if(condicion){
    codigo a ejecutar si se cumple la condicones
}else{
    codigo a ejecutar si no se cumple la condicion
}
*/

// Pedir al usuario una edad y decir si es mayor de edad o no
// 18 años es mayor de edad

const edad = parseInt(prompt("Ingrese su edad"));
console.log(edad);

console.log(isNaN("Hola")); // true
console.log(isNaN("18"));
console.log(isNaN(18));
// if(isNaN(edad) == true)
if (isNaN(edad)) {
  document.writeln("Edad no valida");
} else {
  // aqui estoy seguro que estoy trabajado con un numero
  if (edad >= 18) {
    document.writeln("Sos mayor de edad 👍");
  } else {
    document.writeln("Sos menor de edad 👌");
  }
}
