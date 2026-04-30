// ═══════════════════════════════════════════════════════════
//  mascota-2.js  –  BiblioMara  v4
//  ESTRUCTURA SVG:
//    __ACC_BACK_LAYER__  → capa/alas (DETRÁS del cuerpo)
//    __BOOK_LAYER__      → libro en la mano (se oculta con algunos accesorios)
//    __BAND_LAYER__      → diadema nativa (se oculta cuando hay sombrero)
//    __ACC_LAYER__       → accesorios frontales (lentes, bufanda, aretes…)
//    __HAT_LAYER__       → sombrero (encima de todo)
// ═══════════════════════════════════════════════════════════

var MASCOTA_SVG = [
  '<svg id="__MASCOT_ID__" width="__W__" height="__H__" viewBox="0 0 130 150" fill="none" xmlns="http://www.w3.org/2000/svg">',
    '<style>@keyframes blink{0%,92%,100%{transform:scaleY(1)}94%,98%{transform:scaleY(.08)}}</style>',
    // ── Sombra suelo ──
    '<ellipse cx="65" cy="147" rx="32" ry="5" fill="rgba(79,70,229,.13)"/>',
    // ── CAPA DE ATRÁS (capa, alas) ──
    '<g id="__ACC_BACK_LAYER__"></g>',
    // ── Cuerpo ──
    '<circle cx="65" cy="75" r="50" id="__BODY_ID__" fill="url(#__GRAD_BODY__)"/>',
    '<ellipse cx="50" cy="52" rx="14" ry="10" fill="rgba(255,255,255,.22)" transform="rotate(-20 50 52)"/>',
    // ── Orejas ──
    '<circle cx="20" cy="62" r="11" fill="url(#__GRAD_EAR__)"/>',
    '<circle cx="110" cy="62" r="11" fill="url(#__GRAD_EAR__)"/>',
    '<circle cx="20" cy="62" r="6" fill="#f9a8d4"/>',
    '<circle cx="110" cy="62" r="6" fill="#f9a8d4"/>',
    // ── Brazos ──
    '<ellipse cx="13" cy="87" rx="9" ry="15" fill="url(#__GRAD_BODY__)" transform="rotate(-20 13 87)"/>',
    '<ellipse cx="117" cy="87" rx="9" ry="15" fill="url(#__GRAD_BODY__)" transform="rotate(20 117 87)"/>',
    // ── Piernas y zapatos ──
    '<rect x="46" y="119" width="14" height="22" rx="7" fill="url(#__GRAD_LEG__)"/>',
    '<rect x="70" y="119" width="14" height="22" rx="7" fill="url(#__GRAD_LEG__)"/>',
    '<ellipse cx="53" cy="141" rx="11" ry="6" id="__SHOE_L__" fill="#312e81"/>',
    '<ellipse cx="77" cy="141" rx="11" ry="6" id="__SHOE_R__" fill="#312e81"/>',
    // ── Ojos ──
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
    // ── Mejillas y boca ──
    '<ellipse cx="38" cy="83" rx="9" ry="6" fill="rgba(249,168,212,.55)"/>',
    '<ellipse cx="92" cy="83" rx="9" ry="6" fill="rgba(249,168,212,.55)"/>',
    '<path d="M52 89 Q65 101 78 89" stroke="#1e1b4b" stroke-width="3" stroke-linecap="round" fill="none"/>',
    // ── Libro en mano (ocultable) ──
    '<g id="__BOOK_LAYER__">',
      '<rect x="2" y="81" width="16" height="20" rx="3" fill="#f59e0b" transform="rotate(-15 2 81)"/>',
      '<line x1="4" y1="85" x2="16" y2="82" stroke="white" stroke-width="1.5" stroke-linecap="round" transform="rotate(-15 4 85)"/>',
    '</g>',
    // ── Diadema nativa (ocultable con sombrero) ──
    '<g id="__BAND_LAYER__">',
      '<ellipse cx="65" cy="28" rx="42" ry="10" fill="#4338ca"/>',
      '<rect x="30" y="18" width="70" height="18" rx="9" fill="#4f46e5"/>',
      '<circle cx="65" cy="18" r="6" fill="#7c3aed"/>',
      '<text x="58" y="33" font-size="10" fill="#fbbf24">&#9733;</text>',
    '</g>',
    // ── Accesorios frontales ──
    '<g id="__ACC_LAYER__"></g>',
    // ── Sombrero (encima de todo) ──
    '<g id="__HAT_LAYER__"></g>',
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

function buildSVG(id, w, h) {
  var suffix = id || 'main';
  return MASCOTA_SVG
    .replace(/__MASCOT_ID__/g,       'mascot_'   + suffix)
    .replace(/__BODY_ID__/g,         'mBody_'    + suffix)
    .replace(/__SHOE_L__/g,          'mShoeL_'   + suffix)
    .replace(/__SHOE_R__/g,          'mShoeR_'   + suffix)
    .replace(/__HAT_LAYER__/g,       'mHat_'     + suffix)
    .replace(/__ACC_LAYER__/g,       'mAcc_'     + suffix)
    .replace(/__ACC_BACK_LAYER__/g,  'mAccBack_' + suffix)
    .replace(/__BOOK_LAYER__/g,      'mBook_'    + suffix)
    .replace(/__BAND_LAYER__/g,      'mBand_'    + suffix)
    .replace(/__C1__/g,              'mC1_'      + suffix)
    .replace(/__C2__/g,              'mC2_'      + suffix)
    .replace(/__GRAD_BODY__/g,       'gBody_'    + suffix)
    .replace(/__GRAD_EAR__/g,        'gEar_'     + suffix)
    .replace(/__GRAD_LEG__/g,        'gLeg_'     + suffix)
    .replace(/__W__/g,               w || '130')
    .replace(/__H__/g,               h || '150');
}

// ══════════════════════════════════════════════════════════
//  CATÁLOGO DE COSMÉTICOS
// ══════════════════════════════════════════════════════════
var COSMETICOS = {

  // ── COLORES ────────────────────────────────────────────
  colores: [
    {id:'c_azul',     nombre:'Azul Clásico',     icon:'💙', precio:0,   c1:'#818cf8', c2:'#4f46e5', tipo:'color'},
    {id:'c_verde',    nombre:'Verde Esmeralda',  icon:'💚', precio:80,  c1:'#6ee7b7', c2:'#059669', tipo:'color'},
    {id:'c_rojo',     nombre:'Rojo Pasión',      icon:'❤️', precio:80,  c1:'#fca5a5', c2:'#dc2626', tipo:'color'},
    {id:'c_naranja',  nombre:'Naranja Sol',      icon:'🧡', precio:80,  c1:'#fdba74', c2:'#ea580c', tipo:'color'},
    {id:'c_rosa',     nombre:'Rosa Dulce',       icon:'🌸', precio:100, c1:'#f9a8d4', c2:'#db2777', tipo:'color'},
    {id:'c_dorado',   nombre:'Dorado Real',      icon:'✨', precio:200, c1:'#fde68a', c2:'#d97706', tipo:'color'},
    {id:'c_negro',    nombre:'Negro Galaxia',    icon:'🖤', precio:250, c1:'#6b7280', c2:'#111827', tipo:'color'},
    {id:'c_arco',     nombre:'Arco Iris',        icon:'🌈', precio:350, c1:'#c4b5fd', c2:'#e879f9', tipo:'color'},
    {id:'c_turquesa', nombre:'Turquesa Mágico',  icon:'🩵', precio:120, c1:'#67e8f9', c2:'#0891b2', tipo:'color'},
    {id:'c_morado',   nombre:'Morado Profundo',  icon:'💜', precio:180, c1:'#d8b4fe', c2:'#7c3aed', tipo:'color'},
    {id:'c_plateado', nombre:'Plateado Estelar', icon:'🪩', precio:300, c1:'#e2e8f0', c2:'#64748b', tipo:'color'}
  ],

  // ── SOMBREROS ──────────────────────────────────────────
  // hideBand:true → oculta la diadema nativa automáticamente
  sombreros: [
    {id:'h_ninguno', nombre:'Sin sombrero',      icon:'🚫', precio:0, svg:'', tipo:'sombrero'},

    // CORONA REAL (rediseñada elegante)
    {id:'h_corona', nombre:'Corona Real',        icon:'👑', precio:150, tipo:'sombrero', hideBand:true,
      svg:
        // Base y puntas de la corona
        '<path d="M27 26 L34 5 L47 20 L65 2 L83 20 L96 5 L103 26 Z" fill="#fbbf24" stroke="#92400e" stroke-width="1.5" stroke-linejoin="round"/>'
        // Banda inferior con relieve
        +'<rect x="25" y="24" width="80" height="11" rx="5" fill="#fde68a" stroke="#92400e" stroke-width="1.2"/>'
        +'<rect x="25" y="24" width="80" height="5" rx="4" fill="rgba(255,255,255,.35)"/>'
        // Gema roja central
        +'<ellipse cx="65" cy="5" rx="5.5" ry="5" fill="#dc2626" stroke="#7f1d1d" stroke-width="1"/>'
        +'<ellipse cx="63" cy="3.5" rx="2" ry="1.5" fill="rgba(255,255,255,.55)"/>'
        // Gemas azules laterales
        +'<ellipse cx="41" cy="11" rx="4" ry="3.8" fill="#2563eb" stroke="#1e3a8a" stroke-width=".9"/>'
        +'<ellipse cx="40" cy="9.5" rx="1.5" ry="1" fill="rgba(255,255,255,.5)"/>'
        +'<ellipse cx="89" cy="11" rx="4" ry="3.8" fill="#2563eb" stroke="#1e3a8a" stroke-width=".9"/>'
        +'<ellipse cx="88" cy="9.5" rx="1.5" ry="1" fill="rgba(255,255,255,.5)"/>'
        // Gemas verdes pequeñas
        +'<circle cx="34" cy="21" r="3" fill="#059669" stroke="#064e3b" stroke-width=".8"/>'
        +'<circle cx="96" cy="21" r="3" fill="#059669" stroke="#064e3b" stroke-width=".8"/>'
        // Perlas en la banda
        +'<circle cx="65" cy="27.5" r="2.5" fill="white" stroke="#d4d4d4" stroke-width=".5"/>'
        +'<circle cx="50" cy="27.5" r="2" fill="white" stroke="#d4d4d4" stroke-width=".5"/>'
        +'<circle cx="80" cy="27.5" r="2" fill="white" stroke="#d4d4d4" stroke-width=".5"/>'
        +'<circle cx="36" cy="28.5" r="1.5" fill="white" stroke="#d4d4d4" stroke-width=".5"/>'
        +'<circle cx="94" cy="28.5" r="1.5" fill="white" stroke="#d4d4d4" stroke-width=".5"/>'
        // Línea de brillo superior
        +'<path d="M28 26 Q65 23 102 26" stroke="rgba(255,255,255,.5)" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
    },

    // SOMBRERO BRUJA
    {id:'h_bruja', nombre:'Sombrero Bruja',      icon:'🧙', precio:120, tipo:'sombrero', hideBand:true,
      svg:
        '<path d="M33 27 L65 -1 L97 27 Q65 22 33 27Z" fill="#1a1a2e" stroke="#4c1d95" stroke-width="1"/>'
        +'<ellipse cx="65" cy="27" rx="37" ry="9" fill="#312e81" stroke="#4338ca" stroke-width="1.2"/>'
        +'<ellipse cx="65" cy="25" rx="25" ry="5" fill="#3730a3" opacity=".5"/>'
        +'<path d="M54 13 Q65 7 76 13" stroke="#a855f7" stroke-width="2" fill="none" stroke-linecap="round"/>'
        +'<circle cx="65" cy="27" r="4.5" fill="#7c3aed"/>'
        +'<circle cx="64" cy="25.5" rx="1.5" ry="1" fill="rgba(255,255,255,.4)"/>'
    },

    // FLOR (en la oreja derecha)
    {id:'h_flor', nombre:'Flor de Primavera',    icon:'🌸', precio:100, tipo:'sombrero', hideBand:false,
      svg:
        // Pétalos SVG en la oreja derecha (cx≈110, cy≈62)
        '<circle cx="110" cy="55" r="7" fill="#fce7f3" stroke="#f9a8d4" stroke-width="1.2"/>'
        +'<circle cx="110" cy="48" r="5" fill="#f9a8d4"/>'
        +'<circle cx="117" cy="51" r="5" fill="#fda4af"/>'
        +'<circle cx="117" cy="59" r="5" fill="#f9a8d4"/>'
        +'<circle cx="110" cy="62" r="5" fill="#fda4af"/>'
        +'<circle cx="103" cy="59" r="5" fill="#f9a8d4"/>'
        +'<circle cx="103" cy="51" r="5" fill="#fda4af"/>'
        +'<circle cx="110" cy="55" r="5" fill="#fbbf24"/>'
        +'<circle cx="109" cy="53.5" r="1.5" fill="rgba(255,255,255,.6)"/>'
    },

    // LAZO KAWAII (centrado en la cabeza, sobre la diadema)
    {id:'h_lazo', nombre:'Lazo Kawaii',           icon:'🎀', precio:90, tipo:'sombrero', hideBand:true,
      svg:
        // Lazo izquierdo
        '<path d="M30 20 Q38 12 50 18 Q42 22 30 20Z" fill="#ec4899" stroke="#be185d" stroke-width="1"/>'
        +'<path d="M30 20 Q38 28 50 22 Q42 22 30 20Z" fill="#f472b6" stroke="#be185d" stroke-width="1"/>'
        // Lazo derecho
        +'<path d="M100 20 Q92 12 80 18 Q88 22 100 20Z" fill="#ec4899" stroke="#be185d" stroke-width="1"/>'
        +'<path d="M100 20 Q92 28 80 22 Q88 22 100 20Z" fill="#f472b6" stroke="#be185d" stroke-width="1"/>'
        // Centro del lazo
        +'<ellipse cx="65" cy="21" rx="12" ry="7" fill="#f9a8d4" stroke="#be185d" stroke-width="1"/>'
        +'<circle cx="65" cy="21" r="5" fill="#ec4899"/>'
        +'<circle cx="64" cy="20" r="2" fill="rgba(255,255,255,.5)"/>'
    },

    // GORRA DE BÉISBOL (con profundidad)
    {id:'h_gorra', nombre:'Gorra de Béisbol',    icon:'🧢', precio:80, tipo:'sombrero', hideBand:true,
      svg:
        // Parte principal de la gorra
        '<path d="M28 27 Q38 10 65 8 Q92 10 102 27 Q65 22 28 27Z" fill="#ef4444"/>'
        +'<path d="M28 27 Q65 22 102 27 Q65 24 28 27Z" fill="#dc2626"/>'
        // Visera con sombra/profundidad
        +'<path d="M28 27 Q20 30 14 33 Q12 30 18 26 Q24 24 28 27Z" fill="#b91c1c"/>'
        +'<path d="M28 27 Q20 30 14 33" stroke="#991b1b" stroke-width=".8" fill="none"/>'
        // Paneles de la gorra
        +'<path d="M65 8 Q55 14 50 22" stroke="#dc2626" stroke-width="1.2" fill="none" opacity=".7"/>'
        +'<path d="M65 8 Q75 14 80 22" stroke="#dc2626" stroke-width="1.2" fill="none" opacity=".7"/>'
        // Botón de copa
        +'<circle cx="65" cy="8" r="4.5" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>'
        // Brillo
        +'<path d="M38 14 Q55 10 72 13" stroke="rgba(255,255,255,.25)" stroke-width="2" fill="none" stroke-linecap="round"/>'
    },

    // SOMBRERO DE COPA (mejorado)
    {id:'h_tophat', nombre:'Sombrero de Copa',   icon:'🎩', precio:200, tipo:'sombrero', hideBand:true,
      svg:
        // Cuerpo del sombrero
        '<rect x="43" y="0" width="44" height="28" rx="3" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>'
        // Brillo lateral sutil
        +'<rect x="46" y="2" width="5" height="22" rx="2.5" fill="rgba(255,255,255,.07)"/>'
        // Brillo horizontal superior
        +'<ellipse cx="68" cy="4" rx="10" ry="3" fill="rgba(255,255,255,.08)" transform="rotate(-8 68 4)"/>'
        // Ala del sombrero con 3D
        +'<ellipse cx="65" cy="28" rx="40" ry="9" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>'
        +'<ellipse cx="65" cy="26" rx="22" ry="4" fill="#111827" opacity=".8"/>'
        // Cinta de seda
        +'<rect x="43" y="22" width="44" height="6" rx="1" fill="#7c3aed"/>'
        +'<rect x="43" y="22" width="44" height="2.5" rx="1" fill="#9333ea" opacity=".7"/>'
        // Hebilla dorada
        +'<rect x="60" y="23" width="10" height="4" rx="1" fill="#fbbf24" stroke="#b45309" stroke-width=".8"/>'
        +'<rect x="62" y="24.5" width="6" height="1" fill="#92400e" opacity=".4"/>'
    },

    // GORRO NAVIDEÑO
    {id:'h_navidad', nombre:'Gorro Navideño',    icon:'🎅', precio:130, tipo:'sombrero', hideBand:true,
      svg:
        '<path d="M30 27 Q42 8 65 2 Q88 8 100 27 Q65 20 30 27Z" fill="#dc2626"/>'
        +'<path d="M38 22 Q65 16 92 22" stroke="#b91c1c" stroke-width="1" fill="none" opacity=".5"/>'
        +'<ellipse cx="65" cy="27" rx="37" ry="8" fill="white" stroke="#e5e7eb" stroke-width=".8"/>'
        +'<circle cx="65" cy="2" r="7" fill="white" stroke="#e5e7eb" stroke-width=".8"/>'
    },

    // DIADEMA UNICORNIO (con profundidad)
    {id:'h_unicornio', nombre:'Diadema Unicornio', icon:'🦄', precio:250, tipo:'sombrero', hideBand:true,
      svg:
        // Banda de diadema con gradiente visual
        '<path d="M28 27 Q65 22 102 27" stroke="#f9a8d4" stroke-width="6" fill="none" stroke-linecap="round"/>'
        +'<path d="M28 27 Q65 22 102 27" stroke="#fce7f3" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>'
        +'<path d="M28 27 Q65 22 102 27" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-dasharray="4 5" opacity=".6"/>'
        // Cuerno
        +'<path d="M58 22 L65 0 L72 22 Z" fill="#f472b6" stroke="#be185d" stroke-width="1"/>'
        +'<path d="M61 22 L65 4 L69 22 Z" fill="#e879f9" opacity=".5"/>'
        // Rayas del cuerno
        +'<line x1="61" y1="18" x2="69" y2="18" stroke="rgba(255,255,255,.6)" stroke-width="1.2" stroke-linecap="round"/>'
        +'<line x1="62" y1="13" x2="68" y2="13" stroke="rgba(255,255,255,.5)" stroke-width="1" stroke-linecap="round"/>'
        +'<line x1="63" y1="8" x2="67" y2="8" stroke="rgba(255,255,255,.4)" stroke-width=".8" stroke-linecap="round"/>'
        // Base del cuerno
        +'<ellipse cx="65" cy="22" rx="8" ry="3" fill="#f9a8d4"/>'
        // Estrellitas
        +'<circle cx="40" cy="24" r="2.5" fill="#fbbf24"/><circle cx="40" cy="24" r="1" fill="white"/>'
        +'<circle cx="90" cy="24" r="2.5" fill="#c4b5fd"/><circle cx="90" cy="24" r="1" fill="white"/>'
        +'<text x="34" y="21" font-size="8" fill="#fbbf24">✦</text>'
        +'<text x="84" y="21" font-size="8" fill="#c4b5fd">✦</text>'
    }
  ],

  // ── ACCESORIOS ─────────────────────────────────────────
  // svgBack  → se dibuja en la capa trasera (detrás del cuerpo)
  // svg      → se dibuja en la capa frontal
  // hidesBook→ oculta el libro de la mano
  accesorios: [
    {id:'a_ninguno',  nombre:'Sin accesorio',     icon:'🚫', precio:0, svg:'', tipo:'accesorio'},

    // LENTES (perfectos según el usuario)
    {id:'a_lentes', nombre:'Lentes Cool',          icon:'👓', precio:100, tipo:'accesorio',
      svg:
        '<circle cx="51" cy="71" r="11" fill="none" stroke="#1e1b4b" stroke-width="2.5"/>'
        +'<circle cx="79" cy="71" r="11" fill="none" stroke="#1e1b4b" stroke-width="2.5"/>'
        +'<line x1="62" y1="71" x2="68" y2="71" stroke="#1e1b4b" stroke-width="2"/>'
        +'<line x1="40" y1="68" x2="34" y2="65" stroke="#1e1b4b" stroke-width="2"/>'
        +'<line x1="90" y1="68" x2="96" y2="65" stroke="#1e1b4b" stroke-width="2"/>'
    },

    // BUFANDA (diseño mejorado)
    {id:'a_bufanda', nombre:'Bufanda Roja',         icon:'🧣', precio:90, tipo:'accesorio',
      svg:
        // Vuelta principal de la bufanda
        '<path d="M20 107 Q65 100 110 107 Q110 114 65 118 Q20 114 20 107Z" fill="#ef4444"/>'
        +'<path d="M20 107 Q65 100 110 107" stroke="#dc2626" stroke-width="1.5" fill="none"/>'
        +'<path d="M25 112 Q65 106 105 112" stroke="#dc2626" stroke-width=".8" fill="none" opacity=".5"/>'
        // Franja decorativa
        +'<path d="M22 109 Q65 103 108 109" stroke="#fca5a5" stroke-width=".8" fill="none" stroke-dasharray="4 4" opacity=".7"/>'
        // Cola colgante
        +'<path d="M21 108 Q17 116 19 130 Q25 138 28 130 Q26 118 26 108 Z" fill="#dc2626"/>'
        +'<path d="M21 108 Q17 116 19 130" stroke="#b91c1c" stroke-width=".8" fill="none" opacity=".5"/>'
        // Flecos
        +'<line x1="21" y1="128" x2="19" y2="135" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round"/>'
        +'<line x1="24.5" y1="129.5" x2="23" y2="137" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round"/>'
        +'<line x1="28" y1="130" x2="28" y2="137" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round"/>'
    },

    // ARETES ESTRELLA (reposicionados + ocultan libro)
    {id:'a_aretes', nombre:'Aretes Estrella',       icon:'⭐', precio:120, tipo:'accesorio', hidesBook:true,
      svg:
        // Arete izquierdo (oreja izq cx=20,cy=62)
        '<circle cx="20" cy="73" r="3" fill="#fbbf24" stroke="#b45309" stroke-width="1"/>'
        +'<line x1="20" y1="68" x2="20" y2="70" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>'
        +'<path d="M20 78 L21.5 83 L17 80.5 L23 80.5 L18.5 83 Z" fill="#fbbf24" stroke="#b45309" stroke-width=".5"/>'
        // Arete derecho (oreja der cx=110,cy=62)
        +'<circle cx="110" cy="73" r="3" fill="#fbbf24" stroke="#b45309" stroke-width="1"/>'
        +'<line x1="110" y1="68" x2="110" y2="70" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>'
        +'<path d="M110 78 L111.5 83 L107 80.5 L113 80.5 L108.5 83 Z" fill="#fbbf24" stroke="#b45309" stroke-width=".5"/>'
        // Joya en la mano (reemplaza al libro)
        +'<rect x="3" y="82" width="14" height="18" rx="3" fill="#7c3aed" transform="rotate(-15 3 82)"/>'
        +'<path d="M5 87 L10 83 L15 87 L15 96 L5 96 Z" fill="#9333ea" transform="rotate(-15 5 87)"/>'
        +'<ellipse cx="10" cy="90" rx="4" ry="3" fill="#fbbf24" transform="rotate(-15 10 90)"/>'
        +'<circle cx="10" cy="90" r="1.5" fill="#fde68a" transform="rotate(-15 10 90)"/>'
    },

    // MARIPOSAS (ocultan libro, van en la mano)
    {id:'a_mariposa', nombre:'Mariposas',           icon:'🦋', precio:150, tipo:'accesorio', hidesBook:true,
      svg:
        // Mariposa en la "mano" izquierda (reemplaza libro)
        '<path d="M-2 82 Q4 72 12 78 Q8 84 -2 82Z" fill="#7c3aed" opacity=".9" transform="rotate(-10 -2 82)"/>'
        +'<path d="M-2 82 Q4 92 12 86 Q8 84 -2 82Z" fill="#9333ea" opacity=".9" transform="rotate(-10 -2 82)"/>'
        +'<path d="M22 82 Q16 72 8 78 Q12 84 22 82Z" fill="#a855f7" opacity=".9" transform="rotate(-10 22 82)"/>'
        +'<path d="M22 82 Q16 92 8 86 Q12 84 22 82Z" fill="#c4b5fd" opacity=".9" transform="rotate(-10 22 82)"/>'
        +'<ellipse cx="10" cy="84" rx="2" ry="6" fill="#1a1a2e" transform="rotate(-10 10 84)"/>'
        +'<line x1="10" y1="78" x2="7" y2="74" stroke="#1a1a2e" stroke-width=".8" stroke-linecap="round" transform="rotate(-10 10 78)"/>'
        +'<line x1="10" y1="78" x2="13" y2="74" stroke="#1a1a2e" stroke-width=".8" stroke-linecap="round" transform="rotate(-10 10 78)"/>'
        // Mariposa extra flotando (derecha)
        +'<path d="M95 55 Q101 47 108 52 Q104 57 95 55Z" fill="#ec4899" opacity=".85"/>'
        +'<path d="M95 55 Q101 63 108 58 Q104 57 95 55Z" fill="#f472b6" opacity=".85"/>'
        +'<path d="M122 55 Q116 47 109 52 Q113 57 122 55Z" fill="#fda4af" opacity=".85"/>'
        +'<path d="M122 55 Q116 63 109 58 Q113 57 122 55Z" fill="#fce7f3" opacity=".85"/>'
        +'<ellipse cx="108.5" cy="57" rx="1.5" ry="5" fill="#1a1a2e"/>'
    },

    // CAPA DE HÉROE (va detrás del cuerpo, más vistosa)
    {id:'a_cape', nombre:'Capa de Héroe',           icon:'🦸', precio:200, tipo:'accesorio',
      svg:'',
      svgBack:
        // Capa principal (detrás del cuerpo)
        '<path d="M18 72 Q14 100 16 122 Q38 148 65 150 Q92 148 114 122 Q116 100 112 72 Q88 66 65 65 Q42 66 18 72Z" fill="#7c3aed"/>'
        // Gradiente interior (más claro en el centro)
        +'<path d="M25 76 Q22 100 24 118 Q44 140 65 142 Q86 140 106 118 Q108 100 105 76 Q88 71 65 70 Q42 71 25 76Z" fill="#9333ea" opacity=".5"/>'
        // Brillo en los hombros
        +'<path d="M18 72 Q42 66 65 65 Q88 66 112 72" stroke="#a855f7" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
        +'<path d="M20 74 Q42 68 65 67 Q88 68 110 74" stroke="rgba(255,255,255,.2)" stroke-width="1.2" fill="none"/>'
        // Detalle de emblema
        +'<path d="M58 100 L65 90 L72 100 L70 115 L65 118 L60 115 Z" fill="#fbbf24" opacity=".85"/>'
        +'<path d="M61 102 L65 94 L69 102 L68 113 L65 115 L62 113 Z" fill="#fde68a"/>'
        +'<circle cx="65" cy="100" r="3" fill="#f59e0b"/>'
    },

    // VARITA MÁGICA (con efectos)
    {id:'a_varita', nombre:'Varita Mágica',         icon:'🪄', precio:180, tipo:'accesorio', hidesBook:true,
      svg:
        // Palo de la varita con degradado visual
        '<line x1="14" y1="140" x2="44" y2="98" stroke="#5b21b6" stroke-width="4" stroke-linecap="round"/>'
        +'<line x1="14" y1="140" x2="44" y2="98" stroke="#c4b5fd" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>'
        // Estrella en la punta
        +'<path d="M44 86 L46.5 93 L54 93 L48 97.5 L50.5 104.5 L44 100.5 L37.5 104.5 L40 97.5 L34 93 L41.5 93 Z" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>'
        +'<circle cx="44" cy="95" r="5" fill="#fef9c3" opacity=".7"/>'
        +'<circle cx="44" cy="95" r="2.5" fill="white" opacity=".9"/>'
        // Chispas alrededor de la varita
        +'<circle cx="57" cy="85" r="2.5" fill="#fbbf24"/>'
        +'<circle cx="56" cy="79" r="1.5" fill="#fde68a"/>'
        +'<circle cx="62" cy="82" r="1.8" fill="#fbbf24" opacity=".7"/>'
        +'<circle cx="30" cy="113" r="1.5" fill="#c4b5fd"/>'
        +'<circle cx="22" cy="122" r="2" fill="#a78bfa" opacity=".8"/>'
        +'<circle cx="18" cy="132" r="1.3" fill="#7c3aed" opacity=".7"/>'
        // Líneas de chispa
        +'<line x1="57" y1="82" x2="57" y2="77" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round"/>'
        +'<line x1="54" y1="83" x2="51" y2="79" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round"/>'
        +'<line x1="60" y1="83" x2="63" y2="79" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round"/>'
        // Estela mágica sobre el palo
        +'<circle cx="24" cy="132" r="1" fill="#e879f9" opacity=".5"/>'
        +'<circle cx="34" cy="118" r="1.2" fill="#c4b5fd" opacity=".6"/>'
        +'<circle cx="40" cy="108" r="1" fill="#fbbf24" opacity=".5"/>'
    },

    // COLLAR DE CORAZONES (corazones en SVG real)
    {id:'a_collar', nombre:'Collar Corazones',      icon:'💝', precio:130, tipo:'accesorio',
      svg:
        // Cadena
        '<path d="M34 108 Q65 101 96 108" stroke="#fbbf24" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
        +'<circle cx="40" cy="107" r="1.5" fill="#fbbf24"/>'
        +'<circle cx="50" cy="105" r="1.5" fill="#fbbf24"/>'
        +'<circle cx="65" cy="103.5" r="1.5" fill="#fbbf24"/>'
        +'<circle cx="80" cy="105" r="1.5" fill="#fbbf24"/>'
        +'<circle cx="90" cy="107" r="1.5" fill="#fbbf24"/>'
        // Corazón central (SVG path real)
        +'<path d="M65 122 C60 118 54 113 57 107 C59 104 62 104 65 107 C68 104 71 104 73 107 C76 113 70 118 65 122Z" fill="#ec4899"/>'
        +'<path d="M63 110 Q65 109 67 110" stroke="rgba(255,255,255,.5)" stroke-width=".8" fill="none" stroke-linecap="round"/>'
        // Corazón izquierdo
        +'<path d="M48 117 C45 114 41 111 43 107 C44 105 47 105 48 107 C49 105 52 105 53 107 C55 111 51 114 48 117Z" fill="#f472b6"/>'
        // Corazón derecho
        +'<path d="M82 117 C79 114 75 111 77 107 C78 105 81 105 82 107 C83 105 86 105 87 107 C89 111 85 114 82 117Z" fill="#f472b6"/>'
    },

    // ALAS DE ÁNGEL (van detrás del cuerpo)
    {id:'a_alas', nombre:'Alas de Ángel',           icon:'👼', precio:300, tipo:'accesorio',
      svg:'',
      svgBack:
        // Ala izquierda
        '<path d="M2 72 Q5 46 22 42 Q38 40 44 58 Q47 70 38 78 Q20 88 2 72Z" fill="white" opacity=".92"/>'
        +'<path d="M5 72 Q8 50 22 47 Q34 45 38 61 Q40 70 32 76 Q18 84 5 72Z" fill="#ede9fe" opacity=".7"/>'
        +'<path d="M2 76 Q4 98 20 108 Q32 112 40 100 Q44 90 38 80" fill="white" opacity=".8"/>'
        +'<path d="M4 80 Q7 98 20 106 Q30 109 37 98" fill="#ddd6fe" opacity=".5"/>'
        // Plumas izquierda
        +'<path d="M5 72 Q18 58 38 64" stroke="#a78bfa" stroke-width="1.2" fill="none" opacity=".8"/>'
        +'<path d="M6 78 Q18 67 36 71" stroke="#a78bfa" stroke-width="1" fill="none" opacity=".6"/>'
        +'<path d="M7 85 Q18 78 34 82" stroke="#c4b5fd" stroke-width=".8" fill="none" opacity=".5"/>'
        +'<path d="M6 92 Q18 88 32 92" stroke="#c4b5fd" stroke-width=".8" fill="none" opacity=".4"/>'
        // Ala derecha
        +'<path d="M128 72 Q125 46 108 42 Q92 40 86 58 Q83 70 92 78 Q110 88 128 72Z" fill="white" opacity=".92"/>'
        +'<path d="M125 72 Q122 50 108 47 Q96 45 92 61 Q90 70 98 76 Q112 84 125 72Z" fill="#ede9fe" opacity=".7"/>'
        +'<path d="M128 76 Q126 98 110 108 Q98 112 90 100 Q86 90 92 80" fill="white" opacity=".8"/>'
        +'<path d="M126 80 Q123 98 110 106 Q100 109 93 98" fill="#ddd6fe" opacity=".5"/>'
        // Plumas derecha
        +'<path d="M125 72 Q112 58 92 64" stroke="#a78bfa" stroke-width="1.2" fill="none" opacity=".8"/>'
        +'<path d="M124 78 Q112 67 94 71" stroke="#a78bfa" stroke-width="1" fill="none" opacity=".6"/>'
        +'<path d="M123 85 Q112 78 96 82" stroke="#c4b5fd" stroke-width=".8" fill="none" opacity=".5"/>'
        +'<path d="M124 92 Q112 88 98 92" stroke="#c4b5fd" stroke-width=".8" fill="none" opacity=".4"/>'
    }
  ],

  // ── ZAPATOS ────────────────────────────────────────────
  zapatos: [
    {id:'z_azul',     nombre:'Zapatillas Azules',  icon:'👟', precio:0,   fill:'#312e81', tipo:'zapato'},
    {id:'z_rojo',     nombre:'Zapatillas Rojas',   icon:'🔴', precio:60,  fill:'#dc2626', tipo:'zapato'},
    {id:'z_verde',    nombre:'Zapatillas Verdes',  icon:'💚', precio:60,  fill:'#059669', tipo:'zapato'},
    {id:'z_dorado',   nombre:'Zapatillas Doradas', icon:'🌟', precio:150, fill:'#d97706', tipo:'zapato'},
    {id:'z_negro',    nombre:'Zapatillas Negras',  icon:'⬛', precio:80,  fill:'#111827', tipo:'zapato'},
    {id:'z_rosa',     nombre:'Zapatillas Rosas',   icon:'🩷', precio:80,  fill:'#ec4899', tipo:'zapato'},
    {id:'z_turquesa', nombre:'Botas Turquesa',     icon:'🩵', precio:120, fill:'#0891b2', tipo:'zapato'},
    {id:'z_morado',   nombre:'Botas Moradas',      icon:'💜', precio:120, fill:'#7c3aed', tipo:'zapato'}
  ]
};

// ══════════════════════════════════════════════════════════
//  Helper: insertar SVG cross-browser con DOMParser
// ══════════════════════════════════════════════════════════
function setSVGInner(el, svgStr) {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
  if (!svgStr) return;
  try {
    var parser = new DOMParser();
    var doc = parser.parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg">' + svgStr + '</svg>',
      'image/svg+xml'
    );
    var nodes = doc.documentElement.childNodes;
    for (var j = 0; j < nodes.length; j++) {
      el.appendChild(document.importNode(nodes[j], true));
    }
  } catch(e) {
    el.innerHTML = svgStr;
  }
}

