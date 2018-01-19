import optHoltWinters from '../regressions/optHoltWinters';
import exponential from '../regressions/exponential';
import linear from '../regressions/linear';
import logarithmic from '../regressions/logarithmic';
import power from '../regressions/power';

export function mean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum / arr.length;
}

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

export function sst(series) {
  const meanOfSeries = mean(series);
  const squaredDiffs = [];

  for (let i = 0; i < series.length; i += 1) {
    squaredDiffs.push((series[i] - meanOfSeries) ** 2);
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

export function findMaxR2(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    const value = arr[i];
    max = (value.r2 > max.r2) ? value : max;
  }
  return max;
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
  return findMaxR2(forecasts);
}
