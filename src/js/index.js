import '../scss/styles.scss';
const hamburgerButton = document.getElementById('hamburger-icon');
const menuElement = document.getElementById('menu');

const toggleMenu = () => {
  menuElement.classList.toggle('menu--active');

  const isMenuActive = menuElement.classList.contains('menu--active');
  hamburgerButton.src = isMenuActive ? './assets/images/icon-close.svg' : './assets/images/icon-hamburger.svg';
};

hamburgerButton.addEventListener('click', toggleMenu);
