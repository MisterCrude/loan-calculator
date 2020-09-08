import React, { useState, ChangeEventHandler, useEffect } from "react";
import { keys, toNumber } from "lodash/fp";
import { loanCalculator } from "@utils/loan";
import { TLoans } from "@typing/loan";

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

const LOAN_TYPES: TLoans = {
  housing: { name: "housing loan", interest: 3.5 },
  instance: { name: "instance car loan", interest: 4.5 },
  spending: { name: "spending loan", interest: 7.3 },
};
const MAX_LOAN_AMOUT: number = 100000;
const MIN_LOAN_AMOUT: number = 0;
const MAX_MONTHS_AMOUT: number = 12 * 8;
const MIN_MONTHS_AMOUT: number = 0;

const loans = keys(LOAN_TYPES);

const getLoanInterest = (loanType: string): number => LOAN_TYPES[loanType].interest;

export const Calculator: React.FC = () => {
  const [loanType, setLoanType] = useState<string>(loans[0]);
  const [loanAmount, setLoanAmount] = useState<number>(100);
  const [monthsAmount, setMonthsAmount] = useState<number>(1);
  const [totalPrincipalAmount, setTotalPrincipalAmount] = useState<number>(500000);
  const [totalInterestAmount, setTotalInterestAmount] = useState<number>(500000);
  const [totalAmountPayable, setTotalAmountPayable] = useState<number>(500000);
  const [monthlyPayback, setMonthlyPayback] = useState<number>(500000);

  const handleChangeLoanAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setLoanAmount(toNumber(e.currentTarget.value));

  const handleChangeMonthsAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setMonthsAmount(toNumber(e.currentTarget.value));

  useEffect(() => {
    loanCalculator(loanType, loanAmount, monthsAmount);
  }, [loanType, loanAmount, monthsAmount]);

  return (
    <>
      <Select options={loans} value={loanType} onChange={({ option }) => setLoanType(option)} />
      <Paragraph>Interest rate: {getLoanInterest(loanType)}%</Paragraph>

      {/* sliders */}
      <FormField label="Loan amount">
        <RangeInput
          max={MAX_LOAN_AMOUT}
          min={MIN_LOAN_AMOUT}
          value={loanAmount}
          onChange={handleChangeLoanAmount}
        />
      </FormField>
      <TextInput
        type="number"
        max={MAX_LOAN_AMOUT}
        min={MIN_LOAN_AMOUT}
        value={loanAmount}
        onChange={handleChangeLoanAmount}
      />
      {/* sliders */}

      {/* sliders */}
      <FormField label="Month amount">
        <RangeInput
          max={MAX_MONTHS_AMOUT}
          min={MIN_MONTHS_AMOUT}
          value={monthsAmount}
          onChange={handleChangeMonthsAmount}
        />
      </FormField>
      <TextInput
        type="number"
        max={MAX_MONTHS_AMOUT}
        min={MIN_MONTHS_AMOUT}
        value={monthsAmount}
        onChange={handleChangeMonthsAmount}
      />
      {/* sliders */}

      {/* data */}
      <Paragraph>
        Total Principal Amount
        <br />
        <Text weight="bold">{totalPrincipalAmount}</Text>
      </Paragraph>

      <Paragraph>
        Total Interest Amount
        <br />
        <Text weight="bold">{totalInterestAmount}</Text>
      </Paragraph>

      <Paragraph>
        Total Amount Payable
        <br />
        <Text weight="bold">{totalAmountPayable}</Text>
      </Paragraph>

      <Heading level="3">
        Monthly Payback
        <br />
        <Text weight="bold" size="xlarge">
          {monthlyPayback}
        </Text>
      </Heading>
      {/* data */}

      {/* chart */}
      <Chart />
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
