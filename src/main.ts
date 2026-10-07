// Pure Vanilla TypeScript / JavaScript Application
// Pre-producción Audiovisual Universitaria

export interface VideoFormat {
  id: string;
  title: string;
  category: string;
  duration: string;
  complexity: 'Baja' | 'Media' | 'Alta';
  description: string;
  pedagogicalRole: string;
  visualSupports: string[];
  postProductionNeeds: string[];
  youtubeId: string;
  recommendedFor: string;
  preprodTips: string;
}

export const VISUAL_SUPPORTS_MAP: Record<string, { label: string; icon: string }> = {
  'presentacion-diapositivas': { label: 'Presentación de diapositivas', icon: 'fa-file-powerpoint' },
  'lectura-pdf': { label: 'Lectura y resaltado de documentos o PDFs', icon: 'fa-file-lines' },
  'visionado-videos': { label: 'Visionado de otros videos o animaciones', icon: 'fa-film' },
  'software-especifico': { label: 'Uso de un software específico', icon: 'fa-laptop-code' },
  'navegacion-web': { label: 'Navegación web', icon: 'fa-globe' },
  'escritura-mano': { label: 'Escritura o resolución de ejercicios a mano', icon: 'fa-pen-fancy' },
};

export const POST_PRODUCTION_MAP: Record<string, { label: string; icon: string }> = {
  'texto-imagenes': { label: 'Texto sobreimpreso o imágenes', icon: 'fa-font' },
  'video-archivo': { label: 'Video de archivo', icon: 'fa-clapperboard' },
  'fondo-croma': { label: 'Fondo croma', icon: 'fa-wand-magic-sparkles' },
  'animaciones': { label: 'Animaciones', icon: 'fa-shapes' },
};

