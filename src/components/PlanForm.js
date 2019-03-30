import React, { Component } from "react";
import { Card, Heading, Text } from "@kiwicom/orbit-components/lib";

import { CardHeader, CardSection } from "@kiwicom/orbit-components/lib/Card";

class PlanForm extends Component {
  render() {
    const { handleChange, handleNextStep } = this.props;
    return (
      <form onSubmit={handleNextStep}>
        <div className="plan-cards">
          <Card closable={false} dataTest="test" spaceAfter="normal">
            <CardHeader
              // icon={<Airplane />}
              title="Basic Plan"
            />
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                5% discount in all your purchases in Kiwi.com
              </Heading>
            </CardSection>
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                Travel Raffle Opportunity
              </Heading>
              <Text>Win a 500EUR Trip</Text>
              <Text>Travel by yourself</Text>
              <Text>We choose your destination</Text>
            </CardSection>
          </Card>
          <Card closable={false} dataTest="test" spaceAfter="normal">
            <CardHeader
              // icon={<Airplane />}
              title="Standard Plan"
            />
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                10% discount in all your purchases in Kiwi.com
              </Heading>
            </CardSection>
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                Travel Raffle Opportunity
              </Heading>
              <Text>Win a 700EUR Trip</Text>
              <Text>Travel with someone</Text>
              <Text>Choose a continent</Text>
            </CardSection>
          </Card>

          <Card closable={false} dataTest="test" spaceAfter="normal">
            <CardHeader
              // icon={<Airplane />}
              title="Premium Plan"
            />
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                15% discount in all your purchases in Kiwi.com
              </Heading>
            </CardSection>
            <CardSection dataTest="test">
              <Heading type="title3" element="h3">
                Travel Raffle Opportunity
              </Heading>
              <Text>Win a 1000EUR Trip</Text>
              <Text>Travel with someone</Text>
              <Text>Choose 5 destinations</Text>
            </CardSection>
          </Card>
        </div>
        <input type="submit" value="Next Step" />
      </form>
    );
  }
}

export default PlanForm;
