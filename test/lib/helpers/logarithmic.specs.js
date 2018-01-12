import {
  assert,
} from 'chai';

import logarithmic from '../../../src/lib/helpers/logarithmic';

const series = [100, 453, 563, 623, 654, 693, 712, 765];

const m = 3;

const sample = {
  expSeries: [176.39, 344.71, 673.64, 1316.45, 2572.66, 5027.6, 9825.12, 19200.61, 37522.55],
  method: 'logarithmic',
  sse: 233405.74390000026,
};

describe('linear', () => {
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
