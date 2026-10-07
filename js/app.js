/**
 * TORQ - PREMIER VEHICLE & RIDE MARKETPLACE
 * Core Application Engine & State Architecture
 * Vanilla JavaScript (ES6+)
 */

'use strict';

/* ==========================================================================
   1. SEED DATA & LOCALSTORAGE STORE INITIALIZATION
   ========================================================================== */

const SEED_USERS = [
  {
    name: "Alex 'Apex' Mercer",
    email: "rider@torq.com",
    password: "Rider@123",
    role: "user",
    phone: "+1 (512) 890-4421",
    city: "Austin, TX",
    avatar: "images/rider-1.webp",
    memberTier: "Apex TORQ Member",
    joinedDate: "October 2024",
    status: "active"
  },
  {
    name: "Marshal Kane",
    email: "admin@torq.com",
    password: "Admin@123",
    role: "admin",
    phone: "+1 (800) 867-7834",
    city: "Austin, TX (HQ)",
    avatar: "images/rider-3.webp",
    memberTier: "TORQ Chief Admin",
    joinedDate: "January 2024",
    status: "active"
  }
];

const INITIAL_LISTINGS = [
  {
    id: 1,
    title: "2023 Ducati Panigale V4 S",
    category: "motorcycle",
    type: "sport",
    brand: "Ducati",
    year: 2023,
    price: 24900,
    km: 4200,
    engine: "1,103 cc Desmosedici Stradale",
    power: "214 HP",
    torque: "124 Nm",
    topSpeed: "299+ km/h",
    accel: "3.1s",
    city: "Austin, TX",
    badge: "Verified",
    badgeType: "badge-verified",
    image: "images/bike-sport.webp",
    ownerEmail: "rider@torq.com",
    status: "approved",
    featured: true,
    inspectionScore: 98,
    description: "Flawlessly maintained Ducati Panigale V4 S in pristine condition. Fitted with titanium Akrapovic exhaust, carbon-fibre winglets, electronic Ohlins NPX/TTX suspension, and Brembo Stylema calipers. Clean title, zero track drops, and all scheduled service logs verified by TORQ marshals."
  },
  {
    id: 2,
    title: "2022 Harley-Davidson Low Rider S",
    category: "motorcycle",
    type: "cruiser",
    brand: "Harley-Davidson",
    year: 2022,
    price: 17500,
    km: 6800,
    engine: "1,923 cc Milwaukee-Eight 117",
    power: "105 HP",
    torque: "168 Nm",
    topSpeed: "190 km/h",
    accel: "4.0s",
    city: "Denver, CO",
    badge: "Featured",
    badgeType: "badge-featured",
    image: "images/bike-cruiser.webp",
    ownerEmail: "seller2@torq.com",
    status: "approved",
    featured: true,
    inspectionScore: 96,
    description: "Deep rumble cruiser with massive low-end torque. Upgraded Bassani 2-into-1 pipe, moto handlebars with 6-inch risers, cruise control, inverted front forks, and dual disc front brakes. Excellent highway cruiser and weekend canyon rumbler."
  },
  {
    id: 3,
    title: "2024 BMW R 1250 GS Adventure",
    category: "motorcycle",
    type: "adventure",
    brand: "BMW",
    year: 2024,
    price: 21800,
    km: 8900,
    engine: "1,254 cc Boxer Twin ShiftCam",
    power: "136 HP",
    torque: "143 Nm",
    topSpeed: "215 km/h",
    accel: "3.6s",
    city: "Seattle, WA",
    badge: "Verified",
    badgeType: "badge-verified",
    image: "images/bike-adventure.webp",
    ownerEmail: "seller3@torq.com",
    status: "approved",
    featured: true,
    inspectionScore: 99,
    description: "The undisputed King of Adventure. Triple Black Edition with aluminium pannier set, electronic Dynamic ESA suspension, heated grips and dual seats, navigation mount, and auxiliary LED spotlights. Ready to cross continents immediately."
  },
  {
    id: 4,
    title: "2023 KTM 1290 Super Duke R EVO",
    category: "motorcycle",
    type: "naked",
    brand: "KTM",
    year: 2023,
    price: 18200,
    km: 3100,
    engine: "1,301 cc 75° V-Twin",
    power: "180 HP",
    torque: "140 Nm",
    topSpeed: "285 km/h",
    accel: "3.2s",
    city: "Los Angeles, CA",
    badge: "Verified",
    badgeType: "badge-verified",
    image: "images/bike-naked.webp",
    ownerEmail: "seller4@torq.com",
    status: "approved",
    featured: true,
    inspectionScore: 97,
    description: "Known affectionately as 'The Beast'. Equipped with Gen 2 semi-active WP APEX suspension with 5 damping modes, Quickshifter+, track pack with wheelie control off, and custom bar-end mirrors. Insane power-to-weight ratio."
  },
  {
    id: 5,
    title: "2023 Yamaha TMAX Tech MAX 560",
    category: "scooter",
    type: "scooter",
    brand: "Yamaha",
    year: 2023,
    price: 11400,
    km: 5400,
    engine: "562 cc Twin-Cylinder DOHC",
    power: "47 HP",
    torque: "55 Nm",
    topSpeed: "165 km/h",
    accel: "5.8s",
    city: "Miami, FL",
    badge: "Verified",
    badgeType: "badge-verified",
    image: "images/scooter-maxi.webp",
    ownerEmail: "seller5@torq.com",
    status: "approved",
    featured: false,
    inspectionScore: 95,
    description: "The luxury sports touring maxi-scooter. Features electric windscreen, heated grips & heated seat, cruise control, keyless Smart Key system, and full TFT connected navigation. Supreme comfort for city traffic and long coastal jaunts."
  },
  {
    id: 6,
    title: "2022 Vespa GTS 300 Super Sport",
    category: "scooter",
    type: "scooter",
    brand: "Vespa",
    year: 2022,
    price: 7600,
    km: 2800,
    engine: "278 cc High Performance Engine",
    power: "24 HP",
    torque: "26 Nm",
    topSpeed: "130 km/h",
    accel: "7.9s",
    city: "San Francisco, CA",
    badge: "Featured",
    badgeType: "badge-featured",
    image: "images/scooter-retro.webp",
    ownerEmail: "seller6@torq.com",
    status: "approved",
    featured: false,
    inspectionScore: 99,
    description: "Timeless Italian steel body with athletic matte accents. Fitted with rear chrome folding luggage rack, LED lighting, ABS/ASR traction control, and Bluetooth Vespa MIA smartphone connectivity. Turn heads on every boulevard."
  },
  {
    id: 7,
    title: "2024 Zero SR/F Premium Hyper-EV",
    category: "electric",
    type: "electric",
    brand: "Zero Motorcycles",
    year: 2024,
    price: 20400,
    km: 1900,
    engine: "Z-Force 75-10 Motor (17.3 kWh)",
    power: "110 HP",
    torque: "190 Nm (Instant)",
    topSpeed: "200 km/h",
    accel: "3.3s",
    city: "San Jose, CA",
    badge: "Electric Supercharged",
    badgeType: "badge-electric",
    image: "images/bike-electric.webp",
    ownerEmail: "seller7@torq.com",
    status: "approved",
    featured: true,
    inspectionScore: 100,
    description: "Next-generation electric hyper-naked bike. Delivers massive instant electric torque with zero clutch or gear shifts. Cypher III+ operating system, Level 2 rapid charging, 227 km city range, and regenerative regenerative braking."
  },
  {
    id: 8,
    title: "2024 Ather 450 Apex Smart EV",
    category: "electric",
    type: "electric",
    brand: "Ather",
    year: 2024,
    price: 4800,
    km: 1200,
    engine: "7.0 kW PMSM Motor (3.7 kWh)",
    power: "9.4 HP",
    torque: "26 Nm (Instant)",
    topSpeed: "100 km/h",
    accel: "2.9s (0-40 km/h)",
    city: "San Diego, CA",
    badge: "Smart EV",
    badgeType: "badge-electric",
    image: "images/scooter-electric.webp",
    ownerEmail: "seller8@torq.com",
    status: "approved",
    featured: false,
    inspectionScore: 98,
    description: "Futuristic connected electric scooter featuring Warp+ throttle mode, Magic Twist regenerative braking without touching physical brakes, Google Maps navigation on a 7-inch touchscreen, and auto-hold hill assist."
  },
  {
    id: 9,
    title: "2024 Triumph Speed Triple 1200 RS",
    category: "motorcycle",
    type: "naked",
    brand: "Triumph",
    year: 2024,
    price: 18900,
    km: 2400,
    engine: "1,160 cc Triple-Cylinder DOHC",
    power: "180 HP",
    torque: "125 Nm",
    topSpeed: "270 km/h",
    accel: "3.0s",
    city: "San Francisco, CA",
    badge: "Verified",
    badgeType: "badge-verified",
    image: "images/bike-triumph.webp",
    ownerEmail: "seller9@torq.com",
    status: "approved",
    featured: true,
    inspectionScore: 99,
    description: "The ultimate hyper-naked roadster. Features Öhlins Smart EC2.0 semi-active suspension, Brembo Stylema brakes, carbon fibre front mudguard, Triumph Shift Assist bidirectional quickshifter, and 5-inch TFT display."
  }
];

