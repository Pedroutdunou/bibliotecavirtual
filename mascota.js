// ═══════════════════════════════════════════════════════════
//  mascota.js  –  BiblioMara
//  Edita ESTE archivo para cambiar la mascota, cosméticos y colores
//  sin tocar index.html
// ═══════════════════════════════════════════════════════════

// ── SVG base de la mascota ──────────────────────────────────
// Sustituye este string por cualquier otro SVG cuando quieras
// cambiar el diseño de la mascota.
var MASCOTA_SVG = [
  '<svg id="__MASCOT_ID__" width="__W__" height="__H__" viewBox="0 0 130 150" fill="none" xmlns="http://www.w3.org/2000/svg">',
    '<ellipse cx="65" cy="142" rx="30" ry="6" fill="rgba(79,70,229,.15)"/>',
    '<circle cx="65" cy="75" r="50" id="__BODY_ID__" fill="url(#__GRAD_BODY__)"/>',
    '<ellipse cx="50" cy="52" rx="14" ry="10" fill="rgba(255,255,255,.22)" transform="rotate(-20 50 52)"/>',
    '<circle cx="20" cy="62" r="11" fill="url(#__GRAD_EAR__)"/>',
    '<circle cx="110" cy="62" r="11" fill="url(#__GRAD_EAR__)"/>',
    '<circle cx="20" cy="62" r="6" fill="#f9a8d4"/>',
    '<circle cx="110" cy="62" r="6" fill="#f9a8d4"/>',
    '<ellipse cx="13" cy="87" rx="9" ry="15" fill="url(#__GRAD_BODY__)" transform="rotate(-20 13 87)"/>',
    '<ellipse cx="117" cy="87" rx="9" ry="15" fill="url(#__GRAD_BODY__)" transform="rotate(20 117 87)"/>',
    '<rect x="46" y="119" width="14" height="22" rx="7" fill="url(#__GRAD_LEG__)"/>',
    '<rect x="70" y="119" width="14" height="22" rx="7" fill="url(#__GRAD_LEG__)"/>',
    '<ellipse cx="53" cy="141" rx="11" ry="6" id="__SHOE_L__" fill="#312e81"/>',
    '<ellipse cx="77" cy="141" rx="11" ry="6" id="__SHOE_R__" fill="#312e81"/>',
    '<g style="animation:blink 4s ease-in-out infinite;transform-box:fill-box;transform-origin:center">',
      '<ellipse cx="52" cy="69" rx="9" ry="10" fill="white"/>',
      '<circle cx="54" cy="70" r="5.5" fill="#1e1b4b"/>',
      '<circle cx="56" cy="68" r="2" fill="white"/>',
    '</g>',
    '<g style="animation:blink 4s ease-in-out infinite .15s;transform-box:fill-box;transform-origin:center">',
      '<ellipse cx="78" cy="69" rx="9" ry="10" fill="white"/>',
      '<circle cx="80" cy="70" r="5.5" fill="#1e1b4b"/>',
      '<circle cx="82" cy="68" r="2" fill="white"/>',
    '</g>',
    '<ellipse cx="38" cy="83" rx="9" ry="6" fill="rgba(249,168,212,.55)"/>',
    '<ellipse cx="92" cy="83" rx="9" ry="6" fill="rgba(249,168,212,.55)"/>',
    '<path d="M52 89 Q65 101 78 89" stroke="#1e1b4b" stroke-width="3" stroke-linecap="round" fill="none"/>',
    '<rect x="2" y="81" width="16" height="20" rx="3" fill="#f59e0b" transform="rotate(-15 2 81)"/>',
    '<line x1="4" y1="85" x2="16" y2="82" stroke="white" stroke-width="1.5" stroke-linecap="round" transform="rotate(-15 4 85)"/>',
    '<g id="__HAT_LAYER__"></g>',
    '<g id="__ACC_LAYER__"></g>',
    '<ellipse cx="65" cy="28" rx="42" ry="10" fill="#4338ca"/>',
    '<rect x="30" y="18" width="70" height="18" rx="9" fill="#4f46e5"/>',
    '<circle cx="65" cy="18" r="6" fill="#7c3aed"/>',
    '<text x="58" y="33" font-size="10" fill="#fbbf24">&#9733;</text>',
    '<defs>',
      '<radialGradient id="__GRAD_BODY__" cx="40%" cy="35%">',
        '<stop offset="0%" stop-color="#818cf8" id="__C1__"/>',
        '<stop offset="100%" stop-color="#4f46e5" id="__C2__"/>',
      '</radialGradient>',
      '<radialGradient id="__GRAD_EAR__" cx="40%" cy="40%">',
        '<stop offset="0%" stop-color="#818cf8"/>',
        '<stop offset="100%" stop-color="#4338ca"/>',
      '</radialGradient>',
      '<linearGradient id="__GRAD_LEG__" x1="0" y1="0" x2="0" y2="1">',
        '<stop offset="0%" stop-color="#6366f1"/>',
        '<stop offset="100%" stop-color="#4338ca"/>',
      '</linearGradient>',
    '</defs>',
  '</svg>'
].join('');

