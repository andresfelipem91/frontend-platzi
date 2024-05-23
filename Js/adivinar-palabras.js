let palabraOculta="javascript";
let intentos=3;
function verificarSuposicion(suposicion,palabraOculta,intentos) {
    if(suposicion.toLowerCase() === palabraOculta) 
        {
            return true;
        }
        return false;
}
function jugarAdivinaLaPalabra(){
    alert("Bienvenido a jugar adivina la palabra oculta");
    alert("Tiene 3 intentos para adivinar la palabra");
    alert("-pista- la palabra oculta es un lenguaje de programacion");

    while(intentos > 0){
        let suposicion =  prompt("Adivina la palabra")

        if(verificarSuposicion(suposicion,palabraOculta)){
          alert("¡Correcto! Has adivinado la palabra.")
          break;
        }else{
            intentos--;
            if(intentos > 0){
                alert(`Incorrecto, Aun tiene ${intentos} restantes`);
            }else{
                alert(` Agoto tus intentos , la palabra oculta es : ${palabraOculta}`);
            }
        }
    }
}
jugarAdivinaLaPalabra();