import { HttpClient } from "./HttpClientApi";

const apiClient = HttpClient();

// GET Data

export async function getResourceData(resource, rpp, page) {
  const params = {
    params: {
      page: page,
      rpp: 100,
    }
  }
  const response = await apiClient.get(resource, params);
  return response.data;
}

// POST Data

export async function postResourceData(resourceName, newResourceData) {
  const response = await apiClient.post(resourceName, newResourceData);
  return response.data;
}
 
// export async function getVehicleMake() {
//     const response = await api.get("VehicleMake");
//     return response.data;
//   }

//   export async function getVehicleModel() {
//     const response = await api.get("VehicleModel");
//     return response.data;
//   }

//   export async function getVehicle() {
//     const response = await api.get("Vehicle");
//     return response.data;
//   }


  export async function getVehicleTypes(vehicleId) {
    const response = await apiClient.get(`Vehicle/${vehicleId}`);
    return response.data;
  }
  
// Search Vehicle Model
export async function searchVehicleModel(modelName) {
  const queryParams = {
    searchQuery: `WHERE name='${modelName}'`,
  };
  const searchParams = new URLSearchParams(queryParams);
  const URL = `VehicleModel/?${searchParams}`;

  try {
    const response = await apiClient.get(URL);
    const models = response.data.item;
    return models;
  } catch (error) {
    console.log(error);
  }
}

export async function storeNewVehicleMake(newVehicleMake) {
  const response = await apiClient.post("VehicleMake", newVehicleMake);
  return response.data;
}

export async function storeNewVehicleModel(newVehicleModel) {
  const response = await apiClient.post("VehicleModel", newVehicleModel);
  return response.data;
  
}

export async function storeNewVehicle(newVehicle) {
  const response = await apiClient.post("Vehicle", newVehicle);
  return response.data;
}

export async function updateVehicle(updatedVehicle) {
  try{
    const response = await apiClient.put(`Vehicle/${updatedVehicle.id}`, updatedVehicle);
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
    const response = await apiClient.delete(`Vehicle/${vehicleId}`, vehicleId);
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
