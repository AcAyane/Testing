import Route from "@ember/routing/route";
import fetch from "fetch";

export default class HomePageRoute extends Route {
  model() {
    console.log("data is being fetched");
    fetch("https://wookie.codesubmit.io/movies", {
      headers: { Authorization: "Bearer Wookie2019" },
    }).then(function (response) {
      response.json().then((data) => {
        console.log(data.movies);
        return data.movies;
      });
    });
  }
}
