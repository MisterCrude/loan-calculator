import React from "react";
import { render } from "@testing-library/react";

import { Panel } from "./Panel";

test("renders learn react link", () => {
  const { getByText } = render(<Panel />);
  const linkElement = getByText(/Panel/i);

  expect(linkElement).toBeInTheDocument();
});
