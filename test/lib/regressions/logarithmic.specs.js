import {
  assert,
} from 'chai';

import logarithmic from '../../../src/lib/regressions/logarithmic';

const series = [100, 453, 563, 623, 654, 693, 712, 765];

const m = 3;

const sample = {
  expSeries: [
    180.71,
    384.47,
    503.66,
    588.23,
    653.82,
    707.42,
    752.73,
    791.98,
    826.61,
    857.58,
    885.6,
  ],
  method: 'logarithmic',
  sse: 18535.475599999994,
};

describe('logarithmic', () => {
  it('should be a function', () => {
    assert.isFunction(logarithmic);
  });
  it('should return an object', () => {
    const result = logarithmic(series, m);
    assert.isObject(result);
  });
  it('should have keys', () => {
    const result = logarithmic(series, m);
    assert.hasAllKeys(result, sample);
  });
  it('should have values', () => {
    const result = logarithmic(series, m);
    assert.deepEqual(result, sample);
  });
});
