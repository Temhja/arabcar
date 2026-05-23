/* ============================================================
   animations.js — Scroll-Reveal & Number Counter
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll-reveal Observer ── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after first reveal for performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Number Counter (hero stats) ── */
  const counterEls = document.querySelectorAll('[data-count]');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterEls.forEach(el => counterObserver.observe(el));
  } else {
    counterEls.forEach(el => (el.textContent = el.dataset.count));
  }

  /* ── Testimonials Carousel ── */
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testDots');
  if (!track || !dotsContainer) return;

  const slides = track.querySelectorAll('.testimonial');
  let currentSlide = 0;

  // Build dots
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Testimonial ${i + 1}`);
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  });

  function goTo(index) {
    currentSlide = index;
    const slideWidth = slides[0].offsetWidth + 24; // gap
    track.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    dotsContainer.querySelectorAll('button').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  // Auto-scroll every 5s
  let autoplay = setInterval(() => {
    goTo((currentSlide + 1) % slides.length);
  }, 5000);

  track.addEventListener('touchstart', () => clearInterval(autoplay), { passive: true });

  // Sync dots on manual scroll
  track.addEventListener('scroll', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    const idx = Math.round(track.scrollLeft / slideWidth);
    if (idx !== currentSlide) {
      currentSlide = idx;
      dotsContainer.querySelectorAll('button').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
      });
    }
  }, { passive: true });

});
