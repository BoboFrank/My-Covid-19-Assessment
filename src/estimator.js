/* eslint-disable linebreak-style */
const estimate = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5.50,
    avgDailyIncomePopulation: 0.85
  },
  periodType: 'days',
  timeToElapse: 30,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  class Data {
    constructor(est, num) {
      this.currentlyInfected = (est.reportedCases * num);
      this.totalHospitalBeds = est.totalHospitalBeds;
      this.infectionsByRequestedTime = (this.currentlyInfected * 1024);
      this.severeCasesByRequestedTime = (this.infectionsByRequestedTime * 0.15);
      // eslint-disable-next-line max-len
      this.hospitalBedByRequestedTime = ((this.totalHospitalBeds * 0.35) - this.severeCasesByRequestedTime);
      this.casesForICUByRequestedTime = ((this.infectionsByRequestedTime) * 0.05);
      this.casesForVentilatorsByRequestedTime = ((this.infectionsByRequestedTime) * 0.02);
      this.dollarsInFlight = ((((this.infectionsByRequestedTime) * 0.85) * 5.5) * 30);
    }
  }
  return {
    data,
    impact: new Data(estimate, 10, estimate.totalHospitalBeds),
    severeImpact: new Data(estimate, 50, estimate.totalHospitalBeds)
  };
};

export default covid19ImpactEstimator;
