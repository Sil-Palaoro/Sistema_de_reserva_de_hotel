// ======================================================
// 10 - CONFIRMAR RESERVA
// ======================================================

function confirmarReserva() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  reserva.estado = "Confirmada";

  alert("Reserva confirmada");

}