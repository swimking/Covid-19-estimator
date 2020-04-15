/* eslint-disable no-param-reassign */
export const modifyDays = (periodType, period) => {
  if (periodType === 'weeks') { period *= 7; }
  if (periodType === 'months') { period *= 30; }
  return period;
};

export const calculateHospitalBedsByRequestedTime = (
  totalHospitalBeds, severeCasesByRequestedTime
) => Math.trunc((0.35 * totalHospitalBeds)
                    - severeCasesByRequestedTime);

export const calculateGetCurrentlyInfected = (reportedCases, impactType) => {
  if (impactType === 'impact') {
    return Math.trunc(reportedCases * 10);
  }
  return Math.trunc(reportedCases * 50);
};
