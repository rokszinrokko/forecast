import {
  assert,
} from 'chai';

import optHoltWinters from '../../../src/lib/regressions/optHoltWinters';

const series = [100, 300, 623, 1452, 2941, 4765];

const m = 2;

const sample = {
  expSeries: [
    0,
    0,
    0,
    0,
    2591.2114137984263,
    6293.9835512128375,
    1775.9565891178304,
    5090.263559767625,
  ],
  series: [
    100,
    300,
    623,
    1452,
    2941,
    4765,
  ],
  params: {
    alpha: 0,
    beta: 0,
    gamma: 0,
    period: 3,
  },
  method: 'holt-winters',
  sse: 2460142.7549163154,
  r2: 0.852471207948747,
};

describe('holtWinters', () => {
  it('should be a function', () => {
    assert.isFunction(optHoltWinters);
  });
  it('should return an object', () => {
    const result = optHoltWinters(series, m);
    assert.isObject(result);
  });
  it('should have keys', () => {
    const result = optHoltWinters(series, m);
    assert.hasAllKeys(result, sample);
  });
  it('should have values', () => {
    const result = optHoltWinters(series, m);
    assert.deepEqual(result, sample);
  });
});
