/* ============================================================
   YOSHAN COFFEE ROASTERS — Main JavaScript
   ============================================================ */

// ── Mobile Nav ──
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

if (hamburger) {
  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
}
if (mobileNavClose) {
  mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));
}
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ── Sticky Nav Active Link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sTop = section.offsetTop - 100;
    const sH = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= sTop && scrollY < sTop + sH) {
      navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === `#${id}`) l.classList.add('active');
      });
    }
  });
});

// ── Capacity Calculator ──
const batchesSlider = document.getElementById('batches-per-day');
const batchSizeSlider = document.getElementById('batch-size');
const batchesVal = document.getElementById('batches-val');
const batchSizeVal = document.getElementById('batch-size-val');
const resultKg = document.getElementById('result-kg');
const resultRec = document.getElementById('result-recommendation');

function calcResult() {
  if (!batchesSlider) return;
  const batches = parseInt(batchesSlider.value);
  const size = parseFloat(batchSizeSlider.value);
  const totalKg = batches * size;
  batchesVal.textContent = batches + ' batches';
  batchSizeVal.textContent = size + ' kg';
  resultKg.textContent = totalKg.toFixed(0) + ' kg/day';

  let rec = '';
  if (totalKg <= 20)        rec = '→ Recommended: <strong>DY-1KG</strong> or <strong>SD-1.5 Pro</strong> — perfect for your volume';
  else if (totalKg <= 60)   rec = '→ Recommended: <strong>YS-6KG</strong> or <strong>SD-6 Pro</strong> — Siemens precision at your scale';
  else if (totalKg <= 150)  rec = '→ Recommended: <strong>YS-15KG</strong> or <strong>SD-15 Pro</strong> — commercial-grade efficiency';
  else if (totalKg <= 400)  rec = '→ Recommended: <strong>YS-30KG</strong> or <strong>SD-30 Pro</strong> — serious roastery power';
  else if (totalKg <= 800)  rec = '→ Recommended: <strong>SD-60 Pro</strong> — industrial full-auto line';
  else                       rec = '→ Recommended: <strong>SD-120KG Pro</strong> or <strong>SD-240/360KG</strong> — factory-scale solution';
  resultRec.innerHTML = rec;
}

if (batchesSlider) {
  batchesSlider.addEventListener('input', calcResult);
  batchSizeSlider.addEventListener('input', calcResult);
  calcResult();
}

// ── Quote Form ──
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(quoteForm);
    const name    = data.get('name');
    const email   = data.get('email');
    const product = data.get('product');
    const message = data.get('message');
    const phone   = data.get('phone') || '';

    // Build WhatsApp message
    const waMsg = encodeURIComponent(
      `Hello Yoshan! I'm interested in a quote.\n\n` +
      `Name: ${name}\n` +
      `Product Interest: ${product}\n` +
      `Message: ${message}\n` +
      `Contact: ${email} ${phone}`
    );
    const waUrl = `https://wa.me/8618407714607?text=${waMsg}`;

    // Show success + open WhatsApp
    const btn = quoteForm.querySelector('[type="submit"]');
    btn.textContent = '✓ Sent! Opening WhatsApp...';
    btn.style.background = '#25D366';
    setTimeout(() => { window.open(waUrl, '_blank'); }, 600);
    setTimeout(() => {
      btn.textContent = 'Send Quote Request';
      btn.style.background = '';
      quoteForm.reset();
    }, 3000);
  });
}

// ── Scroll Reveal Animation ──
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
