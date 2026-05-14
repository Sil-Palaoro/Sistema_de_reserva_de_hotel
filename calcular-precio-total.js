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
