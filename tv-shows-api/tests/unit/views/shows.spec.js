import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Shows from "@/views/Shows.vue";
import Cards from "@/components/Cards";

describe("In Shows Component", () => {
  let showsWrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
    showsWrapper = shallowMount(Shows, {
      data: () => ({}),
      mocks: {
        $route: {
          params: {}
        },
        $store: {
          getters: {}
        }
      },
      computed: {
        tvShows() {
          const shows = [{ name: "Game of thrones", id: "123" }];
          return shows;
        }
      },
      Vue
    });
  });

  afterEach(() => {
    showsWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(showsWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="container"', () => {
    expect(showsWrapper.html()).toContain("v-container-stub");
  });

  it("it should load Cards component", () => {
    expect(Cards).toBeTruthy();
  });
});
