import React from "react";
import BigNumber from "bignumber.js";
import { calculateCurrentBalance } from "@utils/loan";

import { TableRow, TableCell } from "grommet";

interface IProps {
  payableAmount: BigNumber;
  principal: BigNumber;
  interest: BigNumber;
  payback: BigNumber;
  year: number;
}

export const TableLineRow: React.FC<IProps> = ({
  payableAmount,
  principal,
  interest,
  payback,
  year,
}) => {
  const currentBalance: BigNumber = calculateCurrentBalance(payableAmount, payback, year);

  return (
    <TableRow>
      <TableCell>{year}</TableCell>
      <TableCell>{payback.toFormat(2)}</TableCell>
      <TableCell>{principal.toFormat(2)}</TableCell>
      <TableCell>{interest.toFormat(2)}</TableCell>
      <TableCell>{currentBalance.toFormat(2)}</TableCell>
    </TableRow>
  );
};
