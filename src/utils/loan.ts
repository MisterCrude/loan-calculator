import { LOAN_TYPES } from "@config/constants";

export const calculateLoan = (loanType: string, loanAmount: number, monthsAmount: number) => {
  let totalPrincipalAmount = 0;
  let totalInterestAmount = 0;
  let totalAmountPayable = 0;
  let monthlyPayback = 0;

  const interest = LOAN_TYPES[loanType].interest;
  const loan = loanAmount;
  const months = monthsAmount;

  totalPrincipalAmount = loanAmount;
  totalInterestAmount = loanAmount;

  console.log(interest, loan, months);
};

export const getLoanInterest = (loanType: string): number => LOAN_TYPES[loanType].interest;
