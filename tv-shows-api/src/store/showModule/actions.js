import {
  getShowById,
  getShowByName,
  getAllShows
} from "../../services/tvShows.service";

const actions = {
  getAllShowsAction({ commit }) {
    return getAllShows()
      .then(allShows => {
        commit("SET_ALL_SHOWS", allShows.data);
      })
      .catch(error => {
        alert(error);
      });
  },

  getShowByIdAction({ commit }, showId) {
    return getShowById(showId)
      .then(show => commit("SET_SHOW_BY_ID", show.data))
      .catch(error => {
        alert(error);
      });
  },
  getShowByNameAction({ commit }, showName) {
    return getShowByName(showName)
      .then(show => commit("SET_SHOW_BY_NAME", show.data))
      .catch(error => {
        alert(error);
      });
  }
};
export default actions;
