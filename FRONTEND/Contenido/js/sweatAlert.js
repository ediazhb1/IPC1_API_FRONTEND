function Register(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    copass = document.getElementById("copass").value;

    if(nombre.length==0){
        Swal.fire({
            icon: 'info',
            title: `Advertencia!`,
            text: `No debe de dejar espacio en blanco en Nombre`,
            confirmButtonText: "OK"
        })
    }else if(apellido.length==0 || /^\s+$/.test(apellido)){
        Swal.fire({
            icon: 'info',
            title: `Advertencia!`,
            text: `No debe de dejar espacio en blanco en Apellido`,
            confirmButtonText: "OK"
        })
    }else if(user.length==0 || /^\s+$/.test(user)){
        Swal.fire({
            icon: 'info',
            title: `Advertencia!`,
            text: `No debe de dejar espacio en blanco en Usuario`,
            confirmButtonText: "OK"
        })
    }else if(contraseña.length==0 || /^\s+$/.test(contraseña)){
        Swal.fire({
            icon: 'info',
            title: `Advertencia!`,
            text: `No debe de dejar espacio en blanco en Contraseña`,
            confirmButtonText: "OK"
        })
    }else if(copass.length==0 || /^\s+$/.test(copass)){
        Swal.fire({
            icon: 'info',
            title: `Advertencia!`,
            text: `No debe de dejar espacio en blanco en Confirmar Contraseña`,
            confirmButtonText: "OK"
        })
    }else{
        Swal.fire({
            icon: 'Error',
            title: `Error!`,
            text: `Contacte con soporte!`,
            confirmButtonText: "OK"
        }) 
    }
}
