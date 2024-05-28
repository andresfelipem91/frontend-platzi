const usersDatabase=[
    {
        username:"andres",
        password:"123",
    },
    {username:"caro",password:"456",},
    {username:"mariana",password:"789",},
];
const usersTimeline=[
    {username:"Estefany",timeline:"Me encata Javascript!",},
    {username:"Oscar",timeline:"Bebeloper es lo mejor!",},
    {username:"Mariana",timeline:"A mi me gusta mas el cafe que el te",},
    {username:"Andres",timeline:"Yo hoy no quiero trabajar",},];

const username=prompt("Cual es su usuario?");
const password=prompt("Cual es tu Contraseña?"); 

function usuarioExistente(username, password){
    for(let i=0; i<usersDatabase.length; i++){
        if(
            usersDatabase[i].username ===username &&
            usersDatabase[i].password === password

        )
        {
          return true;
          
        }
    }
    return false;
}

function signIn(username, password){
 if(usuarioExistente(username, password)){
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
 }else
 {
    alert("UUUPS,usuario o contraseña incorrectos")
 }
}

signIn(username, password)
