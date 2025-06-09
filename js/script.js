document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skills-grid, .portfolio-grid');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('eyes-container');
  const eyeCount = 5; // Количество глаз
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Создаем глаза
  for (let i = 0; i < eyeCount; i++) {
    createEye();
  }
  
  // Функция создания одного глаза
  function createEye() {
  const eye = document.createElement('div');
  eye.className = 'eye-gif';
  
  // Отступы от краев (100px) и от центра (чтобы не мешали контенту)
  const posX = Math.random() * (window.innerWidth - 200) + 100;
  const posY = Math.random() * (window.innerHeight - 200) + 100;
  
  eye.style.left = `${posX}px`;
  eye.style.top = `${posY}px`;
  
  container.appendChild(eye);
  moveEye(eye);
}
  
  // Функция для движения глаз
  function moveEye(eye) {
  setInterval(() => {
    // Исчезаем
    eye.style.animation = 'fadeOut 1s ease forwards';
    
    setTimeout(() => {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 100);
      
      eye.style.left = `${newX}px`;
      eye.style.top = `${newY}px`;
      eye.style.animation = 'fadeIn 1s ease forwards';
    }, 1000);
  }, 5000 + Math.random() * 5000); // Случайный интервал 5-10 сек
}
  
 document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye-gif');
  eyes.forEach(eye => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeX = eyeRect.left + eyeRect.width / 2;
    const eyeY = eyeRect.top + eyeRect.height / 2;
    
    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
    const distance = Math.min(15, Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 10);
    
    eye.style.transform = `rotate(${angle}rad) translate(${distance}px)`;
  });
});
  
  // Адаптация при изменении размера окна
  window.addEventListener('resize', () => {
    const eyes = document.querySelectorAll('.eye-gif');
    eyes.forEach(eye => {
      eye.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
      eye.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
    });
  });
});
function scrollToContacts() {
    const contacts = document.getElementById('contact');
    contacts.scrollIntoView({
        behavior: 'smooth'
    });
}