import holtWinters from 'nostradamus';

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

// Optimal Holt-Winters forecast
export function optHoltWinters(series, m, precision) {
  const combinations = [];
  for (let alpha = 0; alpha <= 1; alpha += 0.1 ** precision) {
    for (let beta = 0; beta <= 1; beta += 0.1 ** precision) {
      for (let gamma = 0; gamma <= 1; gamma += 0.1 ** precision) {
        const possiblePeriods = [];

        for (let i = 1; i <= series.length; i += 1) {
          if (i % series.length === 0) {
            possiblePeriods.push(i);
          }
        }
        possiblePeriods.forEach((period) => {
          const expSeries = holtWinters(series, alpha, beta, gamma, period, m);
          combinations.push({
            expSeries,
            method: 'holt-winters',
            params: {
              alpha,
              beta,
              gamma,
            },
            sse: sse(series, expSeries),
          });
        });
      }
    }
  }

  const result = findMinSse(combinations);
  return result;
}

// Get optimal forecasts for all methods
export function getForecasts(series, m, precision) {
  const forecasts = [];

  // Holt-Winters
  forecasts.push(optHoltWinters(series, m, precision));
  // TODO további előrejelzési módszerek

  return forecasts;
}

// Optimal forecast
export function getOptForecast(series, m, precision) {
  const forecasts = getForecasts(series, m, precision);
  console.log(forecasts);
  return findMinSse(forecasts);
}
