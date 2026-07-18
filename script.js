// reveal on scroll
const els = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

els.forEach((el) => io.observe(el));


// Formulário (front-end apenas)
const form = document.getElementById('demoForm');
const thanks = document.getElementById('thanks');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  form.style.display = 'none';
  thanks.style.display = 'block';
});