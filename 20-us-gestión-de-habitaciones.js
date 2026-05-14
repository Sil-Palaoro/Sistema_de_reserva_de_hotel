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