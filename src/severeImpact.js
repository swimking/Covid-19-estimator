/* eslint-disable prefer-const */
/* eslint-disable no-mixed-operators */
/* eslint-disable radix */
import Estimator from './computations';
import daysestimator from './daysestimator';

class Severeimpact extends Estimator {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  infectionsByRequestedTime(args1) {
    daysestimator();
    this.reportedCases = args1;
    const reportedcases = this.reportedCases * 50;
    let InfectionsforSevereimapact = parseInt(reportedcases * 1024);
    Math.trunc(InfectionsforSevereimapact);

    // eslint-disable-next-line default-case
    return InfectionsforSevereimapact;
  }

  severeCasesByRequestedTime(args2) {
    this.reportedCases = args2;
    const sevImpactCases = this.reportedCases * 50;
    const InfectionsforSevereimapact = sevImpactCases * 1024;
    const severeCasesByRequestedTime = Math.trunc(InfectionsforSevereimapact / 100 * 15);
    return severeCasesByRequestedTime;
  }

  hospitalBedsByRequestedTime(args3) {
    this.reportedCases = args3;
    let sevImpactCases = this.reportedCases * 50;
    const InfectionsforSevereimapact = sevImpactCases * 1024;
    const casesByrequestedtime = Math.trunc(InfectionsforSevereimapact / 100 * 15);
    const availablebeds = parseInt(this.bedsAvailable / 100 * 35);

    const totalHospitalBeds = Math.trunc(availablebeds - casesByrequestedtime);

    return totalHospitalBeds;
  }

  casesForICUByRequestedTime(args4) {
    this.reportedCases = args4;
    let cases = this.reportedCases * 50;
    const infectionsByRequestedTime = parseInt(cases *= 1024);
    const casesForICUByRequestedTime = Math.trunc(0.5 * infectionsByRequestedTime);
    return casesForICUByRequestedTime;
  }

  casesForVentilatorsByRequestedTime(args5) {
    this.reportedCases = args5;
    let cases = this.reportedCases * 50;
    const infectionsByRequestedTime = parseInt(cases *= 1024);
    const casesForVentilatorsByRequestedTime = Math.trunc(0.2 * infectionsByRequestedTime);
    return casesForVentilatorsByRequestedTime;
  }

  dollarsInFlight(args6) {
    this.reportedCases = args6;
    let cases = this.reportedCases * 50;
    const infectionsByRequestedTime = parseInt(cases *= 1024);
    const dollarsInFlight = (infectionsByRequestedTime * 0.71) * 1.5 * 30;
    return dollarsInFlight;
  }
}
export default Severeimpact;
