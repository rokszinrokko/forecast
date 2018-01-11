import {
  assert,
} from 'chai';

import {
  itemForecast,
} from '../src/index';

// const data = [
//   2, 3, 8,
//   23, 5, 36,
//   56, 32, 23,
//   45, 69, 52,
//   12, 23, 12,
//   12, 12, 45,
//   44, 12, 32,
//   55, 13, 65,
// ];

const bomba = [
  2957, 1802, 6996, 2795,
  2815, 3306, 3727, 4158,
  2325, 2544, 2513, 1350,
  8157, 2978, 1515, 1761,
  5210, 2987, 3023, 4316,
  2846, 1151, 815, 1346,
  1051, 3831, 1350, 1125,
  1294, 1742, 1326, 1945,
  1071, 2431, 973, 589,
  410, 722, 1427, 1223,
  1320, 1596, 1798, 1531,
  1203, 1080, 678, 874,
];

describe('itemForecast', () => {
  it('should be a function', () => {
    assert.isFunction(itemForecast);
  });
  it('should return an object', () => {
    const result = itemForecast(bomba);
    console.log(result);
    assert.isObject(result);
  });
});
