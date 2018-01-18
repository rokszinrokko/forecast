import {
  assert,
} from 'chai';

import power from '../../../src/lib/regressions/power';

const series = [100, 300, 623, 1452, 2941, 4765];

const series2 = [
  16,
  256,
  1296,
  4096,
  10000,
  20736,
  38416,
  65536,
  104976,
  160000,
  234256,
  331776,
];

const m = 3;

const sample = {
  expSeries: [79.13, 356.1, 858.41, 1602.55, 2600.79, 3863.04, 5397.64, 7211.85, 9312.1],
  method: 'power',
  sse: 1010940.6232,
};

const sample2 = {
  expSeries: [
    16,
    256,
    1296,
    4096,
    10000,
    20736,
    38416,
    65536,
    104976,
    160000,
    234256,
    331776,
    456976,
    614656,
    810000,
  ],
  method: 'power',
  sse: 0,
};

describe('power', () => {
  it('should be a function', () => {
    assert.isFunction(power);
  });
  // sample
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
  // sample2
  it('should return an object', () => {
    const result = power(series2, m);
    assert.isObject(result);
  });
  it('should have keys', () => {
    const result = power(series2, m);
    assert.hasAllKeys(result, sample2);
  });
  it('should have values', () => {
    const result = power(series2, m);
    assert.deepEqual(result, sample2);
  });
});
