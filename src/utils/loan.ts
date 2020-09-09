import { toNumber } from "lodash/fp";
import BigNumber from "bignumber.js";
import { LOAN_TYPES } from "@config/constants";
import { ICalculatedLoan } from "@typing/loan";
import { bigNum } from "@utils/numbers";

export const calculateLoan = (
  loanType: string,
  loanAmount: number,
  yearsAmount: number
): ICalculatedLoan => {
  const interest: number = LOAN_TYPES[loanType].interest;
  const interestPerMonth: number = 1 + interest / 100 / 12;
  const payableMonthsAmount: number = yearsAmount * 12;

  const monthlyPayback: BigNumber = bigNum(
    (loanAmount * (interestPerMonth ** payableMonthsAmount * (interestPerMonth - 1))) /
      (interestPerMonth ** payableMonthsAmount - 1)
  );
  const yearPayback: BigNumber = monthlyPayback.multipliedBy(12);
  const totalPrincipalAmount: BigNumber = bigNum(loanAmount);
  const totalAmountPayable: BigNumber = monthlyPayback.multipliedBy(payableMonthsAmount);
  const totalInterestAmount: BigNumber = monthlyPayback
    .multipliedBy(payableMonthsAmount)
    .minus(loanAmount);

  return {
    totalPrincipalAmount,
    totalInterestAmount,
    totalAmountPayable,
    monthlyPayback,
    yearPayback,
  };
};

export const getLoanInterest = (loanType: string): number => LOAN_TYPES[loanType].interest;

export const calculateCurrentBalance = (
  payable: BigNumber,
  yearPayback: BigNumber,
  year: number
): BigNumber => {
  let currentBalance: BigNumber = payable.minus(yearPayback.multipliedBy(year).toNumber());

  if (currentBalance.isLessThan(0)) {
    currentBalance = currentBalance.negated();
  }

  return currentBalance;
};

// export const calculatePrincipalPaid = () => {};

export const getTargetValue = (num: number | string, max: number, min: number): number => {
  let val: number = toNumber(num);

  val = val > max ? max : val;
  val = val < min ? min : val;

  return val;
};
