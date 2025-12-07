function actualizarFecha() {
  const fecha = new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('fecha').innerText = fecha;
}
function actualizarHora() {
  const hora = new Date().toLocaleTimeString('es-CO');
  document.getElementById('hora').innerText = hora;
}
function actualizarOcasion() {
  const hoy = new Date();
  const mes = hoy.getMonth() + 1;
  let ocasion = 'Día normal';
  if (mes === 12) ocasion = '🎄 Temporada Navideña';
  if (mes === 10) ocasion = '🎃 Halloween';
  document.getElementById('ocasion').innerText = ocasion;
}

function confirmarCompra(plan, precio) {
  const texto = `¿Está seguro de hacer esta compra?\n\nPlan: ${plan}\nPrecio: ${precio}\n\nPulsa Aceptar para ir al servidor de Discord.`;
  if (confirm(texto)) {
    // redirigir al enlace de Discord proporcionado
    window.location.href = 'https://discord.gg/ny2JkxT4dP';
  }
}

setInterval(actualizarHora, 1000);
actualizarFecha(); actualizarHora(); actualizarOcasion();
