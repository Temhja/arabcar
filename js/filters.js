/* ============================================================
   filters.js — Car Grid Filter, Search & Sort
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const grid       = document.getElementById('carGrid');
  const noResults  = document.getElementById('noResults');
  const searchInput= document.getElementById('carSearch');
  const pillBtns   = document.querySelectorAll('[data-filter]');
  const sortSelect = document.getElementById('sortSelect');
  const priceMin   = document.getElementById('priceMin');
  const priceMax   = document.getElementById('priceMax');
  const priceLabel = document.getElementById('priceLabel');

  if (!grid) return;

  let cards = Array.from(grid.querySelectorAll('.car-card'));
  let activeFilter = 'all';
  let searchQuery  = '';
  let minPrice     = 50;
  let maxPrice     = 200;
  let sortMode     = 'popular';

  /* ── Filter pills ── */
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  /* ── Search ── */
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  /* ── Sort ── */
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortMode = sortSelect.value;
      applyFilters();
    });
  }

  /* ── Price range ── */
  function updatePriceLabel() {
    priceLabel.textContent = `€${priceMin} – €${priceMax} / day`;
  }

  if (priceMin && priceMax) {
    priceMin.addEventListener('input', () => {
      minPrice = Math.min(parseInt(priceMin.value), maxPrice - 10);
      priceMin.value = minPrice;
      updatePriceLabel();
      applyFilters();
    });
    priceMax.addEventListener('input', () => {
      maxPrice = Math.max(parseInt(priceMax.value), minPrice + 10);
      priceMax.value = maxPrice;
      updatePriceLabel();
      applyFilters();
    });
  }

  /* ── Core Filter Logic ── */
  function applyFilters() {
    // Refresh cards list (in case new cards added dynamically)
    cards = Array.from(grid.querySelectorAll('.car-card'));

    let visible = cards.filter(card => {
      // Category
      const cats = (card.dataset.category || '').toLowerCase();
      if (activeFilter !== 'all' && !cats.includes(activeFilter)) return false;

      // Search
      const name = (card.dataset.name || '').toLowerCase();
      if (searchQuery && !name.includes(searchQuery) && !cats.includes(searchQuery)) return false;

      // Price
      const price = parseInt(card.dataset.price || '0');
      if (price < minPrice || price > maxPrice) return false;

      return true;
    });

    // Sort
    visible = sortCards(visible, sortMode);

    // Hide all, then show matched
    cards.forEach(c => {
      c.style.display = 'none';
      c.style.animationDelay = '0ms';
    });

    visible.forEach((c, i) => {
      c.style.display = '';
      c.style.animationDelay = `${i * 60}ms`;
      // Re-trigger animation
      c.style.animation = 'none';
      // Force reflow
      void c.offsetWidth;
      c.style.animation = '';
    });

    // No results message
    if (noResults) {
      noResults.style.display = visible.length === 0 ? 'block' : 'none';
    }
  }

  function sortCards(arr, mode) {
    return [...arr].sort((a, b) => {
      const pa = parseInt(a.dataset.price || '0');
      const pb = parseInt(b.dataset.price || '0');
      if (mode === 'price_asc')  return pa - pb;
      if (mode === 'price_desc') return pb - pa;
      // 'popular' — keep original DOM order (index)
      return cards.indexOf(a) - cards.indexOf(b);
    });
  }

  /* Sort visible cards in DOM */
  function reorderDOM(sorted) {
    sorted.forEach(card => grid.appendChild(card));
  }

  /* Patch applyFilters to also reorder DOM */
  const _apply = applyFilters;
  // (already inline above — extended to reorder)
  function applyFiltersWithReorder() {
    cards = Array.from(grid.querySelectorAll('.car-card'));
    let visible = cards.filter(card => {
      const cats  = (card.dataset.category || '').toLowerCase();
      const name  = (card.dataset.name || '').toLowerCase();
      const price = parseInt(card.dataset.price || '0');
      if (activeFilter !== 'all' && !cats.includes(activeFilter)) return false;
      if (searchQuery && !name.includes(searchQuery) && !cats.includes(searchQuery)) return false;
      if (price < minPrice || price > maxPrice) return false;
      return true;
    });

    const sorted = sortCards(visible, sortMode);

    cards.forEach(c => c.style.display = 'none');
    sorted.forEach((c, i) => {
      c.style.display = '';
      c.style.animationDelay = `${i * 60}ms`;
      c.style.animation = 'none';
      void c.offsetWidth;
      c.style.animation = '';
      grid.appendChild(c); // reorder in DOM
    });

    if (noResults) {
      noResults.style.display = sorted.length === 0 ? 'block' : 'none';
    }
  }

  // Override with reorder version
  pillBtns.forEach(btn => {
    btn.addEventListener('click', applyFiltersWithReorder);
  });
  if (searchInput)  searchInput.addEventListener('input', applyFiltersWithReorder);
  if (sortSelect)   sortSelect.addEventListener('change', applyFiltersWithReorder);
  if (priceMin)     priceMin.addEventListener('input', applyFiltersWithReorder);
  if (priceMax)     priceMax.addEventListener('input', applyFiltersWithReorder);

});
