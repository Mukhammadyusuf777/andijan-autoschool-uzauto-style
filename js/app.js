/**
 * Andijan Premium Driving School — UzAuto Motors (chevrolet.uz) App Logic
 * Dual Language Support: Russian (Primary) & Uzbek
 */

let currentSlideIndex = 0;
let slideInterval = null;
let leafletMap = null;
let mapMarkers = [];
let currentCategoryFilter = 'all';

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  // Check persisted language, default to Russian ('ru') as primary
  const savedLang = localStorage.getItem('andijan_uzauto_lang') || 'ru';
  setLanguage(savedLang);

  // Init Hero Carousel Controls
  initHeroSlider();

  // Init Course Filter Listeners
  initCourseFilters();

  // Init Financial Calculator
  initCalculator();

  // Init Leaflet Interactive Map
  initBranchMap();

  // Init Modal Listeners
  initModalListeners();

  // Init Mobile Drawer
  initMobileDrawer();
});

/**
 * 1. LANGUAGE SWITCHER SYSTEM
 */
function setLanguage(lang) {
  UZAUTO_DATA.currentLang = lang;
  localStorage.setItem('andijan_uzauto_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Language Switcher Buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-[#0B2545]', 'text-white', 'font-bold');
      btn.classList.remove('text-slate-600', 'font-normal');
    } else {
      btn.classList.remove('bg-[#0B2545]', 'text-white', 'font-bold');
      btn.classList.add('text-slate-600', 'font-normal');
    }
  });

  // Update static UI elements by data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (UZAUTO_DATA.translations[key] && UZAUTO_DATA.translations[key][lang]) {
      el.textContent = UZAUTO_DATA.translations[key][lang];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (UZAUTO_DATA.translations[key] && UZAUTO_DATA.translations[key][lang]) {
      el.placeholder = UZAUTO_DATA.translations[key][lang];
    }
  });

  // Re-render Dynamic Sections
  updateHeroSlideDOM(currentSlideIndex);
  renderCourses();
  renderFleet();
  renderBranchesList();
  renderFaq();
  updateCalculatorDisplay();
}

/**
 * 2. HERO SLIDER — INSTRUCTORS ("Учителя вместо машин")
 * Autoplay: 3.5s (3500ms), Loop: true, pauseOnMouseEnter: true, 600ms ease-in-out
 */
const HERO_AUTOPLAY_DELAY = 3500;
let isHeroHovered = false;
let isSlideTransitioning = false;

function initHeroSlider() {
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const heroSection = document.getElementById('hero-slider');

  // Initial render
  updateHeroSlideDOM(currentSlideIndex);

  // Manual Controls: Click resets timer and navigates immediately
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      changeHeroSlide(-1, true);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      changeHeroSlide(1, true);
    });
  }

  // Hover Management: pause on enter, resume on leave
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
      isHeroHovered = true;
      pauseSlideTimer();
    });
    heroSection.addEventListener('mouseleave', () => {
      isHeroHovered = false;
      startSlideTimer();
    });
  }

  // Start continuous Autoplay
  startSlideTimer();
}

function startSlideTimer() {
  clearInterval(slideInterval);
  if (isHeroHovered) return;

  resetProgressBarAnimation();

  slideInterval = setInterval(() => {
    if (!isHeroHovered && !isSlideTransitioning) {
      changeHeroSlide(1, false);
    }
  }, HERO_AUTOPLAY_DELAY);
}

function pauseSlideTimer() {
  clearInterval(slideInterval);
  freezeProgressBar();
}

function resetProgressBarAnimation() {
  const bar = document.getElementById('hero-progress-bar');
  if (!bar) return;

  // Instant reset to 0% width without animation
  bar.classList.add('hero-progress-line-reset');
  bar.classList.remove('hero-progress-line');
  bar.style.width = '0%';

  // Force reflow
  void bar.offsetWidth;

  // Animate smoothly to 100% over 3500ms
  bar.classList.remove('hero-progress-line-reset');
  bar.classList.add('hero-progress-line');
  bar.style.width = '100%';
}

function freezeProgressBar() {
  const bar = document.getElementById('hero-progress-bar');
  if (!bar) return;

  const currentWidth = window.getComputedStyle(bar).width;
  bar.classList.add('hero-progress-line-reset');
  bar.classList.remove('hero-progress-line');
  bar.style.width = currentWidth;
}

