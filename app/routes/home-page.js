import Route from "@ember/routing/route";
import fetch from "fetch";

export default class HomePageRoute extends Route {
  // Fetching data using the header authorization
  async model() {
    console.log("data is being fetched");
    let response = await fetch("https://wookie.codesubmit.io/movies", {
      headers: { Authorization: "Bearer Wookie2019" },
    });
    let data = await response.json();
    console.log(data.movies);
    return data.movies;
  }
}
