import axios from "axios";

export const getMovies = () => {
  return axios.get("https://sometimes-maybe-flaky-api.gdshive.io");
};
