import React, { Component } from 'react'
import tequilaSearchService from '../lib/tequila-search-service'
import tequilaLocationService from '../lib/tequila-locations-service'
import { withAuth } from '../providers/AuthProvider';
import { TripSegment, Card, Loading,Unknown, CardHeader,CardSection, List, ListItem, CarrierLogo, InformationCircle} from "@kiwicom/orbit-components/lib";

class Options extends Component {

  state = {
    randomFlights: [],
    loading: true,
  }

  componentDidMount() {
    tequilaLocationService.checkFlights(this.props.user.startingPoint, 'city')
    .then((data) => {
      const flyFrom = data.locations[0].code;
      const dateFrom = this.props.departure;
      const dateTo = this.props.return;
      tequilaSearchService.checkFlights(flyFrom,dateFrom,dateTo)
      .then((response) => {
        console.log(response.data)
        const randomFlights = [];
        for (let i = 0; i < 5; i++) {
          randomFlights.push(response.data[Math.floor(Math.random()*response.data.length)])
        }
        this.setState({
          randomFlights,
          loading: false,
        })
      })

    })
  }

  handleOnClick = (deeplink) => {
    this.props.handleOnClick(deeplink)
  }

  render() {
    console.log(this.state.randomFlights)
    if (!this.state.loading) {
      return (
        <div>
          {this.state.randomFlights.map((flight, index) => {
            return(<TripSegment
              key={`id:${index}`}
              duration={flight.duration.total}
              carrier={flight.countryFrom}
              departure={flight.cityFrom}
              departureTime={flight.local_departure}
              arrival={flight.cityTo}
              arrivalTime={flight.local_arrival}
              onClick={() => {
                this.handleOnClick(flight.deep_link);
              }}
              >
            </TripSegment>)
          })}
        </div>
      )
    } else {
      return (<Card>
        <Loading type="boxLoader" loading>
        <Unknown>
        <CardHeader title="Test" />
        <CardSection>
        </CardSection>
        </Unknown>
        </Loading>
      </Card>)}
  }
}

export default withAuth(Options);