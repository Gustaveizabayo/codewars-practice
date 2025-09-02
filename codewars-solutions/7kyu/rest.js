const maxBy = require('lodash/maxBy');

function oddest(xs) {
  return maxBy(xs, x => [...(x >>> 0).toString(2)].reverse());
}