/**
 * Slide navigation with 600ms ease-in-out transition & circular loop
 */
function changeHeroSlide(direction, isManual = false) {
  if (isSlideTransitioning) return;
  isSlideTransitioning = true;

  const leftCol = document.getElementById('hero-left-content');
  const rightCol = document.getElementById('hero-right-content');
  const totalSlides = UZAUTO_DATA.heroSlides.length;

  // Next target index with cyclical loop: true
  const nextIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;

  // If manually triggered, reset timer unless user is still hovering
  if (isManual) {
    if (!isHeroHovered) {
      startSlideTimer();
    } else {
      pauseSlideTimer();
    }
  }

  // STEP 1: Fade out & subtle slide out (300ms)
  if (leftCol && rightCol) {
    const outClass = direction >= 0 ? 'hero-slide-out-next' : 'hero-slide-out-prev';
    leftCol.classList.add(outClass);
    rightCol.classList.add(outClass);
  }

  setTimeout(() => {
    // STEP 2: Update content in DOM
    currentSlideIndex = nextIndex;
    updateHeroSlideDOM(currentSlideIndex);

    // Prepare incoming slide offset
    if (leftCol && rightCol) {
      leftCol.className = 'lg:col-span-7 flex flex-col justify-center hero-transition-element';
      rightCol.className = 'lg:col-span-5 flex flex-col items-center justify-center relative hero-transition-element';

      const prepClass = direction >= 0 ? 'hero-slide-prep-next' : 'hero-slide-prep-prev';
      leftCol.classList.add(prepClass);
      rightCol.classList.add(prepClass);

      // Force reflow
      void leftCol.offsetWidth;
      void rightCol.offsetWidth;

      // STEP 3: Smoothly animate into view (remaining 300ms)
      leftCol.classList.remove(prepClass);
      rightCol.classList.remove(prepClass);
      leftCol.classList.add('hero-slide-active');
      rightCol.classList.add('hero-slide-active');
    }

    setTimeout(() => {
      // Clean up active classes
      if (leftCol && rightCol) {
        leftCol.classList.remove('hero-slide-active');
        rightCol.classList.remove('hero-slide-active');
      }
      isSlideTransitioning = false;

      // Restart progress bar if autoplay is running
      if (!isHeroHovered && !isManual) {
        resetProgressBarAnimation();
      }
    }, 300);

  }, 300);
}

function updateHeroSlideDOM(index) {
  const lang = UZAUTO_DATA.currentLang;
  const slide = UZAUTO_DATA.heroSlides[index];
  if (!slide) return;

  const total = UZAUTO_DATA.heroSlides.length;
  const slideCounterEl = document.getElementById('hero-slide-counter');
  if (slideCounterEl) {
    const currentNum = String(index + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');
    slideCounterEl.textContent = `${currentNum} / ${totalNum}`;
  }

  // Instructor Info
  const nameEl = document.getElementById('hero-instructor-name');
  const positionEl = document.getElementById('hero-instructor-position');
  const taglineEl = document.getElementById('hero-instructor-tagline');
  const expEl = document.getElementById('hero-instructor-exp');
  const gradsEl = document.getElementById('hero-instructor-graduates');
  const specEl = document.getElementById('hero-instructor-specialty');
  const photoEl = document.getElementById('hero-instructor-photo');

  if (nameEl) nameEl.textContent = slide.instructorName[lang];
  if (positionEl) positionEl.textContent = slide.position[lang];
  if (taglineEl) taglineEl.textContent = slide.tagline[lang];
  if (expEl) expEl.textContent = slide.experience[lang];
  if (gradsEl) gradsEl.textContent = slide.graduates;
  if (specEl) specEl.textContent = slide.specialty[lang];
  if (photoEl) {
    photoEl.src = slide.image;
    photoEl.alt = slide.instructorName[lang];
  }

  // Conditions Grid (Chevrolet Finance Promo Blocks)
  const conditionsContainer = document.getElementById('hero-conditions-container');
  if (conditionsContainer) {
    conditionsContainer.innerHTML = slide.conditions.map(cond => `
      <div class="condition-card">
        <div class="flex items-baseline gap-2 mb-1">
          <span class="text-2xl sm:text-3xl font-black text-[#DCA626] tracking-tight">${cond.value}</span>
          ${cond.unit ? `<span class="text-xs font-bold text-slate-300 uppercase">${cond.unit[lang]}</span>` : ''}
        </div>
        <div class="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-1">
          ${cond.label[lang]}
        </div>
        <div class="text-[11px] sm:text-xs text-slate-300 leading-snug font-normal">
          ${cond.desc[lang]}
        </div>
      </div>
    `).join('');
  }
}

/**
 * 3. COURSES SECTION (Adapted like Chevrolet Model Lineup)
 */
function initCourseFilters() {
  const filterBtns = document.querySelectorAll('.course-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#0B2545]', 'text-white');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      btn.classList.add('bg-[#0B2545]', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
      currentCategoryFilter = btn.dataset.category;
      renderCourses();
    });
  });
}

