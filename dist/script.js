const descriptions = [
  'Turn the questions your buyers ask into clear website content, useful resources, and a reason to get in touch.',
  'Route an inquiry to the right person, capture it in your CRM, and prepare a useful follow-up for your team to review.',
  'Bring inquiry details into a draft proposal, flag missing information, and keep final pricing and approval with your team.'
];
document.querySelectorAll('.flow').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.flow').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('flow-detail').textContent = descriptions[Number(button.dataset.step)];
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
