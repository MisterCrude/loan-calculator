import { LOAN_TYPES } from "@config/constants";

export const loanCalculator = (loanType: string, loanAmount: number, monthsAmount: number) => {
  console.log(LOAN_TYPES[loanType]);
};
