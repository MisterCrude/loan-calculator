import React from "react";
import { bigNum } from "@utils/numbers";
import { render } from "@testing-library/react";

import { Table } from "./Table";

test("render Table with proper column names", () => {
  const { getByText } = render(
    <Table
      yearsAmount={2}
      yearPayback={bigNum(10000)}
      totalAmountPayable={bigNum(100000)}
      totalInterestAmount={bigNum(100000)}
      totalPrincipalAmount={bigNum(100000)}
    />
  );

  expect(getByText("Year")).toBeInTheDocument();
  expect(getByText("EMI*12")).toBeInTheDocument();
  expect(getByText("Principal paid yearly")).toBeInTheDocument();
  expect(getByText("Interest paid yearly")).toBeInTheDocument();
  expect(getByText("Closing balance")).toBeInTheDocument();
});

test("render Table with proper amount ot table rows", () => {
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
