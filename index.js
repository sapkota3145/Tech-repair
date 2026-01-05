const Swiper2 = new Swiper('.swiper2' , {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });

  const cards = document.querySelectorAll('.repair-list .repair-card');
const btn = document.getElementById('repair-toggle');

if (cards.length && btn) {
  let expanded = false;

  function getLimit() {
    const w = window.innerWidth;
    if (w >= 1120) return 4;   // desktop
    if (w >= 768) return 3;    // tablet
    return cards.length;
  }

  function updateView() {
    const limit = getLimit();
    const textEl = btn.querySelector('.toggle-text');

    cards.forEach((card, index) => {
      card.style.display = (!expanded && index >= limit) ? 'none' : 'block';
    });

    // text
    textEl.textContent = expanded ? 'Hide' : 'Show all';

    // class for icons
    btn.classList.toggle('repair-toggle--expanded', expanded);
  }

  btn.addEventListener('click', () => {
    expanded = !expanded;
    updateView();
  });

  // first time
  updateView();

  // if you resize screen while collapsed, recalc limit
  window.addEventListener('resize', () => {
    if (!expanded) updateView();
  });
}

const Swiper3 = new Swiper('.swiper3' , {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});

  