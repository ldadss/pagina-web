document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formVehiculo");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Datos del vehículo enviados correctamente.");
    form.reset();
  });
});
