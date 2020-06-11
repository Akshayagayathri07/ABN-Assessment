import mutations from "@/store/showModule/mutations";

describe("In mutations", () => {
  it("SET_SHOW_BY_NAME sets state.showByName to shows", () => {
    const shows = [{ showName: "Breaking Bad" }, { showName: "Breaking" }];
    const state = {
      showByName: {}
    };
    mutations.SET_SHOW_BY_NAME(state, shows);
    expect(state.showByName).toBe(shows);
  });
  it("SET_SHOW_BY_ID sets state.showById to shows", () => {
    const shows = [{ showId: "169", showName: "Breaking Bad", _embedded: {} }];
    const state = {
      showById: {},
      showEmbedded: {}
    };
    mutations.SET_SHOW_BY_ID(state, shows);
    expect(state.showById).toBe(shows);
    expect(state.showEmbedded).toBe(shows._embedded);
  });
  it("SET_ALL_SHOWS sets state.allShows to shows", () => {
    const shows = [{ showName: "Breaking Bad" }, { showName: "Breaking" }];
    const state = {
      allShows: {}
    };
    mutations.SET_ALL_SHOWS(state, shows);
    expect(state.allShows).toBe(shows);
  });
});
