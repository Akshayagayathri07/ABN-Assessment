import actions from "@/store/showModule/actions";

import {
  getShowByName,
  getAllShows,
  getShowById
} from "@/services/tvShows.service";
jest.mock("@/services/tvShows.service");
describe("In actions, ", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("getShowByNameAction commit the data returned by getShowByName API", async () => {
    const showData = { data: [{ name: "Breaking Bad", id: "169" }] };
    getShowByName.mockResolvedValue(showData);
    await actions.getShowByNameAction({ commit }, showData.data.name);
    expect(commit).toHaveBeenCalledWith("SET_SHOW_BY_NAME", showData.data);
  });
  it("getShowById commit the data returned by getShowById API", async () => {
    const showData = { data: [{ name: "Breaking Bad", id: "169" }] };
    getShowById.mockResolvedValue(showData);
    await actions.getShowByIdAction({ commit }, showData.data.id);
    expect(commit).toHaveBeenCalledWith("SET_SHOW_BY_ID", showData.data);
  });
  it("getAllShowsAction commit the data returned by getAllShows API", async () => {
    const showData = { data: [{ name: "Breaking Bad", id: "169" }] };
    getAllShows.mockResolvedValue(showData);
    await actions.getAllShowsAction({ commit });
    expect(commit).toHaveBeenCalledWith("SET_ALL_SHOWS", showData.data);
  });
});
