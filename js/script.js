// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var liens = document.querySelector('.nav-liens');
  if (!toggle || !liens) return;

  toggle.addEventListener('click', function () {
    var ouvert = liens.classList.toggle('ouvert');
    toggle.setAttribute('aria-expanded', String(ouvert));
    toggle.textContent = ouvert ? '✕' : '☰';
  });
});
