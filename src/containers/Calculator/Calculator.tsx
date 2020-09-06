import React, { useState } from "react";

import { Select } from "grommet";

export const Calculator: React.FC = () => {
  const [value, setValue] = useState<string>("small");

  return (
    <Select
      options={["small", "medium", "large"]}
      value={value}
      onChange={({ option }) => setValue(option)}
    />
  );
};
