import React from "react";
import { render } from "@testing-library/react";

import { ThemeContext, base } from "grommet";
import { Chart } from "./Chart";

test("renders Chart with proper values", () => {
  const { container } = render(
    <ThemeContext.Extend value={base}>
      <Chart principal={2000} interest={1000} />
    </ThemeContext.Extend>
  );

  const principalShape =
    "M 33.6461709275 132.0000000000 A 72.0000000000 72.0000000000 0 1 0 96.0000000000 24.0000000000";
  const interestShape =
    "M 96.0000000000 24.0000000000 A 72.0000000000 72.0000000000 0 0 0 33.6461709275 132.0000000000";

  expect(container.querySelector(`[d="${interestShape}"]`)).toBeInTheDocument();
  expect(container.querySelector(`[d="${principalShape}"]`)).toBeInTheDocument();
});
