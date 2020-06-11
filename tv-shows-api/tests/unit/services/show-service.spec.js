import {
  getAllShows,
  getShowByName,
  getShowById
} from "../../../src/services/tvShows.service";

import axios from "axios";

// Mock module with Jest mock functions
jest.mock("axios");

describe("In tvShows service, ", () => {
  it("getAllShows api should call", () => {
    const shows = ["breaking bad", "sherlock-holmes", "13 Reasons Why"];
    axios.get.mockResolvedValue(shows);
    getAllShows().then(result => {
      expect(result).toEqual(shows);
    });
  });
  it("getShowByName api should call", () => {
    const shows = ["girls", "girls 22"];
    axios.get.mockResolvedValue(shows);
    getShowByName().then(result => {
      expect(result).toEqual(shows);
    });
  });
  it("getShowById api should call", () => {
    const show = ["girls"];
    axios.get.mockResolvedValue(show);
    getShowById().then(result => {
      expect(result).toEqual(show);
    });
  });
});
