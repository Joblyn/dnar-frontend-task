import { baseUrl } from "../constants/apiConstants";

export const getData = (url, done, id = null) => {
  const endpoint = baseUrl + url;
  console.log(endpoint);
  return (dispatch) => {
    fetch(endpoint, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => dispatch(done(data, id)))
      .catch((err) =>
        alert(
          "Unable to fetch. Please check internet connection and try again."
        )
      );
  };
};
