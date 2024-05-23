const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador= parseInt(
    prompt("Adivina el número secreto entre 1 al 10")
);

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log("¡Felicitaciones, adivinaste el número secreto! ")
}else if(numeroJugador < numeroSecreto){
 console.log("El número es demaciado bajo, intenta de nuevo");
}else{
    console.log("El numero es muy alto, intentalo de nuevo");
}
