import { getOptForecast } from './helpers/math';

export default function itemForecast(series, m = 1, precision = 1) {
  return getOptForecast(series, m, precision);
}
