import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import DisplayShow from "@/views/DisplayShow.vue";
describe("In Display Show Component", () => {
  let displayWrapper;
  let mockRouter;
  let mockStore;
  Vue.use(Vuetify);

  beforeEach(() => {
    (mockRouter = {
      params: {}
    }),
      (mockStore = {
        dispatch: jest.fn(),
        state: {
          showModule: {
            showById: "alice",
            showEmbedded: {
              cast: { name: "xyz" },
              crew: {},
              images: {},
              episodes: [
                {
                  name: "the wait",
                  airdate: "09-09-2019",
                  number: "1",
                  season: "2"
                }
              ]
            }
          }
        }
      });

    Vue.use(Vuetify);
    displayWrapper = shallowMount(DisplayShow, {
      Vue,
      data() {
        return {
          showId: {}
        };
      },
      mocks: {
        $route: mockRouter,
        $store: mockStore
      }
    });
  });

  afterEach(() => {
    displayWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(displayWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="container"', () => {
    expect(displayWrapper.html()).toContain("v-container-stub");
  });
  it('it should have a div element with class="tabs"', () => {
    expect(displayWrapper.html()).toContain("v-tabs-stub");
  });
  it('it should have a div element with class="tab-item"', () => {
    expect(displayWrapper.html()).toContain("v-tab-item-stub");
  });
  it("it should have a div element with class=row,col,card,flex,list-item", () => {
    let wrapper = shallowMount(DisplayShow, {
      Vue,
      mocks: {
        $route: mockRouter,
        $store: mockStore
      },
      computed: {
        episode() {},
        cast() {
          const list = [
            {
              name: "xyz",
              image: {
                original: "http://src/njj.com"
              }
            }
          ];
          return list;
        },
        crew() {
          const list = [
            {
              name: "xyz",
              image: {
                original: "http://src/njj.com"
              }
            }
          ];
          return list;
        },
        images() {
          const list = [
            {
              name: "xyz",
              image: {
                resolutions: { original: "http://src/njj.com" }
              }
            }
          ];
          return list;
        },
        showData() {
          const list = [
            {
              name: "Breaking Bad",
              id: "167",
              schedule: {
                days: [],
                time: []
              },
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
      }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.html()).toContain("v-row-stub");
    expect(wrapper.html()).toContain("v-col-stub");
    expect(wrapper.html()).toContain("v-card-stub");

    expect(wrapper.html()).toContain("v-list-item-stub");
    expect(wrapper.html()).toContain("v-flex-stub");

    expect(wrapper.html()).toContain("b-stub");
  });

  it("it should have v-row", () => {
    expect(displayWrapper.contains("v-row-stub")).toBe(true);
  });

  it("getShowDetails to be called when created method is exceuted", () => {
    const spyinit = jest.spyOn(displayWrapper.vm, "getShowDetails");
    setTimeout(() => {
      expect(spyinit).toHaveBeenCalled();
      expect(displayWrapper.vm.dispatch).toBeCalled();
    });
  });

  it("it checks the functionality of computed property cast()", () => {
    const data = displayWrapper.vm.$store.state.showModule.showEmbedded.cast;
    expect(displayWrapper.find(".cast")).toBeTruthy();
    expect(displayWrapper.vm.cast).toEqual(data);
  });
  it("it checks the functionality of computed property crew()", () => {
    const data = displayWrapper.vm.$store.state.showModule.showEmbedded.crew;
    expect(displayWrapper.find(".crew")).toBeTruthy();
    expect(displayWrapper.vm.crew).toEqual(data);
  });
  it("it checks the functionality of computed property showData()", () => {
    const data = displayWrapper.vm.$store.state.showModule.showById;
    expect(displayWrapper.find(".showData")).toBeTruthy();
    expect(displayWrapper.vm.showData).toEqual(data);
  });
  it("it checks the functionality of computed property images()", () => {
    const data = displayWrapper.vm.$store.state.showModule.showEmbedded.images;
    expect(displayWrapper.find(".images")).toBeTruthy();
    expect(displayWrapper.vm.images).toEqual(data);
  });

  it("it checks the functionality of computed property episode()", () => {
    expect(displayWrapper.find(".episode")).toBeTruthy();
    expect(displayWrapper.vm.episode).toEqual([
      { name: "the wait", date: "09-09-2019", number: "1", season: "2" }
    ]);
  });
});
