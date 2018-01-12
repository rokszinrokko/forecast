import regression from 'regression';
import { sse } from './index';

export default function exponential(series, m) {
  const points = [];
  for (let i = 1; i < series.length + 1; i += 1) {
    points.push([i, series[i - 1]]);
  }

  const predictedPoints = [];
  for (let i = 1; i < series.length + m + 1; i += 1) {
    predictedPoints.push(regression.exponential(points).predict(i));
  }

  const expSeries = [];
  for (let i = 0; i < predictedPoints.length; i += 1) {
    expSeries.push(predictedPoints[i][1]);
  }

  const result = {
    expSeries,
    method: 'exponential',
    sse: sse(series, expSeries),
  };

  return result;
}
