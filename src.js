document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ichiyo").addEventListener("animationend", () => {
    window.location.reload();
  });
});
