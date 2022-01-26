import './sass/main.scss';
import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';
// import fetchArcticles from './js/fetch-articles';

const moreLoadBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLoader.textContent = 'Показати більше!';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },

  disabled() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLoader.textContent = 'Загружаємо  ...  ... ...   ... ... ... ... . ...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },

  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },
};

refs.searchForm.addEventListener('submit', rerchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchArcticlesS);

function rerchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  //   console.log(inputValue);

  clearArticlesContainer();
  newsService.resetPage();
  fetchArcticlesS();
  form.reset();
}

function fetchArcticlesS() {
  moreLoadBtn.disabled();

  newsService.fetchArcticles().then(articles => {
    updateArticlesMarkup(articles);
    moreLoadBtn.show();
    moreLoadBtn.enable();
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

// window.scrollTo({
//   top: document.documentElement.offsetHeight,
//   behavior: 'smooth',
// });
