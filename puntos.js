// ═══════════════════════════════════════════════════════════
//  puntos.js  –  Badge de puntos persistente  –  BiblioMara
//  Incluir en TODAS las páginas. Lee/escribe localStorage.
// ═══════════════════════════════════════════════════════════

(function() {
  // Lee la sesión actual desde localStorage
  function getSesion() {
    try { return JSON.parse(localStorage.getItem('biblioSesion') || '{}'); }
    catch(e) { return {}; }
  }

  // Actualiza la sesión en localStorage
  function setSesion(data) {
    try { localStorage.setItem('biblioSesion', JSON.stringify(data)); }
    catch(e) {}
  }

  // Refresca el badge en pantalla leyendo directo de localStorage
  function refreshBadge() {
    var sesion = getSesion();
    var pts    = sesion.puntos || 0;
    var nombre = sesion.nombre || '';

    var badge = document.getElementById('sessionBadge');
    if (!badge) return;

    var ptsEl = badge.querySelector('.badge-pts');
    var nmEl  = badge.querySelector('.badge-nombre');
    if (ptsEl)  ptsEl.textContent  = '⭐ ' + pts + ' pts';
    if (nmEl)   nmEl.textContent   = nombre;
  }

  // Suma puntos, guarda en localStorage y refresca el badge
  window.actualizarPuntos = function(sumar) {
    var sesion   = getSesion();
    sesion.puntos = (sesion.puntos || 0) + sumar;
    setSesion(sesion);
    refreshBadge();
    return sesion.puntos;
  };

  // Refresca sin sumar (útil al cargar la página)
  window.refreshBadge = refreshBadge;

  // Auto-refresh al cargar
  document.addEventListener('DOMContentLoaded', refreshBadge);
})();
