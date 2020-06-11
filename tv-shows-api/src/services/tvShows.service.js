import axios from "axios";
//get all tv shows
export function getAllShows() {
  return axios.get("http://api.tvmaze.com/shows");
}
//get list of tv shows by showname
export function getShowByName(showName) {
  return axios.get("http://api.tvmaze.com/search/shows?q=" + showName);
}
//get list of tv shows by show id
export function getShowById(showId) {
  return axios.get(
    "http://api.tvmaze.com/shows/" +
      showId +
      "?embed[]=episodes&embed[]=cast&embed[]=crew&embed[]=images"
  );
}