const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Alpine Switchback Run",
    date: "OCT 24, 2026",
    route: "Rocky Mountain Pass • 185 km",
    riders: 42,
    maxRiders: 60,
    image: "images/event-1.webp",
    difficulty: "Intermediate",
    desc: "A thrilling high-altitude group climb through twisting alpine hairpins, sweeping scenic valleys, and mountain coffee stops."
  },
  {
    id: 2,
    title: "Midnight Neon City Cruise",
    date: "NOV 02, 2026",
    route: "Downtown Skyline & Riverfront • 65 km",
    riders: 88,
    maxRiders: 100,
    image: "images/event-2.webp",
    difficulty: "All Skill Levels",
    desc: "Experience the city lights in a massive synchronized formation ride. Petrol & electric riders welcome. Post-ride BBQ at Hive Pit HQ."
  },
  {
    id: 3,
    title: "Apex Masterclass Track Day",
    date: "NOV 15, 2026",
    route: "Laguna Seca Raceway • Track Day",
    riders: 28,
    maxRiders: 35,
    image: "images/event-3.webp",
    difficulty: "Advanced / Track",
    desc: "Full open pit lane access with professional telemetry analysis, tire warming bays, and one-on-one coaching with certified racers."
  }
];

// Initialize Storage Store
function initLocalStorage() {
  if (!localStorage.getItem('torq_users') && !localStorage.getItem('torquehive_users')) {
    localStorage.setItem('torq_users', JSON.stringify(SEED_USERS));
  }
  
  let existingListings = null;
  try {
    const raw = localStorage.getItem('torq_listings') || localStorage.getItem('torquehive_listings');
    if (raw) existingListings = JSON.parse(raw);
  } catch(e) {}

  if (!existingListings || !Array.isArray(existingListings) || existingListings.length === 0) {
    localStorage.setItem('torq_listings', JSON.stringify(INITIAL_LISTINGS));
  } else {
    let updated = false;
    INITIAL_LISTINGS.forEach(initItem => {
      const match = existingListings.find(l => l.id === initItem.id);
      if (!match) {
        existingListings.push(initItem);
        updated = true;
      } else if (match.image !== initItem.image) {
        match.image = initItem.image;
        updated = true;
      }
    });
    if (updated) {
      localStorage.setItem('torq_listings', JSON.stringify(existingListings));
    }
  }
  let existingEvents = null;
  try {
    const rawEvents = localStorage.getItem('torq_events') || localStorage.getItem('torquehive_events');
    if (rawEvents) existingEvents = JSON.parse(rawEvents);
  } catch(e) {}

  if (!existingEvents || !Array.isArray(existingEvents) || existingEvents.length === 0) {
    localStorage.setItem('torq_events', JSON.stringify(INITIAL_EVENTS));
  } else {
    let eventsUpdated = false;
    INITIAL_EVENTS.forEach(initEvt => {
      const match = existingEvents.find(e => e.id === initEvt.id);
      if (!match) {
        existingEvents.push(initEvt);
        eventsUpdated = true;
      } else if (match.image !== initEvt.image) {
        match.image = initEvt.image;
        eventsUpdated = true;
      }
    });
    if (eventsUpdated) {
      localStorage.setItem('torq_events', JSON.stringify(existingEvents));
    }
  }
  if (!localStorage.getItem('torq_wishlist') && !localStorage.getItem('torquehive_wishlist')) {
    localStorage.setItem('torq_wishlist', JSON.stringify([1, 3]));
  }
  if (!localStorage.getItem('torq_testrides') && !localStorage.getItem('torquehive_testrides')) {
    localStorage.setItem('torq_testrides', JSON.stringify([
      {
        id: 101,
        bikeId: 1,
        bikeTitle: "2023 Ducati Panigale V4 S",
        userEmail: "rider@torq.com",
        date: "2026-10-18",
        time: "14:00",
        type: "Doorstep Delivery",
        status: "confirmed"
      }
    ]));
  }
  if (!localStorage.getItem('torq_enquiries') && !localStorage.getItem('torquehive_enquiries')) {
    localStorage.setItem('torq_enquiries', JSON.stringify([
      {
        id: 201,
        bikeId: 3,
        bikeTitle: "2024 BMW R 1250 GS Adventure",
        name: "Elena Rostova",
        email: "elena@test.com",
        phone: "+1 (555) 234-5678",
        message: "Is the aluminium top box included in the listed price?",
        status: "Contacted",
        date: "2026-10-06"
      }
    ]));
  }
}

initLocalStorage();

// State Helpers
const Store = {
  getUsers: () => JSON.parse(localStorage.getItem('torq_users') || localStorage.getItem('torquehive_users') || '[]'),
  setUsers: (data) => localStorage.setItem('torq_users', JSON.stringify(data)),
  
  getListings: () => JSON.parse(localStorage.getItem('torq_listings') || localStorage.getItem('torquehive_listings') || '[]'),
  setListings: (data) => localStorage.setItem('torq_listings', JSON.stringify(data)),
  
  getEvents: () => JSON.parse(localStorage.getItem('torq_events') || localStorage.getItem('torquehive_events') || '[]'),
  setEvents: (data) => localStorage.setItem('torq_events', JSON.stringify(data)),
  
  getWishlist: () => JSON.parse(localStorage.getItem('torq_wishlist') || localStorage.getItem('torquehive_wishlist') || '[]'),
  setWishlist: (data) => localStorage.setItem('torq_wishlist', JSON.stringify(data)),

  getTestRides: () => JSON.parse(localStorage.getItem('torq_testrides') || localStorage.getItem('torquehive_testrides') || '[]'),
  setTestRides: (data) => localStorage.setItem('torq_testrides', JSON.stringify(data)),

  getEnquiries: () => JSON.parse(localStorage.getItem('torq_enquiries') || localStorage.getItem('torquehive_enquiries') || '[]'),
  setEnquiries: (data) => localStorage.setItem('torq_enquiries', JSON.stringify(data)),

  getSession: () => JSON.parse(localStorage.getItem('torq_session') || localStorage.getItem('torquehive_session') || 'null'),
  setSession: (user) => localStorage.setItem('torq_session', JSON.stringify(user)),
  clearSession: () => {
    localStorage.removeItem('torq_session');
    localStorage.removeItem('torquehive_session');
  }
};

/* ==========================================================================
   2. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg class="toast-icon success" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  } else if (type === 'danger') {
    iconSvg = `<svg class="toast-icon danger" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon info" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove after 3.8s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3800);
}

/* ==========================================================================
   3. TACHOMETER PRELOADER & INITIAL ANIMATION
   ========================================================================== */
function setupPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const fillArc = preloader.querySelector('.tacho-fill-arc');
  const rpmVal = preloader.querySelector('.tacho-rpm-val');
  const skipBtn = preloader.querySelector('.preloader-skip');

  let currentRpm = 0;
  const targetRpm = 9200;
  let startTime = null;
  const duration = 1200; // 1.2s smooth rev-up

  function dismiss() {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      initOdometerCounters();
    }, 600);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', dismiss);
  }

  function stepRev(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easeProgress = Math.pow(progress, 2.5); // rev limiter ramp curve

    currentRpm = Math.floor(easeProgress * targetRpm);
    if (rpmVal) rpmVal.textContent = currentRpm.toLocaleString();

    // Dashoffset from 400 to 100
    const offset = 400 - (easeProgress * 300);
    if (fillArc) fillArc.style.strokeDashoffset = offset;

    if (progress < 1) {
      requestAnimationFrame(stepRev);
    } else {
      setTimeout(dismiss, 250);
    }
  }

  requestAnimationFrame(stepRev);
}

/* ==========================================================================
   4. CUSTOM GLOWING CURSOR & FUEL GAUGE SCROLL
   ========================================================================== */
function setupCursorAndScrollProgress() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  const fuelGauge = document.getElementById('fuel-gauge-progress');

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  if (dot && ring) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Hover interactive elements
    const interactiveSelectors = 'a, button, input, select, textarea, .tilt-card, .filter-chip, .seed-click-pill';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    // Smooth animation loop for outer ring
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
  }

  // Fuel Gauge Scroll Progress
  window.addEventListener('scroll', () => {
    if (fuelGauge) {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollTotal) * 100;
      fuelGauge.style.width = `${Math.min(scrolled, 100)}%`;
    }
    updateNavActiveLink();
  }, { passive: true });
}

/* ==========================================================================
   5. MANDATORY 3D TILT ENGINE (WITH MOVING GLARE HIGHLIGHT)
   ========================================================================== */
function initTiltEffect() {
  // Check touch devices & prefers-reduced-motion
  if (window.matchMedia('(pointer: coarse)').matches || 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    // Add glare element if missing
    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (-12deg to +12deg)
      const rotateX = ((y - centerY) / centerY) * -11;
      const rotateY = ((x - centerX) / centerX) * 11;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Update glare position
      glare.style.opacity = '0.55';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.22) 0%, transparent 60%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    });
  });
}

/* ==========================================================================
   6. THEME ENFORCEMENT: PERMANENT NIGHT EMBER (DARK MODE)
   ========================================================================== */
function setupThemeDefaults() {
  document.documentElement.removeAttribute('data-theme');
  localStorage.removeItem('torquehive_theme');
}

/* ==========================================================================
   7. NAVBAR ACTIVE LINK & MOBILE DRAWER
   ========================================================================== */
