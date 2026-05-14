// ======================================================
// 7 - CANCELAR RESERVA
// ======================================================

function cancelarReserva() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  reserva.estado = "Cancelada";

  let habitacion = habitaciones.find(
    h => h.numero === reserva.habitacion
  );

  habitacion.disponible = true;

  alert("Reserva cancelada");

}
