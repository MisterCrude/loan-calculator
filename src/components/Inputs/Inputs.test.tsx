import React from "react";
import { render } from "@testing-library/react";

import { Inputs } from "./Inputs";

test("renders learn react link", () => {
  const { getByText } = render(<Inputs />);
  const linkElement = getByText(/Inputs/i);

  expect(linkElement).toBeInTheDocument();
});
