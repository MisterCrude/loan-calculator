import { keys } from "lodash/fp";
import { TLoans, ICurrency } from "@typing/loan";

export const LOAN_TYPES: TLoans = {
  housing: { name: "housing loan", interest: 3.5 },
  instance: { name: "instance car loan", interest: 4.7 },
  spending: { name: "spending loan", interest: 7.3 },
};

export const LOANS: string[] = keys(LOAN_TYPES);

export const LOAN_STEP: number = 1000;

export const MAX_LOAN_AMOUT: number = 1000000;
export const MIN_LOAN_AMOUT: number = 10000;
export const MAX_YEARS_AMOUT: number = 30;
export const MIN_YEARS_AMOUT: number = 1;

export const CURRENCY: ICurrency = { SIGN: "$", CODE: "USD" };
