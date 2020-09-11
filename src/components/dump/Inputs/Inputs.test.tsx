import React from "react";
import { render } from "@testing-library/react";
import { LOANS } from "@config/constants";

import { Inputs } from "./Inputs";

test("render Inputs with default values", () => {
  const stubFunction = () => {};

  const { container } = render(
    <Inputs
      loanType={LOANS[1]}
      loanAmount={1000}
      yearsAmount={4}
      onSetLoanType={stubFunction}
      onChangeLoanAmount={stubFunction}
      onChangeYearsAmount={stubFunction}
    />
  );
  const loanAmountElement = container.querySelector("#loanAmountRange") as Element;
  const yearsAmountElement = container.querySelector("#yearsAmountRange") as Element;
  const loanTypeElement = container.querySelector("#loanType__input") as Element;

  expect(loanAmountElement).toHaveValue(String(1000));
  expect(yearsAmountElement).toHaveValue(String(4));
  expect(loanTypeElement).toHaveValue("instance");
});
