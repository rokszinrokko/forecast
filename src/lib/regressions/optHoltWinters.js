import holtWinters from 'nostradamus';

/**
 * Returns forecast using optimal Holt-Winters regression
 * @param {Array} series
 * @param {number} m count of periods to forecast ahead
 *
 * @return {Forecast}
 */

import {
  sse,
  sst,
  findMaxR2,
} from '../helpers/index';

export default function optHoltWinters(series, m, precision) {
  const possiblePeriods = [];

  for (let i = 1; i <= series.length / 2; i += 1) {
    if (series.length % i === 0) {
      possiblePeriods.push(i);
    }
  }
  const combinations = [];
  for (let alpha = 0; alpha <= 1; alpha += 0.1 ** precision) {
    for (let beta = 0; beta <= 1; beta += 0.1 ** precision) {
      for (let gamma = 0; gamma <= 1; gamma += 0.1 ** precision) {
        possiblePeriods.forEach((period) => {
          const expSeries = holtWinters(series, alpha, beta, gamma, period, m) || [];

          const seriesToCompare = series.slice(period + 1);

          const expSeriesToCompare = expSeries.slice(period + 1, series.length);


          combinations.push({
            expSeries,
            method: 'holt-winters',
            params: {
              alpha,
              beta,
              gamma,
              period,
            },
            sse: sse(seriesToCompare, expSeriesToCompare),
            r2: 1 - (sse(seriesToCompare, expSeriesToCompare) / sst(series)),
            series,
          });
        });
      }
    }
  }

  const filteredCombinations = combinations.filter((combination) => {
    if (combination.expSeries.find(value => value < 0)) {
      return false;
    }
    // eslint-disable-next-line
    if (isNaN(combination.sse)) {
      return false;
    }
    return true;
  });
  let result = {};

  if (filteredCombinations.length) result = findMaxR2(filteredCombinations);

  return result;
}
