import React, { ChangeEventHandler } from "react";
import { getLoanInterest } from "@utils/loan";
import {
  LOANS,
  CURRENCY,
  LOAN_STEP,
  MAX_LOAN_AMOUT,
  MIN_LOAN_AMOUT,
  MAX_YEARS_AMOUT,
  MIN_YEARS_AMOUT,
} from "@config/constants";

import { Select, Paragraph, FormField, RangeInput, TextInput, Card, Heading, Box } from "grommet";

interface IProps {
  loanType: string;
  loanAmount: number;
  yearsAmount: number;
  onSetLoanType: (options: string) => void;
  onChangeLoanAmount: ChangeEventHandler<HTMLInputElement>;
  onChangeYearsAmount: ChangeEventHandler<HTMLInputElement>;
}

export const Inputs: React.FC<IProps> = ({
  loanType,
  loanAmount,
  yearsAmount,
  onSetLoanType,
  onChangeLoanAmount,
  onChangeYearsAmount,
}) => {
  return (
    <Card width="large" pad={{ horizontal: "large", bottom: "large" }}>
      <Box>
        <Heading level={3} alignSelf="center">
          Setup your loan parameters
        </Heading>
      </Box>

      <Box direction="row" align="center" justify="between" pad={{ bottom: "medium" }}>
        <Box width="medium">
          <Select
            options={LOANS}
            value={loanType}
            onChange={({ option }) => onSetLoanType(option)}
          />
        </Box>
        <Box>
          <Paragraph>
            Interest rate: <strong>{getLoanInterest(loanType)}%</strong>
          </Paragraph>
        </Box>
      </Box>

      <Box pad={{ bottom: "medium" }}>
        <FormField label={`Loan amount ${CURRENCY.SIGN}`}>
          <RangeInput
            step={LOAN_STEP}
            max={MAX_LOAN_AMOUT}
            min={MIN_LOAN_AMOUT}
            value={loanAmount}
            onChange={onChangeLoanAmount}
          />
        </FormField>

        <Box direction="row" justify="start">
          <Box width="small">
            <TextInput type="number" value={loanAmount} onChange={onChangeLoanAmount} />
          </Box>
        </Box>
      </Box>

      <FormField label="Years amount">
        <RangeInput
          max={MAX_YEARS_AMOUT}
          min={MIN_YEARS_AMOUT}
          value={yearsAmount}
          onChange={onChangeYearsAmount}
        />
      </FormField>
      <Box direction="row" justify="start">
        <Box width="small">
          <TextInput
            type="number"
            max={MAX_YEARS_AMOUT}
            min={MIN_YEARS_AMOUT}
            value={yearsAmount}
            onChange={onChangeYearsAmount}
          />
        </Box>
      </Box>
    </Card>
  );
};
