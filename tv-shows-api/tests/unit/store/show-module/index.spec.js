import Vuex from "vuex";
import Vue from "vue";
import store from "@/store";

jest.mock("@/services/tvShows.service");

Vue.use(Vuex);
describe("In store", () => {
  it("it should have all state objects ", () => {
    expect(store.state.showModule.allShows).toBeTruthy();
    expect(store.state.showModule.showById).toBeTruthy();
    expect(store.state.showModule.showByName).toBeTruthy();
    expect(store.state.showModule.showEmbedded).toBeTruthy();
  });

  it("it should have all getter objects ", () => {
    expect(store.getters["showModule/tvShows"]).toBeTruthy();
    expect(store.getters["showModule/sortedShows"]).toBeTruthy();
  });
});
