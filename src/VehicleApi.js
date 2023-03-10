import axios from "axios";

// Login

export async function login(username, password, grantType = 'password') {
  const params = {
    username: username,
    password: password,
    grant_type: grantType,
  };
  console.log(params);
  const requestOptions = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: params,
  };
  axios
    .post(
      'https://api.baasic.com/v1/vehicle-cro23/login',
      new URLSearchParams(params),
      requestOptions
    )
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("userToken", response.data.access_token); 
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
      throw error;
    });
}

//POST VehicleMake

export async function VehicleMake() {
  const userToken = JSON.parse(localStorage.getItem("userToken")).access_token;

  const requestOptions = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .post("https://api.baasic.com/v1/vehicle-cro23/resources/VehicleMake", requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}

//POST VehicleMake

export async function VehicleModel() {
  const userToken = JSON.parse(localStorage.getItem("userToken")).access_token;

  const requestOptions = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .post("https://api.baasic.com/v1/vehicle-cro23/resources/VehicleModel", requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}

//POST Vehicle

export async function Vehicle() {
  const userToken = JSON.parse(localStorage.getItem("userToken")).access_token;

  const requestOptions = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .post("https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle", requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}


//GET VehicleMake

export async function getVehicleMake() {
  const userToken = JSON.parse(localStorage.getItem("userToken")).access_token;

  const requestOptions = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .get("https://api.baasic.com/v1/vehicle-cro23/resources/VehicleMake", requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}

//GET VehicleMake

export async function getVehicleModel() {
  const userToken = JSON.parse(localStorage.getItem("userToken")).access_token;

  const requestOptions = {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .get("https://api.baasic.com/v1/vehicle-cro23/resources/VehicleModel", requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}

//GET Vehicle

export async function getVehicle() {
  const userToken = JSON.parse(localStorage.getItem("userToken")).access_token;

  const requestOptions = {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .get("https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle", requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}


//Delete item 

export async function deleteVehicle(vehicleId) {
 
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios
    .delete(`https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle/${vehicleId}`, requestOptions)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
      throw error;
    });
  
  return response;
}