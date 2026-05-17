
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

// ======================================================
// 12 - GENERAR COMPROBANTE
// ======================================================

function generarComprobante() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  alert(
    "===== COMPROBANTE =====\n\n" +
    "Cliente: " + reserva.cliente +
    "\nHabitación: " + reserva.habitacion +
    "\nTotal: $" + reserva.total
  );

}
// ======================================================
// 13 - CHECK IN
// ======================================================

function checkIn() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  reserva.estado = "En Curso";

  alert("Check-in realizado");

}

// ======================================================
// 14 - CHECK OUT
// ======================================================

function checkOut() {

  let id = parseInt(prompt("ID reserva:"));

  let reserva = reservas.find(
    r => r.id === id
  );

  if(!reserva) {
    alert("Reserva no encontrada");
    return;
  }

  reserva.estado = "Finalizada";

  let habitacion = habitaciones.find(
    h => h.numero === reserva.habitacion
  );

  habitacion.disponible = true;

  alert("Check-out realizado");

}
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


// ======================================================
// 16 - GESTION HABITACIONES
// ======================================================

function gestionHabitaciones() {

  let accion = prompt(
    "1- Agregar\n2- Eliminar"
  );

  if(accion === "1") {

    let numero = parseInt(prompt("Número:"));
    let tipo = prompt("Tipo:");
    let precio = parseInt(prompt("Precio:"));

    habitaciones.push({
      numero,
      tipo,
      precio,
      capacidad: 2,
      servicios: "WiFi",
      disponible: true
    });

    alert("Habitación agregada");

  }

  else if(accion === "2") {

    let numero = parseInt(prompt("Número:"));

    habitaciones = habitaciones.filter(
      h => h.numero !== numero
    );

    alert("Habitación eliminada");

  }

}

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

}

// ======================================================
// INICIAR SISTEMA
// ======================================================

menu();




