function agenda(dia){
    let mensaje = "";
    switch(dia){
        case "lunes":
            mensaje = "Debe atender a Vladimir a las 15:00 horas del dia";
            break;
        case "martes":
            mensaje = "Debe ir a Lamborghini en San Miguel"
            break;
        case "miercoles":
            mensaje = "Debe ir al Teatro Luis Poma a las 16:00 horas del dia para el ballet de su hija";
            break;
        case "jueves":
            mensaje = "Debe entregar el avance del proyecto antes de las 17:00 horas del dia";
            break;
        case "viernes":
            mensaje = "Le toca home Office";
            break;
        case "sabado":
            mensaje = "Toco asear la casa";
            break;
        default:
            mensaje = "dato invalido";
            break;        
    }
    document.getElementById("evento").textContent = mensaje;
}

