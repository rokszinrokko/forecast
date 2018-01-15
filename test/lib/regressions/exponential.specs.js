import {
  assert,
} from 'chai';

import exponential from '../../../src/lib/regressions/exponential';

const series = [100, 300, 623, 1452, 2941, 4765];

const m = 3;

const sample = {
  expSeries: [
    175.82,
    343.6,
    671.47,
    1312.22,
    2564.39,
    5011.43,
    9793.52,
    19138.86,
    37401.88,
  ],
  method: 'exponential',
  sse: 232100.25870000024,
};

describe('exponential', () => {
  it('should be a function', () => {
    assert.isFunction(exponential);
  });
  it('should return an object', () => {
    const result = exponential(series, m);
    assert.isObject(result);
  });
  it('should have keys', () => {
    const result = exponential(series, m);
    assert.hasAllKeys(result, sample);
  });
  it('should have values', () => {
    const result = exponential(series, m);
    assert.deepEqual(result, sample);
  });
});
