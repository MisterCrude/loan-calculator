import React from "react";
import BigNumber from "bignumber.js";
import { range } from "lodash/fp";

import {
  Heading,
  Table as TableGrommet,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Card,
} from "grommet";
import { TableLineRow } from "./TableLineRow";

interface IProps {
  totalPrincipalAmount: BigNumber;
  totalInterestAmount: BigNumber;
  totalAmountPayable: BigNumber;
  yearPayback: BigNumber;
  yearsAmount: number;
}

export const Table: React.FC<IProps> = ({
  totalAmountPayable,
  totalPrincipalAmount,
  totalInterestAmount,
  yearPayback,
  yearsAmount,
}) => {
  const yearsRange: number[] = range(1, yearsAmount + 1);

  return (
    <Card width="large" background="light-1">
      <Heading level="3" alignSelf="center" color="dark-2">
        Home Loan Amortization Schedule
      </Heading>

      <TableGrommet>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              <strong>Year</strong>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <strong>EMI*12</strong>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <strong>Principal paid yearly</strong>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <strong>Interest paid yearly</strong>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <strong>Closing balance</strong>
            </TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {yearsRange.map((year) => (
            <TableLineRow
              key={year}
              year={year}
              payback={yearPayback}
              payableAmount={totalAmountPayable}
              principal={totalPrincipalAmount}
              interest={totalInterestAmount}
            />
          ))}
        </TableBody>
      </TableGrommet>
    </Card>
  );
};
