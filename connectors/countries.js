import rp from 'request-promise';

export function getCountries() {
  return rp({
    uri: 'https://restcountries.eu/rest/v1/all',
    json: true,
  }).then((response) => {
    return response;
  });
}
