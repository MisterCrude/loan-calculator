import React from "react";

import { Main } from "grommet";
import Calculator from "@components/smart/Calculator";

export const App: React.FC = () => (
  <>
    <Main pad="medium" align="center">
      <Calculator />
    </Main>
  </>
);