function renderCourses() {
  const lang = UZAUTO_DATA.currentLang;
  const container = document.getElementById('courses-grid');
  if (!container) return;

  const filtered = currentCategoryFilter === 'all'
    ? UZAUTO_DATA.courses
    : UZAUTO_DATA.courses.filter(c => c.categoryKey === currentCategoryFilter);

  const t = UZAUTO_DATA.translations;

  container.innerHTML = filtered.map(course => `
    <div class="dealer-card flex flex-col justify-between overflow-hidden group">
      <!-- Top Image with Category Badge -->
      <div class="relative bg-slate-100 h-56 overflow-hidden flex items-center justify-center p-4">
        <img 
          src="${course.image}" 
          alt="${course.title[lang]}" 
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded"
          loading="lazy"
        />
        <div class="absolute top-3 left-3">
          <span class="dealer-badge">${course.badge[lang]}</span>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-black text-[#0B2545] tracking-tight uppercase mb-2">
            ${course.title[lang]}
          </h3>
          <p class="text-xs text-slate-600 mb-5 leading-relaxed line-clamp-2">
            ${course.shortDesc[lang]}
          </p>

          <!-- Specifications Table (Dealer Spec style) -->
          <div class="grid grid-cols-2 gap-2.5 pb-5 mb-5 border-b border-slate-100 text-xs">
            ${course.specs.map(spec => `
              <div class="flex items-center gap-2 text-slate-700">
                <i class="fas ${spec.icon} text-[#DCA626] text-xs w-4 text-center"></i>
                <span class="font-medium truncate">${spec.value[lang]}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Price & Financial Terms Block -->
        <div>
          <div class="bg-slate-50 border border-slate-200/80 p-3.5 rounded mb-5">
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>${t.label_full_price[lang]}</span>
              <span class="font-extrabold text-[#0B2545] text-sm">${course.priceFormatted[lang]}</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-amber-700 font-semibold">${t.label_installment_from[lang]}</span>
              <span class="font-black text-[#0B2545]">${course.installmentMonthly[lang]}</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-2">
            <button onclick="openCourseDetails('${course.id}')" class="btn-uzauto-outline py-2.5 text-xs">
              ${t.btn_details[lang]}
            </button>
            <button onclick="openBookingModal('${course.id}')" class="btn-uzauto-gold py-2.5 text-xs">
              ${t.btn_enroll[lang]}
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 4. FINANCIAL / INSTALLMENT CALCULATOR (UzAuto Motors Loan Style)
 */
function initCalculator() {
  const categorySelect = document.getElementById('calc-category-select');
  if (categorySelect) {
    categorySelect.addEventListener('change', updateCalculatorDisplay);
  }

  document.querySelectorAll('input[name="calc-down"]').forEach(input => {
    input.addEventListener('change', updateCalculatorDisplay);
  });

  document.querySelectorAll('input[name="calc-term"]').forEach(input => {
    input.addEventListener('change', updateCalculatorDisplay);
  });

  const calcOrderBtn = document.getElementById('calc-order-submit-btn');
  if (calcOrderBtn) {
    calcOrderBtn.addEventListener('click', () => {
      const selectedCourseId = document.getElementById('calc-category-select')?.value || 'cat_b_cobalt';
      openBookingModal(selectedCourseId);
    });
  }
}

function updateCalculatorDisplay() {
  const lang = UZAUTO_DATA.currentLang;
  const categorySelect = document.getElementById('calc-category-select');
  if (!categorySelect) return;

  // Repopulate select if empty or language changed
  const currentValue = categorySelect.value || 'cat_b_cobalt';
  categorySelect.innerHTML = UZAUTO_DATA.courses.map(c => `
    <option value="${c.id}" ${c.id === currentValue ? 'selected' : ''}>
      ${c.title[lang]} — ${c.priceFormatted[lang]}
    </option>
  `).join('');

  const selectedCourse = UZAUTO_DATA.courses.find(c => c.id === categorySelect.value) || UZAUTO_DATA.courses[0];
  const totalPrice = selectedCourse.priceNum;

  // Selected Down Payment Percent
  const downPaymentRadio = document.querySelector('input[name="calc-down"]:checked');
  const downPercent = downPaymentRadio ? parseInt(downPaymentRadio.value, 10) : 0;
  const downAmount = Math.round((totalPrice * downPercent) / 100);

  // Selected Term in Months
  const termRadio = document.querySelector('input[name="calc-term"]:checked');
  const termMonths = termRadio ? parseInt(termRadio.value, 10) : 3;

  // Monthly Payment with 0% Overpayment
  const remainingSum = totalPrice - downAmount;
  const monthlyPayment = Math.round(remainingSum / termMonths);

  // Format Helper
  const fmt = (num) => new Intl.NumberFormat('ru-RU').format(num) + (lang === 'ru' ? ' сум' : " so'm");

  const totalEl = document.getElementById('calc-res-total');
  const downEl = document.getElementById('calc-res-down');
  const monthlyEl = document.getElementById('calc-res-monthly');
  const overpayEl = document.getElementById('calc-res-overpay');

  if (totalEl) totalEl.textContent = fmt(totalPrice);
  if (downEl) downEl.textContent = fmt(downAmount);
  if (monthlyEl) monthlyEl.textContent = fmt(monthlyPayment);
  if (overpayEl) overpayEl.textContent = UZAUTO_DATA.translations.calc_overpayment_value[lang];
}

/**
 * 5. FLEET SHOWCASE
 */
function renderFleet() {
  const lang = UZAUTO_DATA.currentLang;
  const container = document.getElementById('fleet-grid');
  if (!container) return;

  container.innerHTML = UZAUTO_DATA.fleet.map(car => `
    <div class="dealer-card p-6 flex flex-col justify-between">
      <div>
        <div class="relative h-48 bg-slate-100 rounded overflow-hidden mb-4">
          <img src="${car.image}" alt="${car.name}" class="w-full h-full object-cover" loading="lazy" />
          <span class="absolute top-2 right-2 bg-[#0B2545] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
            ${car.category}
          </span>
        </div>
        <h4 class="text-base font-black text-[#0B2545] uppercase mb-1">${car.name}</h4>
        <div class="text-xs font-semibold text-[#DCA626] mb-3">${car.transmission}</div>
        <ul class="space-y-1.5 text-xs text-slate-600">
          ${car.features[lang].map(feat => `
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-[#DCA626] text-[11px] mt-0.5"></i>
              <span>${feat}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="mt-5 pt-4 border-t border-slate-100">
        <button onclick="openBookingModal()" class="w-full btn-uzauto-outline py-2 text-xs">
          ${UZAUTO_DATA.translations.cta_test_drive[lang]}
        </button>
      </div>
    </div>
  `).join('');
}

/**
 * 6. ANDIJAN BRANCHES & INTERACTIVE LEAFLET MAP
 */
function initBranchMap() {
  const mapElement = document.getElementById('branches-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Center on Andijan City
  leafletMap = L.map('branches-map').setView([40.7821, 72.3442], 12);

  // High quality clean light OSM tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> | Andijan Premium',
    maxZoom: 19
  }).addTo(leafletMap);

  // Add markers
  UZAUTO_DATA.branches.forEach((branch, idx) => {
    const lang = UZAUTO_DATA.currentLang;
    const customIcon = L.divIcon({
      className: 'custom-leaflet-icon-wrapper',
      html: `<div class="custom-leaflet-marker"><i class="fas fa-car-side"></i></div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
      popupAnchor: [0, -20]
    });

    const marker = L.marker(branch.coords, { icon: customIcon }).addTo(leafletMap);

    marker.bindPopup(`
      <div class="p-2 font-sans">
        <div class="font-extrabold text-[#0B2545] text-sm uppercase mb-1">${branch.name[lang]}</div>
        <div class="text-xs text-slate-600 mb-1">${branch.address[lang]}</div>
        <div class="text-[11px] text-slate-500 mb-2">${branch.landmark[lang]}</div>
        <a href="tel:${branch.phone}" class="text-xs font-bold text-[#DCA626] hover:underline">${branch.phone}</a>
      </div>
    `);

    mapMarkers.push({ id: branch.id, marker });
  });
}

