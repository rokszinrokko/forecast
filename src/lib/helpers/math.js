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

// optimális előrejelzés
export default function optForecast(series, m, precision) {
  const forecasts = [];
  // Holt-Winters
  for (let alpha = 0; alpha <= 1; alpha += 0.1 ** precision) {
    for (let beta = 0; beta <= 1; beta += 0.1 ** precision) {
      for (let gamma = 0; gamma <= 1; gamma += 0.1 ** precision) {
        for (let period = 1; period <= 24; period += 1) {
          const expSeries = holtWinters(series, alpha, beta, gamma, period, m);
          forecasts.push({
            expSeries,
            method: 'holt-winters',
            params: {
              alpha,
              beta,
              gamma,
            },
            sse: sse(series, expSeries),
          });
        }
      }
    }
  }
  // TODO további előrejelzési módszerek

  const result = forecasts.reduce((a, b) => ((a.sse > b.sse) ? a : b));

  return result;
}
