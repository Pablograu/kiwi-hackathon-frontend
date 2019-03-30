import axios from 'axios';

class TequilaSearchService {
  constructor() {
    this.search = axios.create({
      baseURL: 'https://kiwicom-prod.apigee.net/v2',
      headers: {
        apikey: '2RnUGMIDtFIG0Sh4Phufa5D7GROgaou6',
      }
    })
  }

  checkFlights(flyFrom, dateFrom, dateTo) {
    const departure = dateFrom.split('-').reverse().join('/');
    const returnDate = dateTo.split('-').reverse().join('/');
    return this.search.get(`search?fly_from=${flyFrom}&date_from=${departure}&date_to=${returnDate}&only_weekends=true`)
      .then(({ data }) => data);
  }
}

const tequilaSearchService = new TequilaSearchService();

export default tequilaSearchService;
