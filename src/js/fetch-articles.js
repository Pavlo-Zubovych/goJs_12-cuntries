const apiKey = '576cf4a5a3a549e5b6a6e0cd2e57f1cd';

function fetchArcticles(searchQuery, page = 1) {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=${page}`;
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

// '2015111-76488069e41fd1f93b60a63a2';

// `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&lang=ru`

//   return fetch(url /*, options*/)
//     .then(response => response.json())
//     .then(({ hits }) => hits)
//     .catch(error => console.error(error));
