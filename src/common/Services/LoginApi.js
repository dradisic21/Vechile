import axios from "axios";


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

  const loginResponse = await axios
  .post(
    "https://api.baasic.com/v1/vehicle-cro23/login",
    new URLSearchParams(params),
    requestOptions
  );
  
  localStorage.setItem("userToken", loginResponse.data.access_token);
  
  return loginResponse;
}



 