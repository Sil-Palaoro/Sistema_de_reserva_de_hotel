// ======================================================
// 17 - REPORTES
// ======================================================

function reportes() {

  alert(
    "Total clientes: " + clientes.length +
    "\nTotal reservas: " + reservas.length
  );

}

// ======================================================
// 18 - CONTROL DISPONIBILIDAD
// ======================================================

function controlDisponibilidad() {

  let mensaje = "CONTROL DISPONIBILIDAD\n\n";

  habitaciones.forEach(h => {

    mensaje +=
      "Habitación " + h.numero +
      " -> Disponible: " +
      h.disponible + "\n";

  });

  alert(mensaje);

