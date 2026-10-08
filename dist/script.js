const descriptions = [
  'Replace scattered print ads and untracked flyers with a 360° digital lead engine. Capture high-intent local buyers with clear positioning and immediate reasons to get in touch.',
  'Cut quote turnaround from days to minutes. Route leads instantly to your CRM, prepare pre-drafted estimates, and keep final pricing and human approval strictly with your team.',
  'Stop losing hours to repetitive paperwork and shared-drive searches. AI retrieves company specs, SOPs, and project history so your team focuses on high-value delivery.'
];

document.querySelectorAll('.flow').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.flow').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    const step = Number(button.dataset.step);
    const detailEl = document.getElementById('flow-detail');
    if (detailEl && descriptions[step]) {
      detailEl.textContent = descriptions[step];
    }
  });
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
