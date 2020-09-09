import React from "react";
import ReactDOM from "react-dom";
import theme from "@utils/theme";

import { Grommet } from "grommet";
import App from "@components/smart/App";

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
