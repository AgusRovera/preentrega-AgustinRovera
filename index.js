let usuario = "agustin";
let contraseña = "4058"
let acceso = false;
let cantidad;
let producto;
let totaldecompra;
const IVA = 1.21;
let formaDePago;
let meses;


    for(let i=3; i>=0; i--){
        let confirmaTuUsuario = prompt("Confirma tu Usuario");
        let confirmaTuContraseña = prompt("Confirma Tu Contraseña")
        if((usuario === confirmaTuUsuario) && (contraseña === confirmaTuContraseña)){
            alert("Bienvenido" + nombre );
            acceso = true;
            break;
        }else{
            alert("algo no salio como se esperaba, intenta nuevamente. Te quedan "+ i + intentos)
            }
        }