// Mobile nav
const ham = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
ham.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Filters
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#workGrid .card').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
    });
  });
});

// Video modal
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
document.querySelectorAll('#workGrid .card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    modalTitle.textContent = card.dataset.title || '';
    modalVideo.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
const closeModal = () => {
  modal.hidden = true;
  modalVideo.src = '';
  document.body.style.overflow = '';
};
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

// Quote form -> opens email client, no backend needed
document.getElementById('quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const subject = encodeURIComponent(`Video editing project — ${fd.get('type')} — ${fd.get('name')}`);
  const body = encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\nType: ${fd.get('type')}\n\nDetails:\n${fd.get('details')}`);
  window.location.href = `mailto:dippahlive@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formNote').textContent = 'Opening your email app… just hit send! I reply within 24h.';
});
