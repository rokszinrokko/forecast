import {
  assert,
} from 'chai';

import {
  itemForecast,
} from '../src/index';

const data = [
  2, 3, 8,
  23, 5, 36,
  56, 32, 23,
  45, 69, 52,
  12, 23, 12,
  12, 12, 45,
  44, 12, 32,
  55, 13, 65,
];

describe('itemForecast', () => {
  it('should be a function', () => {
    assert.isFunction(itemForecast);
  });
  it('should return an object', () => {
    const result = itemForecast(data);
    assert.isObject(result);
  });
});
