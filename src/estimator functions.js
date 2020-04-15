import {
  calculateGetCurrentlyInfected, modifyDays,
  calculateHospitalBedsByRequestedTime
} from './computations';

export default class EstimatorClass {
  constructor(inputObject) {
    this.inputObject = inputObject;

    const {
      periodType, timeToElapse,
      reportedCases, totalHospitalBeds,
      region
    } = this.inputObject;

    const {
      avgDailyIncomeInUSD, avgDailyIncomePopulation
    } = region;

    const days = modifyDays(periodType, timeToElapse);
    const factor = Math.trunc(days / 3);

    this.createImpactData = () => {
      const data = {};
      data.currentlyInfected = calculateGetCurrentlyInfected(
        reportedCases, 'impact'
      );
      data.infectionsByRequestedTime = data.currentlyInfected
                                         * (2 ** factor);
      data.severeCasesByRequestedTime = Math.trunc(0.15
                                        * data.infectionsByRequestedTime);
      data.hospitalBedsByRequestedTime = calculateHospitalBedsByRequestedTime(
        totalHospitalBeds, data.severeCasesByRequestedTime
      );
      data.casesForICUByRequestedTime = Math.trunc(0.05
                                        * data.infectionsByRequestedTime);
      data.casesForVentilatorsByRequestedTime = Math.trunc(0.02
                                        * data.infectionsByRequestedTime);
      data.dollarsInFlight = Math.trunc((
        data.infectionsByRequestedTime
        * avgDailyIncomePopulation * avgDailyIncomeInUSD
      ) / days);
      return data;
    };

    this.createServeData = () => {
      const data = {};
      data.currentlyInfected = calculateGetCurrentlyInfected(
        reportedCases, 'severe'
      );
      data.infectionsByRequestedTime = data.currentlyInfected * (2 ** factor);
      data.severeCasesByRequestedTime = Math.trunc(0.15
                                          * data.infectionsByRequestedTime);
      data.hospitalBedsByRequestedTime = calculateHospitalBedsByRequestedTime(
        totalHospitalBeds, data.severeCasesByRequestedTime
      );
      data.casesForICUByRequestedTime = Math.trunc(0.05
                                          * data.infectionsByRequestedTime);
      data.casesForVentilatorsByRequestedTime = Math.trunc(0.02
                                        * data.infectionsByRequestedTime);
      data.dollarsInFlight = Math.trunc((
        data.infectionsByRequestedTime
        * avgDailyIncomePopulation * avgDailyIncomeInUSD
      ) / days);
      return data;
    };
  }
}
