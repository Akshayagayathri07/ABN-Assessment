import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import SearchResults from "@/views/SearchResults.vue";

describe("In SearchResults Component", () => {
  let searchResultsWrapper;
  let mockRouter;
  let mockStore;

  Vue.use(Vuetify);

  beforeEach(() => {
    (mockRouter = {
      params: {}
    }),
      (mockStore = {
        commit: jest.fn(),
        dispatch: jest.fn(),
        actions: {},
        mutations: {},
        state: {
          showModule: {
            showByName: {}
          }
        },
        getters: {}
      });

    searchResultsWrapper = shallowMount(SearchResults, {
      Vue,

      mocks: {
        $route: mockRouter,
        $store: mockStore
      }
    });
  });

  afterEach(() => {
    searchResultsWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(searchResultsWrapper.isVueInstance).toBeTruthy();
  });

  it("getShow to be called when created method is executed", () => {
    const spyinit = jest.spyOn(searchResultsWrapper.vm, "getShow");
    setTimeout(() => {
      expect(spyinit).toHaveBeenCalled();
      expect(searchResultsWrapper.vm.getShow).toHaveBeenCalled();
    });
  });

  it('it should have a div element with class="text-field"', () => {
    expect(searchResultsWrapper.html()).toContain("v-text-field-stub");
  });
  it("checking functionality of getShow()", () => {
    searchResultsWrapper.vm.getShow();
    expect(searchResultsWrapper.vm.$store.dispatch).toHaveBeenCalled();
  });
});
