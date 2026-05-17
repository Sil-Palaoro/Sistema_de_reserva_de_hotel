
// ======================================================
// 11 - GESTION ESTADOS
// ======================================================

function gestionarEstados() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  let estado = prompt(
    "Nuevo estado:"
  );

  reserva.estado = estado;

  alert("Estado actualizado");

}