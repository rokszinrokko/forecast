import { optForecast } from './helpers/math';

export default function itemForecast(series, m = 12, precision = 1) {
  return optForecast(series, m, precision);
}