export const FORMATS_DATA: VideoFormat[] = [
  {
    id: 'clase-diapositivas-pip',
    title: 'Clase magistral con diapositivas',
    category: 'Expositivo teórico',
    duration: '8 a 12 min',
    complexity: 'Baja',
    description: 'El docente expone una temática con su imagen en recuadro (Picture-in-Picture) alternando con diapositivas de alta legibilidad, esquemas sintéticos y palabras clave.',
    pedagogicalRole: 'Ideal para presentaciones de unidad temática, encuadres teóricos y síntesis de módulos curriculares.',
    visualSupports: ['presentacion-diapositivas', 'lectura-pdf'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: '2561rT_Fbgc',
    recommendedFor: 'Introducción a las Ciencias Sociales, Derecho, Humanidades, Introducciones a materias.',
    preprodTips: 'Diapositivas en formato 16:9, tipografía mínima de 28 pt, no saturar de texto (máximo 6 líneas).'
  },
  {
    id: 'pizarra-resolucion-ejercicios',
    title: 'Resolución de ejercicios en pizarra',
    category: 'Práctico / Metodológico',
    duration: '6 a 10 min',
    complexity: 'Baja',
    description: 'El formato más similar a una clase presencial. Grabación de una exposición teórica y/o práctica frente a una pizarra.',
    pedagogicalRole: 'Facilita seguir el razonamiento con soporte visual a medida.',
    visualSupports: ['escritura-mano'],
    postProductionNeeds: ['ninguna'],
    youtubeId: 'WRibE2nt8wM',
    recommendedFor: 'Matemática, Física, Química, Estadística, Economía, Programación básica.',
    preprodTips: 'Tener resuelto el ejercicio previamente en borrador; definir colores de tinta por nivel de variable o paso lógico.'
  },
  {
    id: 'tableta-resolucion-ejercicios',
    title: 'Resolución de ejercicios en tableta',
    category: 'Práctico / Metodológico',
    duration: '6 a 10 min',
    complexity: 'Media',
    description: 'Grabación sincronizada del trazo manuscrito en tableta digitalizadora o pizarra virtual, con voz en off y resaltadores de color para desglosar desarrollos paso a paso.',
    pedagogicalRole: 'Facilita seguir el razonamiento algorítmico, fórmulas matemáticas, balances contables o diagramas de flujo sin saltos cognitivos.',
    visualSupports: ['escritura-mano'],
    postProductionNeeds: ['texto-imagenes', 'animaciones'],
    youtubeId: 'ZXsQAXx_ao0',
    recommendedFor: 'Matemática, Física, Química, Estadística, Economía, Programación básica.',
    preprodTips: 'Tener resuelto el ejercicio previamente en borrador; definir colores de tinta por nivel de variable o paso lógico.'
  },
  {
    id: 'screencast-software-tecnico',
    title: 'Demostración Guiada de Software Especializado',
    category: 'Instrumental / Taller',
    duration: '7 a 12 min',
    complexity: 'Media',
    description: 'Captura directa de pantalla mostrando la interfaz y operación de programas específicos (R, SPSS, Python, GIS, CAD, simuladores) con zoom dinámico y atajos señalados.',
    pedagogicalRole: 'Guía paso a paso para la adopción de herramientas informáticas y metodologías de cálculo o modelado.',
    visualSupports: ['software-especifico', 'navegacion-web'],
    postProductionNeeds: ['texto-imagenes', 'animaciones'],
    youtubeId: '_uQrJ0TkZlc',
    recommendedFor: 'Ingeniería, Ciencias Económicas, Biología, Arquitectura, Ciencias de la Computación.',
    preprodTips: 'Configurar la resolución de pantalla a 1920x1080; ampliar el tamaño del cursor del mouse y la tipografía de la interfaz.'
  },
  {
    id: 'lectura-analisis-documento',
    title: 'Lectura Crítica y Resaltado de Textos / Normativas',
    category: 'Analítico / Comprensión',
    duration: '5 a 9 min',
    complexity: 'Baja',
    description: 'Enfoque sobre un documento PDF, fallo judicial, fragmento de libro o artículo científico. El docente subraya pasajes clave y glosa el sentido interpretativo de la fuente.',
    pedagogicalRole: 'Modela la competencia de lectura académica crítica y el análisis exegético de fuentes primarias.',
    visualSupports: ['lectura-pdf', 'navegacion-web'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'KxqlJBLhnfI',
    recommendedFor: 'Derecho, Filosofía, Letras, Historia, Metodología de la Investigación.',
    preprodTips: 'Tener el PDF previamente marcado con los colores institucionales; seleccionar párrafos clave sin exceder 3 páginas por video.'
  },
  {
    id: 'pildora-croma-animaciones',
    title: 'Píldora Conceptual con Croma y Animaciones',
    category: 'Impacto Conceptual',
    duration: '4 a 7 min',
    complexity: 'Alta',
    description: 'Grabación del docente en estudio con pantalla verde (croma) interactuando con gráficos animados, líneas temporales flotantes, modelos tridimensionales y conceptos dinámicos.',
    pedagogicalRole: 'Genera alto enganche visual en temas abstractos o controversiales que requieren anclajes espaciales y metáforas visuales.',
    visualSupports: ['presentacion-diapositivas', 'visionado-videos'],
    postProductionNeeds: ['fondo-croma', 'animaciones', 'texto-imagenes'],
    youtubeId: 'p_di4Zn4PDQ',
    recommendedFor: 'Medicina, Biología Celular, Geología, Física Teórica, Módulos introductorios masivos.',
    preprodTips: 'NO vestir prendas verdes ni tramas de rayas finas; indicar en el guion en qué lado de la pantalla (izq/der) debe aparecer cada gráfico.'
  },
  {
    id: 'estudio-caso-video-archivo',
    title: 'Análisis de Caso con Material de Archivo / B-Roll',
    category: 'Contextual / Debate',
    duration: '8 a 14 min',
    complexity: 'Alta',
    description: 'Articulación de la narración docente con fragmentos documentales, noticias históricas, registros etnográficos o imágenes de época para problematizar una situación real.',
    pedagogicalRole: 'Conecta la teoría universitaria con problemas reales de la sociedad, la industria o la historia contemporánea.',
    visualSupports: ['visionado-videos', 'navegacion-web'],
    postProductionNeeds: ['video-archivo', 'texto-imagenes'],
    youtubeId: 'V1y-mbWM3B8',
    recommendedFor: 'Sociología, Comunicación, Historia, Gestión Ambiental, Salud Pública.',
    preprodTips: 'Consignar los enlaces exactos y timecodes de los videos de archivo; verificar licencias de uso académico o Creative Commons.'
  },
  {
    id: 'entrevista-dialogo-academico',
    title: 'Diálogo Académico o Entrevista a Especialista',
    category: 'Colaborativo / Reflexivo',
    duration: '10 a 15 min',
    complexity: 'Media',
    description: 'Conversación pautada a dos cámaras o formato híbrido entre miembros de la cátedra o con un investigador invitado externo, intercalando esquemas e imágenes de apoyo.',
    pedagogicalRole: 'Contrasta posturas teóricas diversas, visibiliza proyectos de extensión/investigación y humaniza la labor científica.',
    visualSupports: ['presentacion-diapositivas', 'lectura-pdf'],
    postProductionNeeds: ['texto-imagenes', 'video-archivo'],
    youtubeId: 'L1T8F0tY1Xg',
    recommendedFor: 'Seminarios de posgrado, Cátedras con profesores invitados, Formación profesional ética.',
    preprodTips: 'Enviar preguntas eje con anticipación al invitado; acordar un bloque temático no mayor a 15 minutos.'
  },
  {
    id: 'recorrido-web-repositorios',
    title: 'Navegación de Fuentes Web y Repositorios Académicos',
    category: 'Alfabetización Digital',
    duration: '6 a 10 min',
    complexity: 'Baja',
    description: 'Grabación de pantalla guiando al estudiante en la búsqueda bibliográfica en bases de datos (Scopus, PubMed, SciELO, Google Académico) y evaluación de fuentes científicas.',
    pedagogicalRole: 'Desarrolla habilidades de investigación, citación académica y curaduría de información confiable.',
    visualSupports: ['navegacion-web', 'lectura-pdf'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'aircAruvnKk',
    recommendedFor: 'Talleres de Tesis, Metodología, Prácticas Profesionales Supervisadas, Bibliotecología.',
    preprodTips: 'Abrir previamente las pestañas necesarias en una ventana limpia del navegador sin marcadores personales visibles.'
  },
  {
    id: 'demostracion-laboratorio-taller',
    title: 'Demostración de Laboratorio o Taller Práctico',
    category: 'Experimental / Protocolo',
    duration: '7 a 11 min',
    complexity: 'Alta',
    description: 'Registro audiovisual de procedimientos experimentales con planos detalle de instrumentos, manipulación de reactivos o maquinaria, señalización de normas de seguridad y cronómetros.',
    pedagogicalRole: 'Prepara a los alumnos para las prácticas presenciales, reduciendo errores operativos y garantizando bioseguridad.',
    visualSupports: ['software-especifico', 'escritura-mano', 'visionado-videos'],
    postProductionNeeds: ['texto-imagenes', 'animaciones', 'fondo-croma'],
    youtubeId: '8S_GZ3r-x3g',
    recommendedFor: 'Química, Biología, Odontología, Ingenierías de Procesos, Agronomía.',
    preprodTips: 'Elaborar un protocolo estricto de pasos; ensayar los movimientos de manos y tener duplicados de insumos por si se requiere repetir la toma.'
  },
    {
    id: 'pizarra',
    title: 'Uso de pizarra',
    category: 'Alfabetización Digital',
    duration: '6 a 10 min',
    complexity: 'Baja',
    description: 'Grabación de pantalla guiando al estudiante en la búsqueda bibliográfica en bases de datos (Scopus, PubMed, SciELO, Google Académico) y evaluación de fuentes científicas.',
    pedagogicalRole: 'Desarrolla habilidades de investigación, citación académica y curaduría de información confiable.',
    visualSupports: ['navegacion-web', 'lectura-pdf'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'TLh_6G7i4_w',
    recommendedFor: 'Talleres de Tesis, Metodología, Prácticas Profesionales Supervisadas, Bibliotecología.',
    preprodTips: 'Abrir previamente las pestañas necesarias en una ventana limpia del navegador sin marcadores personales visibles.'
  }
];

// App State
class AppState {
  searchQuery: string = '';
  selectedVisualSupports: Set<string> = new Set();
  selectedPostProduction: Set<string> = new Set();

  checklist: Record<string, boolean> = {};

  constructor() {
    this.loadChecklist();
  }

  loadChecklist() {
    try {
      const saved = localStorage.getItem('preprod_checklist_v1');
      if (saved) {
        this.checklist = JSON.parse(saved);
      } else {
        this.checklist = {
          'chk-1': false,
          'chk-2': false,
          'chk-3': false,
          'chk-4': false,
          'chk-5': false,
          'chk-6': false,
          'chk-7': false,
          'chk-8': false,
        };
      }
    } catch {
      this.checklist = {};
    }
  }

  saveChecklist() {
    try {
      localStorage.setItem('preprod_checklist_v1', JSON.stringify(this.checklist));
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }
}

const state = new AppState();

// Initialize UI when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initCatalogFilters();
  renderCatalog();
  initVideoModal();
  initFormInteractions();
  initScriptEditor();
  initDurationCalculator();
  initChecklist();
  initSmoothScroll();
});

// Render Catalog Cards
function renderCatalog() {
  const container = document.getElementById('catalog-grid');
  const countEl = document.getElementById('catalog-count');
  if (!container) return;

  const filtered = FORMATS_DATA.filter(item => {
    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchText = (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.recommendedFor.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
      if (!matchText) return false;
    }

    // Visual supports filter (AND or OR? standard match: if any selected, format must have AT LEAST ONE of selected, or ALL. Let's do: format must include all selected visual filters if multiple are checked, or at least one. Matching all selected filters allows precise drill-down!)
    if (state.selectedVisualSupports.size > 0) {
      for (const sup of state.selectedVisualSupports) {
        if (!item.visualSupports.includes(sup)) {
          return false;
        }
      }
    }

    // Post production needs filter (must contain all selected)
    if (state.selectedPostProduction.size > 0) {
      for (const need of state.selectedPostProduction) {
        if (!item.postProductionNeeds.includes(need)) {
          return false;
        }
      }
    }

    return true;
  });

  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${FORMATS_DATA.length} formatos`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 px-6 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div class="w-16 h-16 mx-auto mb-4 bg-[#FFD200]/20 text-[#670000] rounded-full flex items-center justify-center text-2xl font-bold">
          🔍
        </div>
        <h4 class="text-xl font-bold text-slate-800 mb-2">No se encontraron formatos coincidentes</h4>
        <p class="text-slate-600 max-w-md mx-auto mb-6 text-sm">
          No hay formatos que cumplan simultáneamente con todos los filtros de soportes y postproducción seleccionados.
        </p>
        <button id="reset-filters-btn" class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B5121B] hover:bg-[#910e15] text-white rounded-xl font-medium text-sm transition-colors shadow-sm">
          Restablecer todos los filtros
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllFilters);
    }
    return;
  }

  container.innerHTML = filtered.map(item => {
    const complexityColor = 
      item.complexity === 'Baja' ? 'bg-[#00B7CE]/15 text-[#005360] border-[#00B7CE]/40' :
      item.complexity === 'Media' ? 'bg-[#FFD200]/25 text-[#670000] border-[#FFD200]/70' :
      'bg-[#B5121B]/15 text-[#B5121B] border-[#B5121B]/40';

    const visualBadges = item.visualSupports.map(v => {
      const info = VISUAL_SUPPORTS_MAP[v];
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#005360]/10 text-[#005360] border border-[#005360]/25" title="${info?.label || v}">
        <span class="w-1.5 h-1.5 rounded-full bg-[#00B7CE]"></span>
        ${info ? info.label : v}
      </span>`;
    }).join('');

    const postBadges = item.postProductionNeeds.map(p => {
      const info = POST_PRODUCTION_MAP[p];
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#551E41]/10 text-[#551E41] border border-[#551E41]/25" title="${info?.label || p}">
        <span class="w-1.5 h-1.5 rounded-full bg-[#F37321]"></span>
        ${info ? info.label : p}
      </span>`;
    }).join('');

    return `
      <article class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group">
        <!-- Thumbnail Preview / Video Trigger -->
        <div class="relative bg-slate-900 aspect-video overflow-hidden group cursor-pointer" onclick="window.openVideoModal('${item.id}')">
          <img 
            src="https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg" 
            alt="Miniatura de ${item.title}"
            class="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
          
          <!-- Category & Duration Pills -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
              ${item.category}
            </span>
            <span class="px-2 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-white border border-white/20 backdrop-blur-sm">
              ⏱ ${item.duration}
            </span>
          </div>

          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-14 h-14 rounded-full bg-[#B5121B]/95 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#B5121B] transition-all duration-200">
              <svg class="w-6 h-6 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div class="absolute bottom-3 left-3 right-3 text-white text-xs flex justify-between items-center z-10">
            <span class="text-slate-200 font-medium">Hacé clic para reproducir ejemplo</span>
            <span class="border border-white/30 rounded px-1.5 py-0.5 text-[11px] bg-black/40">YouTube</span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col">
          <div class="flex items-start justify-between gap-3 mb-2">
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-[#B5121B] transition-colors leading-snug">
              ${item.title}
            </h3>
            <span class="shrink-0 px-2.5 py-0.5 text-xs font-semibold rounded-full border ${complexityColor}">
              ${item.complexity}
            </span>
          </div>

          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            ${item.description}
          </p>

          <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4">
            <strong class="text-slate-900 font-semibold block mb-0.5">Valor Pedagógico:</strong>
            ${item.pedagogicalRole}
          </div>

          <!-- Soportes Visuales Requeridos -->
          <div class="mb-3">
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#005360] block mb-1.5">
              Soportes Visuales Requeridos
            </span>
            <div class="flex flex-wrap gap-1.5">
              ${visualBadges}
            </div>
          </div>

          <!-- Necesidades de Post-producción -->
          <div class="mb-5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#551E41] block mb-1.5">
              Necesidades de Post-producción
            </span>
            <div class="flex flex-wrap gap-1.5">
              ${postBadges}
            </div>
          </div>

          <!-- Card Actions (Always stuck at bottom) -->
          <div class="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
            <button 
              type="button"
              onclick="window.openVideoModal('${item.id}')"
              class="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors"
            >
              <svg class="w-4 h-4 text-[#B5121B] fill-current" viewBox="0 0 24 24">
                <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
              </svg>
              Ver Ejemplo
            </button>
            <button 
              type="button"
              onclick="window.selectFormatForProduction('${item.id}')"
              class="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#B5121B] hover:bg-[#910e15] text-white text-sm font-semibold shadow-sm transition-all hover:shadow"
            >
              Solicitar Producción
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filters initialization
function initCatalogFilters() {
  const searchInput = document.getElementById('search-catalog') as HTMLInputElement | null;
  const resetBtn = document.getElementById('btn-reset-filters');
  const visualFilterContainer = document.getElementById('visual-supports-filters');
  const postFilterContainer = document.getElementById('post-production-filters');

  // Populate Visual Supports Filter Chips
  if (visualFilterContainer) {
    visualFilterContainer.innerHTML = Object.entries(VISUAL_SUPPORTS_MAP).map(([key, item]) => {
      return `
        <label class="relative flex items-center cursor-pointer select-none">
          <input type="checkbox" value="${key}" data-filter-type="visual" class="peer sr-only">
          <span class="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 bg-white text-slate-700 peer-checked:bg-[#005360] peer-checked:text-white peer-checked:border-[#005360] peer-checked:shadow-xs transition-all hover:border-[#00B7CE]">
            ${item.label}
          </span>
        </label>
      `;
    }).join('');
  }

  // Populate Post-production Needs Filter Chips
  if (postFilterContainer) {
    postFilterContainer.innerHTML = Object.entries(POST_PRODUCTION_MAP).map(([key, item]) => {
      return `
        <label class="relative flex items-center cursor-pointer select-none">
          <input type="checkbox" value="${key}" data-filter-type="post" class="peer sr-only">
          <span class="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 bg-white text-slate-700 peer-checked:bg-[#551E41] peer-checked:text-white peer-checked:border-[#551E41] peer-checked:shadow-xs transition-all hover:border-[#F37321]">
            ${item.label}
          </span>
        </label>
      `;
    }).join('');
  }

  // Event Listeners for checkboxes
  document.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    if (target && target.dataset.filterType === 'visual') {
      if (target.checked) {
        state.selectedVisualSupports.add(target.value);
      } else {
        state.selectedVisualSupports.delete(target.value);
      }
      renderCatalog();
      updateFilterSummary();
    } else if (target && target.dataset.filterType === 'post') {
      if (target.checked) {
        state.selectedPostProduction.add(target.value);
      } else {
        state.selectedPostProduction.delete(target.value);
      }
      renderCatalog();
      updateFilterSummary();
    }
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.searchQuery = searchInput.value.trim();
      renderCatalog();
      updateFilterSummary();
    });
  }

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }
}

function resetAllFilters() {
  state.searchQuery = '';
  state.selectedVisualSupports.clear();
  state.selectedPostProduction.clear();

  const searchInput = document.getElementById('search-catalog') as HTMLInputElement | null;
  if (searchInput) searchInput.value = '';

  const checkboxes = document.querySelectorAll<HTMLInputElement>('input[data-filter-type]');
  checkboxes.forEach(cb => { cb.checked = false; });

  renderCatalog();
  updateFilterSummary();
}

function updateFilterSummary() {
  const activeCountEl = document.getElementById('active-filters-count');
  const totalActive = (state.searchQuery ? 1 : 0) + state.selectedVisualSupports.size + state.selectedPostProduction.size;

  if (activeCountEl) {
    if (totalActive > 0) {
      activeCountEl.textContent = `(${totalActive} activos)`;
      activeCountEl.classList.remove('hidden');
    } else {
      activeCountEl.classList.add('hidden');
    }
  }
}

// Modal Video Player
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    const iframe = document.getElementById('modal-youtube-iframe') as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = ''; // stop playback
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Expose to window for inline onclicks
  (window as unknown as { openVideoModal: (id: string) => void }).openVideoModal = (id: string) => {
    const item = FORMATS_DATA.find(f => f.id === id);
    if (!item || !modal) return;

    const iframe = document.getElementById('modal-youtube-iframe') as HTMLIFrameElement | null;
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-desc');
    const badgeEl = document.getElementById('modal-badge');
    const tipsEl = document.getElementById('modal-tips');
    const reqBtn = document.getElementById('modal-request-btn');

    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`;
    }
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.description;
    if (badgeEl) badgeEl.textContent = `${item.category} • Duración recomendada: ${item.duration}`;
    if (tipsEl) tipsEl.textContent = item.preprodTips;

    if (reqBtn) {
      reqBtn.onclick = () => {
        closeModal();
        selectFormatForProduction(item.id);
      };
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };
}

// Select format for production and scroll to form
function selectFormatForProduction(id: string) {
  const item = FORMATS_DATA.find(f => f.id === id);
  const formSection = document.getElementById('solicitud');
  const formatSelect = document.getElementById('form-formato') as HTMLSelectElement | null;

  if (formatSelect) {
    formatSelect.value = id;
  }

  // Pre-check visual supports and post-production needs in form
  if (item) {
    const formVisualCbs = document.querySelectorAll<HTMLInputElement>('input[name="form_visual"]');
    formVisualCbs.forEach(cb => {
      cb.checked = item.visualSupports.includes(cb.value);
    });

    const formPostCbs = document.querySelectorAll<HTMLInputElement>('input[name="form_post"]');
    formPostCbs.forEach(cb => {
      cb.checked = item.postProductionNeeds.includes(cb.value);
    });
  }

  // Smooth scroll
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });

    // Flash form container briefly to give visual feedback
    const formCard = document.getElementById('production-form-card');
    if (formCard) {
      formCard.classList.add('ring-4', 'ring-[#B5121B]/40', 'transition-all');
      setTimeout(() => {
        formCard.classList.remove('ring-4', 'ring-[#B5121B]/40');
      }, 1500);
    }
  }

  showToast(`Formato "${item?.title || ''}" precargado en la solicitud.`);
}
(window as unknown as { selectFormatForProduction: (id: string) => void }).selectFormatForProduction = selectFormatForProduction;

// Preproduction Checklist
function initChecklist() {
  const container = document.getElementById('checklist-items');
  const progressText = document.getElementById('checklist-progress-text');
  const progressBar = document.getElementById('checklist-progress-bar');
  const resetChecklistBtn = document.getElementById('btn-reset-checklist');

  const updateProgress = () => {
    const total = 8;
    const checkedCount = Object.values(state.checklist).filter(Boolean).length;
    const percent = Math.round((checkedCount / total) * 100);

    if (progressText) {
      progressText.textContent = `${checkedCount} de ${total} completados (${percent}%)`;
    }
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
      if (percent === 100) {
        progressBar.classList.remove('bg-blue-600');
        progressBar.classList.add('bg-emerald-500');
      } else {
        progressBar.classList.remove('bg-emerald-500');
        progressBar.classList.add('bg-blue-600');
      }
    }
  };

  if (container) {
    const checkboxes = container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      const id = cb.id;
      if (state.checklist[id]) {
        cb.checked = true;
      }
      cb.addEventListener('change', () => {
        state.checklist[id] = cb.checked;
        state.saveChecklist();
        updateProgress();
      });
    });
  }

  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      state.checklist = {};
      state.saveChecklist();
      const checkboxes = container?.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
      checkboxes?.forEach(cb => { cb.checked = false; });
      updateProgress();
      showToast('Lista de cotejo restablecida.');
    });
  }

  updateProgress();
}

// Duration and Word Calculator
function initDurationCalculator() {
  const textInput = document.getElementById('calc-text') as HTMLTextAreaElement | null;
  const wordCountEl = document.getElementById('calc-words');
  const timeEstEl = document.getElementById('calc-time');
  const alertEl = document.getElementById('calc-alert');

  if (!textInput || !wordCountEl || !timeEstEl) return;

  const calculate = () => {
    const text = textInput.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    wordCountEl.textContent = `${words} palabras`;

    // Standard academic speaking rate: ~130-140 words per minute
    const minutes = words / 135;
    const totalSeconds = Math.round(minutes * 60);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;

    timeEstEl.textContent = `Aprox. ${m} min ${s > 0 ? s + ' seg' : ''}`;

    if (alertEl) {
      if (m > 12) {
        alertEl.classList.remove('hidden');
        alertEl.textContent = '⚠️ Atención pedagógica: La duración estimada supera los 12 minutos. Se aconseja dividir este contenido en dos píldoras temáticas más concisas para sostener la retención estudiantil.';
      } else if (m > 0 && m <= 10) {
        alertEl.classList.remove('hidden');
        alertEl.className = 'mt-3 text-xs p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200';
        alertEl.textContent = '✅ ¡Excelente extensión! El tiempo se encuentra dentro de la franja cognitiva ideal (5 a 10 min) para aprendizaje digital.';
      } else {
        alertEl.classList.add('hidden');
      }
    }
  };

  textInput.addEventListener('input', calculate);
}

// 2-Column Script Generator
function initScriptEditor() {
  const tbody = document.getElementById('script-table-body');
  const addRowBtn = document.getElementById('btn-add-script-row');
  const loadExampleBtn = document.getElementById('btn-load-script-example');
  const copyScriptBtn = document.getElementById('btn-copy-script');
  const downloadScriptBtn = document.getElementById('btn-download-script');

  if (!tbody) return;

  const createRow = (time: string, audio: string, video: string, notes: string) => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-200 hover:bg-slate-50/50 transition-colors';
    tr.innerHTML = `
      <td class="p-2.5 align-top">
        <input type="text" value="${time}" placeholder="00:00 - 00:45" class="w-full text-xs font-mono p-2 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" />
      </td>
      <td class="p-2.5 align-top">
        <textarea rows="3" placeholder="Locución del docente (lo que se dice)..." class="w-full text-xs p-2 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none resize-y">${audio}</textarea>
      </td>
      <td class="p-2.5 align-top">
        <textarea rows="3" placeholder="Soporte en pantalla (diapositiva, PDF, cámara)..." class="w-full text-xs p-2 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none resize-y">${video}</textarea>
      </td>
      <td class="p-2.5 align-top">
        <input type="text" value="${notes}" placeholder="Texto sobreimpreso, zoom, etc." class="w-full text-xs p-2 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" />
      </td>
      <td class="p-2.5 align-top text-center">
        <button type="button" class="btn-del-row p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors" title="Eliminar fila">
          ✕
        </button>
      </td>
    `;
    const delBtn = tr.querySelector('.btn-del-row');
    if (delBtn) {
      delBtn.addEventListener('click', () => {
        tr.remove();
      });
    }
    return tr;
  };

  if (addRowBtn) {
    addRowBtn.addEventListener('click', () => {
      tbody.appendChild(createRow('', '', '', ''));
    });
  }

  if (loadExampleBtn) {
    // Populate with initial starter rows automatically
    tbody.innerHTML = '';
    tbody.appendChild(createRow('00:00 - 00:40', '¡Bienvenidos y bienvenidas a la Unidad 3! Hoy desglosaremos el Teorema Central del Límite y su impacto en la inferencia estadística.', 'Docente a plano medio con placa de presentación de la Cátedra de Estadística I.', 'Sobreimpreso: Unidad 3: Inferencia Estadística'));
    tbody.appendChild(createRow('00:40 - 02:30', 'Observemos este conjunto de muestras independientes tomadas de una distribución asimétrica...', 'Compartir pantalla con software RStudio ejecutando histogramas de densidad.', 'Zoom sobre el comando ggplot2 y el gráfico resultante'));
    tbody.appendChild(createRow('02:30 - 04:15', 'A medida que el tamaño muestral n supera 30, la campana gaussiana emerge con claridad.', 'Diapositiva animada con la fórmula matemática y resaltado en color rojo del error estándar.', 'Animación: sigma / sqrt(n) resaltado'));
    tbody.appendChild(createRow('04:15 - 05:00', 'Para la próxima clase práctica, descarguen la guía de actividades del Campus Virtual y repliquen este script.', 'Plano del docente con enlace al Campus Virtual y fecha del trabajo práctico.', 'Placa final con créditos y bibliografía'));

    loadExampleBtn.addEventListener('click', () => {
      tbody.innerHTML = '';
      tbody.appendChild(createRow('00:00 - 00:40', '¡Bienvenidos y bienvenidas a la Unidad 3! Hoy desglosaremos el Teorema Central del Límite y su impacto en la inferencia estadística.', 'Docente a plano medio con placa de presentación de la Cátedra de Estadística I.', 'Sobreimpreso: Unidad 3: Inferencia Estadística'));
      tbody.appendChild(createRow('00:40 - 02:30', 'Observemos este conjunto de muestras independientes tomadas de una distribución asimétrica...', 'Compartir pantalla con software RStudio ejecutando histogramas de densidad.', 'Zoom sobre el comando ggplot2 y el gráfico resultante'));
      tbody.appendChild(createRow('02:30 - 04:15', 'A medida que el tamaño muestral n supera 30, la campana gaussiana emerge con claridad.', 'Diapositiva animada con la fórmula matemática y resaltado en color rojo del error estándar.', 'Animación: sigma / sqrt(n) resaltado'));
      tbody.appendChild(createRow('04:15 - 05:00', 'Para la próxima clase práctica, descarguen la guía de actividades del Campus Virtual y repliquen este script.', 'Plano del docente con enlace al Campus Virtual y fecha del trabajo práctico.', 'Placa final con créditos y bibliografía'));
      showToast('Plantilla de ejemplo cargada con éxito.');
    });
  }

  // Helper to compile script into text
  const getScriptText = (): string => {
    const rows = tbody.querySelectorAll('tr');
    let output = '=== GUION TÉCNICO DIDÁCTICO A 2 COLUMNAS ===\n\n';
    rows.forEach((row, i) => {
      const inputs = row.querySelectorAll('input, textarea');
      const time = (inputs[0] as HTMLInputElement)?.value || '';
      const audio = (inputs[1] as HTMLTextAreaElement)?.value || '';
      const video = (inputs[2] as HTMLTextAreaElement)?.value || '';
      const notes = (inputs[3] as HTMLInputElement)?.value || '';

      output += `[BLOQUE ${i + 1}] TIEMPO: ${time}\n`;
      output += `AUDIO (Locución docente):\n${audio}\n`;
      output += `VIDEO (Pantalla / Soporte):\n${video}\n`;
      if (notes) output += `POST-PRODUCCIÓN: ${notes}\n`;
      output += '--------------------------------------------------\n\n';
    });
    return output;
  };

  if (copyScriptBtn) {
    copyScriptBtn.addEventListener('click', () => {
      const text = getScriptText();
      navigator.clipboard.writeText(text).then(() => {
        showToast('Guion copiado al portapapeles.');
      }).catch(() => {
        showToast('Error al copiar.');
      });
    });
  }

  if (downloadScriptBtn) {
    downloadScriptBtn.addEventListener('click', () => {
      const text = getScriptText();
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Guion_Preproduccion_Catedra_${new Date().toISOString().slice(0, 10)}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Archivo descargado con éxito.');
    });
  }
}

// Form Interactions & Submission
function initFormInteractions() {
  const form = document.getElementById('production-form') as HTMLFormElement | null;
  const confirmationModal = document.getElementById('confirmation-modal');
  const confCloseBtn = document.getElementById('confirmation-close-btn');
  const confCloseBtn2 = document.getElementById('confirmation-close-btn-2');
  const confCodeEl = document.getElementById('conf-code');
  const confSummaryEl = document.getElementById('conf-summary');
  const confCopyBtn = document.getElementById('conf-copy-btn');
  const confDownloadBtn = document.getElementById('conf-download-btn');

  // Populate Format Dropdown in Form
  const formatSelect = document.getElementById('form-formato') as HTMLSelectElement | null;
  if (formatSelect) {
    formatSelect.innerHTML = `
      <option value="">-- Seleccioná un formato del catálogo --</option>
      ${FORMATS_DATA.map(f => `<option value="${f.id}">${f.title} (${f.category})</option>`).join('')}
    `;
    formatSelect.addEventListener('change', () => {
      const selected = FORMATS_DATA.find(f => f.id === formatSelect.value);
      if (selected) {
        // Pre-check supports
        const formVisualCbs = document.querySelectorAll<HTMLInputElement>('input[name="form_visual"]');
        formVisualCbs.forEach(cb => {
          cb.checked = selected.visualSupports.includes(cb.value);
        });

        const formPostCbs = document.querySelectorAll<HTMLInputElement>('input[name="form_post"]');
        formPostCbs.forEach(cb => {
          cb.checked = selected.postProductionNeeds.includes(cb.value);
        });
      }
    });
  }

  // Populate Visual Supports Checkboxes in Form
  const visualFormContainer = document.getElementById('form-visual-checkboxes');
  if (visualFormContainer) {
    visualFormContainer.innerHTML = Object.entries(VISUAL_SUPPORTS_MAP).map(([key, item]) => {
      return `
        <label class="flex items-center gap-2.5 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs text-slate-700">
          <input type="checkbox" name="form_visual" value="${key}" class="w-4 h-4 text-[#005360] rounded border-slate-300 focus:ring-[#005360]">
          <span>${item.label}</span>
        </label>
      `;
    }).join('');
  }

  // Populate Post-production Checkboxes in Form
  const postFormContainer = document.getElementById('form-post-checkboxes');
  if (postFormContainer) {
    postFormContainer.innerHTML = Object.entries(POST_PRODUCTION_MAP).map(([key, item]) => {
      return `
        <label class="flex items-center gap-2.5 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs text-slate-700">
          <input type="checkbox" name="form_post" value="${key}" class="w-4 h-4 text-[#551E41] rounded border-slate-300 focus:ring-[#551E41]">
          <span>${item.label}</span>
        </label>
      `;
    }).join('');
  }

  let lastSubmissionText = '';

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Gather form fields
      const materia = (document.getElementById('form-materia') as HTMLInputElement)?.value.trim();
      const carrera = (document.getElementById('form-carrera') as HTMLInputElement)?.value.trim();
      const docente = (document.getElementById('form-docente') as HTMLInputElement)?.value.trim();
      const email = (document.getElementById('form-email') as HTMLInputElement)?.value.trim();
      const telefono = (document.getElementById('form-telefono') as HTMLInputElement)?.value.trim();
      const formatoId = formatSelect?.value || '';
      const duracion = (document.getElementById('form-duracion') as HTMLSelectElement)?.value || '';
      const driveLink = (document.getElementById('form-drive') as HTMLInputElement)?.value.trim();
      const fecha = (document.getElementById('form-fecha') as HTMLInputElement)?.value.trim();
      const notas = (document.getElementById('form-notas') as HTMLTextAreaElement)?.value.trim();

      const selectedVisual = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="form_visual"]:checked'))
        .map(cb => VISUAL_SUPPORTS_MAP[cb.value]?.label || cb.value);

      const selectedPost = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="form_post"]:checked'))
        .map(cb => POST_PRODUCTION_MAP[cb.value]?.label || cb.value);

      if (!materia || !docente || !email || !formatoId) {
        showToast('Por favor completá los campos obligatorios (*).');
        return;
      }

      const formatItem = FORMATS_DATA.find(f => f.id === formatoId);
      const requestCode = `AV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      lastSubmissionText = `==================================================
SOLICITUD DE PRODUCCIÓN AUDIOVISUAL UNIVERSITARIA
Código de Trámite: ${requestCode}
Fecha de Emisión: ${new Date().toLocaleString()}
==================================================

1. DATOS DE LA CÁTEDRA
- Materia / Asignatura: ${materia}
- Carrera / Departamento: ${carrera || 'No especificada'}
- Docente Responsable: ${docente}
- Correo Institucional: ${email}
- Teléfono / WhatsApp: ${telefono || 'No especificado'}

2. FORMATO AUDIOVISUAL SELECCIONADO
- Formato: ${formatItem ? formatItem.title : formatoId}
- Categoría: ${formatItem ? formatItem.category : '-'}
- Duración estimada de la pieza: ${duracion}

3. SOPORTES VISUALES DECLARADOS
${selectedVisual.length > 0 ? selectedVisual.map(s => `  • ${s}`).join('\n') : '  • Ninguno'}

4. NECESIDADES DE POST-PRODUCCIÓN
${selectedPost.length > 0 ? selectedPost.map(p => `  • ${p}`).join('\n') : '  • Sin requerimientos adicionales'}

5. LOGÍSTICA Y MATERIALES
- Enlace al Guion / Carpeta Drive: ${driveLink || 'A entregar en reunión técnica'}
- Fecha tentativa de grabación / entrega: ${fecha || 'A coordinar'}
- Observaciones Pedagógicas:
  ${notas || 'Sin observaciones adicionales'}

==================================================
Centro de Producción Audiovisual Educativa
Portal Docente de Preproducción`;

      if (confCodeEl) confCodeEl.textContent = requestCode;
      if (confSummaryEl) confSummaryEl.textContent = lastSubmissionText;

      if (confirmationModal) {
        confirmationModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }

      form.reset();
    });
  }

  const closeConfirmation = () => {
    if (confirmationModal) {
      confirmationModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  };

  if (confCloseBtn) confCloseBtn.addEventListener('click', closeConfirmation);
  if (confCloseBtn2) confCloseBtn2.addEventListener('click', closeConfirmation);

  if (confCopyBtn) {
    confCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(lastSubmissionText).then(() => {
        showToast('Resumen copiado para enviar por correo institucional.');
      });
    });
  }

  if (confDownloadBtn) {
    confDownloadBtn.addEventListener('click', () => {
      const blob = new Blob([lastSubmissionText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Solicitud_Produccion_Catedra_${Date.now()}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Comprobante descargado.');
    });
  }
}

// Smooth Scroll for Nav Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }
}

// Toast helper
function showToast(message: string) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto bg-[#670000] text-white text-xs font-medium px-4 py-3 rounded-xl shadow-xl border border-[#B5121B]/60 flex items-center gap-2 transform transition-all duration-300 translate-y-3 opacity-0';
  toast.innerHTML = `
    <span class="text-[#FFD200]">ℹ️</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-3', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
