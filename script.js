function resizeBackground() {
  var extraHeight = 60; // Добавляем немного свободного пространства для компенсации изменяемости адресной строки
  document.getElementById('bg1').style.height = window.innerHeight + extraHeight + "px";
  document.getElementById('bg2').style.height = window.innerHeight + extraHeight + "px";
}

window.addEventListener('resize', resizeBackground); // Отслеживаем изменения размеров окна
resizeBackground();

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.program-container, .intro, .dress, .tips-text, .tips-block, .place-container, .important');

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

document.getElementById('invitation-form').addEventListener('submit', function(e) {
  e.preventDefault();
    
  const formData = {
    name: document.getElementById('name').value,
    attendance: document.getElementById('attendance').value
  };
    

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbz51hWhnGPr7YnlP9hS2RhcHebfM1RVBUkN7Sn1YurvyXHmZBxQykGqPAC9ZfbNcC6KKw/exec';
    
  fetch(scriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
        body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if(data.success) {
      alert('Спасибо! Ваш ответ сохранен.');
    } else {
      alert('Ошибка: ' + data.message);
    }
  })
  .catch(error => {
    alert('Произошла ошибка при отправке: ' + error);
  });
});
