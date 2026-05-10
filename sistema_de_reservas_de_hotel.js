// ======================================================
// SISTEMA DE RESERVA DE HOTEL
// 18 HISTORIAS DE USUARIO
// ======================================================

let clientes = [];

let habitaciones = [
  {
    numero: 101,
    tipo: "Simple",
    precio: 10000,
    capacidad: 1,
    servicios: "WiFi",
    disponible: true
  },

  {
    numero: 102,
    tipo: "Doble",
    precio: 18000,
    capacidad: 2,
    servicios: "WiFi + TV",
    disponible: true
  },

  {
    numero: 103,
    tipo: "Suite",
    precio: 30000,
    capacidad: 4,
    servicios: "WiFi + TV + Jacuzzi",
    disponible: true
  }
];

let reservas = [];

// ======================================================
// MENU PRINCIPAL
// ======================================================

function menu() {

  let opcion;

  do {

    opcion = prompt(
      "=========== HOTEL ===========\n\n" +

      "1 - Crear Reserva\n" +
      "2 - Consultar Disponibilidad\n" +
      "3 - Seleccionar Habitación\n" +
      "4 - Definir Fechas Estadía\n" +
      "5 - Calcular Precio Total\n" +
      "6 - Modificar Reserva\n" +
      "7 - Cancelar Reserva\n" +
      "8 - Ver Reservas\n" +
      "9 - Registrar Cliente\n" +
      "10 - Confirmar Reserva\n" +
      "11 - Gestión Estados Reserva\n" +
      "12 - Generar Comprobante\n" +
      "13 - Registrar Check-in\n" +
      "14 - Registrar Check-out\n" +
      "15 - Gestión de Pagos\n" +
      "16 - Gestión Habitaciones\n" +
      "17 - Reportes\n" +
      "18 - Control Disponibilidad\n" +
      "19 - Salir\n\n" +

      "Seleccione una opción:"
    );

    switch(opcion) {

      case "1":
        crearReserva();
        break;

      case "2":
        consultarDisponibilidad();
        break;

      case "3":
        seleccionarHabitacion();
        break;

      case "4":
        definirFechas();
        break;

      case "5":
        calcularPrecioTotal();
        break;

      case "6":
        modificarReserva();
        break;

      case "7":
        cancelarReserva();
        break;

      case "8":
        verReservas();
        break;

      case "9":
        registrarCliente();
        break;

      case "10":
        confirmarReserva();
        break;

      case "11":
        gestionarEstados();
        break;

      case "12":
        generarComprobante();
        break;

      case "13":
        checkIn();
        break;

      case "14":
        checkOut();
        break;

      case "15":
        gestionPagos();
        break;

      case "16":
        gestionHabitaciones();
        break;

      case "17":
        reportes();
        break;

      case "18":
        controlDisponibilidad();
        break;

      case "19":
        alert("Saliendo...");
        break;

      default:
        alert("Opción inválida");

    }

  } while(opcion !== "19");

}

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

// ======================================================
// 3 - SELECCIONAR HABITACION
// ======================================================

function seleccionarHabitacion() {

  let mensaje = "SELECCIÓN HABITACIÓN\n\n";

  habitaciones.forEach(h => {

    mensaje +=
      "Número: " + h.numero +
      "\nTipo: " + h.tipo +
      "\nPrecio: $" + h.precio +
      "\nCapacidad: " + h.capacidad +
      "\nServicios: " + h.servicios +
      "\n------------------\n";

  });

  alert(mensaje);

}

// ======================================================
// 4 - DEFINIR FECHAS
// ======================================================

function definirFechas() {

  let entrada = prompt("Ingrese fecha entrada:");
  let salida = prompt("Ingrese fecha salida:");

  alert(
    "Fecha entrada: " + entrada +
    "\nFecha salida: " + salida
  );

}

// ======================================================
// 5 - CALCULAR PRECIO TOTAL
// ======================================================

function calcularPrecioTotal() {

  let numero = parseInt(
    prompt("Número habitación:")
  );

  let habitacion = habitaciones.find(
    h => h.numero === numero
  );

  if(!habitacion) {
    alert("Habitación inexistente");
    return;
  }

  let noches = parseInt(
    prompt("Cantidad noches:")
  );

  let total = noches * habitacion.precio;

  alert(
    "Precio Total: $" + total
  );

}

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
// ======================================================
// 9 - REGISTRAR CLIENTE
// ======================================================

function registrarCliente() {

  let nombre = prompt("Nombre:");
  let documento = prompt("Documento:");
  let telefono = prompt("Teléfono:");

  clientes.push({
    nombre,
    documento,
    telefono
  });

  alert("Cliente registrado");

}
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

