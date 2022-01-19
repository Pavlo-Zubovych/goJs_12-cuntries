const apiKey = '576cf4a5a3a549e5b6a6e0cd2e57f1cd';

function fetchArcticles(searchQuery) {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url, options)
    .then(response => response.json())
    .then(({ articles }) => articles)
    .catch(error => console.error(error));
}

export default fetchArcticles;
