import { LOAN_TYPES } from "@config/constants";
import { ICalculatedLoan } from "@typing/loan";
import BigNumber from "bignumber.js";
import { bigNum } from "@utils/numbers";

export const calculateLoan = (
  loanType: string,
  loanAmount: number,
  yearsAmount: number
): ICalculatedLoan => {
  const interest: number = LOAN_TYPES[loanType].interest;
  const yearInterestAmount: number = (loanAmount / 100) * interest;

  const totalPrincipalAmount: BigNumber = bigNum(loanAmount);
  const totalInterestAmount: BigNumber = bigNum(yearInterestAmount * yearsAmount);
  const totalAmountPayable: BigNumber = totalPrincipalAmount.plus(totalInterestAmount);
  const monthlyPayback: BigNumber = totalAmountPayable.dividedBy(yearsAmount).dividedBy(12);

  return {
    totalPrincipalAmount,
    totalInterestAmount,
    totalAmountPayable,
    monthlyPayback,
  };
};

export const getLoanInterest = (loanType: string): number => LOAN_TYPES[loanType].interest;
