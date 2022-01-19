const apiKey = '2015111-76488069e41fd1f93b60a63a2';

// return fetch(
//   'https://pixabay.com/api/?key=2015111-76488069e41fd1f93b60a63a2&q=yellow+flowers&image_type=photo',
// )
//   .then(response => response.json())
//   .then(({ articles }) => articles)
//   .catch(error => console.error(error));

function fetchArcticles(searchQuery) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&lang=ru`;

  //   const options = {
  //     headers: {
  //       Authorization: apiKey,
  //     },
  //   };

  return fetch(url /*, options*/)
    .then(response => response.json())
    .then(({ hits }) => hits)
    .catch(error => console.error(error));
}

export default fetchArcticles;
