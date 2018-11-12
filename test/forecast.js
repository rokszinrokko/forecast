import {
  assert,
} from 'chai';

import forecast from '../src/index';

// Linear

const linData = [100, 210, 280, 450, 500, 620];

const linSample = {
  expSeries: [100, 204, 308, 412, 516, 620, 724, 828, 932],
  method: 'linear',
  sse: 2520,
  r2: 0.99,
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
  r2: 0.99,
};

// Logarithmic

const logData = [
  2,
  3.204119983,
  3.908485019,
  4.408239965,
  4.795880017,
  5.112605002,
  5.38039216,
  5.612359948,
  5.816970038,
  6,
  6.165570741,
  6.316724984,
];

const logSample = {
  expSeries: [
    2,
    3.21,
    3.91,
    4.41,
    4.8,
    5.12,
    5.39,
    5.62,
    5.82,
    6.01,
    6.17,
    6.32,
    6.46,
    6.59,
    6.71,
  ],
  method: 'logarithmic',
  sse: 0.00040183346473124664,
  r2: 1,
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
  r2: 1,
};

const bomba = [
  2957, 1802, 6996, 2795, 2815, 3306,
  3727, 4158, 2325, 2544, 2513, 1350,
  8157, 2978, 1515, 1761, 5210, 2987,
  3023, 4316, 2846, 1151, 815, 1346,
  1051, 3831, 1350, 1125, 1294, 1742,
  1326, 1945, 1071, 2431, 973, 589,
  410, 722, 1427, 1223, 1320, 1596,
  1798, 1531, 1203, 1080, 678, 874,
  452,
];

describe('forecast', () => {
  it('should be a function', () => {
    assert.isFunction(forecast);
  });
  // Linear
  it('should return an object (linear)', () => {
    const result = forecast(linData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (linear)', () => {
    const result = forecast(linData, 3, 1);
    assert.hasAllKeys(result, linSample);
  });
  it('should have values (linear)', () => {
    const result = forecast(linData, 3, 1);
    assert.deepEqual(result, linSample);
  });
  // Exponential
  it('should return an object (exponential)', () => {
    const result = forecast(expData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (exponential)', () => {
    const result = forecast(expData, 3, 1);
    assert.hasAllKeys(result, expSample);
  });
  it('should have values (exponential)', () => {
    const result = forecast(expData, 3, 1);
    assert.deepEqual(result, expSample);
  });
  // Logarithmic
  it('should return an object (logarithmic)', () => {
    const result = forecast(logData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (logarithmic)', () => {
    const result = forecast(logData, 3, 1);
    assert.hasAllKeys(result, logSample);
  });
  it('should have values (logarithmic)', () => {
    const result = forecast(logData, 3, 1);
    assert.deepEqual(result, logSample);
  });
  // Power
  it('should return an object (power)', () => {
    const result = forecast(powData, 3, 1);
    assert.isObject(result);
  });
  it('should have keys (power)', () => {
    const result = forecast(powData, 3, 1);
    assert.hasAllKeys(result, powSample);
  });
  it('should have values (power)', () => {
    const result = forecast(powData, 3, 1);
    assert.deepEqual(result, powSample);
  });
  // // Bomba
  it('should return an object (bomba)', () => {
    const result = forecast(bomba, 12, 1);
    assert.isObject(result);
  });
});
