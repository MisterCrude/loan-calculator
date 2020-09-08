import React from "react";

import { Meter } from "grommet";

export const Chart: React.FC = () => {
  return (
    <>
      Chart
      <Meter
        type="circle"
        size="small"
        thickness="large"
        values={[
          {
            value: 70,
            color: "graph-3",
          },
          {
            value: 30,
            color: "graph-0",
          },
        ]}
        aria-label="meter"
      />
    </>
  );
};
