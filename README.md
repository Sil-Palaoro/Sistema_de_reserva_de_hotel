# gestion_de_compra_y_venta
. Épica: Reserva y Disponibilidad (Turista)
US: Consultar Disponibilidad
COMO turista,
QUIERO buscar habitaciones por fecha y número de personas,
PARA saber qué opciones tengo disponibles para mi viaje.
•	Criterio de Aceptación:
o	DADO que estoy en el buscador del hotel,
o	CUANDO ingreso una fecha de entrada, una de salida y la cantidad de huéspedes,
o	ENTONCES el sistema debe mostrarme una lista de habitaciones que no tengan reservas confirmadas en ese rango de fechas.
US: Calcular Precio Total
COMO turista,
QUIERO ver el costo total desglosado de mi estadía,
PARA conocer el presupuesto exacto antes de realizar el pago.
•	Criterio de Aceptación:
o	DADO que he seleccionado una habitación y mis fechas,
o	CUANDO procedo al resumen de reserva,
o	ENTONCES el sistema debe mostrar el precio por noche multiplicado por la duración de la estadía, sumando los impuestos aplicables.
________________________________________
2. Épica: Operaciones de Recepción (Staff)
US: Registrar Check-in
COMO recepcionista,
QUIERO registrar la llegada del huésped al hotel,
PARA cambiar el estado de la reserva a "en curso" y asignarle su habitación.
•	Criterio de Aceptación:
o	DADO una reserva confirmada para el día de hoy,
o	CUANDO selecciono la opción "Check-in" al llegar el cliente,
o	ENTONCES el sistema debe actualizar el estado de la reserva y bloquear la habitación para que no aparezca como disponible para limpieza.
US: Registrar Check-out y Pago
COMO recepcionista,
QUIERO finalizar la estadía del cliente y registrar su pago,
PARA liberar la habitación y cerrar el folio de la cuenta.
•	Criterio de Aceptación:
o	DADO una reserva en estado "en curso",
o	CUANDO el cliente se retira y registro el pago total,
o	ENTONCES el sistema debe cambiar el estado a "finalizada" y enviar automáticamente el comprobante al correo del cliente.
________________________________________
3. Épica: Administración (Gestor)
US: Gestionar Habitaciones
COMO administrador,
QUIERO crear, editar o dar de baja habitaciones,
PARA mantener actualizado el inventario y los precios del hotel.
•	Criterio de Aceptación:
o	DADO que estoy en el panel de configuración,
o	CUANDO modifico el precio o las características de una suite,
o	ENTONCES los cambios deben reflejarse inmediatamente para todas las nuevas búsquedas de los clientes.
US: Cancelar Reserva
COMO recepcionista/cliente,
QUIERO anular una reserva existente,
PARA que la habitación vuelva a estar disponible para otros turistas.
•	Criterio de Aceptación:
o	DADO una reserva pendiente o confirmada,
o	CUANDO selecciono "Cancelar reserva",
o	ENTONCES el sistema debe liberar las fechas en el calendario y enviar una notificación de cancelación al usuario.
