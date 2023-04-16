import axios from "axios";

export function HttpClient() { 
  const userToken = localStorage.getItem("userToken");
  // console.log("Token: ", userToken);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + userToken,
  };

  const client = axios.create({
    baseURL: "https://api.baasic.com/v1/vehicle-cro23/resources/",
    responseType: "json",
    headers: headers,
  });

  return client;
}