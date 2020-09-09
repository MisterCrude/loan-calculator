import React from "react";
import BigNumber from "bignumber.js";
import { CURRENCY } from "@config/constants";

import { Paragraph, Heading, Text } from "grommet";

interface IProps {
  principal: BigNumber;
  interest: BigNumber;
  payableAmount: BigNumber;
  monthlyPayback: BigNumber;
}

export const Panel: React.FC<IProps> = ({ principal, interest, payableAmount, monthlyPayback }) => {
  return (
    <>
      <Paragraph>
        Total Principal Amount
        <br />
        <Text weight="bold">
          {principal.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Paragraph>

      <Paragraph>
        Total Interest Amount
        <br />
        <Text weight="bold">
          {interest.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Paragraph>

      <Paragraph>
        Total Amount Payable
        <br />
        <Text weight="bold">
          {payableAmount.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Paragraph>

      <Heading level="3">
        Monthly Payback
        <br />
        <Text weight="bold" size="xlarge">
          {monthlyPayback.toFormat(2)} {CURRENCY.SIGN}
        </Text>
      </Heading>
    </>
  );
};
