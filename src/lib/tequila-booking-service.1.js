import axios from 'axios';

class TequilaBookingService {
  constructor() {
    this.booking = axios.create({
      baseURL: process.env.TEQUILA_API_BOOKING_URL,
      headers: {
        apikey: '2RnUGMIDtFIG0Sh4Phufa5D7GROgaou6',
      }
    })
  }

  checkFlights() {
    return this.booking.get('/check_flights',)
      .then(({ data }) => data);
  }

  saveBooking(data) {
    const {bags, booking_token, passengers} = data;
    return this.booking.post('/save_booking', {bags, booking_token, passengers})
      .then(({ data }) => data)
  }

  confirmBooking(data) {
    const {booking_id, transaction_id} = data;
    return this.booking.post('/confirm_payment', {booking_id, transaction_id})
    .then(({ data }) => data)
  }

  confirmZoozBooking(data) {
    const {paymentMethodToken, paymentToken, paymentCvv, sandbox, booking_id} = data;
    return this.booking.post('/confirm_zooz_payment', {paymentMethodToken, paymentToken, paymentCvv, sandbox, booking_id})
    .then(({ data }) => data)
  }
}

const tequilaBookingService = new TequilaBookingService();

export default tequilaBookingService;
