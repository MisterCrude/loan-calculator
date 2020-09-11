import React from "react";
import { bigNum } from "@utils/numbers";
import { render } from "@testing-library/react";
import { CURRENCY } from "@config/constants";

import { Panel } from "./Panel";

test("renders Panel with proper titles", () => {
  const { getByText } = render(
    <Panel
      principal={bigNum(10000)}
      interest={bigNum(2000)}
      payableAmount={bigNum(3000)}
      monthlyPayback={bigNum(4000)}
    />
  );

  expect(getByText("Total Principal Amount")).toBeInTheDocument();
  expect(getByText("Total Interest Amount")).toBeInTheDocument();
  expect(getByText("Total Amount Payable")).toBeInTheDocument();
  expect(getByText("Monthly Payback")).toBeInTheDocument();
});

test("renders Panel with values", () => {
  const { getByText } = render(
    <Panel
      principal={bigNum(10000)}
      interest={bigNum(2000)}
      payableAmount={bigNum(3000)}
      monthlyPayback={bigNum(4000)}
    />
  );

  expect(getByText(`${bigNum(10000).toFormat(2)} ${CURRENCY.SIGN}`)).toBeInTheDocument();
  expect(getByText(`${bigNum(2000).toFormat(2)} ${CURRENCY.SIGN}`)).toBeInTheDocument();
  expect(getByText(`${bigNum(3000).toFormat(2)} ${CURRENCY.SIGN}`)).toBeInTheDocument();
  expect(getByText(`${bigNum(4000).toFormat(2)} ${CURRENCY.SIGN}`)).toBeInTheDocument();
});
