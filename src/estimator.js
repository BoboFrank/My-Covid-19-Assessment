const data = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};

const estimator = {
    reportedCases: data.reportedCases,
    currentlyInfected: reportedCases * 10,
    scurrentlyInfected: reportedCases * 50,
    infectionsByRequestedTime: currentlyInfected * 1024,
    infectionsByRequestedTime: scurrentlyInfected * 1024,
    
};

const covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;
