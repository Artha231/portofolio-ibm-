
// Theme toggle (light/dark)
const toggle = document.getElementById('themeToggle');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = id && document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// Dummy contact submit
function handleSubmit(e) {
  e.preventDefault();
  alert('Terima kasih! (Form ini hanya simulasi)');
  return false;
}
