import axios from "axios";

// Login

export async function login(username, password, grantType = "password") {
  const params = {
    username: username,
    password: password,
    grant_type: grantType,
  };

  const requestOptions = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    params: params,
  };
  return axios
    .post(
      "https://api.baasic.com/v1/vehicle-cro23/login",
      new URLSearchParams(params),
      requestOptions
    )
    .then((response) => {
      localStorage.setItem("userToken", response.data.access_token);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
      throw error;
    });
}



export function HttpClient() { 
  const userToken = localStorage.getItem("userToken");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  };

  const api = axios.create({
    baseURL: "https://api.baasic.com/v1/vehicle-cro23/resources/",
    responseType: "json",
    headers: requestOptions.headers,
  });

  return api;
}

 