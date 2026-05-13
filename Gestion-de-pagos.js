// ======================================================
// 15 - GESTION PAGOS
// ======================================================

function gestionPagos() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  let metodo = prompt(
    "Método pago:"
  );

  reserva.metodoPago = metodo;

  alert("Pago registrado");

}

