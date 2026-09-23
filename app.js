/* ============================================================
   Portfolio App — plain JavaScript (no build step)
   Renders content from data.js, handles navbar, carousels,
   scroll-reveal animations, and smooth navigation.
   ============================================================ */

(function () {
  'use strict';

  const data = window.portfolioData || portfolioData;
  const { profile, skillGroups, experiences, education, spokenLanguages, navLinks } = data;

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ============================================================
     RENDER: NAV
     ============================================================ */
  function renderNav() {
    const desktop = $('#navLinks');
    const mobile = $('#navMobileLinks');
    if (!desktop || !mobile) return;

    let desktopHtml = '';
    let mobileHtml = '';

    navLinks.forEach((link) => {
      desktopHtml += `<li><a href="${link.href}">${link.label}</a></li>`;
      mobileHtml += `<li><a href="${link.href}">${link.label}</a></li>`;
    });

    desktopHtml += '';
    mobileHtml += '';

    desktop.innerHTML = desktopHtml;
    mobile.innerHTML = mobileHtml;
  }

  /* ============================================================
     RENDER: HERO
     ============================================================ */
  function renderHero() {
    const navName = $('#navName');
    const heroName = $('#heroName');
    const heroLocation = $('#heroLocation');
    const heroTagline = $('#heroTagline');

    if (navName) navName.textContent = profile.firstName;
    if (heroName) heroName.textContent = profile.firstName;
    if (heroLocation) heroLocation.textContent = profile.location;
    if (heroTagline) heroTagline.textContent = profile.tagline;
  }

  /* ============================================================
     RENDER: ABOUT
     ============================================================ */
  function renderAbout() {
    const bio = $('#aboutBio');
    if (bio) {
      bio.innerHTML = profile.bio
        .map((p, i) => `<div class="reveal" style="transition-delay:${i * 90}ms"><p>${escapeHtml(p)}</p></div>`)
        .join('');
    }

    const eduList = $('#educationList');
    if (eduList) {
      eduList.innerHTML = education
        .map(
          (item) => `
        <li>
          <p>${escapeHtml(item.school)}</p>
          <p class="edu-detail">${escapeHtml(item.detail)}</p>
          <p class="edu-date">${escapeHtml(item.date)}</p>
        </li>`
        )
        .join('');
    }

    const langList = $('#langList');
    if (langList) {
      langList.innerHTML = spokenLanguages
        .map(
          (lang) => `
        <li>
          <span>${escapeHtml(lang.name)}</span>
          <span class="lang-level">${escapeHtml(lang.level)}</span>
        </li>`
        )
        .join('');
    }
  }

  /* ============================================================
     RENDER: SKILLS
     ============================================================ */
  function renderSkills() {
    const grid = $('#skillsGrid');
    if (!grid) return;

    grid.innerHTML = skillGroups
      .map(
        (group, i) => `
      <div class="reveal" style="transition-delay:${i * 100}ms">
        <div class="skill-card">
          <div class="skill-card-header">
            <span class="skill-dot skill-dot--${group.accent}"></span>
            <h3 class="skill-card-title">${escapeHtml(group.title)}</h3>
          </div>
          <ul class="skill-tags">
            ${group.items
              .map(
                (item) => `
              <li class="skill-tag">
                <span style="font-weight:500">${escapeHtml(item.name)}</span>
                ${item.level ? `<span class="skill-level">· ${escapeHtml(item.level)}</span>` : ''}
              </li>`
              )
              .join('')}
          </ul>
        </div>
      </div>`
      )
      .join('');
  }

  /* ============================================================
     RENDER: WORK / TIMELINE
     ============================================================ */
  const MONTHS = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  };

  // Turn a date string like "Aug 2026 — Sep 2026", "2025", "2019 — 2021"
  // into a sortable number (higher = more recent). Uses the end date.
  function dateRank(dateStr) {
    const str = String(dateStr || '').trim();
    const parts = str.split(/[—-]/).map((s) => s.trim()).filter(Boolean);
    const end = parts.length ? parts[parts.length - 1] : str;
    if (!end) return 0;
    if (/present/i.test(end)) return 999999;
    const m = end.match(/^([A-Za-z]+)?\s*(\d{4})$/);
    if (!m) return 0;
    const year = parseInt(m[2], 10);
    if (m[1]) {
      const mon = MONTHS[m[1].slice(0, 3).toLowerCase()];
      if (mon !== undefined) return year * 12 + mon;
    }
    return year * 12 + 11; // bare year → end of that year
  }

  function renderWork() {
    const list = $('#timelineList');
    if (!list) return;

    const sorted = [...experiences].sort((a, b) => {
      const aType = a.type === 'Experience' ? 0 : 1;
      const bType = b.type === 'Experience' ? 0 : 1;
      if (aType !== bType) return aType - bType;
      return dateRank(b.date) - dateRank(a.date);
    });

    list.innerHTML = sorted
      .map((item, i) => {
        const hasImages = item.images && Array.isArray(item.images) && item.images.length > 0;
        return `
        <li class="reveal timeline-item" style="transition-delay:${(i % 3) * 80}ms">
          <span class="timeline-dot" aria-hidden="true"></span>
          <article class="work-card">
            <div class="work-card-top">
              <span class="work-type">${escapeHtml(item.type)}</span>
              <span class="work-date">${escapeHtml(item.date)}</span>
            </div>
            <h3 class="work-title">${escapeHtml(item.title)}</h3>
            ${item.tag ? `<span class="work-tag">${escapeHtml(item.tag)}</span>` : ''}
            <ul class="work-points">
              ${item.points
                .map(
                  (point) => `
                <li>
                  <span class="bullet"></span>
                  <span class="point-text">${escapeHtml(point)}</span>
                </li>`
                )
                .join('')}
            </ul>
            ${hasImages ? renderCarousel(item.images, item.title) : ''}
          </article>
        </li>`;
      })
      .join('');
  }

  function renderCarousel(images, title) {
    const id = 'carousel-' + Math.random().toString(36).slice(2, 9);
    const count = images.length;
    const slides = images
      .map(
        (src, i) => `
      <div class="carousel-slide">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(title)} — screenshot ${i + 1} of ${count}" loading="lazy" />
      </div>`
      )
      .join('');

    const nav =
      count > 1
        ? `
      <button type="button" class="carousel-btn carousel-btn--prev" aria-label="Previous screenshot">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button type="button" class="carousel-btn carousel-btn--next" aria-label="Next screenshot">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>`
        : '';

    const dots =
      count > 1
        ? `<div class="carousel-dots">
            ${images
              .map(
                (_, i) =>
                  `<button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" aria-label="Go to screenshot ${i + 1}" data-index="${i}"></button>`
              )
              .join('')}
          </div>`
        : '';

    return `
      <div class="carousel" id="${id}" data-count="${count}">
        <div class="carousel-viewport">
          <div class="carousel-track">${slides}</div>
          ${nav}
        </div>
        ${dots}
      </div>`;
  }

  /* ============================================================
     CAROUSEL BEHAVIOR
     ============================================================ */
  function initCarousels() {
    $$('.carousel').forEach((carousel) => {
      const track = $('.carousel-track', carousel);
      const count = parseInt(carousel.dataset.count, 10) || 1;
      if (count <= 1 || !track) return;

      let index = 0;

      const update = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        $$('.carousel-dot', carousel).forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      };

      const go = (next) => {
        index = (next + count) % count;
        update();
      };

      const prev = $('.carousel-btn--prev', carousel);
      const next = $('.carousel-btn--next', carousel);
      if (prev) prev.addEventListener('click', () => go(index - 1));
      if (next) next.addEventListener('click', () => go(index + 1));

      $$('.carousel-dot', carousel).forEach((dot) => {
        dot.addEventListener('click', () => {
          index = parseInt(dot.dataset.index, 10) || 0;
          update();
        });
      });
    });
  }

  /* ============================================================
     RENDER: CONTACT
     ============================================================ */
  function renderContact() {
    const grid = $('#contactGrid');
    if (!grid) return;

    const icons = {
      email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
      github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
      linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0Z"/></svg>',
      phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    };

    const cards = [
      {
        label: 'Email',
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: icons.email,
        external: false,
      },
      {
        label: 'GitHub',
        value: profile.github.replace(/^https?:\/\//, ''),
        href: profile.github,
        icon: icons.github,
        external: true,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/yasmin-haytham',
        href: profile.linkedin,
        icon: icons.linkedin,
        external: true,
      },
      {
        label: 'Phone',
        value: profile.phone,
        href: `tel:${profile.phone.replace(/\s/g, '')}`,
        icon: icons.phone,
        external: false,
      },
    ];

    grid.innerHTML = cards
      .map(
        (card, i) => `
      <div class="reveal" style="transition-delay:${i * 80}ms">
        <a href="${escapeHtml(card.href)}"
           ${card.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
           class="contact-card">
          <span class="contact-card-icon">${card.icon}</span>
          <span class="contact-card-body">
            <span class="contact-card-label">${escapeHtml(card.label)}</span>
            <span class="contact-card-value">${escapeHtml(card.value)}</span>
          </span>
        </a>
      </div>`
      )
      .join('');
  }

  /* ============================================================
     RENDER: FOOTER
     ============================================================ */
  function renderFooter() {
    const footerText = $('#footerText');
    if (footerText) {
      footerText.textContent = `© ${new Date().getFullYear()} ${profile.name}. Built with HTML, CSS & JavaScript.`;
    }
  }

  /* ============================================================
     NAVBAR SCROLL + MOBILE MENU
     ============================================================ */
  function initNavbar() {
    const header = $('#siteHeader');
    const toggle = $('#navToggle');
    const mobile = $('#navMobile');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle && mobile) {
      const iconMenu = $('.icon-menu', toggle);
      const iconClose = $('.icon-close', toggle);

      toggle.addEventListener('click', () => {
        const isOpen = !mobile.hidden;
        mobile.hidden = isOpen;
        toggle.setAttribute('aria-expanded', String(!isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
        if (iconMenu) iconMenu.style.display = isOpen ? '' : 'none';
        if (iconClose) iconClose.style.display = isOpen ? 'none' : '';
      });

      // Close mobile menu when a link is clicked
      $$('a', mobile).forEach((link) => {
        link.addEventListener('click', () => {
          mobile.hidden = true;
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Open menu');
          if (iconMenu) iconMenu.style.display = '';
          if (iconClose) iconClose.style.display = 'none';
        });
      });
    }
  }

  /* ============================================================
     SCROLL REVEAL (IntersectionObserver)
     ============================================================ */
  function initReveal() {
    const els = $$('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    renderNav();
    renderHero();
    renderAbout();
    renderSkills();
    renderWork();
    renderContact();
    renderFooter();

    initNavbar();
    initCarousels();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
