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