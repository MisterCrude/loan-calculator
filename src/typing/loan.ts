export interface ILoan {
  name: string;
  interest: number;
}

export type TLoans = Record<string, ILoan>;