function renderBranchesList() {
  const lang = UZAUTO_DATA.currentLang;
  const container = document.getElementById('branches-list-container');
  if (!container) return;

  container.innerHTML = UZAUTO_DATA.branches.map((b, idx) => `
    <div 
      id="branch-item-${b.id}" 
      onclick="focusBranchOnMap('${b.id}', ${b.coords[0]}, ${b.coords[1]})"
      class="dealer-card p-5 cursor-pointer hover:border-[#0B2545] transition-colors ${idx === 0 ? 'branch-card-active' : ''}"
    >
      <div class="flex items-start justify-between mb-2">
        <h4 class="font-extrabold text-sm text-[#0B2545] uppercase">${b.name[lang]}</h4>
        <span class="text-[11px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded">№${idx + 1}</span>
      </div>
      <p class="text-xs text-slate-700 font-medium mb-1.5 flex items-center gap-1.5">
        <i class="fas fa-map-marker-alt text-[#DCA626] text-xs"></i>
        ${b.address[lang]}
      </p>
      <p class="text-[11px] text-slate-500 mb-3">${b.landmark[lang]}</p>
      <div class="flex flex-wrap items-center justify-between text-xs pt-3 border-t border-slate-100 gap-2">
        <a href="tel:${b.phone}" class="font-bold text-[#0B2545] flex items-center gap-1.5 hover:text-[#DCA626]">
          <i class="fas fa-phone-alt text-[10px] text-[#DCA626]"></i>
          ${b.phone}
        </a>
        <span class="text-[11px] text-slate-500">${b.hours[lang]}</span>
      </div>
    </div>
  `).join('');
}

