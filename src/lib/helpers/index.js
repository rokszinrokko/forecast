import holtWinters from 'nostradamus';
import exponential from '../regressions/exponential';
import linear from '../regressions/linear';
import logarithmic from '../regressions/logarithmic';
import power from '../regressions/power';

// Squared difference of two numbers
export function squaredDiff(a, b) {
  return (a - b) ** 2;
}

/* Sum of squared errors (SSE)
  series: observed (original) series
  expSeries: expected (forecasted) series
*/
export function sse(series, expSeries) {
  const squaredDiffs = [];

  for (let i = 0; i < series.length; i += 1) {
    squaredDiffs.push(squaredDiff(series[i], expSeries[i]));
  }

  return squaredDiffs.reduce((a, b) => a + b, 0);
}

export function findMinSse(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    const value = arr[i];
    min = (value.sse < min.sse) ? value : min;
  }
  return min;
}

// Get optimal Holt-Winters forecast
export function optHoltWinters(series, m, precision) {
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
          combinations.push({
            expSeries,
            method: 'holt-winters',
            params: {
              alpha,
              beta,
              gamma,
              period,
            },
            sse: sse(series, expSeries),
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

  if (filteredCombinations.length) result = findMinSse(filteredCombinations);

  return result;
}

// Get optimal forecasts for all methods
export function getForecasts(series, m, precision) {
  const forecasts = [];

  const holtWintersResult = optHoltWinters(series, m, precision);
  if (Object.keys(holtWintersResult).length) forecasts.push(holtWintersResult);

  forecasts.push(exponential(series, m));
  forecasts.push(linear(series, m));
  forecasts.push(logarithmic(series, m));
  forecasts.push(power(series, m));

  return forecasts;
}

// Optimal forecast
export function getOptForecast(series, m, precision) {
  const forecasts = getForecasts(series, m, precision);
  return findMinSse(forecasts);
}
