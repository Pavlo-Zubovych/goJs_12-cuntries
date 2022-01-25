const apiKey = '576cf4a5a3a549e5b6a6e0cd2e57f1cd';

export default {
  searchQuery: '',
  page: 1,

  fetchArcticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=1&page=${this.page}`;
    const options = {
      headers: { Authorization: apiKey },
    };

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      })
      .catch(error => console.error(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
