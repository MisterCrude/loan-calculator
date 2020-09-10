import React from "react";
import { render } from "@testing-library/react";

import { App } from "./App";

test("render App component", () => {
  const { container } = render(<App />);
  const mainElement = container.querySelector("main");

  expect(mainElement).toBeInTheDocument();
});
