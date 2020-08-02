import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  // eslint-disable-next-line ember/require-return-from-computed
  updateList: computed("model", function () {
    var genres = ["Adventure", "Action"];
    for (let i = 0; i < 20; i++) {
      var filtered = this.model[i].filterBy(
        (model) => model.get("title") === "The Dark Knight"
      );
    }

    // eslint-disable-next-line ember/no-side-effects
    this.set("model1", filtered);
  }),
  didInsertElement() {
    this.set("model1", this.model);
  },
});
