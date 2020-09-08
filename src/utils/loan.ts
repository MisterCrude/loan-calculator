import { LOAN_TYPES } from "@config/constants";
import { ICalculatedLoan } from "@typing/loan";

export const calculateLoan = (
  loanType: string,
  loanAmount: number,
  yearsAmount: number
): ICalculatedLoan => {
  const interest: number = LOAN_TYPES[loanType].interest;
  const yearInterestAmount: number = (loanAmount / yearsAmount / 100) * interest;

  const totalPrincipalAmount: number = loanAmount;
  const totalInterestAmount: number = yearInterestAmount * yearsAmount;
  const totalAmountPayable: number = totalPrincipalAmount + totalInterestAmount;
  const monthlyPayback: number = totalAmountPayable / yearsAmount / 12;

  return {
    totalPrincipalAmount,
    totalInterestAmount,
    totalAmountPayable,
    monthlyPayback,
  };
};

export const getLoanInterest = (loanType: string): number => LOAN_TYPES[loanType].interest;
