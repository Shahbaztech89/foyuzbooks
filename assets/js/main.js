/* =========================================================
   Main site behaviour
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHeroSlider();
  renderBooks();
  renderArticles();
  renderHadith();
  initScrollReveal();
  initLightbox();
  initBookFilter();
  initArticleDetail();
  initContactForm();
  markActiveNav();
  renderAuthorAndContact();
});

/* ---------- Fill in real author + contact details ---------- */
function renderAuthorAndContact() {
  if (typeof SITE_AUTHOR !== "undefined") {
    document.querySelectorAll("[data-author-name]").forEach(el => (el.textContent = SITE_AUTHOR.name));
    document.querySelectorAll("[data-author-role]").forEach(el => (el.textContent = SITE_AUTHOR.role));
    document.querySelectorAll("[data-author-books-count]").forEach(el => (el.textContent = SITE_AUTHOR.booksCount));
    document.querySelectorAll("[data-author-articles-count]").forEach(el => (el.textContent = SITE_AUTHOR.articlesCount));
    document.querySelectorAll("[data-author-cited-count]").forEach(el => (el.textContent = SITE_AUTHOR.citedByCount));
  }
  if (typeof SITE_CONTACT !== "undefined") {
    document.querySelectorAll("[data-contact-address]").forEach(el => (el.textContent = SITE_CONTACT.address));
    document.querySelectorAll("[data-contact-mobile]").forEach(el => (el.textContent = `${SITE_CONTACT.mobile1} · ${SITE_CONTACT.mobile2}`));
    document.querySelectorAll("[data-contact-email]").forEach(el => {
      el.textContent = SITE_CONTACT.email;
      if (el.tagName === "A") el.href = `mailto:${SITE_CONTACT.email}`;
    });
    document.querySelectorAll("[data-contact-whatsapp]").forEach(el => (el.textContent = SITE_CONTACT.whatsapp));
    document.querySelectorAll("[data-social-facebook]").forEach(el => (el.href = SITE_CONTACT.facebook));
    document.querySelectorAll("[data-social-twitter]").forEach(el => (el.href = SITE_CONTACT.twitter));
    document.querySelectorAll("[data-social-telegram]").forEach(el => (el.href = SITE_CONTACT.telegram));
    document.querySelectorAll("[data-social-whatsapp]").forEach(el => (el.href = `https://wa.me/${SITE_CONTACT.whatsapp.replace(/[^\d]/g, "")}`));
    const mapFrame = document.querySelector("[data-map-frame]");
    if (mapFrame) mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(SITE_CONTACT.mapQuery)}&output=embed`;
  }
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    const isOpen = links.classList.contains("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function markActiveNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(".nav-links a[data-nav]").forEach(a => {
    if (a.getAttribute("data-nav") === page) a.classList.add("active");
  });
}

/* ---------- Hero slider (home page) ---------- */
function initHeroSlider() {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const dotsWrap = slider.querySelector(".slider-dots");
  let current = 0;
  let timer;

  slides.forEach((s, i) => {
    if (dotsWrap) {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `سلائیڈ ${i + 1}`);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  });

  function goTo(index) {
    slides[current].classList.remove("active");
    dotsWrap?.children[current]?.classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dotsWrap?.children[current]?.classList.add("active");
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
  }

  slider.querySelector(".slider-arrow.next")?.addEventListener("click", () => goTo(current + 1));
  slider.querySelector(".slider-arrow.prev")?.addEventListener("click", () => goTo(current - 1));

  resetTimer();
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal:not(.in)");
  if (!items.length) return;

  // Safety net: if IntersectionObserver isn't available for any reason,
  // just show everything instead of leaving it invisible.
  if (!("IntersectionObserver" in window)) {
    items.forEach(i => i.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach(i => io.observe(i));

  // Extra safety net: guarantee nothing stays invisible forever even if a
  // card is added dynamically after this scan and never gets observed.
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach(i => i.classList.add("in"));
  }, 2500);
}

/* ---------- Books rendering ---------- */
function bookCardHTML(book) {
  return `
    <article class="book-card reveal">
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title} — سرِ ورق" loading="lazy">
      </div>
      <div class="book-body">
        <span class="badge-tag">${book.category}</span>
        <h3 class="book-name">${book.title}</h3>
        <p class="book-meta">${book.meta || ""}</p>
        <div class="book-actions">
          <a class="btn btn-outline-dark" href="${book.readUrl}" target="_blank" rel="noopener">آن لائن پڑھیں</a>
          <a class="btn btn-gold" href="${book.downloadUrl}" target="_blank" rel="noopener">ڈاؤن لوڈ کریں</a>
        </div>
      </div>
    </article>`;
}

function renderBooks() {
  const homeGrid = document.querySelector("[data-books-home]");
  if (homeGrid) {
    homeGrid.innerHTML = SITE_BOOKS.slice(0, 4).map(bookCardHTML).join("");
  }
  const fullGrid = document.querySelector("[data-books-all]");
  if (fullGrid) {
    fullGrid.innerHTML = SITE_BOOKS.map(bookCardHTML).join("");
  }
}

function initBookFilter() {
  const bar = document.querySelector(".filter-bar");
  const grid = document.querySelector("[data-books-all]");
  const search = document.querySelector("[data-book-search]");
  if (!grid) return;

  function applyFilters() {
    const activeBtn = bar?.querySelector(".filter-btn.active");
    const cat = activeBtn ? activeBtn.dataset.filter : "all";
    const term = (search?.value || "").trim();
    const filtered = SITE_BOOKS.filter(b => {
      const matchCat = cat === "all" || b.category === cat;
      const matchTerm = !term || b.title.includes(term);
      return matchCat && matchTerm;
    });
    grid.innerHTML = filtered.length
      ? filtered.map(bookCardHTML).join("")
      : `<p class="text-center" style="grid-column:1/-1;color:var(--ink-soft);">اس زمرے میں فی الحال کوئی کتاب موجود نہیں۔</p>`;
    initScrollReveal();
  }

  if (bar) {
    bar.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  }
  search?.addEventListener("input", applyFilters);
}

/* ---------- Articles rendering ---------- */
function articleCardHTML(article) {
  const metaLine = article.comingSoon
    ? `<span class="badge-tag">جلد آ رہا ہے</span>`
    : `<span>${article.date}</span>`;
  const linkHTML = article.comingSoon
    ? `<span style="color:var(--ink-soft);">جلد آ رہا ہے</span>`
    : `<a href="${article.externalUrl}" target="_blank" rel="noopener">پورا پڑھیں ←</a>`;
  return `
    <article class="article-card reveal">
      <div class="article-thumb">
        <img src="${article.cover}" alt="${article.title}" loading="lazy">
      </div>
      <div class="article-body">
        <span class="article-cat">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-foot">
          ${metaLine}
          ${linkHTML}
        </div>
      </div>
    </article>`;
}

function renderArticles() {
  const homeGrid = document.querySelector("[data-articles-home]");
  if (homeGrid) {
    homeGrid.innerHTML = SITE_ARTICLES.slice(0, 2).map(articleCardHTML).join("");
  }
  const fullGrid = document.querySelector("[data-articles-all]");
  if (fullGrid) {
    fullGrid.innerHTML = SITE_ARTICLES.map(articleCardHTML).join("");
  }
}

/* ---------- Article detail page ----------
   Articles now open on the author's original blog (foyuz.blogspot.com)
   in a new tab instead of a local detail page, so this page is no
   longer used, but kept harmless in case article.html is still linked
   anywhere. */
function initArticleDetail() {
  const wrap = document.querySelector("[data-article-detail]");
  if (!wrap) return;
  wrap.innerHTML = `
    <section class="section text-center">
      <div class="container">
        <p>مضامین اب براہِ راست مصنف کی اصل ویب سائٹ پر نئے ٹیب میں کھلتے ہیں۔</p>
        <a href="articles.html" class="back-link">→ تمام مضامین کی طرف واپس جائیں</a>
      </div>
    </section>`;
}

/* ---------- Hadith gallery rendering ---------- */
function hadithCardHTML(h) {
  return `
    <div class="hadith-card reveal" data-hadith-image="${h.image}" data-hadith-alt="${h.alt}">
      <img src="${h.image}" alt="${h.alt}" loading="lazy">
      <div class="hadith-zoom">⤢</div>
    </div>`;
}

function renderHadith() {
  const homeGrid = document.querySelector("[data-hadith-home]");
  if (homeGrid) {
    homeGrid.innerHTML = SITE_HADITH.slice(0, 4).map(hadithCardHTML).join("");
  }
  const fullGrid = document.querySelector("[data-hadith-all]");
  if (fullGrid) {
    fullGrid.innerHTML = SITE_HADITH.map(hadithCardHTML).join("");
  }
}

/* ---------- Lightbox for hadith images ---------- */
function initLightbox() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;
  const img = lightbox.querySelector("img");
  document.addEventListener("click", e => {
    const card = e.target.closest(".hadith-card");
    if (card) {
      img.src = card.dataset.hadithImage;
      img.alt = card.dataset.hadithAlt || "";
      lightbox.classList.add("open");
    }
    if (e.target.closest(".lightbox-close") || e.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox.classList.remove("open");
  });
}

/* ---------- Contact form (front-end only demo) ---------- */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const note = form.querySelector("[data-form-status]");
    if (note) {
      note.textContent = "شکریہ! آپ کا پیغام موصول ہو گیا ہے، ہم جلد رابطہ کریں گے۔";
      note.style.color = "var(--green-deep)";
    }
    form.reset();
  });
}
