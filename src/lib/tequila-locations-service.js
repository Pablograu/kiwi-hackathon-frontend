import axios from 'axios';

class TequilaLocationsService {
  constructor() {
    this.locations = axios.create({
      baseURL: process.env.TEQUILA_API_LOCATIONS_URL,
      headers: {
        apikey: process.env.TEQUIL_API_KEY,
      }
    })
  }

  checkFlights(query) {
    const {term, location_type, limit,  } = query;
    return this.booking.get(`/query?
    term=Barcelona&
    location_types=city&
    limit=10`,)
      .then(({ data }) => data);
  }
}

const tequilaLocationsService = new TequilaLocationsService();

export default tequilaLocationsService;
