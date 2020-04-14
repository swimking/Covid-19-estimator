import inputObject from './dataObject';

let days = inputObject.periodType;

const daysEstimator = () => {
  if (days === 'weeks') {
    days *= 10;
  }
  if (days === 'months') {
    days *= 30;
  }
};

export default daysEstimator;
