import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CURRENCY, LOANS, MIN_LOAN_AMOUT, MIN_YEARS_AMOUT } from "@config/constants";
import { calculateLoan } from "@utils/loan";

import { Calculator } from "./Calculator";

test("handle change loan amount", () => {
  const { container } = render(<Calculator />);
  const loanAmountElement = container.querySelector("#loanAmount") as Element;
  const loanAmountRangeElement = container.querySelector("#loanAmountRange") as Element;

  expect(loanAmountElement).toHaveValue(MIN_LOAN_AMOUT);
  expect(loanAmountRangeElement).toHaveValue(String(MIN_LOAN_AMOUT));

  fireEvent.change(loanAmountElement, { target: { value: 100000 } });

  expect(loanAmountElement).toHaveValue(100000);
  expect(loanAmountRangeElement).toHaveValue(String(100000));
});

test("handle change years amount", () => {
  const { container } = render(<Calculator />);
  const yearsAmountElement = container.querySelector("#yearsAmount") as Element;
  const yearsAmountRangeElement = container.querySelector("#yearsAmountRange") as Element;

  expect(yearsAmountElement).toHaveValue(MIN_YEARS_AMOUT);
  expect(yearsAmountRangeElement).toHaveValue(String(MIN_YEARS_AMOUT));

  fireEvent.change(yearsAmountElement, { target: { value: 2 } });

  expect(yearsAmountElement).toHaveValue(2);
  expect(yearsAmountRangeElement).toHaveValue(String(2));
});

test("handle default state", () => {
  const { getByText } = render(<Calculator />);

  const loanType = LOANS[0];
  const expectedLoanAmount = MIN_LOAN_AMOUT;
  const expectedYearsAmount = MIN_YEARS_AMOUT;

  const {
    totalPrincipalAmount,
    totalInterestAmount,
    totalAmountPayable,
    monthlyPayback,
    yearPayback,
  } = calculateLoan(loanType, expectedLoanAmount, expectedYearsAmount);

  const expectedpPincipalAmount = getByText(`${totalPrincipalAmount.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedInterestAmount = getByText(`${totalInterestAmount.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedAmountPayable = getByText(`${totalAmountPayable.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedMonthlyPayback = getByText(`${monthlyPayback.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedYearPayback = getByText(`${yearPayback.toFormat(2)} ${CURRENCY.SIGN}`);

  expect(expectedpPincipalAmount).toBeInTheDocument();
  expect(expectedInterestAmount).toBeInTheDocument();
  expect(expectedAmountPayable).toBeInTheDocument();
  expect(expectedMonthlyPayback).toBeInTheDocument();
  expect(expectedYearPayback).toBeInTheDocument();
});

test("handle changed state", () => {
  const { container, getByText, getAllByText } = render(<Calculator />);

  const loanType = LOANS[0];
  const expectedLoanAmount = 100000;
  const expectedYearsAmount = 3;

  const loanAmountElement = container.querySelector("#loanAmount") as Element;
  const yearsAmountElement = container.querySelector("#yearsAmount") as Element;

  fireEvent.change(loanAmountElement, { target: { value: expectedLoanAmount } });
  fireEvent.change(yearsAmountElement, { target: { value: expectedYearsAmount } });

  const {
    totalPrincipalAmount,
    totalInterestAmount,
    totalAmountPayable,
    monthlyPayback,
    yearPayback,
  } = calculateLoan(loanType, expectedLoanAmount, expectedYearsAmount);

  const expectedpPincipalAmount = getByText(`${totalPrincipalAmount.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedInterestAmount = getByText(`${totalInterestAmount.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedAmountPayable = getByText(`${totalAmountPayable.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedMonthlyPayback = getByText(`${monthlyPayback.toFormat(2)} ${CURRENCY.SIGN}`);
  const expectedYearPayback = getAllByText(yearPayback.toFormat(2))[0];

  expect(expectedpPincipalAmount).toBeInTheDocument();
  expect(expectedInterestAmount).toBeInTheDocument();
  expect(expectedAmountPayable).toBeInTheDocument();
  expect(expectedMonthlyPayback).toBeInTheDocument();
  expect(expectedYearPayback).toBeInTheDocument();
});
