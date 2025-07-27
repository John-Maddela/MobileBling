document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.innerText = "Thank you! We have received your appointment request.";
    message.style.color = "green";
    form.reset();
  });
});
