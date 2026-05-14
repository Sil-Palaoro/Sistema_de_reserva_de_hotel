
// ======================================================
// 8 - VER RESERVAS
// ======================================================

function verReservas() {

  let mensaje = "RESERVAS\n\n";

  reservas.forEach(r => {

    mensaje +=
      "ID: " + r.id +
      "\nCliente: " + r.cliente +
      "\nHabitación: " + r.habitacion +
      "\nEstado: " + r.estado +
      "\n------------------\n";

  });

  alert(mensaje);

}