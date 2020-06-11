import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import CarouselShow from "@/components/CarouselShow.vue";

describe("In Carousel Component", () => {
  let carouselWrapper;
  Vue.use(Vuetify, Vuex);

  beforeEach(() => {
    carouselWrapper = shallowMount(CarouselShow, {
      Vue,
      computed: {
        shows() {
          const list = [
            {
              name: "Breaking Bad",
              id: "167",
              image: {
                original: "http://src/njj.com"
              },
              genres: ["Action", "Comedy"],
              rating: {
                average: "7.9"
              }
            }
          ];
          return list;
        }
      },
      mocks: {
        $store: {
          getters: {
            "showModule/sortedShows": true
          }
        }
      }
    });
  });

  afterEach(() => {
    carouselWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(carouselWrapper.isVueInstance).toBeTruthy();
  });
  it("checks whether it has carousel-stub", () => {
    expect(carouselWrapper.html()).toContain("v-carousel-stub");
  });
  it("checks whether it has carousel-item", () => {
    expect(carouselWrapper.html()).toContain("v-carousel-item-stub");
  });
  it("checks whether it has card-stub", () => {
    expect(carouselWrapper.html()).toContain("v-card-stub");
  });
  it("checks whether it has v-list-item-stub", () => {
    expect(carouselWrapper.html()).toContain("v-list-item-stub");
  });
  it("checks whether it has v-rating-stub", () => {
    expect(carouselWrapper.html()).toContain("v-rating-stub");
  });

  it('check the functionality of convertRating()"', () => {
    expect(carouselWrapper.vm.convertRating(9.7)).toBe(4.85);
  });
});
