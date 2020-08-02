import Model, { attr } from "@ember-data/model";

export default class MovieModel extends Model {
  @attr("string") firstName;
  @attr("date") birthday;
}
