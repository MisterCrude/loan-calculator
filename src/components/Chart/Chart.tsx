import React from "react";

import { Meter } from "grommet";

interface IProps {
  principal: number;
  interest: number;
}

export const Chart: React.FC<IProps> = ({ principal, interest }) => {
  return (
    <>
      Chart
      <Meter
        type="circle"
        size="small"
        thickness="large"
        values={[
          {
            value: principal,
            color: "brand",
            label: "principal",
          },
          {
            value: interest,
            color: "status-warning",
            label: "interest",
          },
        ]}
        aria-label="meter"
      />
    </>
  );
};
