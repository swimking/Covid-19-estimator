/* eslint-disable radix */
/* eslint-disable no-mixed-operators */
import inputObject from './dataObject';

// eslint-disable-next-line no-unused-vars
class Estimator {
  constructor() {
    this.reportedCases = inputObject.reportedCases;
    this.periodType = inputObject.periodType;
    this.bedsAvailable = inputObject.totalHospitalBeds;
  }

  currentlyInfectedPeople(param1) {
    this.reportedCases = param1;
    const casesExpected = this.reportedCases * 10;
    return casesExpected;
  }

  severeImpact(value) {
    this.reportedCases = value;
    const sevImpact = this.reportedCases * 50;
    return sevImpact;
  }

  infectionsByRequestedTime(param) {
    this.reportedCases = param;

    // eslint-disable-next-line radix
    let infectionsExpected = parseInt(this.reportedCases * 1024);
    Math.floor(infectionsExpected);

    // eslint-disable-next-line default-case
    switch (true) {
      case (this.periodType === 'weeks'):
        infectionsExpected *= 7;
        break;
      case (this.periodType === 'months'):
        infectionsExpected *= 30;
        break;
    }
    return infectionsExpected;
  }

  severeCasesByRequestedTime(param2) {
    this.reportedCases = param2;
    // eslint-disable-next-line radix
    const severeCases = parseInt(this.reportedCases * 1024 / 100 * 15);
    Math.floor(severeCases);
    return severeCases;
  }

  hospitalBedsByRequestedTime(param3) {
    this.reportedCases = param3;
    const severeCases = parseInt(this.reportedCases * 1024 / 100 * 15);
    const availablebeds = parseInt(this.bedsAvailable / 100 * 35);
    const beds = Math.trunc(availablebeds - severeCases);

    return beds;
  }

  casesForICUByRequestedTime(param4) {
    this.reportedCases = param4;
    const infectionsByRequestedTime = parseInt(this.reportedCases *= 1024);
    Math.floor(infectionsByRequestedTime);
    const icuPatients = 0.5 * infectionsByRequestedTime;
    return icuPatients;
  }

  casesForVentilatorsByRequestedTime(param4) {
    this.reportedCases = param4;
    const infectionsByRequestedTime = parseInt(this.reportedCases *= 1024);
    Math.floor(infectionsByRequestedTime);
    const casesrequiringVentilators = Math.trunc(0.2 * infectionsByRequestedTime);
    return casesrequiringVentilators;
  }

  dollarsInFlight(param5) {
    this.reportedCases = param5;
    const infectionsByRequestedTime = parseInt(this.reportedCases *= 1024);
    Math.trunc(infectionsByRequestedTime);
    const dollarsInFlight = (infectionsByRequestedTime * 0.71) * 1.5 * 30;

    return dollarsInFlight;
  }
}
export default Estimator;
