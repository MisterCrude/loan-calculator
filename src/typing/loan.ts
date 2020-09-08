export interface ILoan {
  name: string;
  interest: number;
}
export interface ICalculatedLoan {
  totalPrincipalAmount: number;
  totalInterestAmount: number;
  totalAmountPayable: number;
  monthlyPayback: number;
}

export type TLoans = Record<string, ILoan>;
