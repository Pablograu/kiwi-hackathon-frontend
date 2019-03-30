import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardSection,
  Heading,
  Text,
  Airplane
} from "@kiwicom/universal-components";

class PlanForm extends Component {
  render() {
    const { handleChange, handleNextStep } = this.props;
    return (
      <form onSubmit={handleNextStep}>
        <div className="subs-plans">
          <div className="plan1" />
          <div className="plan2" />
          <div className="plan3" />
          <Card closable={false} dataTest="test" spaceAfter="normal">
            <CardHeader
              icon={<Airplane />}
              title="Basic Plan"
              subTitle="This is a customisable description of the card."
              dataTest="test"
            />
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                Content with Heading and text
              </Heading>
              <Text>Text in content</Text>
            </CardSection>
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                Section with Heading and text
              </Heading>
              <Text>Text in section</Text>
            </CardSection>
          </Card>
          Copy
        </div>
        <input type="submit" value="Next Step" />
      </form>
    );
  }
}

export default PlanForm;
