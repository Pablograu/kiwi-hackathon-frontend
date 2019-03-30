import React, { Component } from 'react'
import { Card, CardHeader, CardSection, Heading,Text} from "@kiwicom/orbit-components/lib";

class UpgradeSection extends Component {
  render() {
    return (
      <div className="upgrade-section">
        <h3>Upgrade your plan!</h3>
        <div className="card-container">
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
    )
  }
}


export default UpgradeSection;