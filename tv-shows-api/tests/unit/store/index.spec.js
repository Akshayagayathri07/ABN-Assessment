import store from "@/store";

describe("In Store", () => {
  it("it should have all state objects ", () => {
    expect(store.state.showModule).toBeTruthy();
  });
  it("it should have all state objects ", () => {
    expect(store.state).toBeTruthy();
  });

  it("it should have all state objects ", () => {
    expect(store.getters).toBeTruthy();
  });
});