function updateNavActiveLink() {
  const sections = document.querySelectorAll('section[id], #dashboard-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSectionId = '';
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    if (sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
      currentSectionId = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

function setupMobileNav() {
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.mobile-nav-drawer a, .mobile-nav-drawer button:not(.drawer-close-btn)');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    if (hamburger) {
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    if (hamburger) {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('drawer-open');
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeDrawer();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeDrawer);
    }

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    const drawerWishlistBtn = document.getElementById('drawer-wishlist-btn');
    if (drawerWishlistBtn) {
      drawerWishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer();
        if (typeof openWishlistModal === 'function') {
          openWishlistModal();
        }
      });
    }

    const drawerAuthBtn = document.getElementById('drawer-auth-btn');
    if (drawerAuthBtn) {
      drawerAuthBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer();
        const authModal = document.getElementById('auth-modal');
        if (authModal && typeof openModal === 'function') {
          openModal(authModal);
        }
      });
    }

    const drawerDashboardBtn = document.getElementById('drawer-dashboard-btn');
    if (drawerDashboardBtn) {
      drawerDashboardBtn.addEventListener('click', (e) => {
        closeDrawer();
        let user = Store.getSession();
        if (!user) {
          const users = Store.getUsers();
          user = users[0] || SEED_USERS[0];
          Store.setSession(user);
          if (typeof window.updateNavAuthUI === 'function') {
            window.updateNavAuthUI();
          }
        }
        if (window.location.hash === '#dashboard') {
          if (typeof window.handleDashboardRouting === 'function') {
            window.handleDashboardRouting();
          }
        } else {
          window.location.hash = '#dashboard';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1032 && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }
}

/* ==========================================================================
   8. ROLLING ODOMETER STATS COUNTERS
   ========================================================================== */
let statsAnimated = false;
function initOdometerCounters() {
  const statElements = document.querySelectorAll('.stat-odometer');
  if (!statElements.length || statsAnimated) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          let current = 0;
          const duration = 1800;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   9. FEATURED RIDES MARKETPLACE ENGINE
   ========================================================================== */
let activeFilter = 'all';
let searchQuery = '';
let currentSort = 'featured';

function renderMarketplace() {
  const grid = document.getElementById('rides-grid');
  if (!grid) return;

  const listings = Store.getListings().filter(item => item.status === 'approved');
  const wishlist = Store.getWishlist();

  // Apply Filter
  let filtered = listings.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'electric') return item.category === 'electric';
    if (activeFilter === 'scooter') return item.category === 'scooter';
    if (activeFilter === 'motorcycle') return item.category === 'motorcycle';
    return item.type === activeFilter;
  });

  // Apply Live Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q) ||
      item.engine.toLowerCase().includes(q)
    );
  }

  // Apply Sorting
  filtered.sort((a, b) => {
    if (currentSort === 'price-low') return a.price - b.price;
    if (currentSort === 'price-high') return b.price - a.price;
    if (currentSort === 'mileage') return a.km - b.km;
    if (currentSort === 'year') return b.year - a.year;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <h3 style="font-family: var(--font-racing); color: var(--text-muted); margin-bottom: 0.8rem;">No matching rides found</h3>
        <p style="color: var(--text-dim); margin-bottom: 1.5rem;">Try adjusting your search criteria or resetting filters.</p>
        <button class="btn btn-secondary" onclick="resetMarketplaceFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(bike => {
    const isSaved = wishlist.includes(bike.id);
    return `
      <div class="tilt-card bike-card" data-id="${bike.id}">
        <div class="bike-media-wrap">
          <img class="bike-img" src="${bike.image}" alt="${bike.title}" width="1000" height="700" loading="lazy">
          <span class="bike-badge ${bike.badgeType || 'badge-verified'}">${bike.badge}</span>
          <button class="bike-save-btn ${isSaved ? 'saved' : ''}" data-id="${bike.id}" title="${isSaved ? 'Remove from Saved' : 'Save to Wishlist'}" aria-label="Save Ride">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
        <div class="bike-info-body">
          <div class="bike-meta-row">
            <span class="bike-city-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${bike.city}
            </span>
          </div>
          <h3 class="bike-title">${bike.title}</h3>
          <div class="bike-specs-pills">
            <span class="spec-pill">${bike.year}</span>
            <span class="spec-pill">${bike.km.toLocaleString()} km</span>
            <span class="spec-pill">${bike.engine.split(' ')[0]}</span>
            <span class="spec-pill">${bike.power}</span>
          </div>
          <div class="bike-footer-row">
            <div class="bike-price-val">$${bike.price.toLocaleString()}</div>
            <div class="bike-card-actions">
              <button class="btn btn-secondary btn-sm quickview-btn" data-id="${bike.id}">Quick View</button>
              <button class="btn btn-primary btn-sm book-ride-btn" data-id="${bike.id}">Test Ride</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-attach card tilt & buttons
  initTiltEffect();
  attachMarketplaceActions();
}

function resetMarketplaceFilters() {
  activeFilter = 'all';
  searchQuery = '';
  currentSort = 'featured';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');
  const input = document.getElementById('market-search');
  if (input) input.value = '';
  renderMarketplace();
}

function attachMarketplaceActions() {
  // Wishlist Heart Buttons
  document.querySelectorAll('.bike-save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      toggleWishlist(id);
    });
  });

  // Quick View Buttons
  document.querySelectorAll('.quickview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openQuickViewModal(id);
    });
  });

  // Book Test Ride Buttons
  document.querySelectorAll('.book-ride-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openTestRideModal(id);
    });
  });
}

function toggleWishlist(bikeId) {
  let wishlist = Store.getWishlist();
  const index = wishlist.indexOf(bikeId);
  const listings = Store.getListings();
  const bike = listings.find(b => b.id === bikeId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${bike ? bike.title : 'Ride'} from saved list.`, 'info');
  } else {
    wishlist.push(bikeId);
    showToast(`Added ${bike ? bike.title : 'Ride'} to saved rides!`, 'success');
  }

  Store.setWishlist(wishlist);
  updateWishlistBadge();
  renderMarketplace();
  renderDashboardSavedRides();
  renderWishlistModalContent();
}

function updateWishlistBadge() {
  const count = Store.getWishlist().length;
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(badge => {
    badge.textContent = count;
  });
}

/* Setup Marketplace UI Controls */
function setupMarketplaceControls() {
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      renderMarketplace();
    });
  });

  const searchInput = document.getElementById('market-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMarketplace();
    });
  }

  const sortSelect = document.getElementById('market-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderMarketplace();
    });
  }

  // Hero Smart Search Bar Sync
  const heroSearchBtn = document.getElementById('hero-search-btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const type = document.getElementById('hero-filter-type')?.value;
      const brand = document.getElementById('hero-filter-brand')?.value;
      const budget = document.getElementById('hero-filter-budget')?.value;

      if (type && type !== 'all') {
        activeFilter = type;
        chips.forEach(c => {
          c.classList.toggle('active', c.getAttribute('data-filter') === type);
        });
      }
      if (brand && brand !== 'all') {
        searchQuery = brand;
        if (searchInput) searchInput.value = brand;
      }

      renderMarketplace();
      document.getElementById('bikes')?.scrollIntoView({ behavior: 'smooth' });
      showToast('Marketplace filtered based on your search!', 'info');
    });
  }
}

/* ==========================================================================
   10. EMI & TRADE-IN CALCULATOR
   ========================================================================== */
function setupEmiCalculator() {
  const priceSlider = document.getElementById('emi-price-slider');
  const downSlider = document.getElementById('emi-down-slider');
  const tenureSlider = document.getElementById('emi-tenure-slider');
  const rateSlider = document.getElementById('emi-rate-slider');

  const priceVal = document.getElementById('emi-price-val');
  const downVal = document.getElementById('emi-down-val');
  const tenureVal = document.getElementById('emi-tenure-val');
  const rateVal = document.getElementById('emi-rate-val');

  const monthlyVal = document.getElementById('emi-monthly-val');
  const totalInterestVal = document.getElementById('emi-interest-val');
  const totalLoanVal = document.getElementById('emi-total-val');
  const gaugeArc = document.getElementById('emi-gauge-arc');

  let tradeInOffset = 0;

  function calculate() {
    const P_total = parseFloat(priceSlider.value) || 0;
    const down = parseFloat(downSlider.value) || 0;
    const principal = Math.max(P_total - down - tradeInOffset, 0);
    const months = parseInt(tenureSlider.value, 10) || 12;
    const annualRate = parseFloat(rateSlider.value) || 7.5;
    const r = (annualRate / 100) / 12;

    let emi = 0;
    let totalPayable = principal;
    let totalInterest = 0;

    if (principal > 0 && r > 0) {
      emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      totalPayable = emi * months;
      totalInterest = totalPayable - principal;
    }

    if (priceVal) priceVal.textContent = `$${P_total.toLocaleString()}`;
    if (downVal) downVal.textContent = `$${down.toLocaleString()}`;
    if (tenureVal) tenureVal.textContent = `${months} Mos`;
    if (rateVal) rateVal.textContent = `${annualRate.toFixed(1)}%`;

    if (monthlyVal) monthlyVal.textContent = `$${Math.round(emi).toLocaleString()}`;
    if (totalInterestVal) totalInterestVal.textContent = `$${Math.round(totalInterest).toLocaleString()}`;
    if (totalLoanVal) totalLoanVal.textContent = `$${Math.round(totalPayable).toLocaleString()}`;

    // Animated Gauge Arc (Dashoffset from 400 down to 100 max)
    if (gaugeArc) {
      const maxEmi = 1800;
      const ratio = Math.min(emi / maxEmi, 1);
      const offset = 400 - (ratio * 300);
      gaugeArc.style.strokeDashoffset = offset;
    }
  }

  [priceSlider, downSlider, tenureSlider, rateSlider].forEach(slider => {
    if (slider) slider.addEventListener('input', calculate);
  });

  // Calculate initially
  calculate();

  // Tab Switching (Financing vs Trade-in)
  const calcTabs = document.querySelectorAll('.calc-tab-btn');
  const emiPane = document.getElementById('calc-emi-pane');
  const tradePane = document.getElementById('calc-trade-pane');

  calcTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      calcTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const mode = tab.getAttribute('data-tab');
      if (mode === 'trade') {
        if (emiPane) emiPane.style.display = 'none';
        if (tradePane) tradePane.style.display = 'grid';
      } else {
        if (emiPane) emiPane.style.display = 'grid';
        if (tradePane) tradePane.style.display = 'none';
      }
    });
  });

  // Trade-in Estimator Action
  const tradeCalcBtn = document.getElementById('trade-est-btn');
  if (tradeCalcBtn) {
    tradeCalcBtn.addEventListener('click', () => {
      const brand = document.getElementById('trade-brand')?.value || 'other';
      const year = parseInt(document.getElementById('trade-year')?.value, 10) || 2020;
      const km = parseInt(document.getElementById('trade-km')?.value, 10) || 15000;
      const cond = document.getElementById('trade-cond')?.value || 'good';

      // Realistic formula
      let baseVal = 9500;
      if (brand === 'ducati' || brand === 'bmw') baseVal = 14000;
      if (brand === 'harley') baseVal = 12000;
      if (brand === 'vespa' || brand === 'ather') baseVal = 4500;

      const yearFactor = Math.max(0.4, 1 - (2026 - year) * 0.08);
      const kmFactor = Math.max(0.5, 1 - (km / 80000));
      const condMultiplier = cond === 'mint' ? 1.15 : (cond === 'good' ? 1.0 : 0.82);

      const estimatedQuote = Math.round(baseVal * yearFactor * kmFactor * condMultiplier);
      tradeInOffset = estimatedQuote;

      const quoteDisplay = document.getElementById('trade-quote-result');
      if (quoteDisplay) {
        quoteDisplay.innerHTML = `
          <div style="font-family: var(--font-racing); font-size: 1.6rem; color: var(--color-electric); margin-top: 1rem;">
            Estimated Trade-in Credit: $${estimatedQuote.toLocaleString()}
          </div>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.35rem;">
            This credit has been automatically deducted from your financing EMI principal!
          </p>
        `;
      }
      calculate();
      showToast(`Applied $${estimatedQuote.toLocaleString()} trade-in credit to EMI!`, 'success');
    });
  }
}

