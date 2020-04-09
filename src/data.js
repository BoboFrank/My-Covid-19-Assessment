/* eslint-disable linebreak-style */
/* export const estimate = {
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

export class Data {
  constructor(data, num) {
    this.currentlyInfected = (data.reportedCases * num);
    this.totalHospitalBeds = data.totalHospitalBeds;
    this.infectionsByRequestedTime = (this.currentlyInfected * 1024);
    this.severeCasesByRequestedTime = (this.infectionsByRequestedTime * 0.15);
  }

  hospitalBedByRequestedTime() {
    return ((this.totalHospitalBeds * 0.35) - this.severeCasesByRequestedTime);
  }

  casesForICUByRequestedTime() {
    return ((this.infectionsByRequestedTime) * 0.05);
  }

  casesForVentilatorsByRequestedTime() {
    return ((this.infectionsByRequestedTime) * 0.02);
  }

  dollarsInFlight() {
    return ((((this.infectionsByRequestedTime) * 0.85) * 5.5) * 30);
  }
}
 */
/* const impact = new Data(estimate, 10, estimate.totalHospitalBeds);
const severeImpact = new Data(estimate, 50, estimate.totalHospitalBeds);

export { impact, severeImpact };
 */
