import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Cards from "@/components/Cards.vue";

describe("In Cards Component", () => {
  let cardsWrapper;
  Vue.use(Vuetify);

  beforeEach(() => {
    cardsWrapper = shallowMount(Cards, {
      Vue
    });
  });

  afterEach(() => {
    cardsWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(cardsWrapper.isVueInstance).toBeTruthy();
  });
  it('check the functionality of convertRating()"', () => {
    expect(cardsWrapper.vm.convertRating(9.7)).toBe(4.85);
  });
});