/* ==========================================================================
   11. COMPARE RIDES TOOL
   ========================================================================== */
function setupCompareTool() {
  const select1 = document.getElementById('compare-bike-1');
  const select2 = document.getElementById('compare-bike-2');
  const tableContainer = document.getElementById('compare-matrix-content');

  const listings = Store.getListings();

  if (select1 && select2) {
    const options = listings.map(b => `<option value="${b.id}">${b.title} ($${b.price.toLocaleString()})</option>`).join('');
    select1.innerHTML = options;
    select2.innerHTML = options;

    // Pick two default bikes
    if (listings.length >= 2) {
      select1.value = listings[0].id;
      select2.value = listings[3].id; // Panigale vs Super Duke
    }

    function renderComparison() {
      const b1 = listings.find(b => b.id === parseInt(select1.value, 10));
      const b2 = listings.find(b => b.id === parseInt(select2.value, 10));

      if (!b1 || !b2 || !tableContainer) return;

      const p1Win = b1.price < b2.price;
      const acc1Win = parseFloat(b1.accel) < parseFloat(b2.accel);
      const score1Win = b1.inspectionScore >= b2.inspectionScore;

      tableContainer.innerHTML = `
        <table class="compare-matrix-table">
          <thead>
            <tr>
              <th>Feature / Metric</th>
              <th style="color: var(--text-chrome); font-size: 1rem;">${b1.title}</th>
              <th style="color: var(--text-chrome); font-size: 1rem;">${b2.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Visual Preview</th>
              <td><img src="${b1.image}" alt="${b1.title}" style="width: 140px; height: 90px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-glow);"></td>
              <td><img src="${b2.image}" alt="${b2.title}" style="width: 140px; height: 90px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-glow);"></td>
            </tr>
            <tr>
              <th>Asking Price</th>
              <td class="compare-val ${p1Win ? 'winner' : ''}">$${b1.price.toLocaleString()}</td>
              <td class="compare-val ${!p1Win ? 'winner' : ''}">$${b2.price.toLocaleString()}</td>
            </tr>
            <tr>
              <th>Displacement / Battery</th>
              <td class="compare-val">${b1.engine}</td>
              <td class="compare-val">${b2.engine}</td>
            </tr>
            <tr>
              <th>Horsepower</th>
              <td class="compare-val">${b1.power}</td>
              <td class="compare-val">${b2.power}</td>
            </tr>
            <tr>
              <th>Peak Torque</th>
              <td class="compare-val">${b1.torque}</td>
              <td class="compare-val">${b2.torque}</td>
            </tr>
            <tr>
              <th>0-100 km/h Acceleration</th>
              <td class="compare-val ${acc1Win ? 'winner' : ''}">${b1.accel}</td>
              <td class="compare-val ${!acc1Win ? 'winner' : ''}">${b2.accel}</td>
            </tr>
            <tr>
              <th>Top Speed</th>
              <td class="compare-val">${b1.topSpeed}</td>
              <td class="compare-val">${b2.topSpeed}</td>
            </tr>
            <tr>
              <th>Odometer Reading</th>
              <td class="compare-val">${b1.km.toLocaleString()} km</td>
              <td class="compare-val">${b2.km.toLocaleString()} km</td>
            </tr>
            <tr>
              <th>TORQ Inspection</th>
              <td class="compare-val ${score1Win ? 'winner' : ''}">${b1.inspectionScore} / 100</td>
              <td class="compare-val ${!score1Win ? 'winner' : ''}">${b2.inspectionScore} / 100</td>
            </tr>
            <tr>
              <th>Action</th>
              <td><button class="btn btn-primary btn-sm book-ride-btn" data-id="${b1.id}">Test Ride This</button></td>
              <td><button class="btn btn-primary btn-sm book-ride-btn" data-id="${b2.id}">Test Ride This</button></td>
            </tr>
          </tbody>
        </table>
      `;

      tableContainer.querySelectorAll('.book-ride-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          openTestRideModal(parseInt(btn.getAttribute('data-id'), 10));
        });
      });
    }

    select1.addEventListener('change', renderComparison);
    select2.addEventListener('change', renderComparison);
    renderComparison();
  }
}

/* ==========================================================================
   12. SELL YOUR RIDE MULTI-STEP WIZARD
   ========================================================================== */
function setupSellWizard() {
  let currentStep = 1;
  const maxStep = 4;
  const uploadedPhotoUrls = [];

  const panes = document.querySelectorAll('.wizard-step-pane');
  const nodes = document.querySelectorAll('.wizard-steps-indicator .step-node');
  const prevBtn = document.getElementById('sell-prev-btn');
  const nextBtn = document.getElementById('sell-next-btn');
  const submitBtn = document.getElementById('sell-submit-btn');

  function updateStepsUI() {
    panes.forEach(p => {
      p.classList.toggle('active', parseInt(p.getAttribute('data-step'), 10) === currentStep);
    });

    nodes.forEach((n, idx) => {
      const stepNum = idx + 1;
      n.classList.remove('active', 'completed');
      if (stepNum === currentStep) n.classList.add('active');
      else if (stepNum < currentStep) n.classList.add('completed');
    });

    if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
    if (nextBtn) nextBtn.style.display = currentStep === maxStep ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = currentStep === maxStep ? 'inline-flex' : 'none';

    // Update estimated valuation in Step 4
    if (currentStep === 4) {
      calculateSellValuation();
    }
  }

  function validateStep(step) {
    if (step === 1) {
      const brand = document.getElementById('sell-brand')?.value.trim();
      const model = document.getElementById('sell-model')?.value.trim();
      const year = document.getElementById('sell-year')?.value.trim();
      if (!brand || !model || !year) {
        showToast('Please fill in Brand, Model, and Year.', 'danger');
        return false;
      }
    }
    if (step === 2) {
      const km = document.getElementById('sell-km')?.value.trim();
      const engine = document.getElementById('sell-engine')?.value.trim();
      if (!km || !engine) {
        showToast('Please specify current mileage and engine specs.', 'danger');
        return false;
      }
    }
    return true;
  }

  function calculateSellValuation() {
    const brand = document.getElementById('sell-brand')?.value.trim().toLowerCase() || '';
    const year = parseInt(document.getElementById('sell-year')?.value, 10) || 2022;
    const km = parseInt(document.getElementById('sell-km')?.value, 10) || 5000;

    let base = 12000;
    if (brand.includes('ducati') || brand.includes('bmw')) base = 19000;
    if (brand.includes('harley')) base = 16000;
    if (brand.includes('vespa') || brand.includes('scooter')) base = 6000;

    const yearFactor = Math.max(0.5, 1 - (2026 - year) * 0.07);
    const est = Math.round(base * yearFactor * Math.max(0.6, 1 - (km / 75000)));

    const estDisplay = document.getElementById('sell-est-value');
    if (estDisplay) {
      estDisplay.textContent = `$${est.toLocaleString()}`;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < maxStep) {
          currentStep++;
          updateStepsUI();
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepsUI();
      }
    });
  }

  // Photo Upload Simulation
  const dropZone = document.getElementById('photo-drop-zone');
  const fileInput = document.getElementById('sell-photo-input');
  const previewGrid = document.getElementById('photo-preview-grid');

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          uploadedPhotoUrls.push(event.target.result);
          renderPhotoThumbs();
        };
        reader.readAsDataURL(file);
      });
    });
  }

  function renderPhotoThumbs() {
    if (!previewGrid) return;
    previewGrid.innerHTML = uploadedPhotoUrls.map((url, idx) => `
      <div class="photo-thumb-wrap">
        <img src="${url}" alt="Listing Photo ${idx + 1}">
        <button type="button" class="remove-thumb-btn" data-index="${idx}">×</button>
      </div>
    `).join('');

    previewGrid.querySelectorAll('.remove-thumb-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        uploadedPhotoUrls.splice(idx, 1);
        renderPhotoThumbs();
      });
    });
  }

  // Final Form Submission
  const sellForm = document.getElementById('sell-ride-form');
  if (sellForm) {
    sellForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const price = parseFloat(document.getElementById('sell-price')?.value) || 0;
      const city = document.getElementById('sell-city')?.value.trim() || 'Austin, TX';
      const phone = document.getElementById('sell-phone')?.value.trim();

      if (!price || !phone) {
        showToast('Please provide your asking price and contact phone.', 'danger');
        return;
      }

      const session = Store.getSession();
      const ownerEmail = session ? session.email : 'rider@torq.com';

      const newListing = {
        id: Date.now(),
        title: `${document.getElementById('sell-year').value} ${document.getElementById('sell-brand').value} ${document.getElementById('sell-model').value}`,
        category: document.getElementById('sell-category').value || 'motorcycle',
        type: document.getElementById('sell-type').value || 'sport',
        brand: document.getElementById('sell-brand').value,
        year: parseInt(document.getElementById('sell-year').value, 10),
        price: price,
        km: parseInt(document.getElementById('sell-km').value, 10) || 5000,
        engine: document.getElementById('sell-engine').value || 'Custom Spec',
        power: `${document.getElementById('sell-power')?.value || '120'} HP`,
        torque: '100 Nm',
        topSpeed: '220 km/h',
        accel: '3.8s',
        city: city,
        badge: "Pending Review",
        badgeType: "status-pending",
        image: uploadedPhotoUrls[0] || "images/sell-your-ride.webp",
        ownerEmail: ownerEmail,
        status: "pending", // User submissions are pending Hive approval
        featured: false,
        inspectionScore: 92,
        description: document.getElementById('sell-notes')?.value || 'Submitted through TORQ Sell Portal.'
      };

      const allListings = Store.getListings();
      allListings.unshift(newListing);
      Store.setListings(allListings);

      showToast('Ride submitted successfully! Placed under Hive Marshal review.', 'success');
      sellForm.reset();
      uploadedPhotoUrls.length = 0;
      renderPhotoThumbs();
      currentStep = 1;
      updateStepsUI();

      // Refresh Dashboard Listings View
      renderDashboardMyListings();

      // Smooth scroll to dashboard if user desires
      setTimeout(() => {
        window.location.hash = '#dashboard';
      }, 1000);
    });
  }

  updateStepsUI();
}

