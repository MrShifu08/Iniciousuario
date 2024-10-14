lista=[]
class GestorUsuario{
    constructor(nombre, apellido, dni, telef, correo){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.telef = telef
        this.correo = correo
    }

    getNombre(){
        return this.nombre
    }

    getApellido(){
        return this.apellido
    }

    getDni(){
        return this.dni
    }

    getTelef(){
        return this.telef
    }

    getCorreo(){
        return this.correo
    }

}

let gestor1;
var lista = []
var i = 0

function iniciarUsuario(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const dni = document.getElementById("dni").value
    const telef = document.getElementById("telefono").value
    const correo = document.getElementById("correo").value
    gestor1 = new GestorUsuario(nombre, apellido, dni, telef, correo)
    lista.push(gestor1)
    mostrarUsuario()
}

function setCambiarUsuarios(){
    const nuevoPlan = document.getElementById("Plan").value
    gestor1.setPlan(nuevoPlan)
    mostrarInformacion()
}

function mostrarUsuario(){
    if (lista.length > 0){
        document.getElementById("nombre").innerHTML=lista[i].getNombre
        document.getElementById("saldo").innerHTML=lista[i].getSaldo}
    else{
        alert("No existe ese usuario");
        }
    
}

    

    
    
function siguienteUsuario(){
    if (lista.length>0){
        if (i<lista.length-1){
            i++;
            mostrarUsuario();
        }
    }else{
        alert("no hay usuarios")
    }
}

function anteriorUsuario(){
    if (lista.length>0){
        if (i>0){
            i--;
            mostrarUsuario();
        }
    }else{
        alert("no hay usuarios")
    }
}

function mostrarUsuario(){

    document.getElementById("mostrarNombre").innerHTML = lista[i].getNombre()
    document.getElementById("mostrarApellido").innerHTML = lista[i].getApellido()
    document.getElementById("mostrarDni").innerHTML = lista[i].getDni()
    document.getElementById("mostrarTelef").innerHTML = lista[i].getTelef()
    document.getElementById("mostrarCorreo").innerHTML = lista[i].getCorreo()
}



