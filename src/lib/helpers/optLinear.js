import regression from 'regression';

export default function optLinear(series, m) {
  const points = [];
  for (let i = 0; i < series.length; i += 1) {
    points.push([i, series[i]]);
  }

  const predictedPoints = [];
  for (let i = series.length; i < series.length + m; i += 1) {
    predictedPoints.push(regression.linear(points).predict(i));
  }

  const result = [];
  for (let i = 0; i < predictedPoints.length; i += 1) {
    result.push(predictedPoints[i][1]);
  }

  return result;
}
