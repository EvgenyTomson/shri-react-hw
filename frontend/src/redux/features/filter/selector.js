const selectFilterModule = (state) => state.filter;

export const selectFilter = (state, filterName) => {
  return selectFilterModule(state)[filterName];
}

export const selectCinemaFilter = (state) => {
  return selectFilterModule(state)['cinema'];
}

export const selectGenreFilter = (state) => {
  return selectFilterModule(state)['genre'];
}

export const selectNameFilter = (state) => {
  return selectFilterModule(state)['name'];
}