/* ==========================================================================
   13. COMMUNITY EVENTS & RIDER FORUM
   ========================================================================== */
function setupCommunityEvents() {
  const eventsGrid = document.getElementById('events-grid');
  if (!eventsGrid) return;

  function renderEvents() {
    const events = Store.getEvents();
    eventsGrid.innerHTML = events.map(evt => `
      <div class="tilt-card event-card" data-id="${evt.id}">
        <div class="event-media-wrap">
          <img class="event-img" src="${evt.image}" alt="${evt.title}" width="1000" height="650" loading="lazy">
          <span class="event-date-pill">${evt.date}</span>
        </div>
        <div class="event-body">
          <h3 class="card-title">${evt.title}</h3>
          <p class="event-route">${evt.route}</p>
          <div class="event-riders-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span class="riders-count-text">${evt.riders} / ${evt.maxRiders} Riders Joined</span>
          </div>
          <p class="card-desc" style="margin-bottom: 1.5rem;">${evt.desc}</p>
          <button class="btn btn-primary btn-sm join-event-btn" data-id="${evt.id}">Join Group Ride</button>
        </div>
      </div>
    `).join('');

    initTiltEffect();

    eventsGrid.querySelectorAll('.join-event-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const events = Store.getEvents();
        const evt = events.find(e => e.id === id);
        if (evt) {
          if (btn.classList.contains('joined')) {
            evt.riders--;
            btn.classList.remove('joined');
            btn.textContent = 'Join Group Ride';
            showToast(`Left ${evt.title}.`, 'info');
          } else {
            evt.riders++;
            btn.classList.add('joined');
            btn.textContent = 'Ride Confirmed ✓';
            showToast(`You have joined ${evt.title}! Hive route details emailed.`, 'success');
          }
          Store.setEvents(events);
          renderEvents();
        }
      });
    });
  }

  renderEvents();
}

/* ==========================================================================
   14. TESTIMONIALS CAROUSEL
   ========================================================================== */
function setupTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('test-prev-btn');
  const nextBtn = document.getElementById('test-next-btn');
  const dotsContainer = document.getElementById('test-dots');

  if (!slides.length) return;

  let currentIdx = 0;
  let autoplayTimer = null;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from(slides).map((_, i) => 
      `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-idx="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join('');
  }

  function showSlide(idx) {
    slides.forEach(s => s.classList.remove('active'));
    slides[idx].classList.add('active');

    const dots = dotsContainer?.querySelectorAll('.carousel-dot');
    dots?.forEach((d, i) => d.classList.toggle('active', i === idx));
    currentIdx = idx;
  }

  function nextSlide() {
    const next = (currentIdx + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  dotsContainer?.querySelectorAll('.carousel-dot').forEach(d => {
    d.addEventListener('click', () => {
      const idx = parseInt(d.getAttribute('data-idx'), 10);
      showSlide(idx);
      resetAutoplay();
    });
  });

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5500);
  }

  autoplayTimer = setInterval(nextSlide, 5500);
}

/* ==========================================================================
   15. FAQ ACCORDION
   ========================================================================== */
function setupFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header-btn');
  faqHeaders.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      const isActive = parent.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   16. CONTACT & NEWSLETTER FORMS
   ========================================================================== */
function setupContactAndNewsletter() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const msg = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !msg) {
        showToast('Please fill all required contact fields.', 'danger');
        return;
      }

      const enquiries = Store.getEnquiries();
      enquiries.unshift({
        id: Date.now(),
        bikeId: 0,
        bikeTitle: "General Contact / HQ Inquiry",
        name: name,
        email: email,
        phone: document.getElementById('contact-phone')?.value.trim() || 'N/A',
        message: msg,
        status: "Contacted",
        date: new Date().toISOString().split('T')[0]
      });
      Store.setEnquiries(enquiries);

      showToast(`Thank you, ${name}! A Hive Specialist will respond shortly.`, 'success');
      contactForm.reset();
      renderDashboardEnquiries();
    });
  }

  const newsletterForms = document.querySelectorAll('.footer-newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showToast('Subscribed to TORQ Weekly Throttle Dispatch!', 'success');
        input.value = '';
      }
    });
  });
}

/* ==========================================================================
   17. AUTHENTICATION & LOGIN/SIGNUP FLOW
   ========================================================================== */
function setupAuthSystem() {
  const authModal = document.getElementById('auth-modal');
  const loginTab = document.getElementById('auth-tab-login');
  const signupTab = document.getElementById('auth-tab-signup');
  const loginPane = document.getElementById('auth-pane-login');
  const signupPane = document.getElementById('auth-pane-signup');

  const navAuthBtn = document.getElementById('nav-auth-btn');
  const navUserPill = document.getElementById('nav-user-pill');
  const navDashboardBtn = document.getElementById('nav-dashboard-btn');

  function updateNavAuthUI() {
    const user = Store.getSession();
    if (navDashboardBtn) {
      if (window.location.hash === '#dashboard' || document.body.classList.contains('dashboard-active')) {
        navDashboardBtn.style.display = 'none';
      } else {
        navDashboardBtn.style.display = 'flex';
      }
    }
    if (navUserPill) {
      navUserPill.style.display = 'none';
    }
    if (navAuthBtn) {
      if (window.location.hash === '#dashboard' || document.body.classList.contains('dashboard-active')) {
        navAuthBtn.style.display = 'none';
      } else {
        navAuthBtn.style.display = 'flex';
      }
    }
    const drawerAuthLabel = document.getElementById('drawer-auth-label');
    if (drawerAuthLabel) {
      drawerAuthLabel.textContent = user ? (user.name ? user.name.split(' ')[0] : 'Account') : 'Sign In';
    }
  }

  window.updateNavAuthUI = updateNavAuthUI;
  updateNavAuthUI();

  // Login Icon Button click in navbar - open Auth Modal
  if (navAuthBtn) {
    navAuthBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(authModal);
    });
  }

  // Dashboard Icon Button click in navbar
  if (navDashboardBtn) {
    navDashboardBtn.addEventListener('click', (e) => {
      let user = Store.getSession();
      if (!user) {
        const users = Store.getUsers();
        user = users[0] || SEED_USERS[0];
        Store.setSession(user);
        updateNavAuthUI();
      }
      if (window.location.hash === '#dashboard') {
        if (typeof window.handleDashboardRouting === 'function') {
          window.handleDashboardRouting();
        }
      } else {
        window.location.hash = '#dashboard';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Switch Auth Tabs
  if (loginTab && signupTab) {
    loginTab.addEventListener('click', () => {
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
      if (loginPane) loginPane.style.display = 'block';
      if (signupPane) signupPane.style.display = 'none';
    });

    signupTab.addEventListener('click', () => {
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
      if (loginPane) loginPane.style.display = 'none';
      if (signupPane) signupPane.style.display = 'block';
    });
  }

  // 1-Click Seed Account Fillers
  const seedRiderPill = document.getElementById('fill-seed-rider');
  const seedAdminPill = document.getElementById('fill-seed-admin');

  if (seedRiderPill) {
    seedRiderPill.addEventListener('click', () => {
      document.getElementById('login-email').value = 'rider@torq.com';
      document.getElementById('login-pass').value = 'Rider@123';
      showToast('Filled Rider demo credentials!', 'info');
    });
  }

  if (seedAdminPill) {
    seedAdminPill.addEventListener('click', () => {
      document.getElementById('login-email').value = 'admin@torq.com';
      document.getElementById('login-pass').value = 'Admin@123';
      showToast('Filled Admin demo credentials!', 'info');
    });
  }

  // Login Form Submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email')?.value.trim();
      const pass = document.getElementById('login-pass')?.value;

      const users = Store.getUsers();
      const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);

      if (!matched) {
        showToast('Invalid credentials. Check email & password.', 'danger');
        return;
      }

      if (matched.status === 'blocked') {
        showToast('This account has been suspended by Hive Marshals.', 'danger');
        return;
      }

      Store.setSession(matched);
      showToast(`Welcome back, ${matched.name}!`, 'success');
      closeModal(authModal);
      updateNavAuthUI();

      // Redirect to Dashboard
      window.location.hash = '#dashboard';
    });
  }

  // Signup Form Submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name')?.value.trim();
      const email = document.getElementById('signup-email')?.value.trim();
      const pass = document.getElementById('signup-pass')?.value;

      if (!name || !email || !pass) {
        showToast('Please fill all registration fields.', 'danger');
        return;
      }

      const users = Store.getUsers();
      if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        showToast('An account with this email already exists.', 'danger');
        return;
      }

      const newUser = {
        name: name,
        email: email,
        password: pass,
        role: "user",
        phone: "+1 (555) 019-2834",
        city: "San Francisco, CA",
        avatar: "images/rider-2.webp",
        memberTier: "Hive Rider",
        joinedDate: "October 2026",
        status: "active"
      };

      users.push(newUser);
      Store.setUsers(users);
      Store.setSession(newUser);

      showToast(`Account created! Welcome to the Hive, ${name}!`, 'success');
      closeModal(authModal);
      updateNavAuthUI();
      window.location.hash = '#dashboard';
    });
  }

  // Password Visibility Toggle
  document.querySelectorAll('.toggle-pass-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input && input.type) {
        input.type = input.type === 'password' ? 'text' : 'password';
      }
    });
  });

  // Forgot Password Flow Demo
  const forgotBtn = document.getElementById('forgot-pass-btn');
  if (forgotBtn) {
    forgotBtn.addEventListener('click', () => {
      const email = prompt('Enter your registered email for demo reset:');
      if (email) {
        showToast(`Reset PIN dispatched to ${email}. Demo PIN: 7749`, 'info');
      }
    });
  }
}

/* ==========================================================================
   18. USER & ADMIN DASHBOARD ENGINE (#dashboard)
   ========================================================================== */
function setupDashboard() {
  const dashSection = document.getElementById('dashboard-section');
  const mainChildren = document.querySelectorAll('main > *:not(#dashboard-section)');
  const siteFooter = document.querySelector('.site-footer');
  const siteNavMenu = document.querySelector('.site-nav nav');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navWishlistBtn = document.querySelector('.nav-wishlist-btn');

  function handleRouting() {
    const hash = window.location.hash;
    if (hash === '#dashboard') {
      let user = Store.getSession();
      if (!user) {
        const users = Store.getUsers();
        user = users[0] || SEED_USERS[0];
        Store.setSession(user);
        if (typeof window.updateNavAuthUI === 'function') {
          window.updateNavAuthUI();
        }
      }

      // Show Dashboard View and hide landing-page nav links, tread dividers, wishlist button, and footer
      document.body.classList.add('dashboard-active');
      if (dashSection) dashSection.classList.add('active-view');
      mainChildren.forEach(s => s.style.display = 'none');
      if (siteFooter) siteFooter.style.display = 'none';
      if (siteNavMenu) siteNavMenu.style.display = 'none';
      if (hamburgerBtn) hamburgerBtn.style.display = 'none';
      if (navWishlistBtn) navWishlistBtn.style.display = 'none';
      const navDashBtn = document.getElementById('nav-dashboard-btn');
      if (navDashBtn) navDashBtn.style.display = 'none';
      const navAuthBtnEl = document.getElementById('nav-auth-btn');
      if (navAuthBtnEl) navAuthBtnEl.style.display = 'none';
      renderDashboard();
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Show normal sections and restore nav links, wishlist button, and footer
      document.body.classList.remove('dashboard-active');
      if (dashSection) dashSection.classList.remove('active-view');
      mainChildren.forEach(s => s.style.display = '');
      if (siteFooter) siteFooter.style.display = '';
      if (siteNavMenu) siteNavMenu.style.display = '';
      if (hamburgerBtn) hamburgerBtn.style.display = '';
      if (navWishlistBtn) navWishlistBtn.style.display = '';
      const navDashBtn = document.getElementById('nav-dashboard-btn');
      if (navDashBtn) navDashBtn.style.display = 'flex';
      const navAuthBtnEl = document.getElementById('nav-auth-btn');
      if (navAuthBtnEl) navAuthBtnEl.style.display = 'flex';
    }
  }

  window.handleDashboardRouting = handleRouting;

  window.addEventListener('hashchange', handleRouting);
  handleRouting();

  // Dashboard Nav Tabs Switching
  const dashTabs = document.querySelectorAll('.dash-tab-btn');
  dashTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dashTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      document.querySelectorAll('.dash-tab-pane').forEach(p => {
        p.classList.toggle('active', p.getAttribute('id') === `pane-${target}`);
      });
    });
  });

  // Logout Button
  const logoutBtn = document.getElementById('dash-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      Store.clearSession();
      showToast('Logged out of TORQ successfully.', 'info');
      updateNavAuthUI();
      window.location.hash = '#bikes';
    });
  }
}

function renderDashboard() {
  const user = Store.getSession();
  if (!user) return;

  // Header Banner Details
  const nameEl = document.getElementById('dash-user-name');
  const emailEl = document.getElementById('dash-user-email');
  const avatarEl = document.getElementById('dash-user-avatar');
  const roleEl = document.getElementById('dash-user-role');

  if (nameEl) nameEl.textContent = user.name;
  if (emailEl) emailEl.textContent = user.email;
  if (avatarEl) avatarEl.src = user.avatar || 'images/rider-1.webp';
  if (roleEl) roleEl.textContent = user.role === 'admin' ? 'TORQ CHIEF MARSHAL (ADMIN)' : user.memberTier;

  // Show/Hide Admin Tab based on role
  const adminTab = document.querySelector('.dash-tab-btn[data-tab="admin"]');
  if (adminTab) {
    adminTab.style.display = user.role === 'admin' ? 'block' : 'none';
  }

  // Render Sub-Panes
  renderDashboardStats();
  renderDashboardSavedRides();
  renderDashboardMyListings();
  renderDashboardTestRides();
  renderDashboardProfile();

  if (user.role === 'admin') {
    renderAdminManagement();
    renderAdminChart();
  }
}

function renderDashboardStats() {
  const user = Store.getSession();
  const wishlist = Store.getWishlist();
  const listings = Store.getListings();
  const testRides = Store.getTestRides();
  const enquiries = Store.getEnquiries();

  const myListingsCount = listings.filter(l => l.ownerEmail === user.email).length;
  const myTestRidesCount = testRides.filter(t => t.userEmail === user.email).length;

  const statSaved = document.getElementById('dash-stat-saved');
  const statListings = document.getElementById('dash-stat-listings');
  const statRides = document.getElementById('dash-stat-rides');
  const statEnquiries = document.getElementById('dash-stat-enquiries');

  if (statSaved) statSaved.textContent = wishlist.length;
  if (statListings) statListings.textContent = myListingsCount;
  if (statRides) statRides.textContent = myTestRidesCount;
  if (statEnquiries) statEnquiries.textContent = enquiries.length;
}

function renderDashboardSavedRides() {
  const container = document.getElementById('dash-saved-rides-grid');
  if (!container) return;

  const wishlist = Store.getWishlist();
  const listings = Store.getListings();
  const savedBikes = listings.filter(b => wishlist.includes(b.id));

  if (savedBikes.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
        <p style="color: var(--text-muted); margin-bottom: 1rem;">You haven't saved any rides to your wishlist yet.</p>
        <a href="#bikes" class="btn btn-primary btn-sm">Explore Rides Marketplace</a>
      </div>
    `;
    return;
  }

  container.innerHTML = savedBikes.map(b => `
    <div class="tilt-card bike-card" style="padding: 0;">
      <div class="bike-media-wrap" style="height: 180px;">
        <img class="bike-img" src="${b.image}" alt="${b.title}">
      </div>
      <div class="bike-info-body">
        <h4 class="card-title" style="font-size: 1.1rem;">${b.title}</h4>
        <div class="bike-price-val" style="margin: 0.5rem 0;">$${b.price.toLocaleString()}</div>
        <div style="display: flex; gap: 0.5rem; justify-content: center; width: 100%;">
          <button class="btn btn-secondary btn-sm" onclick="toggleWishlist(${b.id})">Remove</button>
          <button class="btn btn-primary btn-sm" onclick="openTestRideModal(${b.id})">Book Test Ride</button>
        </div>
      </div>
    </div>
  `).join('');

  initTiltEffect();
}

function renderDashboardMyListings() {
  const tbody = document.getElementById('dash-my-listings-tbody');
  if (!tbody) return;

  const user = Store.getSession();
  const listings = Store.getListings().filter(l => l.ownerEmail === user.email);

  if (listings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="color: var(--text-dim); padding: 2rem;">No vehicles submitted yet. Submit one via <a href="#sell" style="color: var(--color-primary);">Sell Your Ride</a>.</td></tr>`;
    return;
  }

  tbody.innerHTML = listings.map(l => `
    <tr>
      <td><strong>${l.title}</strong></td>
      <td>$${l.price.toLocaleString()}</td>
      <td>${l.km.toLocaleString()} km</td>
      <td><span class="status-pill status-${l.status}">${l.status.toUpperCase()}</span></td>
      <td>
        <button class="dash-btn-action" onclick="deleteListing(${l.id})">Withdraw</button>
      </td>
    </tr>
  `).join('');
}

function renderDashboardTestRides() {
  const tbody = document.getElementById('dash-testrides-tbody');
  if (!tbody) return;

  const user = Store.getSession();
  const testRides = Store.getTestRides().filter(t => t.userEmail === user.email);

  if (testRides.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="color: var(--text-dim); padding: 2rem;">No test rides booked yet. Pick any bike on the marketplace to book!</td></tr>`;
    return;
  }

  tbody.innerHTML = testRides.map(t => `
    <tr>
      <td><strong>${t.bikeTitle}</strong></td>
      <td>${t.date} @ ${t.time}</td>
      <td>${t.type}</td>
      <td><span class="status-pill status-${t.status}">${t.status.toUpperCase()}</span></td>
      <td><button class="dash-btn-action" onclick="cancelTestRide(${t.id})">Cancel</button></td>
    </tr>
  `).join('');
}

