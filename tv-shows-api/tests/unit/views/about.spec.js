import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import About from "@/views/About.vue";

describe("In About Component", () => {
  let aboutWrapper;
  Vue.use(Vuetify);
  beforeEach(() => {
    aboutWrapper = shallowMount(About, {
      Vue
    });
  });

  afterEach(() => {
    aboutWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(aboutWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="v-container"', () => {
    expect(aboutWrapper.html()).toContain("v-container-stub");
  });

});
