const covid19ImpactEstimator = (data) => {
  const inputObject = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614

  };

  data = inputObject;


  class Estimator {
    constructor() {
      this.reportedCases = inputObject.reportedCases;
      this.periodType = inputObject.periodType;
      this.bedsAvailable = inputObject.totalHospitalBeds;
    }

    currentlyInfectedPeople(param1) {
      this.reportedCases = param1;
      const casesExpected = this.reportedCases *= 10;
      return casesExpected;
    }

    severeImpact(value) {
      this.reportedCases = value;
      const sevImpact = this.reportedCases *= 50;
      return sevImpact;
    }

    infectionsByRequestedTime(param) {
      this.reportedCases = param;
      let infectionsExpected = parseInt(this.reportedCases *= 1024);
      Math.floor(infectionsExpected);

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
      const severeCases = parseInt(this.reportedCases *= 1024 / 100 * 15);
      Math.floor(severeCases);
      return severeCases;
    }

    hospitalBedsByRequestedTime(param3) {
      this.reportedCases = param3;
      const severeCases = parseInt(this.reportedCases *= 1024 / 100 * 15);
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

  const estimate = new Estimator();

  class severeimpact extends Estimator {
    constructor() {
      super();
    }

    infectionsByRequestedTime(args1) {
      this.reportedCases = args1;
      let sevImpact = this.reportedCases *= 50;
      let InfectionsforSevereimapact = parseInt(sevImpact *= 1024);
      Math.trunc(InfectionsforSevereimapact);

      switch (true) {
        case (this.periodType === 'weeks'):
          InfectionsforSevereimapact *= 7;
          break;
        case (this.periodType === 'months'):
          InfectionsforSevereimapact *= 30;
          break;
      }
      return InfectionsforSevereimapact;
    }

    severeCasesByRequestedTime(args2) {
      this.reportedCases = args2;
      let sevImpactCases = this.reportedCases *= 50;
      const InfectionsforSevereimapact = sevImpactCases *= 1024;
      const severeCasesByRequestedTime = Math.trunc(InfectionsforSevereimapact / 100 * 15);
      return severeCasesByRequestedTime;
    }

    hospitalBedsByRequestedTime(args3) {
      this.reportedCases = args3;
      let sevImpactCases = this.reportedCases *= 50;
      const InfectionsforSevereimapact = sevImpactCases *= 1024;
      const casesByrequestedtime = Math.trunc(InfectionsforSevereimapact / 100 * 15);
      const availablebeds = parseInt(this.bedsAvailable / 100 * 35);

      const totalHospitalBeds = Math.trunc(availablebeds - casesByrequestedtime);

      return totalHospitalBeds;
    }

    casesForICUByRequestedTime(args4) {
      this.reportedCases = args4;
      let cases = this.reportedCases *= 50;
      const infectionsByRequestedTime = parseInt(cases *= 1024);
      const casesForICUByRequestedTime = Math.trunc(0.5 * infectionsByRequestedTime);
      return casesForICUByRequestedTime;
    }

    casesForVentilatorsByRequestedTime(args5) {
      this.reportedCases = args5;
      let cases = this.reportedCases *= 50;
      const infectionsByRequestedTime = parseInt(cases *= 1024);
      const casesForVentilatorsByRequestedTime = Math.trunc(0.2 * infectionsByRequestedTime);
      return casesForVentilatorsByRequestedTime;
    }

    dollarsInFlight(args6) {
      this.reportedCases = args6;
      let cases = this.reportedCases *= 50;
      const infectionsByRequestedTime = parseInt(cases *= 1024);
      const dollarsInFlight = (infectionsByRequestedTime * 0.71) * 1.5 * 30;
      return dollarsInFlight;
    }
  }

  const severeImpact = new severeimpact();

  const outputObject = {
    data: {},
    impact: {
      'currently infected': estimate.currentlyInfectedPeople(inputObject.reportedCases),
      infectionsByrequestedTime: estimate.infectionsByRequestedTime(inputObject.reportedCases),
      severeCasesByRequestedTime: estimate.severeCasesByRequestedTime(inputObject.reportedCases),
      hospitalBedsByRequestedTime: estimate.hospitalBedsByRequestedTime(inputObject.reportedCases),
      casesForICUByRequestedTime: estimate.casesForICUByRequestedTime(inputObject.reportedCases),
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

  data == TotalEstimates;

  return TotalEstimates;
};


export default covid19ImpactEstimator;
