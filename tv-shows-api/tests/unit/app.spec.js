import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "@/App.vue";
import { routes } from "@/router";

describe("In App Component", () => {
  let appWrapper;

  const router = new VueRouter({ routes });

  beforeEach(() => {
    Vue.use(Vuetify, VueRouter);

    appWrapper = shallowMount(App, {
      Vue,
      router
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("contains app-header component", () => {
    expect(appWrapper.contains("app-header-stub")).toBe(true);
  });
  it("contains app-footer component", () => {
    expect(appWrapper.contains("app-footer-stub")).toBe(true);
  });
  it("contains app v-app tag", () => {
    expect(appWrapper.contains("v-app-stub")).toBe(true);
  });
});
