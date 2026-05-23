/* ============================================================
   main.js — Header, Loader, Hamburger, Forms, Misc
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────
     LOADER
  ────────────────────────────────────────── */
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 800);
    });
    // Fallback: hide after 3s regardless
    setTimeout(() => loader && loader.classList.add('hidden'), 3000);
  }


  /* ──────────────────────────────────────────
     HEADER — scroll shrink
  ────────────────────────────────────────── */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ──────────────────────────────────────────
     HAMBURGER / MOBILE MENU
  ────────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  }


  /* ──────────────────────────────────────────
     BACK TO TOP
  ────────────────────────────────────────── */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ──────────────────────────────────────────
     FOOTER YEAR
  ────────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ──────────────────────────────────────────
     BOOKING FORM
     NOTE: Replace this with your actual booking API or redirect.
           For now it shows a toast with the selected values.
  ────────────────────────────────────────── */
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(bookingForm);
      const pickup  = data.get('pickup');
      const dateFrom= data.get('dateFrom');
      const dateTo  = data.get('dateTo');

      if (!pickup || !dateFrom || !dateTo) {
        showToast('⚠️ Please fill all required fields.');
        return;
      }
      if (new Date(dateTo) <= new Date(dateFrom)) {
        showToast('⚠️ Return date must be after pick-up date.');
        return;
      }

      // TODO: Integrate with real booking system here.
      // Example: window.location.href = `/booking?pickup=${pickup}&from=${dateFrom}&to=${dateTo}`;
      showToast('✅ Searching available cars…');
      setTimeout(() => {
        document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    });
  }


  /* ──────────────────────────────────────────
     CONTACT FORM
     NOTE: Replace with real backend / EmailJS / Formspree.
           Formspree example: action="https://formspree.io/f/YOUR_FORM_ID"
  ────────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email= contactForm.querySelector('[name="email"]').value.trim();
      const msg  = contactForm.querySelector('[name="message"]').value.trim();

      if (!name || !email || !msg) {
        showToast('⚠️ Please fill all required fields.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('⚠️ Please enter a valid email address.');
        return;
      }

      // TODO: Send to your backend / Formspree / EmailJS here
      showToast('✅ Message sent! We\'ll reply within 24 hours.');
      contactForm.reset();
    });
  }


  /* ──────────────────────────────────────────
     NEWSLETTER FORM
     NOTE: Replace with Mailchimp / ConvertKit embed or your API.
  ────────────────────────────────────────── */
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value.trim();
      if (!email) return;
      // TODO: Send to your email marketing service
      showToast('✅ Subscribed! Watch your inbox for deals.');
      newsletterForm.reset();
    });
  }


  /* ──────────────────────────────────────────
     SMOOTH ANCHOR SCROLLING (offset for fixed header)
  ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const headerH = document.getElementById('header')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ──────────────────────────────────────────
     TOAST UTILITY
  ────────────────────────────────────────── */
  function showToast(msg, duration = 3000) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
  }

  // Expose globally for use in other scripts
  window.showToast = showToast;


  /* ──────────────────────────────────────────
     DATE INPUT — set min date to today
  ────────────────────────────────────────── */
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
    if (!input.value) input.value = today;
  });
  // Set return date default to 7 days later
  const dateTo = document.querySelector('[name="dateTo"]');
  if (dateTo) {
    const next7 = new Date();
    next7.setDate(next7.getDate() + 7);
    dateTo.value = next7.toISOString().split('T')[0];
  }


  /* ──────────────────────────────────────────
     ACTIVE NAV LINK on scroll
  ────────────────────────────────────────── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => navObserver.observe(sec));

});
