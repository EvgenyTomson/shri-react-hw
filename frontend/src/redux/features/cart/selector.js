const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => {
  return selectCartModule(state)[id] || 0;
}

export const selectTotalAmount = (state) => {
  const total = selectCartModule(state);
  const values = Object.values(total);
  return values.reduce((tot, val) => tot + val, 0);
}

export const selectAllCartMovies = (state) => {
  const total = selectCartModule(state);
  const cartMoviesIds = Object.keys(total);
  return cartMoviesIds;
}

