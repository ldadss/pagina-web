document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const usuario = form.usuario.value.trim();
    const contrasena = form.contrasena.value.trim();
    if (!usuario || !contrasena) {
      alert("Por favor, completa ambos campos.");
      return;
    }
    if (usuario === "admin" && contrasena === "1234") {
      alert("Inicio de sesión exitoso. Redirigiendo...");
      window.location.href = "html/inicio.html";
    } else {
      alert("Credenciales inválidas.");
    }
  });
});
