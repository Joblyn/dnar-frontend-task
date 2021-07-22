import { baseUrl } from "../constants/apiConstants";

export const getData = (url, done) => {
  const endpoint = baseUrl + url;
  return (dispatch) => {
    fetch(endpoint, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => dispatch(done(data)))
    .catch(err => alert('Unable to fetch. Please check internet connection and try again.'))
  }
}