import React, { useState, ChangeEventHandler, useEffect } from "react";
import { keys, toNumber } from "lodash/fp";
import BigNumber from "bignumber.js";
import { calculateLoan, getLoanInterest, getTargetValue } from "@utils/loan";
import { bigNum } from "@utils/numbers";
import {
  LOAN_TYPES,
  MAX_LOAN_AMOUT,
  MIN_LOAN_AMOUT,
  MAX_YEARS_AMOUT,
  MIN_YEARS_AMOUT,
} from "@config/constants";

import {
  Select,
  Paragraph,
  FormField,
  RangeInput,
  TextInput,
  Heading,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Text,
} from "grommet";
import Chart from "@components/Chart";

const loans = keys(LOAN_TYPES);

export const Calculator: React.FC = () => {
  const [loanType, setLoanType] = useState<string>(loans[0]);
  const [loanAmount, setLoanAmount] = useState<number>(MIN_LOAN_AMOUT);
  const [yearsAmount, setYearsAmount] = useState<number>(MIN_YEARS_AMOUT);
  const [totalPrincipalAmount, setTotalPrincipalAmount] = useState<BigNumber>(bigNum(0));
  const [totalInterestAmount, setTotalInterestAmount] = useState<BigNumber>(bigNum(0));
  const [totalAmountPayable, setTotalAmountPayable] = useState<BigNumber>(bigNum(0));
  const [monthlyPayback, setMonthlyPayback] = useState<BigNumber>(bigNum(0));

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
    } = calculateLoan(loanType, loanAmount, yearsAmount);

    setTotalPrincipalAmount(totalPrincipalAmount);
    setTotalInterestAmount(totalInterestAmount);
    setTotalAmountPayable(totalAmountPayable);
    setMonthlyPayback(monthlyPayback);
  }, [loanType, loanAmount, yearsAmount]);

  return (
    <>
      <Select options={loans} value={loanType} onChange={({ option }) => setLoanType(option)} />
      <Paragraph>Interest rate: {getLoanInterest(loanType)}%</Paragraph>

      {/* sliders */}
      <FormField label="Loan amount">
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
        <Text weight="bold">{totalPrincipalAmount.toFormat(0)}</Text>
      </Paragraph>

      <Paragraph>
        Total Interest Amount
        <br />
        <Text weight="bold">{totalInterestAmount.toFormat(0)}</Text>
      </Paragraph>

      <Paragraph>
        Total Amount Payable
        <br />
        <Text weight="bold">{totalAmountPayable.toFormat(0)}</Text>
      </Paragraph>

      <Heading level="3">
        Monthly Payback
        <br />
        <Text weight="bold" size="xlarge">
          {monthlyPayback.toFormat(2)}
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Name
            </TableCell>
            <TableCell scope="col" border="bottom">
              Flavor
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <strong>Eric</strong>
            </TableCell>
            <TableCell>Coconut</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>Chris</strong>
            </TableCell>
            <TableCell>Watermelon</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Name
            </TableCell>
            <TableCell scope="col" border="bottom">
              Flavor
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <strong>Eric</strong>
            </TableCell>
            <TableCell>Coconut</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <strong>Chris</strong>
            </TableCell>
            <TableCell>Watermelon</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
