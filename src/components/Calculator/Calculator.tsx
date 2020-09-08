import React, { useState, ChangeEventHandler, useEffect } from "react";
import { keys, toNumber } from "lodash/fp";
import { calculateLoan, getLoanInterest } from "@utils/loan";
import {
  LOAN_TYPES,
  MAX_LOAN_AMOUT,
  MIN_LOAN_AMOUT,
  MAX_MONTHS_AMOUT,
  MIN_MONTHS_AMOUT,
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
  const [loanAmount, setLoanAmount] = useState<number>(100);
  const [yearsAmount, setYearsAmount] = useState<number>(1);
  const [totalPrincipalAmount, setTotalPrincipalAmount] = useState<number>(500000);
  const [totalInterestAmount, setTotalInterestAmount] = useState<number>(500000);
  const [totalAmountPayable, setTotalAmountPayable] = useState<number>(500000);
  const [monthlyPayback, setMonthlyPayback] = useState<number>(500000);

  const handleChangeLoanAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setLoanAmount(toNumber(e.currentTarget.value));

  const handleChangeYearsAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setYearsAmount(toNumber(e.currentTarget.value));

  useEffect(() => {
    calculateLoan(loanType, loanAmount, yearsAmount);
  }, [loanType, loanAmount, yearsAmount]);

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
