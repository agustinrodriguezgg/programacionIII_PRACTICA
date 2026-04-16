//Objetos 

/*
const persona = {
    nombre : "Agustin",
    apellido: "Rodriguez",
    edad: 26,
    altura: 173,
}

console.log (persona)
console.table (persona)
console.log (persona.nombre)
console.log (persona.edad)

//Destructuring -> Destructuracion

const {nombre, apellido, edad, altura} = persona

console.log (nombre)
console.log (apellido)
console.log (edad)
console.log (altura)

//objeto literal

const cliente = "Agustin"
const edad = 26
const altura = 173

const clientes = {
    nombre: cliente,
    edad: edad,
    altura: altura,
}

console.log (clientes)

*/
const persona = {
    nombre: "Agustin",
    edad: 26,
    altura: 173,
    direccion: {
        calle: "Rivadavia",
        numero: 1050,
    }
}
console.log (persona)

const {nombre, direccion:calle} = persona