import { shallowMount } from "@vue/test-utils";
import Vue from "vue";

import Vuetify from "vuetify";

import AppHeader from "@/components/AppHeader.vue";

describe("In Header Component", () => {
  let headerWrapper;
  Vue.use(Vuetify);

  beforeEach(() => {
    headerWrapper = shallowMount(AppHeader, {
      Vue
    });
  });

  afterEach(() => {
    headerWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="navigation-drawer"', () => {
    expect(headerWrapper.html()).toContain("v-navigation-drawer-stub");
  });

  it('it should have a div element with class="app-bar"', () => {
    expect(headerWrapper.html()).toContain("v-app-bar-stub");
  });
  it('it should have a div element with class="btn"', () => {
    expect(headerWrapper.html()).toContain("v-btn-stub");
  });
});