function cancelTestRide(id) {
  let list = Store.getTestRides();
  list = list.filter(t => t.id !== id);
  Store.setTestRides(list);
  showToast('Test ride booking cancelled.', 'info');
  renderDashboardTestRides();
  renderDashboardStats();
}

function renderDashboardProfile() {
  const user = Store.getSession();
  if (!user) return;

  const nameInp = document.getElementById('profile-name');
  const phoneInp = document.getElementById('profile-phone');
  const cityInp = document.getElementById('profile-city');

  if (nameInp) nameInp.value = user.name;
  if (phoneInp) phoneInp.value = user.phone;
  if (cityInp) cityInp.value = user.city;

  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.onsubmit = (e) => {
      e.preventDefault();
      user.name = nameInp.value.trim();
      user.phone = phoneInp.value.trim();
      user.city = cityInp.value.trim();

      Store.setSession(user);

      // Update in stored users array
      const users = Store.getUsers();
      const idx = users.findIndex(u => u.email === user.email);
      if (idx > -1) {
        users[idx] = { ...users[idx], ...user };
        Store.setUsers(users);
      }

      showToast('Profile settings updated successfully!', 'success');
      renderDashboard();
    };
  }
}

/* --- Admin Management Sub-Engine --- */
function renderAdminManagement() {
  renderAdminListingsTable();
  renderAdminUsersTable();
  renderDashboardEnquiries();
}

function renderAdminListingsTable() {
  const tbody = document.getElementById('admin-listings-tbody');
  if (!tbody) return;

  const listings = Store.getListings();

  tbody.innerHTML = listings.map(l => `
    <tr>
      <td style="text-align: left; font-weight: 700;">${l.title}</td>
      <td>$${l.price.toLocaleString()}</td>
      <td><span class="status-pill status-${l.status}">${l.status.toUpperCase()}</span></td>
      <td>${l.featured ? '★ Featured' : 'Standard'}</td>
      <td>
        <div class="action-btn-group">
          ${l.status === 'pending' ? `<button class="dash-btn-action" style="color: var(--color-success);" onclick="adminApproveListing(${l.id})">Approve</button>` : ''}
          ${l.status === 'approved' ? `<button class="dash-btn-action" style="color: var(--color-danger);" onclick="adminRejectListing(${l.id})">Reject</button>` : ''}
          <button class="dash-btn-action" onclick="adminToggleFeatured(${l.id})">${l.featured ? 'Unfeature' : 'Feature'}</button>
          <button class="dash-btn-action" style="color: var(--color-danger);" onclick="adminDeleteListing(${l.id})">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function adminApproveListing(id) {
  const listings = Store.getListings();
  const bike = listings.find(b => b.id === id);
  if (bike) {
    bike.status = 'approved';
    bike.badge = 'Verified';
    bike.badgeType = 'badge-verified';
    Store.setListings(listings);
    showToast(`Approved "${bike.title}". Now live on marketplace!`, 'success');
    renderAdminListingsTable();
    renderMarketplace();
  }
}

function adminRejectListing(id) {
  const listings = Store.getListings();
  const bike = listings.find(b => b.id === id);
  if (bike) {
    bike.status = 'rejected';
    Store.setListings(listings);
    showToast(`Rejected "${bike.title}".`, 'info');
    renderAdminListingsTable();
    renderMarketplace();
  }
}

function adminToggleFeatured(id) {
  const listings = Store.getListings();
  const bike = listings.find(b => b.id === id);
  if (bike) {
    bike.featured = !bike.featured;
    Store.setListings(listings);
    showToast(`Toggled featured status for "${bike.title}".`, 'info');
    renderAdminListingsTable();
    renderMarketplace();
  }
}

function adminDeleteListing(id) {
  if (confirm('Are you sure you want to delete this listing permanently?')) {
    let listings = Store.getListings();
    listings = listings.filter(b => b.id !== id);
    Store.setListings(listings);
    showToast('Listing removed from marketplace.', 'info');
    renderAdminListingsTable();
    renderMarketplace();
  }
}

function renderAdminUsersTable() {
  const tbody = document.getElementById('admin-users-tbody');
  if (!tbody) return;

  const users = Store.getUsers();

  tbody.innerHTML = users.map(u => `
    <tr>
      <td style="font-weight: 700;">${u.name}</td>
      <td>${u.email}</td>
      <td><span class="status-pill status-${u.role === 'admin' ? 'approved' : 'pending'}">${u.role.toUpperCase()}</span></td>
      <td><span class="status-pill status-${u.status}">${u.status.toUpperCase()}</span></td>
      <td>
        ${u.role !== 'admin' ? `
          <button class="dash-btn-action" onclick="adminToggleUserBlock('${u.email}')">
            ${u.status === 'blocked' ? 'Unblock' : 'Block User'}
          </button>
        ` : 'Super Admin'}
      </td>
    </tr>
  `).join('');
}

function adminToggleUserBlock(email) {
  const users = Store.getUsers();
  const user = users.find(u => u.email === email);
  if (user) {
    user.status = user.status === 'blocked' ? 'active' : 'blocked';
    Store.setUsers(users);
    showToast(`User ${user.name} is now ${user.status}.`, 'info');
    renderAdminUsersTable();
  }
}

function renderDashboardEnquiries() {
  const tbody = document.getElementById('admin-enquiries-tbody');
  if (!tbody) return;

  const enquiries = Store.getEnquiries();

  tbody.innerHTML = enquiries.map(e => `
    <tr>
      <td>${e.date}</td>
      <td style="font-weight: 700;">${e.name}</td>
      <td>${e.bikeTitle}</td>
      <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${e.message}</td>
      <td><span class="status-pill status-approved">${e.status}</span></td>
      <td>
        <button class="dash-btn-action" onclick="adminToggleEnquiryStatus(${e.id})">Toggle Status</button>
      </td>
    </tr>
  `).join('');
}

function adminToggleEnquiryStatus(id) {
  const enquiries = Store.getEnquiries();
  const item = enquiries.find(e => e.id === id);
  if (item) {
    item.status = item.status === 'Contacted' ? 'Closed' : 'Contacted';
    Store.setEnquiries(enquiries);
    showToast(`Inquiry marked as ${item.status}.`, 'info');
    renderDashboardEnquiries();
  }
}

/* Interactive Canvas Chart for Admin KPI */
function renderAdminChart() {
  const canvas = document.getElementById('admin-kpi-chart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = 240 * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = 240;

  ctx.clearRect(0, 0, w, h);

  // Data Points (Monthly Sales Trend in $K)
  const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const data = [38, 52, 64, 82, 98, 136];
  const maxVal = 150;

  // Grid lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 30 + (i * (h - 60) / 4);
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();
  }

  // Draw Gradient Filled Area
  const stepX = (w - 70) / (data.length - 1);
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, 'rgba(255, 77, 26, 0.45)');
  grad.addColorStop(1, 'rgba(255, 77, 26, 0.0)');

  ctx.beginPath();
  data.forEach((val, i) => {
    const x = 50 + (i * stepX);
    const y = h - 30 - ((val / maxVal) * (h - 60));
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(50 + ((data.length - 1) * stepX), h - 30);
  ctx.lineTo(50, h - 30);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Draw Glowing Stroke Line
  ctx.beginPath();
  data.forEach((val, i) => {
    const x = 50 + (i * stepX);
    const y = h - 30 - ((val / maxVal) * (h - 60));
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#FF4D1A';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(255, 77, 26, 0.8)';
  ctx.shadowBlur = 12;
  ctx.stroke();

  // Reset Shadow & Draw Points
  ctx.shadowBlur = 0;
  data.forEach((val, i) => {
    const x = 50 + (i * stepX);
    const y = h - 30 - ((val / maxVal) * (h - 60));

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#9AA3B2';
    ctx.font = '11px Orbitron, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`$${val}k`, x, y - 10);
    ctx.fillText(labels[i], x, h - 12);
  });
}

/* ==========================================================================
   19. MODALS MANAGER (QUICK VIEW, TEST RIDE, ENQUIRY, LEGAL)
   ========================================================================== */
function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function setupModalSystem() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));

    // Click outside dialog to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => closeModal(m));
    }
  });

  // Legal Privacy & Terms Trigger
  const legalTriggers = document.querySelectorAll('.open-legal-modal');
  const legalModal = document.getElementById('legal-modal');
  legalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(legalModal);
    });
  });

  // Wishlist Nav Button Trigger
  const navWishlistBtn = document.getElementById('nav-wishlist-btn') || document.querySelector('.nav-wishlist-btn');
  if (navWishlistBtn) {
    navWishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openWishlistModal();
    });
  }

  // Wishlist Clear All Button
  const clearWishlistBtn = document.getElementById('wishlist-clear-all-btn');
  if (clearWishlistBtn) {
    clearWishlistBtn.addEventListener('click', () => {
      Store.setWishlist([]);
      updateWishlistBadge();
      renderMarketplace();
      renderDashboardSavedRides();
      renderWishlistModalContent();
      showToast('Wishlist collection cleared', 'info');
    });
  }
}

/* Wishlist Modal Handlers */
function renderWishlistModalContent() {
  const modal = document.getElementById('wishlist-modal');
  if (!modal) return;
  const listContainer = document.getElementById('wishlist-modal-items');
  const countSpan = document.getElementById('wishlist-modal-count');
  const clearBtn = document.getElementById('wishlist-clear-all-btn');
  const wishlist = Store.getWishlist();
  const listings = Store.getListings();
  const savedBikes = listings.filter(b => wishlist.includes(b.id));

  if (countSpan) countSpan.textContent = savedBikes.length;
  if (clearBtn) clearBtn.style.display = savedBikes.length > 0 ? 'inline-block' : 'none';

  if (!listContainer) return;

  if (savedBikes.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(255, 77, 26, 0.1); border: 1px solid var(--border-glow); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <h4 style="font-family: var(--font-racing); color: var(--text-chrome); font-size: 1.15rem; margin-bottom: 0.5rem;">Your Wishlist Is Empty</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 380px; margin: 0 auto 1.5rem auto;">Explore the marketplace and tap the heart icon on any superbike or scooter to keep track of it here.</p>
        <button class="btn btn-primary btn-sm" onclick="closeModal(document.getElementById('wishlist-modal')); const b = document.getElementById('bikes'); if (b) b.scrollIntoView({behavior: 'smooth'});">Explore Machines &rarr;</button>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = savedBikes.map(bike => `
    <div class="wishlist-item-card">
      <img src="${bike.image}" alt="${bike.title}" class="wishlist-item-img">
      <div class="wishlist-item-info">
        <div class="wishlist-item-brand">${bike.brand} • ${bike.city}</div>
        <div class="wishlist-item-title">${bike.title}</div>
        <div class="wishlist-item-price">$${bike.price.toLocaleString()}</div>
        <div class="wishlist-item-meta">${bike.year} • ${bike.km.toLocaleString()} km • ${bike.power}</div>
      </div>
      <div class="wishlist-item-actions">
        <button class="btn btn-primary btn-sm" onclick="closeModal(document.getElementById('wishlist-modal')); openQuickViewModal(${bike.id});" title="Quick View">View</button>
        <button class="btn btn-secondary btn-sm" onclick="closeModal(document.getElementById('wishlist-modal')); openTestRideModal(${bike.id});" title="Book Test Ride">Test Ride</button>
        <button class="wishlist-item-remove-btn" onclick="toggleWishlist(${bike.id});" title="Remove from wishlist" aria-label="Remove">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function openWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  if (!modal) return;
  renderWishlistModalContent();
  openModal(modal);
}

/* Quick View Modal Handler */
function openQuickViewModal(bikeId) {
  const modal = document.getElementById('quickview-modal');
  const bike = Store.getListings().find(b => b.id === bikeId);
  if (!modal || !bike) return;

  const content = modal.querySelector('.modal-body-dynamic');
  if (content) {
    content.innerHTML = `
      <div class="quickview-layout">
        <div>
          <img src="${bike.image}" alt="${bike.title}" class="quickview-img">
          <div style="margin-top: 1rem; text-align: center;">
            <span class="status-pill status-approved">Hive 180-Point Certified (${bike.inspectionScore}/100)</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; text-align: left;">
          <span style="font-family: var(--font-sub); color: var(--color-secondary); font-weight: 700;">${bike.brand} • ${bike.city}</span>
          <h2 style="font-family: var(--font-racing); font-size: 1.5rem; color: var(--text-chrome); margin: 0.4rem 0;">${bike.title}</h2>
          <div class="bike-price-val" style="margin-bottom: 1rem;">$${bike.price.toLocaleString()}</div>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">${bike.description}</p>
          <div class="bike-specs-pills" style="justify-content: flex-start;">
            <span class="spec-pill">Year: ${bike.year}</span>
            <span class="spec-pill">Odo: ${bike.km.toLocaleString()} km</span>
            <span class="spec-pill">Engine: ${bike.engine}</span>
            <span class="spec-pill">Power: ${bike.power}</span>
            <span class="spec-pill">0-100: ${bike.accel}</span>
          </div>
          <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
            <button class="btn btn-primary btn-sm" onclick="closeModal(document.getElementById('quickview-modal')); openTestRideModal(${bike.id});">Book Test Ride</button>
            <button class="btn btn-secondary btn-sm" onclick="closeModal(document.getElementById('quickview-modal')); openEnquiryModal(${bike.id});">Enquire with Hive</button>
          </div>
        </div>
      </div>
    `;
  }
  openModal(modal);
}

/* Test Ride Booking Modal */
function openTestRideModal(bikeId) {
  const modal = document.getElementById('testride-modal');
  const bike = Store.getListings().find(b => b.id === bikeId);
  if (!modal) return;

  const titleEl = modal.querySelector('.testride-bike-title');
  const bikeIdInput = modal.querySelector('#testride-bike-id');
  if (titleEl && bike) titleEl.textContent = bike.title;
  if (bikeIdInput && bike) bikeIdInput.value = bike.id;

  const form = document.getElementById('testride-booking-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const session = Store.getSession();
      const userEmail = session ? session.email : (document.getElementById('testride-email')?.value.trim() || 'guest@torq.com');
      const date = document.getElementById('testride-date')?.value;
      const time = document.getElementById('testride-time')?.value;
      const type = document.getElementById('testride-delivery-type')?.value;

      if (!date || !time) {
        showToast('Please select preferred date and time slot.', 'danger');
        return;
      }

      const testRides = Store.getTestRides();
      testRides.unshift({
        id: Date.now(),
        bikeId: bike ? bike.id : 0,
        bikeTitle: bike ? bike.title : "Vehicle Test Ride",
        userEmail: userEmail,
        date: date,
        time: time,
        type: type,
        status: "confirmed"
      });
      Store.setTestRides(testRides);

      showToast(`Test ride confirmed for ${date} at ${time}! Marshall assigned.`, 'success');
      closeModal(modal);
      form.reset();
      renderDashboardTestRides();
      renderDashboardStats();
    };
  }

  openModal(modal);
}

