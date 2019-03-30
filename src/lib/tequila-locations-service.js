import axios from 'axios';

class TequilaLocationsService {
  constructor() {
    this.locations = axios.create({
      baseURL: 'https://kiwicom-prod.apigee.net/locations',
      headers: {
        apikey: '2RnUGMIDtFIG0Sh4Phufa5D7GROgaou6',
      }
    })
  }

  checkFlights(term, type) {
    return this.locations.get(`/query?term=${term}&location_types=${type}&limit=10`,)
      .then(({ data }) => data);
  }
}

const tequilaLocationsService = new TequilaLocationsService();

export default tequilaLocationsService;
