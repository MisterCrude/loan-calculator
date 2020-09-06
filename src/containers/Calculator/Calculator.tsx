import React, { useState, ChangeEventHandler } from "react";
import { keys, toNumber } from "lodash/fp";

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

interface ILoan {
  name: string;
  interest: number;
}
type TLoans = Record<string, ILoan>;

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

const getLoanInterest = (loanType: string): number =>
  LOAN_TYPES[loanType].interest;

export const Calculator: React.FC = () => {
  const [loanValue, setLoanValue] = useState<string>(loans[0]);
  const [amountValue, setAmountValue] = useState<number>(100);
  const [monthsAmountValue, setMonthsAmountValue] = useState<number>(1);

  const handleChangeLoanAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAmountValue(toNumber(e.currentTarget.value));

  const handleChangeMonthsAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setMonthsAmountValue(toNumber(e.currentTarget.value));

  return (
    <>
      <Select
        options={loans}
        value={loanValue}
        onChange={({ option }) => setLoanValue(option)}
      />
      <Paragraph>Interest rate: {getLoanInterest(loanValue)}%</Paragraph>

      {/* sliders */}
      <FormField label="Loan amount">
        <RangeInput
          max={MAX_LOAN_AMOUT}
          min={MIN_LOAN_AMOUT}
          value={amountValue}
          onChange={handleChangeLoanAmount}
        />
      </FormField>
      <TextInput
        type="number"
        max={MAX_LOAN_AMOUT}
        min={MIN_LOAN_AMOUT}
        value={amountValue}
        onChange={handleChangeLoanAmount}
      />
      {/* sliders */}

      {/* sliders */}
      <FormField label="Month amount">
        <RangeInput
          max={MAX_MONTHS_AMOUT}
          min={MIN_MONTHS_AMOUT}
          value={monthsAmountValue}
          onChange={handleChangeMonthsAmount}
        />
      </FormField>
      <TextInput
        type="number"
        max={MAX_MONTHS_AMOUT}
        min={MIN_MONTHS_AMOUT}
        value={monthsAmountValue}
        onChange={handleChangeMonthsAmount}
      />
      {/* sliders */}

      {/* data */}
      <Paragraph>
        Total Principal Amount
        <br />
        <Text weight="bold">500,000</Text>
      </Paragraph>

      <Paragraph>
        Total Interest Amount
        <br />
        <Text weight="bold">500,000</Text>
      </Paragraph>

      <Paragraph>
        Total Amount Payable
        <br />
        <Text weight="bold">500,000</Text>
      </Paragraph>

      <Heading level="3">
        Total Amount Payable
        <br />
        <Text weight="bold" size="xlarge">
          1500,000
        </Text>
      </Heading>
      {/* data */}

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
