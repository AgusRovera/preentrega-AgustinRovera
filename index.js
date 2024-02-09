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
            alert("Bienvenido agustin");
            acceso = true;
            break;
        }else{
            alert("algo no salio como se esperaba, intenta nuevamente. Te quedan "+ i +" intentos")
            }
        }

if(acceso)
    {
        producto = prompt ("¿Que modelo deseas? \n-1 Volswagen Polo $23000 \n-2 Volswagen Vento $27500 \n-3 Volswagen Virtus $19000")
        if (producto ==="Polo" || producto ==="Vento" || producto ==="Virtus"){
        cantidad = prompt("¿Cuantos "+producto+" comprar?")

        function carrito (cantidad, producto) {
            for(let i=3; i>=0; i--){
                switch (producto) {
                    case "Polo":

                        return 23000 * cantidad;

                    case "Vento":

                        return 27500 * cantidad;

                    case "Virtus":

                        return 19000 * cantidad;

                }
            }
        }
        totalCompra = carrito(cantidad,producto)
        alert("el total de tu compra es de : "+parseInt(totalCompra)+" $");
        alert("el total de su compra con IVA es de : "+parseFloat(totalCompra)*IVA+" $")

        formaDePago = prompt("¿Como quieres pagar? \n - Tarjeta \n - Financiado \n - Presiona X para salir");
        if(formaDePago == "tarjeta" || formaDePago == "financiado"){
                while(formaDePago !="x"){
                    switch (formaDePago) {
                        case "tarjeta":
                            alert("el total a pagar con tarjeta es de "+ parseFloat(totalCompra)*IVA+" $")
                            alert("Gracias por comprar en nuestra agencia.")
                        break;
                        case "financiado":
                            meses = prompt("¿En cuantos meses quieres pagar?")
                            if(meses){
                                alert("El total a pagar es de "+ totalCompra/meses+ " $ al mes");
                                alert("Gracias por comprar en nuestra agencia.")
                            }else{alert("No has elegido los meses a pagar")
                            }
                            break;
                        default:
                            alert("No has elegido una forma de pago.")
                        break;
                    }
                    formaDePago = prompt("Todo listo\n - Presiona X para salir");
                }
            }else{alert("No has ingresado una opcion de pago.")}
    }
}else{
    alert("Se cerrara el carrito")}