function focusBranchOnMap(branchId, lat, lng) {
  if (!leafletMap) return;

  // Highlight selected card
  document.querySelectorAll('[id^="branch-item-"]').forEach(el => {
    el.classList.remove('branch-card-active');
  });
  const activeCard = document.getElementById(`branch-item-${branchId}`);
  if (activeCard) activeCard.classList.add('branch-card-active');

  leafletMap.flyTo([lat, lng], 15, { duration: 1.2 });

  const target = mapMarkers.find(m => m.id === branchId);
  if (target && target.marker) {
    setTimeout(() => {
      target.marker.openPopup();
    }, 1200);
  }
}

/**
 * 7. FAQ ACCORDION
 */
function renderFaq() {
  const lang = UZAUTO_DATA.currentLang;
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  container.innerHTML = UZAUTO_DATA.faq.map((item, idx) => `
    <div class="faq-accordion-item overflow-hidden">
      <button 
        onclick="toggleFaq(${idx})" 
        class="w-full text-left p-5 font-bold text-sm text-[#0B2545] flex items-center justify-between gap-4 focus:outline-none"
      >
        <span>${item.q[lang]}</span>
        <i id="faq-icon-${idx}" class="fas fa-chevron-down text-xs text-[#DCA626] transition-transform duration-300"></i>
      </button>
      <div id="faq-body-${idx}" class="hidden px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
        ${item.a[lang]}
      </div>
    </div>
  `).join('');
}