// ══════════════════════════════════════════════════════════
//  Aplicar cosméticos a una instancia de mascota
// ══════════════════════════════════════════════════════════
function aplicarCosmeticosSuffix(suffix, cosm) {
  var c1      = document.getElementById('mC1_'      + suffix);
  var c2      = document.getElementById('mC2_'      + suffix);
  var shL     = document.getElementById('mShoeL_'   + suffix);
  var shR     = document.getElementById('mShoeR_'   + suffix);
  var hat     = document.getElementById('mHat_'     + suffix);
  var acc     = document.getElementById('mAcc_'     + suffix);
  var accBack = document.getElementById('mAccBack_' + suffix);
  var book    = document.getElementById('mBook_'    + suffix);
  var band    = document.getElementById('mBand_'    + suffix);

  // ── Color cuerpo ──
  var col = COSMETICOS.colores[0];
  for (var i = 0; i < COSMETICOS.colores.length; i++) {
    if (COSMETICOS.colores[i].id === cosm.color) { col = COSMETICOS.colores[i]; break; }
  }
  if (c1) c1.setAttribute('stop-color', col.c1);
  if (c2) c2.setAttribute('stop-color', col.c2);

  // ── Zapatos ──
  var zap = COSMETICOS.zapatos[0];
  for (var i = 0; i < COSMETICOS.zapatos.length; i++) {
    if (COSMETICOS.zapatos[i].id === cosm.zapato) { zap = COSMETICOS.zapatos[i]; break; }
  }
  if (shL) shL.setAttribute('fill', zap.fill);
  if (shR) shR.setAttribute('fill', zap.fill);

  // ── Sombrero ──
  var hatItem = null;
  for (var i = 0; i < COSMETICOS.sombreros.length; i++) {
    if (COSMETICOS.sombreros[i].id === cosm.sombrero) { hatItem = COSMETICOS.sombreros[i]; break; }
  }
  setSVGInner(hat, hatItem ? (hatItem.svg || '') : '');

  // Ocultar diadema nativa si el sombrero lo requiere
  var hatHidesBand = hatItem && (hatItem.hideBand === true);
  if (band) band.style.display = hatHidesBand ? 'none' : '';

  // ── Accesorio ──
  var accItem = null;
  for (var i = 0; i < COSMETICOS.accesorios.length; i++) {
    if (COSMETICOS.accesorios[i].id === cosm.accesorio) { accItem = COSMETICOS.accesorios[i]; break; }
  }
  // Capa frontal
  setSVGInner(acc,     accItem ? (accItem.svg     || '') : '');
  // Capa trasera (capa, alas)
  setSVGInner(accBack, accItem ? (accItem.svgBack || '') : '');

  // Ocultar libro si el accesorio lo indica
  if (book) book.style.display = (accItem && accItem.hidesBook) ? 'none' : '';
}

