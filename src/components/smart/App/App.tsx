import React from "react";

import { Main } from "grommet";
import Calculator from "@components/smart/Calculator";

export const App: React.FC = () => (
  <>
    <Main pad={{ horizontal: "medium", vertical: "large" }} align="center" background="light-3">
      <Calculator />
    </Main>
  </>
);
