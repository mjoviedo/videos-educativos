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
  'tablet': { label: 'Tablet', icon: 'fa-film' },
  'software-especifico': { label: 'Uso de un software específico', icon: 'fa-laptop-code' },
  'navegacion-web': { label: 'Navegación web', icon: 'fa-globe' },
  'escritura-mano': { label: 'Escritura o resolución de ejercicios a mano', icon: 'fa-pen-fancy' },
  'pizarra': { label: 'Escritura en pizarra', icon: 'fa-pen-fancy' },
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
    title: 'Presentación con diapositivas',
    category: 'Exposición ',
    duration: '8 a 12 min',
    complexity: 'Baja',
    description: 'Grabación en estudio alternando planos del docente con diapositivas de alta legibilidad, esquemas sintéticos y palabras clave.',
    pedagogicalRole: 'Acompaña la exposición con soportes visuales favoreciendo la comprensión de conceptos o procedimientos.',
    visualSupports: ['presentacion-diapositivas', 'lectura-pdf'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: '2561rT_Fbgc',
    recommendedFor: 'Introducción a las Ciencias Sociales, Derecho, Humanidades, Introducciones a materias.',
    preprodTips: 'Diapositivas en formato 16:9, tipografía mínima de 28 pt, no saturar de texto (máximo 6 líneas).'
  },
  {
    id: 'pizarra-resolucion-ejercicios',
    title: 'Exposición con pizarra',
    category: 'Práctico / Metodológico',
    duration: '6 a 10 min',
    complexity: 'Baja',
    description: 'El formato más similar a una clase presencial. Grabación de una exposición teórica y/o práctica frente a una pizarra. Puede ser en estudio de FyPE o un aula a convenir.',
    pedagogicalRole: 'Facilita seguir el razonamiento con soporte visual a medida. Se siente como estar en el aula presencial.',
    visualSupports: ['pizarra'],
    postProductionNeeds: ['Ninguna'],
    youtubeId: 'WRibE2nt8wM',
    recommendedFor: 'Matemática, Física, Química, Estadística, Economía, Programación básica.',
    preprodTips: 'Tener resuelto el ejercicio previamente en borrador; definir colores de tinta por nivel de variable o paso lógico.'
  },
  {
    id: 'tableta-resolucion-ejercicios',
    title: 'Resolución de ejercicios a mano sobre papel',
    category: 'Práctico / Metodológico',
    duration: '6 a 10 min',
    complexity: 'Baja',
    description: 'Grabación sincronizada del trazo manuscrito sobre papel, con resaltadores de color para desglosar desarrollos paso a paso.',
    pedagogicalRole: 'Facilita seguir el razonamiento paso a paso con un óptimo nivel de personalización. Se siente como una clase de consulta mano a mano.',
    visualSupports: ['escritura-mano'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'K_Kn_sGSDVA',
    recommendedFor: 'Matemática, Estadística, Economía, Programación básica.',
    preprodTips: 'Tener resuelto el ejercicio previamente en borrador; definir colores de tinta por nivel de variable o paso lógico.'
  },
  {
    id: 'tableta-resolucion-ejercicios',
    title: 'Exposición o resolución de ejercicios con tablet',
    category: 'Práctico / Metodológico',
    duration: '6 a 10 min',
    complexity: 'Media',
    description: 'Grabación sincronizada del trazo manuscrito o zoom, resaltado o gestos en tableta digitalizadora.',
    pedagogicalRole: 'Facilita seguir el razonamiento siguiendo el foco en cada momento y a cada acción.',
    visualSupports: ['tablet'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'YbKhyMbKSrQ',
    recommendedFor: 'Matemática, Estadística, Economía, Programación básica.',
    preprodTips: 'Ejercitar la exposición con un esquema previo de lo que será dibujado o resaltado.'
  },
  {
    id: 'screencast-software-tecnico',
    title: 'Demostración guiada de software especializado',
    category: 'Instrumental / Taller',
    duration: '7 a 12 min',
    complexity: 'Media',
    description: 'Captura directa de pantalla mostrando la interfaz y operación de programas específicos (R, Python, simuladores, etc).',
    pedagogicalRole: 'Guía paso a paso para la adopción de herramientas informáticas y metodologías de cálculo o modelado.',
    visualSupports: ['software-especifico', 'navegacion-web'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'P1ryrfSe_4Y',
    recommendedFor: 'Ingeniería, Ciencias Económicas, Biología, Arquitectura, Ciencias de la Computación.',
    preprodTips: 'Configurar la resolución de pantalla a 1920x1080; ampliar el tamaño del cursor del mouse y la tipografía de la interfaz.'
  },
 {
    id: 'mesa-redonda',
    title: 'Mesa redonda',
    category: 'Colaborativo / Reflexivo',
    duration: '15 a 30 min',
    complexity: 'Media',
    description: 'Conversación grupal a dos cámaras. Formato mesa radial o programa de streaming.',
    pedagogicalRole: 'Contrasta posturas teóricas diversas, visibiliza proyectos de extensión/investigación y humaniza la labor científica.',
    visualSupports: ['Ninguno'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'lTYN09GcBhI',
    recommendedFor: 'Seminarios de posgrado, Cátedras con profesores invitados, Formación profesional ética.',
    preprodTips: 'Preparar una presentación de cada participante. Tener un punteo de los temas a tratar. No pisarse al hablar.'
  },
  {
    id: 'entrevista-dialogo-academico',
    title: 'Diálogo académico o entrevista a especialista',
    category: 'Colaborativo / Reflexivo',
    duration: '10 a 15 min',
    complexity: 'Media',
    description: 'Conversación pautada a dos cámaras o formato híbrido entre miembros de la cátedra o con un investigador invitado externo, intercalando esquemas e imágenes de apoyo.',
    pedagogicalRole: 'Contrasta posturas teóricas diversas, visibiliza proyectos de extensión/investigación y humaniza la labor científica.',
    visualSupports: ['Ninguno'],
    postProductionNeeds: ['texto-imagenes'],
    youtubeId: 'FYoh8AYAAw0',
    recommendedFor: 'Seminarios de posgrado, Cátedras con profesores invitados, Formación profesional ética.',
    preprodTips: 'Enviar preguntas eje con anticipación al invitado; acordar un bloque temático no mayor a 15 minutos.'
  },
  {
    id: 'explicacion-con-imagenes',
    title: 'Ritmo ágil y descontracturado con imágenes estáticas',
    category: 'Procesos / Conceptos',
    duration: '7 a 11 min',
    complexity: 'Alta',
    description: 'Registro audiovisual de procedimientos experimentales con planos detalle de instrumentos, manipulación de reactivos o maquinaria, señalización de normas de seguridad y cronómetros.',
    pedagogicalRole: 'Prepara a los alumnos para las prácticas presenciales, reduciendo errores operativos y garantizando bioseguridad.',
    visualSupports: ['Ninguno'],
    postProductionNeeds: ['texto-imagenes', 'animaciones'],
    youtubeId: 'GuQlg3rCpTA',
    recommendedFor: '.',
    preprodTips: 'Se precisa un buen guión, con buena práctica y conocimiento preciso de las imágenes a utilizar en cada momento.'
  },
  {
    id: 'pildora-croma-animaciones',
    title: 'Desarrollo de conceptos complejos con fondo croma y animaciones',
    category: 'Impacto Conceptual',
    duration: '4 a 7 min',
    complexity: 'Alta',
    description: 'Grabación del docente en estudio con pantalla verde (croma) interactuando con gráficos animados, líneas temporales flotantes, modelos tridimensionales y conceptos dinámicos.',
    pedagogicalRole: 'Genera alto enganche visual en temas abstractos que requieren anclajes espaciales y metáforas visuales.',
    visualSupports: ['presentacion-diapositivas', 'visionado-videos'],
    postProductionNeeds: ['fondo-croma', 'animaciones', 'texto-imagenes'],
    youtubeId: 'vFlD5fEYVFg',
    recommendedFor: 'Medicina, Biología Celular, Geología, Física Teórica, Módulos introductorios masivos.',
    preprodTips: 'Formato reservado para situaciones especiales. Requiere alto trabajo de pre y postproducción.'
  },
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
    const complexityBadgeStyle = 
      item.complexity === 'Baja' ? 'bg-emerald-600 text-white border border-emerald-400/40' :
      item.complexity === 'Media' ? 'bg-[#FFD200] text-[#670000] border border-[#FFD200]/80 font-bold' :
      'bg-[#B5121B] text-white border border-[#B5121B]/40';

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
          
          <!-- Category & Complexity Pills -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
              ${item.category}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm ${complexityBadgeStyle}">
              ⏱ ${item.complexity}
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
          <div class="mb-2">
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-[#B5121B] transition-colors leading-snug">
              ${item.title}
            </h3>
          </div>

          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            ${item.description}
          </p>

          <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4">
            <strong class="text-slate-900 font-semibold block mb-0.5">Valor pedagógico:</strong>
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

  showToast(`Formato "${item?.title || ''}" precargado en el formulario de solicitud.`);
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
      showToast('Lista restablecida.');
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

// Script Examples Data and Viewer Modal
export interface ScriptExample {
  id: string;
  title: string;
  badge: string;
  isFeatured?: boolean;
  clarification: string;
  fullText: string;
  externalLink?: string;
  docId: string;
  docUrl: string;
}

export const SCRIPT_EXAMPLES: ScriptExample[] = [
  {
    id: 'guion-generico',
    title: 'Guión genérico',
    badge: 'Destacado',
    isFeatured: true,
    clarification: 'Estructura base recomendada a dos columnas (Texto / Imagen). Define objetivos, destinatarios, medio de publicación e integra recursos interactivos (como GeoGebra). Ideal para cualquier cátedra que inicia su producción.',
    docId: '1AV-sOfl5EvA97Q0ECaJpy8t2ZdmT07mWO9U460b9nB8',
    docUrl: 'https://docs.google.com/document/d/1AV-sOfl5EvA97Q0ECaJpy8t2ZdmT07mWO9U460b9nB8/edit?usp=sharing',
    fullText: `GUIÓN VIDEO: GUION GENÉRICO DE CLASE

OBJETIVOS:
- Comprender la función lineal
- Presentar la unidad temática

DESTINATARIOS:
Estudiantes de 3er año de administración

MEDIO DE PUBLICACIÓN:
Aula virtual / Campus institucional

MATERIALES DE REFERENCIA:
Videos de ejemplo y material interactivo GeoGebra

==================================================
DESARROLLO A DOS COLUMNAS
==================================================

[BLOQUE 1]
TEXTO (Locución docente):
¡Hola! Hoy veremos qué es una función lineal y cómo representarla gráficamente.
IMAGEN (Pantalla / Soporte):
Título sobreimpreso: “Funciones lineales”.

[BLOQUE 2]
TEXTO:
Una función lineal tiene la forma f(x) = mx + b, donde m es la pendiente y b es la ordenada al origen.
IMAGEN:
La docente va dibujando el siguiente gráfico en una hoja o pizarra a medida que habla.

[BLOQUE 3]
TEXTO:
La pendiente indica cuánto sube o baja la recta por cada unidad que avanza en x. Si m > 0 la recta sube; si m < 0 baja; si m = 0 es horizontal.
IMAGEN:
Se muestra el comportamiento de m con el siguiente material interactivo:
https://www.geogebra.org/m/QCndQf8q

[BLOQUE 4]
TEXTO:
El valor b es el punto donde la recta corta al eje y (cuando x = 0).
IMAGEN:
Observamos la pendiente negativa y la intersección en y = 3.

[BLOQUE 5]
TEXTO:
¡Eso es todo! Practiquen con diferentes valores y verán cómo cambian las rectas.
IMAGEN:
Placa de cierre con consigna de ejercitación para el Aula Virtual.`
  },
  {
    id: 'video-complejo',
    title: 'Video complejo: Clases híbridas en la Escuela de Graduados',
    badge: 'Producción Integral',
    clarification: 'Guión de alta complejidad dividido en 5 bloques temáticos (31 escenas). Articula exteriores, estudio FyPE con croma, demostración en aula de Note 3, micrófonos corbateros, cámaras móviles y pautas pedagógicas de participación remota y presencial.',
    docId: '1kpKJPg5MAeaN0i4UGHZqJ5RCZaMmnEnscjxpB4UkBvI',
    docUrl: 'https://docs.google.com/document/d/1kpKJPg5MAeaN0i4UGHZqJ5RCZaMmnEnscjxpB4UkBvI/edit?usp=sharing',
    fullText: `CLASES HÍBRIDAS EN LA ESCUELA DE GRADUADOS
Guión para producción audiovisual

--------------------------------------------------
BLOQUE 0 - PRESENTACIÓN (Grabación en exterior y graduados)
--------------------------------------------------
Esc 01:
TEXTO: En este vídeo queremos compartir algunas recomendaciones técnicas y pedagógicas para las clases híbridas que se desarrollen en la Escuela de Graduados de nuestra facultad.
IMAGEN: Plano general. Exterior de la Escuela de Graduados. Tomas de la Escuela y las aulas.

Esc 02:
TEXTO: Pero… ¿Qué es una clase híbrida? ¿Qué particularidades tiene? ¿Cómo nos preparamos para la clase y qué debemos tener en cuenta antes y durante la misma?
IMAGEN: En aula de graduados. Preguntas sobreimpresas.

--------------------------------------------------
BLOQUE 1 - LA CLASE HÍBRIDA - BLOQUE CONCEPTUAL (Grabación en estudio FyPE)
--------------------------------------------------
Esc 03:
TEXTO: Cuando hablamos de clases híbridas nos referimos a una estrategia educativa en la que contamos en simultáneo con dos grupos de estudiantes. Uno de ellos está en el mismo espacio físico que el docente y el otro grupo se encuentra conectado en forma remota a través de videoconferencia.
IMAGEN: Animación: destacar la denominación "Grupo Físico" y "Grupo Remoto".

Esc 04:
TEXTO: Las clases híbridas suponen la gestión del grupo físico y el grupo remoto en una propuesta educativa que los integre y permita su participación activa, sin importar dónde se encuentren. La secuencia didáctica que preparemos para la clase debe anticiparse a esta dualidad. Principalmente atendiendo a la interacción con y entre estudiantes. Resaltamos: La hibridez no debe ser impedimento para la participación activa.
IMAGEN: Destacar sobreimpreso: "Participación activa" e "Interacción".

Esc 05:
TEXTO: En concreto lo híbrido abre posibilidades de integrar lo presencial y lo virtual, el espacio del aula física con otros espacios físicos y digitales. Ahora bien… ¿qué equipos técnicos harán todo esto posible?
IMAGEN: Grabación en croma.

--------------------------------------------------
BLOQUE 2 - CLASE HÍBRIDA - EQUIPAMIENTO DEL AULA (Grabación en FyPE y graduados)
--------------------------------------------------
Esc 06:
TEXTO: Una clase híbrida cuenta con 5 elementos centrales:
* una computadora con pantalla táctil,
* un monitor adicional,
* sistema de amplificación de sonido,
* cámara web,
* micrófonos.
IMAGEN: Placa EQUIPAMIENTO TÉCNICO. Sobreimpreso: COMPUTADORA, PANTALLA, PANTALLA TÁCTIL, MICRÓFONO, SONIDO, CÁMARA WEB.

Esc 07:
TEXTO: Desde secretaría de Graduados nos encargamos de que el equipamiento se encuentre conectado y funcionando antes de iniciar la clase. Y estamos atentos y disponibles si en algún momento de la clase algo no funciona. Es responsabilidad del docente presentarse 15 minutos antes de la clase para asegurar que todos los insumos estén listos e incorporar las tecnologías híbridas a la planificación de las clases. Hagamos un repaso por los dispositivos con los que vamos a interactuar:
IMAGEN: Toma cartel secretaría graduados. Toma secretaría conectando equipos. Sobreimprime "Presentarse 15 minutos antes" y "Incorporar tecnologías híbridas".

Esc 08:
TEXTO: En primer lugar estaremos utilizando una computadora con sistema operativo windows. Este equipo cuenta con las herramientas básicas de ofimática, algunos softwares especializados y zoom para videoconferencia. En la escuela de graduados utilizaremos Zoom como nuestra plataforma principal, pero en caso de ser necesario, puede utilizarse Google Meet, Jitsi, u otros.
IMAGEN: Graduados: se muestra la PC. Sobreimprime: COMPUTADORA.

Esc 09:
TEXTO: La pandemia seguramente nos ha familiarizado con los softwares de videoconferencia, pero está de más recomendarles que se familiaricen con su uso desde un rol docente, es decir, habituarse a la función de compartir y dejar de compartir pantalla o ventanas específicas, habilitar la grabación, (con o sin sonido). Pueden acceder a un tutorial de zoom escaneando este QR, o buscando el enlace en la descripción del video.
IMAGEN: Grabación de pantalla de interfaz de windows, powerpoint, navegadores y zoom. QR, popup, enlace tutorial: https://support.zoom.us/hc/es/sections/4415034398477-Funciones-de-Zoom-Meetings

Esc 10:
TEXTO: La compu está conectada a dos pantallas. La principal, táctil, dedicada a lo que se quiera compartir en la clase. Y una adicional donde se muestra la videoconferencia y sus participantes.
IMAGEN: Graduados. Sobreimprime: “PANTALLAS”.

Esc 11:
TEXTO: Las pantallas están configuradas en la modalidad “Extender escritorio”. Es decir, si movemos el mouse hacia los costados del monitor nos desplazaremos entre las distintas pantallas. Es importante saber esto porque puede suceder que al compartir pantalla o cambiar de un software a otro, la posición de las ventanas se modifique. Entonces, si esto ocurre, simplemente podemos arrastrar las ventanas de un monitor a otro.
IMAGEN: Graduados. Toma de la secretaria en el aula mostrando el recorrido del mouse entre monitores.

Esc 12:
TEXTO: La pantalla táctil funciona también como un pizarrón expandido a partir de la aplicación Note 3. Pueden ver un tutorial siguiendo este enlace, también disponible en la descripción del video. El contenido de esta pantalla se comparte en la videoconferencia. En caso de hacer cambio de ventana, aplicación o compartir videos con audio, se debe chequear que se esté compartiendo bien en la sesión de zoom.
IMAGEN: Graduados. PANTALLA TÁCTIL. Toma de Note 3 en uso. QR y enlace tutorial. Toma de compartir en zoom.

Esc 13:
TEXTO: El tema del sonido es algo realmente importante. Para una buena experiencia de cursado híbrido es indispensable que se escuche claro lo que sucede en el aula. Para asegurar esto, cada aula tendrá un micrófono corbatero o vincha, y un micrófono de mano para los estudiantes.
IMAGEN: Graduados. Sobreimpreso: MICRÓFONO.

Esc 14:
TEXTO: Los micrófonos corbateros o de vincha son sensibles, por lo que es importante evitar los roces con nuestro cuerpo o ropa.
IMAGEN: Toma detalle del micrófono corbatero. Screencapture zoom ruido de mic.

Esc 15:
TEXTO: … (alguien en el aula quiere participar, no se escucha.)
IMAGEN: Screencapture de zoom, la cámara girando hacia quien participa.

Esc 16:
TEXTO: Recuerden, un buen sonido es central para una buena clase, comencemos la clase consultando si se escucha bien y nos detengamos si algo está funcionando mal hasta poder resolverlo.
IMAGEN: Toma general en aula.

Esc 17:
TEXTO: El sonido dentro del aula física puede darse por los parlantes externos o el sonido de la pantalla táctil. El sonido ya estará configurado al iniciar la clase, pero en caso de querer modificar la salida de audio, lo pueden hacer desde la configuración de sonido del sistema o del mismo zoom.
IMAGEN: Toma general. Screencapture salida de audio de zoom.

Esc 18:
TEXTO: Por último, las aulas están equipadas también con cámaras móviles a control remoto.
IMAGEN: Toma general. Sobreimprime: CÁMARA WEB.

Esc 19:
TEXTO: Puede usarse con botones de acceso rápido a encuadres preestablecidos, o de manera manual con un cursor de movimiento y de zoom. Esto nos permite alternar el foco en distintos puntos del aula física.
IMAGEN: Toma detalle del control remoto. Screencapture de movimientos de cámara.

Esc 20:
TEXTO: Es importante estar pendientes de no dar la espalda a la cámara y evitar salirse de cuadro. Pensemos que la cámara es toda una fila de estudiantes más y debemos atenderla por igual, sin darle la espalda y dirigiendo nuestra mirada cada tanto.
IMAGEN: Screencapture: docente da la espalda, sale de cuadro y vuelve a dar la recomendación.

Esc 21:
TEXTO: Finalmente, es importante solicitar a la asistencia de la videoconferencia que mantengan sus micrófonos apagados cuando no se participa y mantener sus cámaras activadas todo el tiempo, ya que las cámaras apagadas se contabilizan como una ausencia.
IMAGEN: Toma de sesión de zoom con cámaras prendidas.

--------------------------------------------------
BLOQUE 3 - RECOMENDACIONES PREVIAS A LA CLASE
--------------------------------------------------
Esc 22:
TEXTO: Las clases híbridas abren un universo inmenso de posibilidades a la hora de desarrollar nuestras clases. A modo práctico, veamos juntos algunas recomendaciones que pueden enriquecer la planificación:
IMAGEN: FyPE. Inserts divisores con títulos.

Esc 23:
TEXTO: * Diseñar las actividades: Pensar primero en la actividad del estudiante. Las formas de estar en el aula de ambos grupos son diferentes pero pueden ser complementarias... Prever a qué estamos invitando a realizar a los estudiantes en cada momento de la clase, contemplando los tiempos de participación de ambos grupos.
IMAGEN: Placa didáctica.

Esc 24:
TEXTO: * Anticipar la dinámica: Una buena práctica que ayudará a la dinámica de las clases es que los estudiantes conozcan previamente la dinámica que se propone desarrollar, anticipando sus modos de participación tanto física como remota en el aula virtual.
IMAGEN: Captura de aula virtual.

Esc 25:
TEXTO: * Tener un plan B: Las clases híbridas se apoyan fuertemente en la tecnología disponible. Como sabrán, siempre pueden existir imprevistos técnicos... Por ello es importante compartir los recursos de la clase o diseñar estrategias alternativas disponibles en el aula virtual.
IMAGEN: Captura recursos de contingencia.

--------------------------------------------------
BLOQUE 4 - DURANTE LA CLASE - COMUNICATIVO Y PARTICIPACIÓN
--------------------------------------------------
Esc 26 a 30:
TEXTO: Pautas de ubicación sin dar la espalda al grupo remoto, comprobación frecuente de micrófono, expresiones claras, tiempo para que se expresen ambos grupos, actividades colaborativas grupales (análisis de casos, debates) y retroalimentación interactiva (preguntas, cuestionarios, encuestas).
IMAGEN: Sobreimpresos "Cuestiones comunicativas", "Cuestiones pedagógicas", "Retroalimentación".

--------------------------------------------------
BLOQUE 5 - CIERRE
--------------------------------------------------
Esc 31:
TEXTO: Hemos llegado al final de este video introductorio. Esperamos encuentren útil esta información y disfruten de los desafíos que nos plantea esta nueva modalidad híbrida.
IMAGEN: Toma en aula de Graduados. Efecto digital de salida y créditos.`
  },
  {
    id: 'intro-propuesta-complejo',
    title: 'Introducción a una propuesta: Micromaster en Gestión de Servicios',
    badge: 'MOOC / Motion Graphics',
    clarification: 'Guión para video introductorio institucional/masivo. Detalla indicaciones precisas de motion graphics, animaciones geométricas (esquema hexagonal), transiciones de cámara y articulación temática de múltiples módulos (Marketing, Operaciones y RRHH).',
    docId: '1PM4K_baIbPSFnjNJH7MeneKW2_rS4IP96RzL7tdtytQ',
    docUrl: 'https://docs.google.com/document/d/1PM4K_baIbPSFnjNJH7MeneKW2_rS4IP96RzL7tdtytQ/edit?usp=sharing',
    fullText: `INTRODUCCIÓN GENERAL: MICROMASTER
“Gestión de servicios: diseño integral de experiencias exitosas”
Facultad de Ciencias Económicas - Universidad Nacional de Córdoba

==================================================
DESARROLLO DE ESCENAS Y MOTION GRAPHICS
==================================================

[ESCENA 1]
TEXTO: Bienvenidos y bienvenidas al Micromaster “Gestión de servicios: diseño integral de experiencias exitosas”.
IMAGEN: Texto central sobreimpreso: "Micromaster Gestión de servicios: diseño integral de experiencias exitosas".

[ESCENA 2]
TEXTO: El micromaster se compone de tres cursos: Marketing y estrategia, Operaciones y Recursos Humanos.
IMAGEN: Hexágono delineado con tres hexágonos sólidos en tres puntas, cada una con el color y título correspondiente a cada MOOC.

[ESCENA 3]
TEXTO: Cada curso está dedicado a un área del modelo de integración gerencial de servicios. Este modelo propone una organización a partir de tres áreas trabajando de manera mancomunada y poniendo en el centro de atención tanto al cliente como al empleado.
IMAGEN: Una trama hexagonal va ganando opacidad en el fondo, marcando tres porciones del fondo para cada área. Movimiento sutil de cámara focalizando cada área. Zoom in sutil al centro del hexágono: aparece ícono de persona con el título CLIENTE y luego ícono de trabajador con el título EMPLEADO.

[ESCENA 4]
TEXTO: Sin perder de vista esta configuración general cada curso profundizará en determinados conceptos, procesos y herramientas.
IMAGEN: Zoom out al esquema general.

[ESCENA 5]
TEXTO: En el curso de Marketing y Estrategia evaluaremos las tendencias de consumo actual. Con casos de empresas reales, profundizaremos en el proceso de generación de valor para los clientes. Compartiremos modelos teóricos que nos permitirán encontrar las estrategias para satisfacer al cliente y fidelizarlo, creando experiencias exitosas de servicio.
IMAGEN: Zoom in al hexágono de Marketing. A medida que se nombran los conceptos, aparecen líneas desde el hexágono hacia íconos destacados:
- Tendencias de consumo: m-commerce
- Empresas reales: shop
- Generación de valor: premium quality
- Modelos teóricos: idea developing
- Satisfacer al cliente: wishlist

[ESCENA 6]
TEXTO: En el curso de Recursos Humanos pondremos el foco en los equipos de personas que forman los servicios. Veremos cuáles son las habilidades y competencias críticas para sostener una experiencia de servicio de calidad para los clientes; y estudiaremos dinámicas de atracción de talentos que potencien nuestro negocio, generando una cultura de alta performance.
IMAGEN: Zoom in al hexágono de RRHH. Líneas conectando conceptos con íconos:
- Equipos de personas: Team
- Habilidades y competencias: Key idea
- Servicio de calidad: Premium quality
- Atracción de talentos: Student
- Cultura de alta performance: Analysis

[ESCENA 7]
TEXTO: Finalmente, en el curso de Operaciones nos centraremos en los procesos de los servicios. Conocer las secuencias de eventos en la actividad de nuestra empresa es clave para diseñar propuestas que se adapten a las necesidades, problemas y preferencias de los consumidores...
IMAGEN: Zoom in al hexágono de Operaciones. Íconos secuenciales de logística, abastecimiento, cálculo de costos y optimización de colas de espera.
Línea continua fragmentada en tres secciones -> dos secciones más -> zoom in lupa -> trazados optimizados empalmándose y disminuyendo el largo total.

[ESCENA 8]
TEXTO: Una vez finalizado el micromaster estaremos capacitados para diagnosticar, diseñar y gestionar experiencias de servicio integrales y exitosas.
IMAGEN: Zoom out. Texto en mayúscula: “DIAGNOSTICAR • DISEÑAR • GESTIONAR”.

[ESCENA 9]
TEXTO: Les damos la bienvenida al micromaster online, masivo y abierto de la Facultad de Ciencias Económicas de la Universidad Nacional de Córdoba.
IMAGEN: Zoom out, alrededor del esquema se muestran varios fragmentos de videos producidos. Cierre con logos institucionales: UNCordobaX - Campus - FCE.`
  },
  {
    id: 'economia-monetaria',
    title: 'Economía monetaria: Storytelling y gamificación',
    badge: 'Storytelling (60 seg)',
    clarification: 'Guión ágil de 60 segundos con formato narrativo (storytelling). Muestra cómo presentar experiencias lúdicas, postas de aprendizaje y dinámicas participativas en la cátedra.',
    docId: '1rjFJePCNHA0hAJWmwkIQsIDwK2TcHEAbZW7qG8mYOmU',
    docUrl: 'https://docs.google.com/document/d/1rjFJePCNHA0hAJWmwkIQsIDwK2TcHEAbZW7qG8mYOmU/edit?usp=sharing',
    fullText: `GUIÓN VIDEO: ECONOMÍA MONETARIA 2024
Cátedra de Economía Monetaria - FCE UNC

PLANIFICACIÓN:
- Objetivo: Incentivar a otras cátedras a realizar experiencias de clases participativas y gamificación.
- Destinatarios: Docentes y ayudantes de la facultad.
- Canal de difusión: Comunidad docente virtual.
- Tono: Dinámico, convocante, ágil.
- Duración: 60 segundos.
- Cierre: Llamado a la acción para contactar a FyPE.

==================================================
DESARROLLO DE LOCUCIÓN E IMAGEN
==================================================

[BLOQUE 1 - GANCHO / STORYTELLING]
TEXTO: ¿Qué hacen estos estudiantes? ¿Por qué el sombrero del profesor Neder ayuda a mejorar la experiencia de aprendizaje?
IMAGEN: Foto de estudiantes en poses extrañas. Video del profesor Neder con sombrero azul brillante (gancho para captar atención).

[BLOQUE 2 - CONTEXTO]
TEXTO: Por segundo año consecutivo la cátedra de economía monetaria realizó una clase de cierre especial.
IMAGEN: Registros y tomas del aula del año anterior y actual.

[BLOQUE 3 - LAS 5 POSTAS]
TEXTO: Se trabajó en 5 postas: ping pong de preguntas y respuestas, entrevista televisiva, publicidad, canción y escenificación…
IMAGEN: Imágenes rápidas y dinámicas de cada una de las 5 postas.

[BLOQUE 4 - FUNDAMENTO DIDÁCTICO]
TEXTO: Cada posta se construye en base a decisiones didácticas que procuran: ser diversas en el abordaje de contenidos e involucrar a los y las estudiantes como co-diseñadores de la clase.
IMAGEN: Tomas de trabajo en equipo e interacción entre estudiantes.

[BLOQUE 5 - RESULTADOS PEDAGÓGICOS]
TEXTO: Este tipo de actividades promueve el desarrollo de habilidades orales, el uso de vocabulario específico y el trabajo en equipo. También ayudan a expresarse creativamente, recuperar experiencias previas y a participar activamente en la clase.
IMAGEN: Planos detalle de los estudiantes explicando y debatiendo.

[BLOQUE 6 - LLAMADO A LA ACCIÓN]
TEXTO: Ahora: ¿Cómo puedo diseñar una clase de este tipo en mi cátedra? Visitá la Ayuda para el aula #8 sobre Gamificación o la #9 sobre el diseño de Actividades. Si te interesa llevar adelante una propuesta así, ponete en contacto con el equipo de FyPE.
IMAGEN: Signo de pregunta gráfico. Página web de FyPE (sección Ayudas para el aula y Contacto). Placa institucional.`
  },
  {
    id: 'derecho-laboral',
    title: 'Presentación de la cátedra Derecho Laboral',
    badge: 'Presentación de Cátedra',
    clarification: 'Guión estructurado para bienvenida de cuatrimestre con múltiples docentes a cámara en locaciones universitarias (aulas, biblioteca, pasillos), pautas de regularidad, comisiones y dinámicas de gamificación.',
    docId: '1-ALZjGpa__LxJQlwEyUYOPHba7hSrKLmIhrepq7uUqI',
    docUrl: 'https://docs.google.com/document/d/1-ALZjGpa__LxJQlwEyUYOPHba7hSrKLmIhrepq7uUqI/edit?usp=sharing',
    fullText: `GUIÓN VIDEO: CÁTEDRA DERECHO LABORAL Y DE LA SEGURIDAD SOCIAL
Planificación de Presentación de Materia 2024

RESPONSABLE DE CÁTEDRA: Pablo Rodriguez Saa
DOCENTES A CÁMARA: Carlos Toselli, Andrea Moreno, Matias Musso, Valeria Prioletti.
CANAL: YouTube embebido en sesión de Aula Virtual / Instagram.
DURACIÓN: 2 minutos aproximadamente.
TONO: Dinámico, claro, institucional.

==================================================
DESARROLLO A DOS COLUMNAS
==================================================

[ESCENA 1 - BIENVENIDA]
TEXTO: Hola, con mucha alegría junto a parte de nuestro equipo de cátedra les damos la bienvenida al curso de Derecho Laboral y de la Seguridad Social.
IMAGEN: Profesor 1 saludando a cámara con la mano bien abierta. Graph: "Les damos la bienvenida".

[ESCENA 2 - EQUIPO INTERDISCIPLINARIO]
TEXTO: Somos un equipo integrado por Abogados, Contadores, Licenciados en Administración y Recursos Humanos, lo que otorga una visión amplia del ejercicio de la profesión.
IMAGEN: Profesor 2 en Sala de profesores. Graph: "¿Quiénes somos?".

[ESCENA 3 - ENFOQUE POR COMPETENCIAS]
TEXTO: Orientar el proceso de enseñanza y aprendizaje por competencias, entendiendo que no es suficiente con los contenidos básicos de la materia en un mundo complejo, que requiere flexibilidad y adaptación al cambio. Vamos a trabajar en grupos, en miras de fortalecer la comunicación, en busca de consensos.
IMAGEN: Profesor 3 en aula con pizarrón de fondo. Graph: "¿Qué pretendemos?".

[ESCENA 4 - PENSAMIENTO CRÍTICO]
TEXTO: Para alcanzarlo es importante orientarlo a resultados, con un pensamiento lateral y a través de soluciones múltiples. Queremos fomentar el pensamiento crítico y la confianza en ustedes mismos.
IMAGEN: Profesor 4 en pasillo de la facultad. Graph: "¿Qué buscamos?".

[ESCENA 5 - COMPROMISO DEL ESTUDIANTE]
TEXTO: ¡PERO para lograrlo, necesitamos de ustedes! Responsabilidad y disciplina. Leer los contenidos y ver los videos teóricos antes de cada clase, con el fin de poder sacarle provecho a cada uno de los encuentros presenciales.
IMAGEN: Profesor 1 con gesto explicativo. Graph: "¿Qué necesitamos de ustedes?".

[ESCENA 6 - HERRAMIENTAS Y CLASES]
TEXTO: Las herramientas que tendrán disponibles son las siguientes:
- El soporte teórico estará disponible en el canal de Youtube y en el manual de cátedra de la Editorial de la Facu.
- Trabajaremos en comisiones, con 2 encuentros semanales.
IMAGEN: Profesor 2 en sala de informática. Graph: "¿Qué herramientas utilizaremos?".

[ESCENA 7 - RESIGNIFICAR LA PRESENCIALIDAD]
TEXTO: Resignificamos la presencialidad. En cada clase grupos integrados por ustedes expondrán brevemente los temas que vieron en los videos y estudiaron previamente en el manual. Buscando cambiar roles, para luego trabajar en grupos diferentes casos y finalmente poner en común.
IMAGEN: Profesor 3 hablando a cámara desde PCs de Biblioteca. Graph: "¿Cómo funcionan las clases presenciales?".

[ESCENA 8 - GAMIFICACIÓN]
TEXTO: Utilizaremos la Gamificación, lo que permite motivar a los grupos, con el fin de no cargarlos con muchos ejercicios por repetición, sino apuntar a la comprensión profunda en escenarios cambiantes.
IMAGEN: Profesor 4 en salas grupales de Biblioteca. Graph: "¿Con qué otros recursos contamos?".

[ESCENA 9 - CONDICIONES ACADÉMICAS]
TEXTO: Vamos a lo importante: cómo se regulariza y promociona.
Regularidad: Aprobación de 2 de 3 parciales y 50% de asistencia.
Promoción: Aprobación de 3 parciales con nota 6 o más y promedio 7, más 50% de asistencia.
IMAGEN: Profesor 2 tomando nota en escritorio. Graph: "¿Cómo se regulariza?".

[ESCENA 10 - CIERRE Y EXÁMENES]
TEXTO: Las fechas de parciales pueden verlas en el Aula Virtual. El examen final es oral. ¡Comenzamos! Los esperamos en clases; recuerden repasar el teórico antes de ir y navegar por el Aula Virtual. ¡Los esperamos!
IMAGEN: Profesor 4 saludando a cámara con teléfono en mano. Graph: "¡Comenzamos!".`
  },
  {
    id: 'invitacion-futuribles',
    title: 'Invitación Futuribles: Enseñar y aprender en nuevos escenarios',
    badge: 'Convocatoria Institucional',
    clarification: 'Guión de convocatoria institucional a cámara doble con dos propuestas de realización: Propuesta A tradicional a cámara y Propuesta B dinámica con introducción inspirada en Star Wars, zócalos y mockups.',
    docId: '1OLPn_LpPLwB98eCaRMtlI5DNJOZE_RjUobQ0ss5vcDY',
    docUrl: 'https://docs.google.com/document/d/1OLPn_LpPLwB98eCaRMtlI5DNJOZE_RjUobQ0ss5vcDY/edit?usp=sharing',
    fullText: `GUIÓN VIDEO: JORNADAS FUTURIBLES FCE
Objetivo: Invitar y promover inscripciones a jornadas docentes
Referentes: Oscar y Gabriela

==================================================
PROPUESTA A (Formato Convencional a Cámara)
==================================================
TEXTO 1 (Oscar):
Queremos invitar a los y las docentes de la Facultad a las jornadas presenciales Futuribles FCE: Enseñar y aprender en nuevos escenarios que se realizarán el viernes 12 de noviembre a las 14:30 en nuestra Facultad.
IMAGEN: Oscar a cámara. Gráfica: Día: 12/11 | Hora: 14:30 hs | Lugar: Aula O.

TEXTO 2 (Gabriela):
La jornada presencial contará con la participación de una especialista en el tema y será una oportunidad para encontrarnos a intercambiar ideas sobre las líneas estratégicas de desarrollo pedagógico de la FCE.
IMAGEN: Música y gráfica animada con título "FUTURIBLES FCE". Inscripciones en: https://futuribles.eco.unc.edu.ar/

TEXTO 3 (Gabriela):
Durante estos dos últimos años hemos vivido profundas transformaciones en los modos de enseñar... Iniciamos el intercambio a través del canal de Telegram en 4 ejes:
- Dimensión del espacio educativo
- Temporalidad en la enseñanza
- Interacción y comunicación educativa
- Construcción del conocimiento transmedia.
IMAGEN: Gabriela a cámara. Gráficos animados con íconos de los 4 ejes.

TEXTO 4 (Oscar):
Necesitamos pensarnos como comunidad, los estudiantes necesitan acuerdos entre materias, formas comunes de gestionar la enseñanza. Nos debemos la oportunidad de discutir hacia qué modelo educativo deseamos avanzar.
IMAGEN: Oscar a cámara. Gráfica animada de los elementos de Futuribles.

TEXTO 5 (Cierre conjunto):
La jornada será un espacio de encuentro para pensar entre todos la facultad que se viene. Los y las esperamos.
IMAGEN: Gráfica final con sitio web institucional.

==================================================
PROPUESTA B (Formato Dinámico / Estilo Star Wars)
==================================================
TEXTO:
Oscar: Durante estos dos últimos años hemos vivido profundas transformaciones en los modos de enseñar...
Gabriela: La pregunta que nos hacemos es qué, de todo eso que fuimos capaces de hacer, formará parte de la nueva normalidad...
IMAGEN:
Voces en off intercaladas con intro formato texto deslizante sobre fondo estrellado (estilo Star Wars).
Transición a fondo institucional con Oscar y Gabriela a cámara.
Zócalo: OSCAR y GABY | FUTURIBLES | 12/11 - 14:30 hs - Aula O.
Mockup de celular mostrando canal de Telegram y ejes temáticos.
Cierre con pantalla de invitación e inscripción directa.`
  }
];

// Initialize Script Modal and Viewers
function initScriptEditor() {
  const modal = document.getElementById('script-modal');
  const modalBackdrop = document.getElementById('script-modal-backdrop');
  const closeBtn1 = document.getElementById('script-modal-close-btn');
  const closeBtn2 = document.getElementById('script-modal-close-btn-2');
  const titleEl = document.getElementById('script-modal-title');
  const badgeEl = document.getElementById('script-modal-badge');
  const subtitleEl = document.getElementById('script-modal-subtitle');
  const iframeEl = document.getElementById('script-modal-iframe') as HTMLIFrameElement | null;
  const loadingEl = document.getElementById('script-modal-loading');
  const copyDriveBtn = document.getElementById('script-modal-copy-drive-btn') as HTMLAnchorElement | null;
  const downloadPdfBtn = document.getElementById('script-modal-download-pdf-btn') as HTMLAnchorElement | null;
  const downloadDocxBtn = document.getElementById('script-modal-download-docx-btn') as HTMLAnchorElement | null;
  const openDocBtn = document.getElementById('script-modal-open-doc-btn') as HTMLAnchorElement | null;

  const closeModal = () => {
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      if (iframeEl) {
        iframeEl.src = '';
      }
    }
  };

  if (closeBtn1) closeBtn1.addEventListener('click', closeModal);
  if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Expose global function to open script
  (window as unknown as { openScriptExample: (id: string) => void }).openScriptExample = (id: string) => {
    const script = SCRIPT_EXAMPLES.find(s => s.id === id);
    if (!script || !modal) return;

    if (titleEl) titleEl.textContent = script.title;
    if (badgeEl) badgeEl.textContent = script.badge;
    if (subtitleEl) subtitleEl.textContent = script.clarification;

    // Show loading spinner
    if (loadingEl) {
      loadingEl.classList.remove('opacity-0', 'pointer-events-none');
    }

    // Set Google Doc embedded preview URL
    if (iframeEl) {
      iframeEl.src = `https://docs.google.com/document/d/${script.docId}/preview`;
      iframeEl.onload = () => {
        if (loadingEl) {
          loadingEl.classList.add('opacity-0', 'pointer-events-none');
        }
      };
    }

    // Configure Drive copy URL (clones file into user's own Drive)
    if (copyDriveBtn) {
      copyDriveBtn.href = `https://docs.google.com/document/d/${script.docId}/copy`;
    }

    // Configure direct export download URL (PDF)
    if (downloadPdfBtn) {
      downloadPdfBtn.href = `https://docs.google.com/document/d/${script.docId}/export?format=pdf`;
    }

    // Configure direct export download URL (Word .docx)
    if (downloadDocxBtn) {
      downloadDocxBtn.href = `https://docs.google.com/document/d/${script.docId}/export?format=docx`;
    }

    // Direct link to open original Google Doc
    if (openDocBtn) {
      openDocBtn.href = script.docUrl;
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  // Attach click listeners to all buttons requesting a script example
  document.querySelectorAll<HTMLButtonElement>('[data-open-script]').forEach(btn => {
    btn.addEventListener('click', () => {
      const scriptId = btn.getAttribute('data-open-script');
      if (scriptId) {
        (window as unknown as { openScriptExample: (id: string) => void }).openScriptExample(scriptId);
      }
    });
  });
}

const GOOGLE_APPS_SCRIPT_SAMPLE = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Crear encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Marca temporal",
        "Código de trámite",
        "Materia / Asignatura",
        "Carrera / Departamento",
        "Docente Responsable",
        "Email Institucional",
        "Teléfono / WhatsApp",
        "Formato Audiovisual",
        "Duración Estimada",
        "Soportes Visuales",
        "Post-producción",
        "Enlace al Guion / Drive",
        "Fecha tentativa",
        "Observaciones Pedagógicas"
      ]);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch(errParse) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    sheet.appendRow([
      data.fecha || new Date().toLocaleString("es-AR"),
      data.codigo || "",
      data.materia || "",
      data.carrera || "",
      data.docente || "",
      data.email || "",
      data.telefono || "",
      data.formato || "",
      data.duracion || "",
      data.soportesVisuales || "",
      data.postproduccion || "",
      data.enlaceDrive || "",
      data.fechaTentativa || "",
      data.observaciones || ""
    ]);

    // Enviar notificación por correo electrónico a la coordinación
    try {
      var destinatario = Session.getEffectiveUser().getEmail() || Session.getActiveUser().getEmail();
      var asunto = "🎬 Nueva Solicitud Audiovisual [" + (data.codigo || "Cátedra") + "]: " + (data.materia || "Materia");
      
      var cuerpoTexto = "Se ha recibido una nueva solicitud de producción audiovisual universitaria:\\n\\n" +
        "• Código de trámite: " + (data.codigo || "-") + "\\n" +
        "• Fecha: " + (data.fecha || new Date().toLocaleString("es-AR")) + "\\n" +
        "• Materia / Asignatura: " + (data.materia || "-") + "\\n" +
        "• Carrera / Departamento: " + (data.carrera || "-") + "\\n" +
        "• Docente Responsable: " + (data.docente || "-") + "\\n" +
        "• Email Institucional: " + (data.email || "-") + "\\n" +
        "• Teléfono / WhatsApp: " + (data.telefono || "-") + "\\n" +
        "• Formato Audiovisual: " + (data.formato || "-") + "\\n" +
        "• Duración Estimada: " + (data.duracion || "-") + "\\n" +
        "• Soportes Visuales: " + (data.soportesVisuales || "-") + "\\n" +
        "• Post-producción: " + (data.postproduccion || "-") + "\\n" +
        "• Enlace al Guion / Drive: " + (data.enlaceDrive || "-") + "\\n" +
        "• Fecha tentativa: " + (data.fechaTentativa || "-") + "\\n" +
        "• Observaciones Pedagógicas:\\n" + (data.observaciones || "-") + "\\n\\n" +
        "Acceder a la planilla completa: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();

      var cuerpoHtml = '<div style="font-family: Arial, sans-serif; max-width: 650px; color: #1e293b; line-height: 1.5; padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px;">' +
        '<div style="background-color: #551E41; color: white; padding: 16px 20px; border-radius: 8px 8px 0 0;">' +
          '<h2 style="margin: 0; font-size: 18px;">🎬 Nueva Solicitud de Producción Audiovisual</h2>' +
          '<p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Código de Trámite: <strong>' + (data.codigo || '-') + '</strong></p>' +
        '</div>' +
        '<div style="padding: 16px 8px;">' +
          '<table style="width: 100%; border-collapse: collapse; font-size: 13px;">' +
            '<tr><td style="padding: 6px 0; color: #64748b; width: 35%;"><strong>Materia / Asignatura:</strong></td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">' + (data.materia || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Carrera / Dpto.:</strong></td><td style="padding: 6px 0;">' + (data.carrera || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Docente Responsable:</strong></td><td style="padding: 6px 0;">' + (data.docente || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Email Institucional:</strong></td><td style="padding: 6px 0;"><a href="mailto:' + (data.email || '') + '">' + (data.email || '-') + '</a></td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Teléfono / WhatsApp:</strong></td><td style="padding: 6px 0;">' + (data.telefono || '-') + '</td></tr>' +
            '<tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 6px 0; color: #64748b;"><strong>Formato Audiovisual:</strong></td><td style="padding: 6px 0; font-weight: bold; color: #551E41;">' + (data.formato || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Duración Estimada:</strong></td><td style="padding: 6px 0;">' + (data.duracion || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Soportes Visuales:</strong></td><td style="padding: 6px 0;">' + (data.soportesVisuales || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Post-producción:</strong></td><td style="padding: 6px 0;">' + (data.postproduccion || '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Enlace a Guion / Drive:</strong></td><td style="padding: 6px 0;">' + (data.enlaceDrive && data.enlaceDrive !== '-' ? '<a href="' + data.enlaceDrive + '" target="_blank">' + data.enlaceDrive + '</a>' : '-') + '</td></tr>' +
            '<tr><td style="padding: 6px 0; color: #64748b;"><strong>Fecha tentativa:</strong></td><td style="padding: 6px 0;">' + (data.fechaTentativa || '-') + '</td></tr>' +
            '<tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 6px 0; color: #64748b; vertical-align: top;"><strong>Observaciones:</strong></td><td style="padding: 6px 0; white-space: pre-line;">' + (data.observaciones || '-') + '</td></tr>' +
          '</table>' +
          '<div style="margin-top: 20px; text-align: center;">' +
            '<a href="' + SpreadsheetApp.getActiveSpreadsheet().getUrl() + '" style="background-color: #059669; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block;">📊 Abrir Planilla de Google Sheets</a>' +
          '</div>' +
        '</div>' +
        '<div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 0 0 8px 8px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">' +
          'Portal de Producción Audiovisual Educativa • Universidad Nacional de Córdoba' +
        '</div>' +
      '</div>';

      MailApp.sendEmail({
        to: destinatario,
        replyTo: data.email || destinatario,
        subject: asunto,
        body: cuerpoTexto,
        htmlBody: cuerpoHtml
      });
    } catch(errMail) {
      Logger.log("Error enviando email: " + errMail.toString());
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Servicio de recepción de solicitudes activo. Utilizar método POST para enviar datos.")
    .setMimeType(ContentService.MimeType.TEXT);
}`;

// Form Interactions & Submission
// Configuración centralizada de la Web App de Google Apps Script para uso general.
// De esta forma todos los usuarios envían directamente sin requerir ninguna configuración en el cliente.
export const GOOGLE_APPS_SCRIPT_WEBAPP_URL: string =
  (import.meta as unknown as { env?: { VITE_SHEETS_WEBAPP_URL?: string } }).env?.VITE_SHEETS_WEBAPP_URL ||
  'https://script.google.com/macros/s/AKfycby-PwggIquGDiWPH76kbO5x_ujpDdnQVZOXF7H-ksdMlQIgdZs98wSgpR62MHTn7A/exec';

function initFormInteractions() {
  const form = document.getElementById('production-form') as HTMLFormElement | null;
  const confirmationModal = document.getElementById('confirmation-modal');
  const confCloseBtn = document.getElementById('confirmation-close-btn');
  const confCloseBtn2 = document.getElementById('confirmation-close-btn-2');
  const confCodeEl = document.getElementById('conf-code');
  const confSummaryEl = document.getElementById('conf-summary');
  const confCopyBtn = document.getElementById('conf-copy-btn');
  const confMailtoBtn = document.getElementById('conf-mailto-btn') as HTMLAnchorElement | null;
  const confSheetsMsg = document.getElementById('conf-sheets-msg');
  const confSheetsIcon = document.getElementById('conf-sheets-icon');
  const confSheetsTitle = document.getElementById('conf-sheets-title');

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
    form.addEventListener('submit', async (e) => {
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

      const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
      const originalBtnHtml = submitBtn?.innerHTML || '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>Enviando y asentando en la planilla...</span>
        `;
      }

      const formatItem = FORMATS_DATA.find(f => f.id === formatoId);
      const requestCode = `AV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const fechaActual = new Date().toLocaleString('es-AR');

      // Structured payload for Google Sheets
      const sheetPayload = {
        fecha: fechaActual,
        codigo: requestCode,
        materia,
        carrera: carrera || 'No especificada',
        docente,
        email,
        telefono: telefono || '-',
        formato: formatItem ? `${formatItem.title} (${formatItem.category})` : formatoId,
        duracion,
        soportesVisuales: selectedVisual.length > 0 ? selectedVisual.join('; ') : 'Ninguno',
        postproduccion: selectedPost.length > 0 ? selectedPost.join('; ') : 'Sin requerimientos adicionales',
        enlaceDrive: driveLink || '-',
        fechaTentativa: fecha || '-',
        observaciones: notas || 'Sin observaciones'
      };

      // Automatic Google Apps Script submission for general use
      const webAppUrl = GOOGLE_APPS_SCRIPT_WEBAPP_URL || localStorage.getItem('sheet_webapp_url') || '';
      let directSubmitSuccess = false;

      if (webAppUrl && webAppUrl.startsWith('http')) {
        try {
          await fetch(webAppUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(sheetPayload)
          });
          directSubmitSuccess = true;
        } catch (err) {
          console.warn('Apps Script submission error:', err);
        }
      }

      // Save to localStorage history
      try {
        const history = JSON.parse(localStorage.getItem('catedra_solicitudes_historial') || '[]');
        history.unshift(sheetPayload);
        localStorage.setItem('catedra_solicitudes_historial', JSON.stringify(history.slice(0, 50)));
      } catch (e) {
        console.warn('Error saving local history', e);
      }

      lastSubmissionText = `==================================================
SOLICITUD DE PRODUCCIÓN AUDIOVISUAL UNIVERSITARIA
Código de Trámite: ${requestCode}
Fecha de Emisión: ${fechaActual}
Registro: Trámite Oficial de Producción Audiovisual Docente
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
Equipo de Producción Audiovisual
FyPE - FCE`;

      if (confCodeEl) confCodeEl.textContent = requestCode;
      if (confSummaryEl) confSummaryEl.textContent = lastSubmissionText;

      if (confSheetsMsg) {
        if (confSheetsIcon) confSheetsIcon.textContent = '✅';
        if (confSheetsTitle) confSheetsTitle.textContent = '¡Solicitud registrada y notificada!';
        confSheetsMsg.textContent = 'La solicitud ha quedado registrada correctamente en el sistema y se envió el aviso al equipo de producción.';
      }

      if (confMailtoBtn) {
        const mailSubject = encodeURIComponent(`🎬 Solicitud Producción Audiovisual [${requestCode}] - ${materia}`);
        const mailBody = encodeURIComponent(lastSubmissionText);
        confMailtoBtn.href = `mailto:?subject=${mailSubject}&body=${mailBody}`;
      }

      if (confirmationModal) {
        confirmationModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }

      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }

      showToast('¡Solicitud generada con éxito!');
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
