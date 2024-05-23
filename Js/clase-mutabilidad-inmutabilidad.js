// tipo primitivo - inmutable
let numero = 23
numero=numero +10
console.log(numero)

let esVerdadero = true
esVerdadero= false
console.log(esVerdadero)

// tipo de dato complejo - mutable
let usuario = {nombre: 'Pepito',edad:15}
usuario.edad= 20
console.log(usuario)

let frutas=['Manzana','pera']
frutas[0]='sandia'
console.log(frutas)

function cambiarNombre(objeto){
    objeto.nombre= 'NUevo Nombre'
}
let persona ={nombre:'Antonio'}
cambiarNombre(persona)
console.log(persona)