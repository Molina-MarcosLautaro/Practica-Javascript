// Diseñar un programa que solicite una edad y diga si podemos votar o no
// entre 18 y 69 años estamos obligados a votar
// menores de 16 años no pueden votar
// 16 y 17 años, y mayores de 70 es optativo

let edad = parseInt(prompt("Ingresa tu edad"));

console.log(edad);

if (edad < 16) {
    document.writeln("No puede votar");
} else {
  // && AND
  // || OR
    if (edad >= 18 && edad <= 69) {
    document.writeln("Debes votar si o si");
    } else {
    document.writeln("Es optativo votar");
    }
}
