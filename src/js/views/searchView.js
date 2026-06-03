class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value.trim();
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    const submitSearch = function (e) {
      e.preventDefault();
      handler();
    };

    this._parentEl.addEventListener('submit', submitSearch);
    document.addEventListener('click', function (e) {
      if (e.target.closest('.search__btn')) submitSearch(e);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.closest('.search__field'))
        submitSearch(e);
    });
  }
}

export default new SearchView();