function toggleFaq(index) {
  const body = document.getElementById(`faq-body-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!body) return;

  const isHidden = body.classList.contains('hidden');
  if (isHidden) {
    body.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  } else {
    body.classList.add('hidden');
    if (icon) icon.classList.remove('rotate-180');
  }
}

/**
 * 8. MODAL ACTIONS (Booking & Course Details)
 */
function initModalListeners() {
  const closeBtn = document.getElementById('booking-modal-close');
  const modalOverlay = document.getElementById('booking-modal');
  const bookingForm = document.getElementById('booking-form');

  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeBookingModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeCourseDetailsModal();
    }
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleBookingSubmit();
    });
  }
}

function openBookingModal(preselectedCourseId) {
  const modal = document.getElementById('booking-modal');
  const courseSelect = document.getElementById('modal-course-select');
  const branchSelect = document.getElementById('modal-branch-select');
  const lang = UZAUTO_DATA.currentLang;

  // Populate courses options
  if (courseSelect) {
    courseSelect.innerHTML = UZAUTO_DATA.courses.map(c => `
      <option value="${c.id}" ${c.id === preselectedCourseId ? 'selected' : ''}>
        ${c.title[lang]} (${c.priceFormatted[lang]})
      </option>
    `).join('');
  }

  // Populate branch options
  if (branchSelect) {
    branchSelect.innerHTML = UZAUTO_DATA.branches.map(b => `
      <option value="${b.id}">
        ${b.name[lang]} — ${b.address[lang]}
      </option>
    `).join('');
  }

  // Reset state
  const formBox = document.getElementById('modal-form-box');
  const successBox = document.getElementById('modal-success-box');
  if (formBox) formBox.classList.remove('hidden');
  if (successBox) successBox.classList.add('hidden');

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleBookingSubmit() {
  const formBox = document.getElementById('modal-form-box');
  const successBox = document.getElementById('modal-success-box');

  if (formBox) formBox.classList.add('hidden');
  if (successBox) successBox.classList.remove('hidden');
}

function openCourseDetails(courseId) {
  const lang = UZAUTO_DATA.currentLang;
  const course = UZAUTO_DATA.courses.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('course-details-modal');
  const content = document.getElementById('course-details-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="relative bg-slate-100 h-64 rounded-t overflow-hidden">
      <img src="${course.image}" alt="${course.title[lang]}" class="w-full h-full object-cover" />
      <span class="absolute top-4 left-4 dealer-badge">${course.badge[lang]}</span>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-black text-[#0B2545] uppercase mb-2">${course.title[lang]}</h3>
      <p class="text-sm text-slate-600 mb-6 leading-relaxed">${course.shortDesc[lang]}</p>

      <div class="grid grid-cols-2 gap-4 mb-6 bg-slate-50 p-4 rounded border border-slate-200">
        ${course.specs.map(spec => `
          <div>
            <div class="text-[11px] uppercase text-slate-400 font-bold mb-0.5">${spec.name[lang]}</div>
            <div class="text-sm font-extrabold text-[#0B2545]">${spec.value[lang]}</div>
          </div>
        `).join('')}
      </div>

      <div class="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
        <div>
          <div class="text-xs text-slate-500">${UZAUTO_DATA.translations.label_full_price[lang]}</div>
          <div class="text-2xl font-black text-[#0B2545]">${course.priceFormatted[lang]}</div>
        </div>
        <div class="text-right">
          <div class="text-xs text-amber-700 font-bold">${course.installmentMonthly[lang]}</div>
          <div class="text-[11px] text-slate-400">${course.installmentDetail[lang]}</div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="closeCourseDetailsModal()" class="flex-1 btn-uzauto-outline py-3 text-xs">
          ${UZAUTO_DATA.translations.btn_close[lang]}
        </button>
        <button onclick="closeCourseDetailsModal(); openBookingModal('${course.id}');" class="flex-1 btn-uzauto-gold py-3 text-xs">
          ${UZAUTO_DATA.translations.btn_enroll[lang]}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCourseDetailsModal() {
  const modal = document.getElementById('course-details-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

/**
 * 9. MOBILE NAVIGATION DRAWER
 */
function initMobileDrawer() {
  const openBtn = document.getElementById('mobile-drawer-open');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');

  if (openBtn && drawer) {
    openBtn.addEventListener('click', () => drawer.classList.remove('translate-x-full'));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.add('translate-x-full'));
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.add('translate-x-full');
    });
  });
}

// Global quick scrolling helpers
function scrollToCourses() {
  document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
}
function scrollToCalculator() {
  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
}
function scrollToBranches() {
  document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
}
