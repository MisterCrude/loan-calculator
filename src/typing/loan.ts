import BigNumber from "bignumber.js";

export interface ILoan {
  name: string;
  interest: number;
}
export interface ICalculatedLoan {
  totalPrincipalAmount: BigNumber;
  totalInterestAmount: BigNumber;
  totalAmountPayable: BigNumber;
  monthlyPayback: BigNumber;
  yearPayback: BigNumber;
}

export interface ICalculatedCurrentBalance {
  currentBalance: string;
}

export interface ICurrency {
  SIGN: string;
  CODE: string;
}

export type TLoans = Record<string, ILoan>;
