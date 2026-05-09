======================================================
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
