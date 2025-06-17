document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.program-container, .intro, .dress, .tips-text, .tips-block, .place-container, .important, .ornament1, .ornament2, .rings');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.classList.add('animate-on-scroll');

        entry.target.style.animationPlayState = 'running';

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.feather-container');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const feather = entry.target.querySelector('.feather-image');
        feather.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // Отключаем наблюдение
      }
    });
  }, { threshold: 0.5 });


  containers.forEach(container => {
    observer.observe(container);
  });
});
