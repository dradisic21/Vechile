import axios from "axios";

// Login

export async function login(username, password, grantType = 'password') {
  const params = {
    username: username,
    password: password,
    grant_type: grantType,
  };

  const requestOptions = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: params,
  };
  return axios
    .post(
      'https://api.baasic.com/v1/vehicle-cro23/login',
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

//POST VehicleMake

export async function VehicleMake() {
  const userToken = (localStorage.getItem("userToken"));

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

export async function storeNewVehicleModel(newVehicleModel) {
  const userToken = localStorage.getItem("userToken");
  const url = "https://api.baasic.com/v1/vehicle-cro23/resources/VehicleModel";
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    }
  };
  try {
    const res = await axios.post(url, newVehicleModel, requestOptions);
    return res.data;
  } catch(error) {
    if (error.response) {
      // Request made but the server responded with an error
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Request made but no response is received from the server.
      console.log(error.request);
    } else {
      // Error occured while setting up the request
      console.log('Error', error.message);
    }
    return undefined;
  }
}

//POST New Vehicle

export async function storeNewVehicle(newVehicle) {
  const userToken = localStorage.getItem("userToken");
  const url = "https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle";
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    }
  };

  try {
    const res = await axios.post(url, newVehicle, requestOptions);
    return res.data;
  } catch(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
    } else {
      console.log('Error', error.message);
    }
    return undefined;
  }
}

// GET METHODS

//GET VehicleMake

export async function getVehicleMake() {
  const userToken = localStorage.getItem("userToken");

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

//GET VehicleModel

export async function getVehicleModel() {
  const userToken = (localStorage.getItem("userToken"));

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
  const userToken = (localStorage.getItem("userToken"));

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

// GET Vehicle type getVehicleTypes

export async function getVehicleTypes(vehicleId) {
  const userToken = (localStorage.getItem("userToken"));

  const requestOptions = {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  
  };
  const response = await axios
  .get(`https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle/${vehicleId}`, requestOptions)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response);
    }
    throw error;
  });
return response;
}


//Search 

export function searchVehicleModel(modelName) {
  const userToken = localStorage.getItem("userToken");

  const queryParams = {
    searchQuery: `WHERE name='${modelName}'` 
  };
  const searchParams = new URLSearchParams(queryParams);
  const URL = `https://api.baasic.com/v1/vehicle-cro23/resources/VehicleModel/?${searchParams}`
  
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
    Authorization: "Bearer " + userToken,
  };
  console.log('search query', queryParams);

  return axios
    .get(URL, requestOptions)
    .then(res => {
      const models = res.data.item;
      console.log('model', models);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response);
      }
      throw error;
    });
}


//Delete vehicle

export async function deleteVehicle(vehicleId) {
  const userToken = localStorage.getItem("userToken");
  const url = `https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle/${vehicleId}`;
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    }
  };
    try {
      const res = await axios.delete(url, requestOptions);
      return res.data;
    } catch(error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      return undefined;
    }
  }

//PUT - Update vehicle

export async function updateVehicle(updatedVehicle) {
  const userToken = localStorage.getItem("userToken");
  const url = `https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle/${updatedVehicle.id}`;
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    }
  };
    try {
      const res = await axios.put(url, updatedVehicle, requestOptions);
      return res.data;
    } catch(error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  }
