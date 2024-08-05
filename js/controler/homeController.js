import homeView from '/js/view/homeView.js';
import homeService from '/js/service/homeService.js';

async function init() {
  const films = await homeService.getFilms();
  homeView.render(films);
};

export default { init };