// Genera el SVG reemplazando los IDs de placeholders
function buildSVG(id, w, h) {
  var suffix = id || 'main';
  return MASCOTA_SVG
    .replace(/__MASCOT_ID__/g,  'mascot_' + suffix)
    .replace(/__BODY_ID__/g,    'mBody_' + suffix)
    .replace(/__SHOE_L__/g,     'mShoeL_' + suffix)
    .replace(/__SHOE_R__/g,     'mShoeR_' + suffix)
    .replace(/__HAT_LAYER__/g,  'mHat_' + suffix)
    .replace(/__ACC_LAYER__/g,  'mAcc_' + suffix)
    .replace(/__C1__/g,         'mC1_' + suffix)
    .replace(/__C2__/g,         'mC2_' + suffix)
    .replace(/__GRAD_BODY__/g,  'gBody_' + suffix)
    .replace(/__GRAD_EAR__/g,   'gEar_' + suffix)
    .replace(/__GRAD_LEG__/g,   'gLeg_' + suffix)
    .replace(/__W__/g,          w || '130')
    .replace(/__H__/g,          h || '150');
}

// ── CATÁLOGO DE COSMÉTICOS ──────────────────────────────────
// Añade, quita o cambia ítems aquí sin tocar index.html
var COSMETICOS = {
  colores: [
    {id:'c_azul',    nombre:'Azul Clásico',     icon:'&#128153;', precio:0,   c1:'#818cf8', c2:'#4f46e5', tipo:'color'},
    {id:'c_verde',   nombre:'Verde Esmeralda',   icon:'&#128154;', precio:80,  c1:'#6ee7b7', c2:'#059669', tipo:'color'},
    {id:'c_rojo',    nombre:'Rojo Pasión',        icon:'&#10084;',  precio:80,  c1:'#fca5a5', c2:'#dc2626', tipo:'color'},
    {id:'c_naranja', nombre:'Naranja Sol',        icon:'&#129505;', precio:80,  c1:'#fdba74', c2:'#ea580c', tipo:'color'},
    {id:'c_rosa',    nombre:'Rosa Dulce',         icon:'&#129479;', precio:100, c1:'#f9a8d4', c2:'#db2777', tipo:'color'},
    {id:'c_dorado',  nombre:'Dorado Real',        icon:'&#10024;',  precio:200, c1:'#fde68a', c2:'#d97706', tipo:'color'},
    {id:'c_negro',   nombre:'Negro Galaxia',      icon:'&#128420;', precio:250, c1:'#6b7280', c2:'#111827', tipo:'color'},
    {id:'c_arco',    nombre:'Arco Iris',          icon:'&#127752;', precio:350, c1:'#c4b5fd', c2:'#e879f9', tipo:'color'}
  ],
  sombreros: [
    {id:'h_ninguno', nombre:'Sin sombrero',       icon:'&#128683;', precio:0,   svg:'', tipo:'sombrero'},
    {id:'h_corona',  nombre:'Corona Real',        icon:'&#128081;', precio:150, svg:'<text x="38" y="16" font-size="36">&#128081;</text>', tipo:'sombrero'},
    {id:'h_bruja',   nombre:'Sombrero Bruja',     icon:'&#129497;', precio:120, svg:'<path d="M35 22 L65 0 L95 22 Q65 18 35 22Z" fill="#1a1a2e"/><ellipse cx="65" cy="22" rx="34" ry="7" fill="#312e81"/>', tipo:'sombrero'},
    {id:'h_flor',    nombre:'Flor de Primavera',  icon:'&#127800;', precio:100, svg:'<text x="46" y="12" font-size="26">&#127800;</text>', tipo:'sombrero'},
    {id:'h_lazo',    nombre:'Lazo Kawaii',        icon:'&#127872;', precio:90,  svg:'<text x="46" y="14" font-size="26">&#127872;</text>', tipo:'sombrero'},
    {id:'h_gorra2',  nombre:'Gorra de Béisbol',   icon:'&#129510;', precio:80,  svg:'<ellipse cx="65" cy="22" rx="40" ry="9" fill="#ef4444"/><rect x="28" y="13" width="74" height="16" rx="8" fill="#dc2626"/><rect x="28" y="21" width="26" height="7" rx="3" fill="#b91c1c"/>', tipo:'sombrero'},
    {id:'h_tophat',  nombre:'Sombrero de Copa',   icon:'&#127913;', precio:200, svg:'<rect x="42" y="0" width="46" height="26" rx="4" fill="#1a1a2e"/><ellipse cx="65" cy="26" rx="36" ry="8" fill="#111827"/>', tipo:'sombrero'}
  ],
  accesorios: [
    {id:'a_ninguno', nombre:'Sin accesorio',      icon:'&#128683;', precio:0,   svg:'', tipo:'accesorio'},
    {id:'a_lentes',  nombre:'Lentes',             icon:'&#128083;', precio:100, svg:'<text x="34" y="78" font-size="22">&#128083;</text>', tipo:'accesorio'},
    {id:'a_bufanda', nombre:'Bufanda',            icon:'&#129531;', precio:90,  svg:'<path d="M22 112 Q65 105 108 112" stroke="#ef4444" stroke-width="8" fill="none" stroke-linecap="round"/>', tipo:'accesorio'},
    {id:'a_aretes',  nombre:'Aretes Estrella',    icon:'&#11088;',  precio:120, svg:'<text x="7" y="72" font-size="14">&#11088;</text><text x="107" y="72" font-size="14">&#11088;</text>', tipo:'accesorio'},
    {id:'a_mariposa',nombre:'Mariposas',          icon:'&#129419;', precio:150, svg:'<text x="10" y="55" font-size="18">&#129419;</text><text x="96" y="55" font-size="18">&#129419;</text>', tipo:'accesorio'},
    {id:'a_cape',    nombre:'Capa de Héroe',      icon:'&#129466;', precio:200, svg:'<path d="M15 110 Q65 140 115 110 Q110 125 65 135 Q20 125 15 110Z" fill="#7c3aed" opacity=".85"/>', tipo:'accesorio'}
  ],
  zapatos: [
    {id:'z_azul',    nombre:'Zapatillas Azules',  icon:'&#128095;', precio:0,   fill:'#312e81', tipo:'zapato'},
    {id:'z_rojo',    nombre:'Zapatillas Rojas',   icon:'&#128308;', precio:60,  fill:'#dc2626', tipo:'zapato'},
    {id:'z_verde',   nombre:'Zapatillas Verdes',  icon:'&#128994;', precio:60,  fill:'#059669', tipo:'zapato'},
    {id:'z_dorado',  nombre:'Zapatillas Doradas', icon:'&#127775;', precio:150, fill:'#d97706', tipo:'zapato'},
    {id:'z_negro',   nombre:'Zapatillas Negras',  icon:'&#11035;',  precio:80,  fill:'#111827', tipo:'zapato'},
    {id:'z_rosa',    nombre:'Zapatillas Rosas',   icon:'&#129479;', precio:80,  fill:'#ec4899', tipo:'zapato'}
  ]
};

