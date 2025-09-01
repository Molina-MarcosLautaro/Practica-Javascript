// Esto es un comentario de una linea

/*
Esto es un comentario 
de multiple lineas
*/

// Como mandar mensajes
console.log("Hola mundo");
console.info("Hola mundo");
console.warn("Hola mundo");
console.error("Hola mundo");

// mostrar algo en el html
document.writeln("Hola mundo");
document.writeln("<h1 class='h1-color'>Hola mundo</h1>");

// ventanas emergentes
// alert("Practica de alert")

// variable var - let - const
const taiga = "https://tree.taiga.io/project/earias08-comision-web16/timeline";

console.log(taiga);
document.writeln("<p>" + taiga + "</p>");
document.writeln(taiga);
document.writeln("un nuevo texto");

let curso = "fullstack MERN";

document.writeln("<br>" + curso);

curso = "NextJs"; //string

document.writeln("<br>" + curso);

const anio = 2025; //number
const encendido = false; //boolean

// Solicitar al usuario su nombre y saludarlo por pantalla

const nombreUsuario = prompt("Ingresa tu nombre");
console.log(nombreUsuario);

document.writeln("<br> Bienvenido/a " + nombreUsuario + " 😎");
document.writeln(`<br> Hola ${nombreUsuario} 🧑🏻‍💻`)