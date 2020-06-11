export const namespaced = true; // module namespace

export { default as actions } from "@/store/showModule/actions";

export { default as mutations } from "@/store/showModule/mutations";
export { showsActions } from "@/store/showModule/action-type.const.js";

export const state = {
  allShows: {},
  showById: {},
  showEmbedded: {},
  showByName: {}
};
export const getters = {
  sortedShows: state => {
    let show = Object.values(state.allShows);
    return show.sort((a, b) => b.rating.average - a.rating.average);
  },
  tvShows: (state, getters) => {
    let show = getters.sortedShows;
    let categories = [
      "Romance",
      "Action",
      "Comedy",
      "Science-Fiction",
      "Horror",
      "Drama"
    ];
    let tvShow = [[], [], [], [], [], []];
    categories.forEach((category, i) => {
      show.forEach(element => {
        if (element.genres.includes(category)) {
          tvShow[i].push(element);
        }
      });
    });

    return tvShow;
  }
};
