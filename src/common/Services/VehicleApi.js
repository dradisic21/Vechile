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

let api;
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

  
  export async function getVehicleMake() {
    const response = await api.get("VehicleMake");
    return response.data;
  }

  export async function getVehicleModel() {
    const response = await api.get("VehicleModel");
    return response.data;
  }

  export async function getVehicle() {
    const response = await api.get("Vehicle");
    return response.data;
  }

  export async function getVehicleTypes(vehicleId) {
    const response = await api.get(`Vehicle/${vehicleId}`);
    return response.data;
  }

  export async function searchVehicleModel(modelName) {
    const queryParams = {
      searchQuery: `WHERE name='${modelName}'`,
    };
    const searchParams = new URLSearchParams(queryParams);
    const URL = `VehicleModel/?${searchParams}`;

    return api.get(URL).then((res) => {
      const models = res.data.item;
      return models;
    });
  }

  export async function storeNewVehicleMake(newVehicleMake) {
    const response = await api.post("VehicleMake", newVehicleMake);
    return response.data;
  }

  export async function storeNewVehicleModel(newVehicleModel) {
    const response = await api.post("VehicleModel", newVehicleModel);
    return response.data;
  }

  export async function storeNewVehicle(newVehicle) {
    const response = await api.post("Vehicle", newVehicle);
    return response.data;
  }

  export async function updateVehicle(updatedVehicle) {
    try{
      const response = await api.put(`Vehicle/${updatedVehicle.id}`, updatedVehicle);
      return response.data;
    }
     catch(error) {
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

  export async function deleteVehicle(vehicleId) {
    try{
      const response = await api.delete(`Vehicle/${vehicleId}`, vehicleId);
      return response.data;
    }
     catch(error) {
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
