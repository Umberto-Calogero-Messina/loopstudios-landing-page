// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const hambuergerButton = document.getElementById('hamburger-icon');
const spotElement = document.getElementById('header__spot');

const ShowMenu = (e) => {
  console.log(e);
};

hambuergerButton.addEventListener('click', ShowMenu);
