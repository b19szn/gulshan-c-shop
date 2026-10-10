// app.js - Gulshan Coffee site interactivity (no server required)

// Helpers
function $(sel, root=document) { return root.querySelector(sel); }
function $all(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple mobile menu toggle (visual only for this static demo)
(function() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.primary-nav');
  if (!btn) return;
  btn.addEventListener('click', () => {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    btn.classList.toggle('active');
  });
})();

// Tab filtering for Menu
(function() {
  const tabs = $all('.tab');
  const cards = $all('.card');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(tt => tt.classList.remove('active'));
    t.classList.add('active');
    const filter = t.getAttribute('data-filter');
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }));
})();

// Smooth scrolling for in-page anchors
(function() {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const a of links) {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
})();

// KPI counters (simple animation on load)
(function animateCounters() {
  const nums = document.querySelectorAll('.stat-number');
  nums.forEach(n => {
    const target = +n.getAttribute('data-target');
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      n.textContent = current.toLocaleString();
    }, 8);
  });
})();

// Newsletter form handling (front-end only)
(function() {
  const form = document.getElementById('newsletter');
  const note = document.querySelector('.form-note');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    if (!name || !email) {
      note.textContent = 'Please provide your name and email to subscribe.';
      note.style.color = '#f87171';
      return;
    }
    // Basic fake submit
    note.textContent = `Thanks ${name}! You’ve been added to Gulshan Coffee updates.`;
    note.style.color = '#86efac';
    form.reset();
  });
})();