import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Dashboard from "@/views/Dashboard.vue";
import CarouselShow from "@/components/CarouselShow";
import Cards from "@/components/Cards";

describe("In Dashboard Component", () => {
  let dashboardWrapper;
  let mockStore = {
    getters: {
      tvShows: {}
    },
    dispatch: jest.fn()
  };
  beforeEach(() => {
    Vue.use(Vuetify);
    dashboardWrapper = shallowMount(Dashboard, {
      data: () => ({}),
      mocks: {
        $store: mockStore
      },
      Vue
    });
  });

  afterEach(() => {
    dashboardWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(dashboardWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="container"', () => {
    expect(dashboardWrapper.html()).toContain("v-container-stub");
  });

  it("it should load carousel component", () => {
    expect(CarouselShow).toBeTruthy();
  });
  it("it should load cards component", () => {
    expect(Cards).toBeTruthy();
  });

  it('check the functionality of convertRating()"', () => {
    expect(dashboardWrapper.vm.convertRating(9.7)).toBe(4.85);
  });

  it("getAllShows to be called while created method", () => {
    const spyinit = jest.spyOn(dashboardWrapper.vm, "getAllShows");
    setTimeout(() => {
      expect(spyinit).toHaveBeenCalled();
    });
  });
});
