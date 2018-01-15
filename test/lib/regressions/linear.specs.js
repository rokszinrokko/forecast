import {
  assert,
} from 'chai';

import linear from '../../../src/lib/regressions/linear';

const series = [100, 210, 280, 450, 500, 620];

const m = 3;

const sample = {
  expSeries: [100, 204, 308, 412, 516, 620, 724, 828, 932],
  method: 'linear',
  sse: 2520,
};

describe('linear', () => {
  it('should be a function', () => {
    assert.isFunction(linear);
  });
  it('should return an object', () => {
    const result = linear(series, m);
    assert.isObject(result);
  });
  it('should have keys', () => {
    const result = linear(series, m);
    assert.hasAllKeys(result, sample);
  });
  it('should have values', () => {
    const result = linear(series, m);
    assert.deepEqual(result, sample);
  });
});
