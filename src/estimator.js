/* eslint-disable max-len */
import inputObject from './dataObject';
import Estimator from './computations';
import Severeimpact from './severeImpact';

const covid19ImpactEstimator = () => {
  const estimate = new Estimator();
  const severeImpact = new Severeimpact();

  const outputObject = {
    impact: {
      'currently infected': estimate.currentlyInfectedPeople(inputObject.reportedCases),
      infectionsByrequestedTime: estimate.infectionsByRequestedTime(inputObject.reportedCases),
      severeCasesByRequestedTime: estimate.severeCasesByRequestedTime(inputObject.reportedCases),
      hospitalBedsByRequestedTime: estimate.hospitalBedsByRequestedTime(inputObject.reportedCases),
      casesForICUByRequestedTime: estimate.casesForICUByRequestedTime(inputObject.reportedCases),
      // eslint-disable-next-line max-len
      casesForVentilatorsByRequestedTime: estimate.casesForVentilatorsByRequestedTime(inputObject.reportedCases),
      dollarsInFlight: estimate.dollarsInFlight(inputObject.reportedCases)

    },
    severeimpact: {
      'Currently Infected': severeImpact.severeImpact(inputObject.reportedCases),
      infectionsByRequestedTime: severeImpact.infectionsByRequestedTime(inputObject.reportedCases),
      severeCasesByrequestedTime: severeImpact.severeCasesByRequestedTime(inputObject.reportedCases),
      hospitalBedsByRequestedTime: severeImpact.hospitalBedsByRequestedTime(inputObject.reportedCases),
      casesForICUByRequestedTime: severeImpact.casesForICUByRequestedTime(inputObject.reportedCases),
      casesForVentilatorsByRequestedTime: severeImpact.casesForVentilatorsByRequestedTime(inputObject.reportedCases),
      dollarsInFlight: severeImpact.dollarsInFlight(inputObject.reportedCases)

    }

  };


  const TotalEstimates = { ...inputObject, ...outputObject };
  return TotalEstimates;
};


export default covid19ImpactEstimator;