// ── FUNCIONES DE RENDERIZADO ────────────────────────────────
function aplicarCosmeticosSuffix(suffix, cosm) {
  var c1   = document.getElementById('mC1_'    + suffix);
  var c2   = document.getElementById('mC2_'    + suffix);
  var shL  = document.getElementById('mShoeL_' + suffix);
  var shR  = document.getElementById('mShoeR_' + suffix);
  var hat  = document.getElementById('mHat_'   + suffix);
  var acc  = document.getElementById('mAcc_'   + suffix);

  // Color cuerpo
  var col = null;
  for (var i = 0; i < COSMETICOS.colores.length; i++) {
    if (COSMETICOS.colores[i].id === cosm.color) { col = COSMETICOS.colores[i]; break; }
  }
  if (!col) col = COSMETICOS.colores[0];
  if (c1) c1.setAttribute('stop-color', col.c1);
  if (c2) c2.setAttribute('stop-color', col.c2);

  // Zapatos
  var zap = null;
  for (var i = 0; i < COSMETICOS.zapatos.length; i++) {
    if (COSMETICOS.zapatos[i].id === cosm.zapato) { zap = COSMETICOS.zapatos[i]; break; }
  }
  if (!zap) zap = COSMETICOS.zapatos[0];
  if (shL) shL.setAttribute('fill', zap.fill);
  if (shR) shR.setAttribute('fill', zap.fill);

  // Sombrero
  var hatItem = null;
  for (var i = 0; i < COSMETICOS.sombreros.length; i++) {
    if (COSMETICOS.sombreros[i].id === cosm.sombrero) { hatItem = COSMETICOS.sombreros[i]; break; }
  }
  if (hat) hat.innerHTML = hatItem ? (hatItem.svg || '') : '';

  // Accesorio
  var accItem = null;
  for (var i = 0; i < COSMETICOS.accesorios.length; i++) {
    if (COSMETICOS.accesorios[i].id === cosm.accesorio) { accItem = COSMETICOS.accesorios[i]; break; }
  }
  if (acc) acc.innerHTML = accItem ? (accItem.svg || '') : '';
}

