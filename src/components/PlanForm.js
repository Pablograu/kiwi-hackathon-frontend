import React, { Component } from "react";
import { Card, Heading, Text } from "@kiwicom/orbit-components/lib";

import { CardHeader, CardSection } from "@kiwicom/orbit-components/lib/Card";

class PlanForm extends Component {
  render() {
    const { handleChangePlan, handleNextStep } = this.props;
    return (
      <form>
        <div className="plan-cards">
          <div
            className="plan-card"
            onClick={() => {
              handleChangePlan("basic");
              handleNextStep();
            }}
          >
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
                <Text>Win a 500€ Trip</Text>
                <Text>Travel by yourself</Text>
                <Text>We choose your destination</Text>
              </CardSection>
              <CardSection>
                <Heading type="title3" element="h3">
                  5€/month
                </Heading>
              </CardSection>
            </Card>
          </div>

          <div
            className="plan-card"
            onClick={() => {
              handleChangePlan("standard");
              handleNextStep();
            }}
          >
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
                <Text>Win a 700€ Trip</Text>
                <Text>Travel with someone</Text>
                <Text>Choose a continent</Text>
              </CardSection>
              <CardSection>
                <Heading type="title3" element="h3">
                  10€/month
                </Heading>
              </CardSection>
            </Card>
          </div>

          <div
            className="plan-card"
            onClick={() => {
              handleChangePlan("premium");
              handleNextStep();
            }}
          >
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
                <Text>Win a 1000€ Trip</Text>
                <Text>Travel with someone</Text>
                <Text>Choose 5 destinations</Text>
              </CardSection>
              <CardSection>
                <Heading type="title3" element="h3">
                  15€/month
                </Heading>
              </CardSection>
            </Card>
          </div>
        </div>
      </form>
    );
  }
}

export default PlanForm;
