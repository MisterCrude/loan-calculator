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

import { Select, Paragraph, FormField, RangeInput, TextInput } from "grommet";

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
    <>
      <Select options={LOANS} value={loanType} onChange={({ option }) => onSetLoanType(option)} />
      <Paragraph>Interest rate: {getLoanInterest(loanType)}%</Paragraph>

      <FormField label={`Loan amount ${CURRENCY.SIGN}`}>
        <RangeInput
          step={LOAN_STEP}
          max={MAX_LOAN_AMOUT}
          min={MIN_LOAN_AMOUT}
          value={loanAmount}
          onChange={onChangeLoanAmount}
        />
      </FormField>
      <TextInput type="number" value={loanAmount} onChange={onChangeLoanAmount} />

      <FormField label="Years amount">
        <RangeInput
          max={MAX_YEARS_AMOUT}
          min={MIN_YEARS_AMOUT}
          value={yearsAmount}
          onChange={onChangeYearsAmount}
        />
      </FormField>
      <TextInput
        type="number"
        max={MAX_YEARS_AMOUT}
        min={MIN_YEARS_AMOUT}
        value={yearsAmount}
        onChange={onChangeYearsAmount}
      />
    </>
  );
};
