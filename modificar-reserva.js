// ======================================================
// 6 - MODIFICAR RESERVA
// ======================================================

function modificarReserva() {

  let id = parseInt(
    prompt("ID reserva:")
  );

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  reserva.entrada = prompt("Nueva fecha entrada:");
  reserva.salida = prompt("Nueva fecha salida:");

  alert("Reserva modificada");

}