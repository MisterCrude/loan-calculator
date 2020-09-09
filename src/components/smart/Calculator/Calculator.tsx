import React, { useState, ChangeEventHandler, useEffect } from "react";
import BigNumber from "bignumber.js";
import { calculateLoan, getTargetValue } from "@utils/loan";
import { bigNum } from "@utils/numbers";
import {
  LOANS,
  MAX_LOAN_AMOUT,
  MIN_LOAN_AMOUT,
  MAX_YEARS_AMOUT,
  MIN_YEARS_AMOUT,
} from "@config/constants";

import Chart from "@components/dump/Chart";
import Table from "@components/dump/Table";
import Inputs from "@components/dump/Inputs";
import Panel from "@components/dump/Panel";

export const Calculator: React.FC = () => {
  const [loanType, setLoanType] = useState<string>(LOANS[0]);
  const [loanAmount, setLoanAmount] = useState<number>(MIN_LOAN_AMOUT);
  const [yearsAmount, setYearsAmount] = useState<number>(MIN_YEARS_AMOUT);
  const [totalPrincipalAmount, setTotalPrincipalAmount] = useState<BigNumber>(bigNum(0));
  const [totalInterestAmount, setTotalInterestAmount] = useState<BigNumber>(bigNum(0));
  const [totalAmountPayable, setTotalAmountPayable] = useState<BigNumber>(bigNum(0));
  const [monthlyPayback, setMonthlyPayback] = useState<BigNumber>(bigNum(0));
  const [yearPayback, setYearPayback] = useState<BigNumber>(bigNum(0));

  const handleChangeLoanAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setLoanAmount(getTargetValue(e.currentTarget.value, MAX_LOAN_AMOUT, MIN_LOAN_AMOUT));

  const handleChangeYearsAmount: ChangeEventHandler<HTMLInputElement> = (e) =>
    setYearsAmount(getTargetValue(e.currentTarget.value, MAX_YEARS_AMOUT, MIN_YEARS_AMOUT));

  useEffect(() => {
    const {
      totalPrincipalAmount,
      totalInterestAmount,
      totalAmountPayable,
      monthlyPayback,
      yearPayback,
    } = calculateLoan(loanType, loanAmount, yearsAmount);

    setTotalPrincipalAmount(totalPrincipalAmount);
    setTotalInterestAmount(totalInterestAmount);
    setTotalAmountPayable(totalAmountPayable);
    setMonthlyPayback(monthlyPayback);
    setYearPayback(yearPayback);
  }, [loanType, loanAmount, yearsAmount]);

  return (
    <>
      <Inputs
        loanType={loanType}
        loanAmount={loanAmount}
        yearsAmount={yearsAmount}
        onSetLoanType={setLoanType}
        onChangeLoanAmount={handleChangeLoanAmount}
        onChangeYearsAmount={handleChangeYearsAmount}
      />

      <Panel
        principal={totalPrincipalAmount}
        interest={totalInterestAmount}
        payableAmount={totalAmountPayable}
        monthlyPayback={monthlyPayback}
      />

      <Chart
        principal={totalPrincipalAmount.toNumber()}
        interest={totalInterestAmount.toNumber()}
      />

      <Table
        yearsAmount={yearsAmount}
        yearPayback={yearPayback}
        totalAmountPayable={totalAmountPayable}
        totalPrincipalAmount={totalPrincipalAmount}
        totalInterestAmount={totalInterestAmount}
      />
    </>
  );
};
