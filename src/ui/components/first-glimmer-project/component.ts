import Component, { tracked } from "@glimmer/component";

export default class FirstGlimmerProject extends Component {
  @tracked rating: number = 3;

  updateRating(newRating) {
    this.rating = newRating;
  }
}
