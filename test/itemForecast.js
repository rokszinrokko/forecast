import {
  assert,
} from 'chai';

import {
  itemForecast,
} from '../src/index';

// Linear

const linData = [100, 210, 280, 450, 500, 620];

const linSample = {
  expSeries: [100, 204, 308, 412, 516, 620, 724, 828, 932],
  method: 'linear',
  sse: 2520,
};

// Exponential

const expData = [100, 300, 623, 1452, 2941, 4765];

const expSample = {
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

// Logarithmic

const logData = [
  2, 3, 8,
  23, 5, 36,
  56, 32, 23,
  45, 69, 52,
  12, 23, 12,
  12, 12, 45,
  44, 12, 32,
  55, 13, 65,
];

const logSample = {
  expSeries: [
    5.21,
    12.37,
    16.56,
    19.53,
    21.84,
    23.72,
    25.31,
    26.69,
    27.91,
    29,
    29.98,
    30.88,
    31.71,
    32.47,
    33.18,
    33.85,
    34.48,
    35.07,
    35.63,
    36.16,
    36.66,
    37.14,
    37.6,
    38.04,
    38.46,
    38.87,
    39.26,
  ],
  method: 'logarithmic',
  sse: 8171.189099999998,
};

// Power

const powData = [
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

const powSample = {
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

describe('itemForecast', () => {
  it('should be a function', () => {
    assert.isFunction(itemForecast);
  });
  // Linear
  it('should return an object (linear)', () => {
    const result = itemForecast(linData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (linear)', () => {
    const result = itemForecast(linData, 3, 1);
    assert.hasAllKeys(result, linSample);
  });
  it('should have values (linear)', () => {
    const result = itemForecast(linData, 3, 1);
    assert.deepEqual(result, linSample);
  });
  // Exponential
  it('should return an object (exponential)', () => {
    const result = itemForecast(expData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (exponential)', () => {
    const result = itemForecast(expData, 3, 1);
    assert.hasAllKeys(result, expSample);
  });
  it('should have values (exponential)', () => {
    const result = itemForecast(expData, 3, 1);
    assert.deepEqual(result, expSample);
  });
  // Logarithmic
  it('should return an object (logarithmic)', () => {
    const result = itemForecast(logData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (logarithmic)', () => {
    const result = itemForecast(logData, 3, 1);
    assert.hasAllKeys(result, logSample);
  });
  it('should have values (logarithmic)', () => {
    const result = itemForecast(logData, 3, 1);
    assert.deepEqual(result, logSample);
  });
  // Power
  it('should return an object (power)', () => {
    const result = itemForecast(powData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (power)', () => {
    const result = itemForecast(powData, 3, 1);
    assert.hasAllKeys(result, powSample);
  });
  it('should have values (power)', () => {
    const result = itemForecast(powData, 3, 1);
    assert.deepEqual(result, powSample);
  });
});