// Inyecta la mascota en un contenedor dado
function montarMascota(containerId, suffix, w, h) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = buildSVG(suffix, w, h);
}

// Renderiza la grilla de cosméticos
function renderCatMascota(cat, sesion, onBuyEquip) {
  var items = COSMETICOS[cat] || [];
  var grid  = document.getElementById('cosmGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var item    = items[i];
    var owned   = sesion.owned && sesion.owned.indexOf(item.id) >= 0;
    var equipped = sesion.cosmeticos && (sesion.cosmeticos[item.tipo] === item.id);
    var badge   = '';
    if (equipped)   badge = '<div class="ci-badge badge-eq">Equipado</div>';
    else if (owned) badge = '<div class="ci-badge badge-owned">Comprado</div>';
    var price = item.precio === 0
      ? '<span style="color:#10b981;font-weight:700;font-size:.72rem">Gratis</span>'
      : (owned ? '' : '<div class="ci-price">&#9733; ' + item.precio + '</div>');
    var cls = 'cosm-item' + (owned ? ' owned' : '') + (equipped ? ' equipped' : '');
    html += '<div class="' + cls + '" onclick="buyOrEquip(\'' + item.id + '\',\'' + cat + '\')">' +
            '<span class="ci-icon">' + item.icon + '</span>' +
            '<div class="ci-name">' + item.nombre + '</div>' +
            price + badge + '</div>';
  }
  grid.innerHTML = html;
}
