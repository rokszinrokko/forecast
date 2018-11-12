import { getOptForecast } from './lib/helpers/index';

/**
 * @typedef {Object} Forecast
 * @property {Array} expSeries the expected (forecasted) series data
 * @property {string} method the used regression type
 * @property {number} sse sum of square errors
 * @property {number} r2 coefficient of determination
 */

/**
 * 
 * @param {Array} series input series data
 * @param {number} [m = 1] count of periods to forecast ahead
 * @param {number} [precision = 1] level of optimalization of alpha, beta and gamma parameters. Only applicable for HolWinters forecasts
 * 
 * @returns {Forecast}
 */

export default function forecast(series, m = 1, precision = 1) {
  return getOptForecast(series, m, precision);
}
