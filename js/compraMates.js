let itemsComprar = []
let precioComprar = []
let tipomateComprar = []
let bucle = true
let nombre = "Lucas"
let apellido = "Massazza"
let loginRealizado = false
let usuario = "masitamc"
let contrasena = "papas"
let continuar = true


function carrtioCompra(producto,precio){
    itemsComprar.push(producto)
    precioComprar.push(precio)
}

function compra(){
    let seleccionMate = 0
    let continuarCompra = 1
    while(continuarCompra == 1){
        let seleccionProducto = prompt("Que tipo de mate desea comprar: \n1. Porongo\n2. Metalico\n 3.Calabaza")
        switch(seleccionProducto){
            case 1:
                seleccionMate = prompt("Que mate desea comprar: \n1. Color madera con tonos de roble:\n\t\tPrecio: $23.000\n2. Color marron oscuro con chapado con formas: \n\t\tPrecio: $30.000")
                tipomateComprar.push() = ["Porongo"]
                if(seleccionMate == 1){
                    itemsComprar.push("Madera con Roble")
                    precioComprar.push(23000)
                }else if(seleccionMate == 2){
                    itemsComprar.push("Marron con Chapado")
                    precioComprar.push(30000)
                }

            case 2:
                seleccionMate = prompt("Que mate desea comprar: \n1. Rojo con tonos blancos:\n\t\tPrecio: $15.000\n2. Azul con tonos amarillos: \n\t\tPrecio: $15.000")
                tipomateComprar.push() = ["Metalico"]
                if(seleccionMate == 1){
                    itemsComprar.push("Madera con Roble")
                    precioComprar.push(15000)
                }else if(seleccionMate == 2){
                    itemsComprar.push("Marron con Chapado")
                    precioComprar.push(15000)
                }

            case 3:
                seleccionMate = prompt("Que mate desea comprar: \n1. Madera de roble barniz claro:\n\t\tPrecio: $55.000\n2. Madera rebestido de cuero vacuno: \n\t\tPrecio: $60.000")
                tipomateComprar.push() = ["Calabaza"]
                if(seleccionMate == 1){
                    itemsComprar.push("Madera con Roble")
                    precioComprar.push(55000)
                }else if(seleccionMate == 2){
                    itemsComprar.push("Marron con Chapado")
                    precioComprar.push(60000)
                }
        }
        continuarCompra = prompt("Desea continuar comprando?: \n1. Si\n2. No")
        while(continuarCompra!=1 || continuarCompra!=2){
            continuarCompra = prompt("Favor ingrese una opcion correcta para continuar con la compra o no: \n1.Si\n2.No")
        }
    }
}

function login (){
    let ingreso = false
    let usuarioIngresado
    let contrasenaIngresada

    usuarioIngresado = prompt("Favor ingrese el usuario: ")
    if(usuarioIngresado == usuario){
        contrasenaIngresada = prompt("Favor ingrese la contraseña: ")
        if(contrasenaIngresada == contrasena){
            loginRealizado = true
            ingreso = true
        }
    }
    

    return ingreso
}

function registro(){
}

function fraseBienvenida(){
    let salida=false
    while(!salida){
        let seleccionMenu = prompt("Bienvenidos a Matearme. Si usted tiene una cuenta, favor ingrese los datos. Caso contratio ingrese cancelar: \n\t\t1. Login\n\t\t2. Cancelar\n\t\t3. Registrarse")
        if(seleccionMenu>0 && seleccionMenu<4){
            salida = true
        }else{
            seleccionMenu = prompt("Elija una opcion correcta...")
        }
    }
    
    return seleccionMenu
}

while(continuar){
    switch(fraseBienvenida()){
        case 1:
            if(login()){
                alert("Bienvenido "+nombre+" , puede continuar con la compra.")
                compra()
                continuar = false
            }else{
                alert("Login erroneo, si lo desea puede registrarse")
            }
        case 2:
            prompt("Puede recorrer el sitio web, tenga en cuenta que en caso de querer realizar alguna compra, debera registrarse. Gracias por visitarnos y confiar en nosotros")
            continuar = false
        case 3:
            registro()
            compra()
            continuar = false
    }
}

if(itemsComprar.length() > 0){
    prompt("Gracias por realizar la compra, a continuacion dejo un resumen de su compra:")
    prompt("\n\nCantidad de mates "+itemsComprar.length())
    let sumaTot
    for (let x = 0; x < (itemsComprar.length()-1); x++) {
        alert("Mate tipo"+tipomateComprar[x]+" ,modelo"+itemsComprar[x]+" y precio "+precioComprar[x])
        sumaTot += precioComprar[x]
    }
    prompt("el total de su compra es de $"+sumaTot)
    prompt("Gracias por su visita!! Se deslogueara la cuenta")
}else{
    prompt("Gracias por su visita!! Se deslogueara la cuenta")
}



    





    /*if(fraseBienvenida() == 1){
        if(login()){
            compra();
        }else{
            prompt("Logeo erroneo, pruebe seleccionar registrarse en caso de que no lo este.")
        }
    }else if(seleccionMenu == 3){
        registro()
        prompt("Gracias por registrarse, puede continuar con la compra!!")
        compra()
    }else if(seleccionMenu == 2){
        prompt("Puede continuar navegando, pero en caso de que necesite comprar, debera loguearse o registrarse. Gracias por la visita!!")
        bucle = false
    }else{
        prompt("Favor seleccione una opcion correcta...")
    }*/


