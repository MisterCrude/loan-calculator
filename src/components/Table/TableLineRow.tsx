import React from "react";
import BigNumber from "bignumber.js";
import { calculateCurrentBalance } from "@utils/loan";

import { TableRow, TableCell } from "grommet";

interface IProps {
  totalAmountPayable: BigNumber;
  yearPayback: BigNumber;
  year: number;
}

export const TableLineRow: React.FC<IProps> = ({ totalAmountPayable, yearPayback, year }) => {
  const { currentBalance } = calculateCurrentBalance(totalAmountPayable, yearPayback, year);

  return (
    <TableRow>
      <TableCell>{year}</TableCell>
      <TableCell>{yearPayback.toFormat(2)}</TableCell>
      <TableCell>sd</TableCell>
      <TableCell>Coconut</TableCell>
      <TableCell>{currentBalance}</TableCell>
    </TableRow>
  );
};
