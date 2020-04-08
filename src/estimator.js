/* eslint-disable linebreak-style */
const data = {
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

const impact = {
  currentlyInfected: (data.reportedCases * 10),
  infectionByRequestedTime: ((data.reportedCases * 10) * 1024),
  casesByRequestedTime: (((data.reportedCases * 10) * 1024) * 0.15),
  hospitalBedByRequestedTime: ((((data.reportedCases * 10) * 1024) * 0.15) * 0.35),
  casesForICUByRequestedTime: (((data.reportedCases * 10) * 1024) * 0.05),
  casesForVentilatorsByRequestedTime: (((data.reportedCases * 10) * 1024) * 0.02),
  dollarsInFlight: (((((data.reportedCases * 10) * 1024) * 0.65) * 1.5) * 30)
};

const severeImpact = {
  currentlyInfected: (data.reportedCases * 50),
  infectionByRequestedTime: ((data.reportedCases * 10) * 1024),
  casesByRequestedTime: (((data.reportedCases * 10) * 1024) * 0.15),
  hospitalBedByRequestedTime: ((((data.reportedCases * 10) * 1024) * 0.15) * 0.35),
  casesForICUByRequestedTime: (((data.reportedCases * 10) * 1024) * 0.05),
  casesForVentilatorsByRequestedTime: (((data.reportedCases * 10) * 1024) * 0.02),
  dollarsInFlight: (((((data.reportedCases * 10) * 1024) * 0.65) * 1.5) * 30)
};

const estimatorData = {
  data,
  impact,
  severeImpact
};
const covid19ImpactEstimator = () => estimatorData;

export default covid19ImpactEstimator;
