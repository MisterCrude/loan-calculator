import React from "react";
import { render } from "@testing-library/react";

import { Table } from "./Table";

test("renders learn react link", () => {
  const { getByText } = render(<Table />);
  const linkElement = getByText(/Home Loan Amortization Schedule/i);

  expect(linkElement).toBeInTheDocument();
});
