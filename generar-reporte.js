document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formReporte");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const tipo = form.tipo.value;
    const formato = form.formato.value;

    if (tipo && formato) {
      alert(`Generando reporte de "${tipo}" en formato "${formato.toUpperCase()}"...`);
    } else {
      alert("Por favor seleccione tipo de reporte y formato.");
    }
  });
});
