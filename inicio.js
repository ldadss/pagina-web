document.addEventListener("DOMContentLoaded", function () {
  // Botón: Registrar menor
  const botonMenor = document.getElementById("btn-menor");
  if (botonMenor) {
    botonMenor.addEventListener("click", function () {
      window.location.href = "registromenores.html";
    });
  }

  // Botón: Registrar vehículo
  const botonVehiculo = document.getElementById("btn-vehiculo");
  if (botonVehiculo) {
    botonVehiculo.addEventListener("click", function () {
      window.location.href = "registrovehiculo.html";
    });
  }

  // Botón: Generar reporte
  const botonReporte = document.getElementById("btn-reporte");
  if (botonReporte) {
    botonReporte.addEventListener("click", function () {
      window.location.href = "generarreporte.html";
    });
  }

  // Botón: Cerrar sesión
  const botonSalir = document.getElementById("btn-salir");
  if (botonSalir) {
    botonSalir.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});

