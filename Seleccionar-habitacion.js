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
