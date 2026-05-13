// ======================================================
// 1 - CREAR RESERVA
// ======================================================

function crearReserva() {

  let documento = prompt("Documento cliente:");

  let cliente = clientes.find(
    c => c.documento === documento
  );

  if(!cliente) {
    alert("Cliente no encontrado");
    return;
  }

  let numero = parseInt(
    prompt("Número habitación:")
  );

  let habitacion = habitaciones.find(
    h => h.numero === numero && h.disponible
  );

  if(!habitacion) {
    alert("Habitación no disponible");
    return;
  }

  let entrada = prompt("Fecha entrada:");
  let salida = prompt("Fecha salida:");
  let noches = parseInt(prompt("Cantidad noches:"));

  let total = noches * habitacion.precio;

  let reserva = {
    id: reservas.length + 1,
    cliente: cliente.nombre,
    documento,
    habitacion: numero,
    entrada,
    salida,
    noches,
    total,
    estado: "Pendiente"
  };

  reservas.push(reserva);

  habitacion.disponible = false;

  alert("Reserva creada correctamente");

}