// ══════════════════════════════════════════════════════════
//  Montar mascota en un contenedor
// ══════════════════════════════════════════════════════════
function montarMascota(containerId, suffix, w, h) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = buildSVG(suffix, w, h);
}

// ══════════════════════════════════════════════════════════
//  Renderizar grilla de cosméticos
// ══════════════════════════════════════════════════════════
function renderCatMascota(cat, sesion, onBuyEquip) {
  var items = COSMETICOS[cat] || [];
  var grid  = document.getElementById('cosmGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var item     = items[i];
    var owned    = sesion.owned && sesion.owned.indexOf(item.id) >= 0;
    var equipped = sesion.cosmeticos && (sesion.cosmeticos[item.tipo] === item.id);
    var badge = '';
    if (equipped)   badge = '<div class="ci-badge badge-eq">&#10003; Equipado</div>';
    else if (owned) badge = '<div class="ci-badge badge-owned">Comprado</div>';
    var price = item.precio === 0
      ? '<span style="color:#10b981;font-weight:700;font-size:.72rem">&#161;Gratis!</span>'
      : (owned ? '' : '<div class="ci-price">&#9733; ' + item.precio + '</div>');
    var cls = 'cosm-item' + (owned ? ' owned' : '') + (equipped ? ' equipped' : '');
    html += '<div class="' + cls + '" onclick="buyOrEquip(\'' + item.id + '\',\'' + cat + '\')">'
          + '<span class="ci-icon">' + item.icon + '</span>'
          + '<div class="ci-name">' + item.nombre + '</div>'
          + price + badge
          + '</div>';
  }
  grid.innerHTML = html;
}
