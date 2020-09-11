import React from "react";
import { bigNum } from "@utils/numbers";
import { render } from "@testing-library/react";

import { Table } from "./Table";
import { debug } from "console";

test("render table with proper column names", () => {
  const { getByText } = render(
    <Table
      yearsAmount={2}
      yearPayback={bigNum(10000)}
      totalAmountPayable={bigNum(100000)}
      totalInterestAmount={bigNum(100000)}
      totalPrincipalAmount={bigNum(100000)}
    />
  );
  const yearElement = getByText("Year");
  const emiElement = getByText("EMI*12");
  const principalElement = getByText("Principal paid yearly");
  const interestElement = getByText("Interest paid yearly");
  const closingBalanceElement = getByText("Closing balance");

  expect(yearElement).toBeInTheDocument();
  expect(emiElement).toBeInTheDocument();
  expect(principalElement).toBeInTheDocument();
  expect(interestElement).toBeInTheDocument();
  expect(closingBalanceElement).toBeInTheDocument();
});

test("render table with proper amount ot table rows", () => {
  const yearsAmount = 2;
  const expectEMI = bigNum(10000);

  const { getAllByText } = render(
    <Table
      yearsAmount={yearsAmount}
      yearPayback={bigNum(10000)}
      totalAmountPayable={bigNum(200000)}
      totalInterestAmount={bigNum(100000)}
      totalPrincipalAmount={bigNum(100000)}
    />
  );

  const totalAmountElements = getAllByText(expectEMI.toFormat(2));

  expect(totalAmountElements.length).toEqual(yearsAmount);
});