/* Vehicle Enquiry Modal */
function openEnquiryModal(bikeId) {
  const modal = document.getElementById('enquiry-modal');
  const bike = Store.getListings().find(b => b.id === bikeId);
  if (!modal) return;

  const titleEl = modal.querySelector('.enquiry-bike-title');
  if (titleEl && bike) titleEl.textContent = bike.title;

  const form = document.getElementById('bike-enquiry-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('enquiry-name')?.value.trim();
      const email = document.getElementById('enquiry-email')?.value.trim();
      const msg = document.getElementById('enquiry-msg')?.value.trim();

      const enquiries = Store.getEnquiries();
      enquiries.unshift({
        id: Date.now(),
        bikeId: bike ? bike.id : 0,
        bikeTitle: bike ? bike.title : "Marketplace Enquiry",
        name: name,
        email: email,
        phone: document.getElementById('enquiry-phone')?.value.trim() || 'N/A',
        message: msg,
        status: "Contacted",
        date: new Date().toISOString().split('T')[0]
      });
      Store.setEnquiries(enquiries);

      showToast('Enquiry received! The Hive Marshal team will connect shortly.', 'success');
      closeModal(modal);
      form.reset();
      renderDashboardEnquiries();
    };
  }

  openModal(modal);
}

// Global scope bindings for inline calls
window.toggleWishlist = toggleWishlist;
window.openWishlistModal = openWishlistModal;
window.renderWishlistModalContent = renderWishlistModalContent;
window.openQuickViewModal = openQuickViewModal;
window.openTestRideModal = openTestRideModal;
window.openEnquiryModal = openEnquiryModal;
window.closeModal = closeModal;
window.resetMarketplaceFilters = resetMarketplaceFilters;
window.adminApproveListing = adminApproveListing;
window.adminRejectListing = adminRejectListing;
window.adminToggleFeatured = adminToggleFeatured;
window.adminDeleteListing = adminDeleteListing;
window.adminToggleUserBlock = adminToggleUserBlock;
window.adminToggleEnquiryStatus = adminToggleEnquiryStatus;
window.cancelTestRide = cancelTestRide;

/* ==========================================================================
   BRAND MARQUEE RUNNING TICKER JS ENGINE (FAILSAFE FALLBACK)
   ========================================================================== */
function setupBrandMarquee() {
  const track = document.querySelector('.brand-marquee-track');
  if (!track) return;

  let isPaused = false;
  let posX = 0;
  const speed = 1.2;

  track.addEventListener('mouseenter', () => { isPaused = true; });
  track.addEventListener('mouseleave', () => { isPaused = false; });
  track.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
  track.addEventListener('touchend', () => { isPaused = false; }, { passive: true });

  function checkAndRunJSAnimation() {
    const computed = window.getComputedStyle(track);
    const animName = computed.getPropertyValue('animation-name') || computed.getPropertyValue('-webkit-animation-name');
    const animDur = computed.getPropertyValue('animation-duration') || computed.getPropertyValue('-webkit-animation-duration');

    if (!animName || animName === 'none' || animDur === '0s' || animDur === '0.01ms') {
      function step() {
        if (!isPaused) {
          posX += speed;
          const halfWidth = track.scrollWidth / 2;
          if (posX >= halfWidth && halfWidth > 0) {
            posX = 0;
          }
          track.style.transform = `translate3d(-${posX}px, 0, 0)`;
        }
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  }

  setTimeout(checkAndRunJSAnimation, 150);
}

/* ==========================================================================
   20. MASTER INITIALIZATION ON DOM CONTENT LOADED
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setupPreloader();
  setupCursorAndScrollProgress();
  setupThemeDefaults();
  setupMobileNav();
  setupBrandMarquee();
  setupMarketplaceControls();
  renderMarketplace();
  updateWishlistBadge();
  setupEmiCalculator();
  setupCompareTool();
  setupSellWizard();
  setupCommunityEvents();
  setupTestimonials();
  setupFaqAccordion();
  setupContactAndNewsletter();
  setupAuthSystem();
  setupDashboard();
  setupModalSystem();

  // Back to top buttons (Floating fixed button & footer link)
  const floatingTopBtn = document.getElementById('floating-scroll-top');
  const footerTopBtn = document.querySelector('.back-to-top-btn');

  function handleScrollTopVisibility() {
    if (floatingTopBtn) {
      if (window.scrollY > 350) {
        floatingTopBtn.classList.add('visible');
      } else {
        floatingTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });
  handleScrollTopVisibility();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (floatingTopBtn) floatingTopBtn.addEventListener('click', scrollToTop);
  if (footerTopBtn) footerTopBtn.addEventListener('click', scrollToTop);
});
