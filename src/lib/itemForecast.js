import { getOptForecast } from './helpers/index';

export default function itemForecast(series, m = 1, precision = 1) {
  return getOptForecast(series, m, precision);
}
