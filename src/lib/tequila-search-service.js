import axios from 'axios';

class TequilaSearchService {
  constructor() {
    this.search = axios.create({
      baseURL: process.env.TEQUILA_API_SEARCH_URL,
      headers: {
        apikey: process.env.TEQUIL_API_KEY,
      }
    })
  }

  checkFlights(query) {
    const {flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, nightsFrom, nightsTo, maxDuration, flightType, adults, stopopvers, limit} = query;
    return this.booking.get(`/search?
    fly_from=${flyFrom}&
    fly_to=${flyTo}&
    date_from=${dateFrom}&
    date_to=${dateTo}&
    return_from=${returnFrom}&
    return_to=${returnTo}&
    nights_in_dst_from=${nightsFrom}&
    nights_in_dst_to=${nightsTo}&
    max_fly_duration=${maxDuration}&
    flight_type=${flightType}&
    adults=${adults}&
    max_stopovers=${stopopvers}&
    limit=${limit}`)
      .then(({ data }) => data);
  }
}

const tequilaSearchService = new TequilaSearchService();

export default tequilaSearchService;
