import React from "react";
import ReactDOM from "react-dom";
import theme from "@utils/theme";

import { Grommet } from "grommet";
import App from "@containers/App";

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
