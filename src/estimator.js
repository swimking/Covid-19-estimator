import EstimatorClass from './estimator functions';

const covid19ImpactEstimator = (userData) => {
  const Estimator = new EstimatorClass(userData);
  return {
    data: userData,
    impact: Estimator.createImpactData(),
    severeImpact: Estimator.createServeData()
  };
};

export default covid19ImpactEstimator;
