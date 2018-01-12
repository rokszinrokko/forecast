import {
  assert,
} from 'chai';

import exponential from '../../../src/lib/helpers/exponential';

const series = [100, 300, 623, 1452, 2941, 4765];

const m = 3;

const sample = {
  expSeries: [176.39, 344.71, 673.64, 1316.45, 2572.66, 5027.6, 9825.12, 19200.61, 37522.55],
  method: 'exponential',
  sse: 233405.74390000026,
};

describe('linear', () => {
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
