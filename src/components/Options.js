import React, { Component } from 'react'
import tequilaSearchService from '../lib/tequila-search-service'
import tequilaLocationService from '../lib/tequila-locations-service'
import { withAuth } from '../providers/AuthProvider';
import { TripSegment, Loading} from "@kiwicom/orbit-components/lib";

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
        <div className="options-container">
          {this.state.randomFlights.map((flight, index) => {
            return(<TripSegment
              key={`id:${index}`}
              carrier={flight.countryFrom}
              departure={flight.cityFrom}
              arrival={flight.cityTo}
              onClick={() => {
                this.handleOnClick(flight.deep_link);
              }}
              >
            </TripSegment>)
          })}
        </div>
      )
    } else {
      return (
        <div className="options-container">
          <Loading
            loading
            type="pageLoader"
            text="Please wait, content of the page is loading..."
            dataTest="test"
          />
        </div>
      )}
  }
}

export default withAuth(Options);