import Component, { tracked } from '@glimmer/component';

export default class StarRating extends Component {

  /*
  args: {
    todo: Todo;
    onEdit: (Todo, string) => void;
    onToggle: (Todo) => void;
    onDestroy: (Todo) => void;
  };
   */

  @tracked('args')
  get stars() {
    let rating = Math.round(this.args.rating);
    let fullStars = this.starRange(1, rating, 'full');
    let emptyStars = this.starRange(rating + 1, this.args.maxRating, 'empty');
    return fullStars.concat(emptyStars);
  };

  starRange: function(start, end, type) {
    let starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  };
};
