export type City = {
  name: string
  location: {
    lat: number
    lon: number
  }
}

export const MockCities: City[] = [
  { name: "Helsinki", location: { lat: 60.1699, lon: 24.9384 } },
  { name: "Brussels", location: { lat: 50.8503, lon: 4.3517 } },
  { name: "Sofia", location: { lat: 42.6977, lon: 23.3219 } },
  { name: "Zagreb", location: { lat: 45.815, lon: 15.9819 } },
  { name: "Nicosia", location: { lat: 35.1856, lon: 33.3823 } },
  { name: "Prague", location: { lat: 50.0755, lon: 14.4378 } },
  { name: "Copenhagen", location: { lat: 55.6761, lon: 12.5683 } },
  { name: "Tallinn", location: { lat: 59.437, lon: 24.7536 } },
  { name: "Vienna", location: { lat: 48.2082, lon: 16.3738 } },
  { name: "Paris", location: { lat: 48.8566, lon: 2.3522 } },
]

export default MockCities
