import articlesTpl from '../templates/articles.hbs';
import refs from './refs';

function updateArticlesMarkup(hits) {
  console.log(hits); //
  const markup = articlesTpl(hits);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMarkup;
