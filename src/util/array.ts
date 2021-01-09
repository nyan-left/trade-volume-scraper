import * as _ from 'lodash';

const arrToSortedUnique = (
  array: [Date, number, number?][],
): [Date, number, number?][] =>
  _.uniqBy(array, (v) => v[0].toString()).sort(
    (a: unknown, b: unknown) => a[0] - b[0],
  );
export default arrToSortedUnique;
