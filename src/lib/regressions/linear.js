import regression from 'regression';
import { sse } from '../helpers/index';

export default function linear(series, m) {
  const points = [];
  for (let i = 1; i < series.length + 1; i += 1) {
    points.push([i, series[i - 1]]);
  }

  const predictedPoints = [];
  for (let i = 1; i < series.length + m + 1; i += 1) {
    predictedPoints.push(regression.linear(points).predict(i));
  }

  const expSeries = [];
  for (let i = 0; i < predictedPoints.length; i += 1) {
    expSeries.push(predictedPoints[i][1]);
  }

  const result = {
    expSeries,
    method: 'linear',
    sse: sse(series, expSeries),
  };

  return result;
}
