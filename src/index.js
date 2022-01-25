import './sass/main.scss';
import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;
  //   console.log(inputValue);

  refs.articlesContainer.innerHTML = '';
  form.reset();

  newsService.resetPage();
  newsService.fetchArcticles().then(articles => {
    updateArticlesMarkup(articles);
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  newsService.fetchArcticles().then(articles => {
    updateArticlesMarkup(articles);
  });
});

//   .catch(error => console.log(error));

// const options = {
//   method: 'GET',
//   heders: {
//     Accept: 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
//   .then(response => response.json())
//   .then(data => console.log(data));

//   @PnArE2A,Cpp*hQ
//   576cf4a5a3a549e5b6a6e0cd2e57f1cd
