const mutations = {
  SET_ALL_SHOWS(state, allShows) {
    state.allShows = allShows;
  },
  SET_SHOW_BY_ID(state, show) {
    state.showById = show;
    state.showEmbedded = show._embedded;
  },
  SET_SHOW_BY_NAME(state, show) {
    state.showByName = show;
  }
};
export default mutations;
