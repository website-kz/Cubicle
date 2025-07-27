document.addEventListener('DOMContentLoaded', () => {
  // Плавная прокрутка к разделу Features
  const ctaButton = document.querySelector('.cta-button');
  const featuresSection = document.querySelector('.features');

  if (ctaButton && featuresSection) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Лёгкая анимация при наведении на заголовок
  const title = document.querySelector('.hero-content h1');
  title.addEventListener('mouseenter', () => {
    title.style.letterSpacing = '2px';
  });
  title.addEventListener('mouseleave', () => {
    title.style.letterSpacing = 'normal';
  });
});