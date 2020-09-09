import React from "react";
import BigNumber from "bignumber.js";
import { CURRENCY } from "@config/constants";

import { Paragraph, Heading, Text, Card, Box } from "grommet";
import Chart from "@components/dump/Chart";

interface IProps {
  principal: BigNumber;
  interest: BigNumber;
  payableAmount: BigNumber;
  monthlyPayback: BigNumber;
}

const markerStyles = { width: "15px", height: "15px", display: "inline-block", marginRight: "5px" };

export const Panel: React.FC<IProps> = ({ principal, interest, payableAmount, monthlyPayback }) => {
  return (
    <Box margin={{ bottom: "large" }}>
      <Card width="large" pad="large" direction="row" fill="vertical" background="light-1">
        <Box flex="grow">
          <Paragraph>
            <Box background="brand" as="span" style={markerStyles} />
            Total Principal Amount
            <br />
            <Text weight="bold">
              {principal.toFormat(2)} {CURRENCY.SIGN}
            </Text>
          </Paragraph>

          <Paragraph>
            <Box background="status-warning" as="span" style={markerStyles} />
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
        </Box>

        <Box align="center" justify="center" flex="grow">
          <Chart principal={principal.toNumber()} interest={interest.toNumber()} />
        </Box>
      </Card>
    </Box>
  );
};
