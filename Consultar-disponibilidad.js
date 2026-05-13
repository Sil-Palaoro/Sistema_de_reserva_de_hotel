// ======================================================
// 2 - CONSULTAR DISPONIBILIDAD
// ======================================================

function consultarDisponibilidad() {

  let mensaje = "HABITACIONES DISPONIBLES\n\n";

  habitaciones.forEach(h => {

    if(h.disponible) {

      mensaje +=
        "Habitación: " + h.numero +
        " | Tipo: " + h.tipo + "\n";

    }

  });

  alert(mensaje);

}