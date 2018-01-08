import { getOptForecast } from './helpers/math';

export default function itemForecast(series, m = series.length, precision = 1) {
  return getOptForecast(series, m, precision);
}
