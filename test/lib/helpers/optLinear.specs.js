import {
  assert,
} from 'chai';

import optLinear from '../../../src/lib/helpers/optLinear';

const series = [100, 200, 300, 400, 500, 600];

describe('optLinear', () => {
  it('should be a function', () => {
    assert.isFunction(optLinear);
  });
  it('should return an array', () => {
    const result = optLinear(series, 3);
    console.log(result);
    assert.isArray(result);
  });
});
