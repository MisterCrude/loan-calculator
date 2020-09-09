import React, { useState, ChangeEventHandler, useEffect } from "react";
import BigNumber from "bignumber.js";
import { keys } from "lodash/fp";
import { calculateLoan, getLoanInterest, getTargetValue } from "@utils/loan";
import { bigNum } from "@utils/numbers";
import {
  CURRENCY,
  LOAN_TYPES,
  MAX_LOAN_AMOUT,
  MIN_LOAN_AMOUT,
  MAX_YEARS_AMOUT,
  MIN_YEARS_AMOUT,
} from "@config/constants";

import { Select, Paragraph, FormField, RangeInput, TextInput, Heading, Text } from "grommet";
import Chart from "@components/Chart";
import Table from "@components/Table";

const loans = keys(LOAN_TYPES);

export const Calculator: React.FC = () => {
  const [loanType, setLoanType] = useState<string>(loans[0]);
  const [loanAmount, setLoanAmount] = useState<number>(MIN_LOAN_AMOUT);
  const [yearsAmount, setYearsAmount] = useState<number>(MIN_YEARS_AMOUT);
  const [totalPrincipalAmount, setTotalPrincipalAmount] = useState<BigNumber>(bigNum(0));
  const [totalInterestAmount, setTotalInterestAmount] = useState<BigNumber>(bigNum(0));
  const [totalAmountPayable, setTotalAmountPayable] = useState<BigNumber>(bigNum(0));
  const [monthlyPayback, setMonthlyPayback] = useState<BigNumber>(bigNum(0));
  const [yearPayback, setYearPayback] = useState<BigNumber>(bigNum(0));

  const handleChangeLoanAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setLoanAmount(getTargetValue(e.currentTarget.value, MAX_LOAN_AMOUT, MIN_LOAN_AMOUT));

  const handleChangeYearsAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setYearsAmount(getTargetValue(e.currentTarget.value, MAX_YEARS_AMOUT, MIN_YEARS_AMOUT));

  useEffect(() => {
    const {
      totalPrincipalAmount,
      totalInterestAmount,
      totalAmountPayable,
      monthlyPayback,
      yearPayback,
    } = calculateLoan(loanType, loanAmount, yearsAmount);

    setTotalPrincipalAmount(totalPrincipalAmount);
    setTotalInterestAmount(totalInterestAmount);
    setTotalAmountPayable(totalAmountPayable);
    setMonthlyPayback(monthlyPayback);
    setYearPayback(yearPayback);
  }, [loanType, loanAmount, yearsAmount]);

  return (
    <>
      <Select options={loans} value={loanType} onChange={({ option }) => setLoanType(option)} />
      <Paragraph>Interest rate: {getLoanInterest(loanType)}%</Paragraph>

      {/* sliders */}
      <FormField label={`Loan amount ${CURRENCY.SIGN}`}>
        <RangeInput
          step={1000}
          max={MAX_LOAN_AMOUT}
          min={MIN_LOAN_AMOUT}
          value={loanAmount}
          onChange={handleChangeLoanAmount}
        />
      </FormField>
      <TextInput type="number" value={loanAmount} onChange={handleChangeLoanAmount} />
      {/* sliders */}

      {/* sliders */}
      <FormField label="Years amount">
        <RangeInput
          max={MAX_YEARS_AMOUT}
          min={MIN_YEARS_AMOUT}
          value={yearsAmount}
          onChange={handleChangeYearsAmount}
        />
      </FormField>
      <TextInput
        type="number"
        max={MAX_YEARS_AMOUT}
        min={MIN_YEARS_AMOUT}
        value={yearsAmount}
        onChange={handleChangeYearsAmount}
      />
      {/* sliders */}

      {/* data */}
      <Paragraph>
        Total Principal Amount
        <br />
        <Text weight="bold">
          {totalPrincipalAmount.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Paragraph>

      <Paragraph>
        Total Interest Amount
        <br />
        <Text weight="bold">
          {totalInterestAmount.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Paragraph>

      <Paragraph>
        Total Amount Payable
        <br />
        <Text weight="bold">
          {totalAmountPayable.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Paragraph>

      <Heading level="3">
        Monthly Payback
        <br />
        <Text weight="bold" size="xlarge">
          {monthlyPayback.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Heading>
      {/* data */}

      {/* chart */}
      <Chart
        principal={totalPrincipalAmount.toNumber()}
        interest={totalInterestAmount.toNumber()}
      />
      {/* chart */}

      {/* table */}
      <Table
        yearsAmount={yearsAmount}
        yearPayback={yearPayback}
        totalAmountPayable={totalAmountPayable}
        totalPrincipalAmount={totalPrincipalAmount}
        totalInterestAmount={totalInterestAmount}
      />
      {/* table */}
    </>
  );
};
