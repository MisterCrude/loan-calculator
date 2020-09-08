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
}

export type TLoans = Record<string, ILoan>;
