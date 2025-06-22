document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formMenor");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Datos del menor enviados correctamente.");
    form.reset();
  });
});
