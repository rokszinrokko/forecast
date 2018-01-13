import {
  assert,
} from 'chai';

import power from '../../../src/lib/helpers/power';

const series = [100, 300, 623, 1452, 2941, 4765];

const m = 3;

const sample = {
  expSeries: [79.13, 356.1, 858.41, 1602.55, 2600.79, 3863.04, 5397.64, 7211.85, 9312.1],
  method: 'power',
  sse: 1010940.6232,
};

describe('power', () => {
  it('should be a function', () => {
    assert.isFunction(power);
  });
  it('should return an object', () => {
    const result = power(series, m);
    assert.isObject(result);
  });
  it('should have keys', () => {
    const result = power(series, m);
    assert.hasAllKeys(result, sample);
  });
  it('should have values', () => {
    const result = power(series, m);
    assert.deepEqual(result, sample);
  });
});
