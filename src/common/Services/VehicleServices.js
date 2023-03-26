import axios from "axios";
import { HttpClient } from "./VehicleApi"
import {storeNewVehicleModel, storeNewVehicle} from "./VehicleMethodsApi"

const vehicleMakeMap = new Map();
const vehicleModelMap = new Map();

function mapVehicleObjects(responseVehicleList) {
  const result = [];

  for (const item of responseVehicleList) {
    // console.log(item)
    if (item.vehicle_model_id) { 
  
      item['model'] = vehicleModelMap.get(item.vehicle_model_id).name
    
      const vehicle_make_id = vehicleModelMap.get(item.vehicle_model_id).vehicle_make_id
      item['car_brand'] = vehicleMakeMap.get(vehicle_make_id).name
    
      result.push(item);
    }
  }

  return result;
}

// GET all vehicles
export async function getAllVehicleData() {
  // const userToken = localStorage.getItem("userToken");
  // const requestOptions = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + userToken,
  //   },
  // };

  const api = HttpClient();

  const [vehicleMakeResponse, vehicleModelResponse, vehicleResponse] = await Promise.all([
   api.get("VehicleMake"),
   api.get("VehicleModel"),
   api.get("Vehicle"),
  ]);

  vehicleMakeResponse.data.item.forEach(make => vehicleMakeMap.set(make.id, make));
  localStorage.setItem("VehicleMakeMap", vehicleMakeMap);

  vehicleModelResponse.data.item.forEach(model => vehicleModelMap.set(model.id, model));
  localStorage.setItem("VehicleModelMap", vehicleModelMap);

  const vehicles = mapVehicleObjects(vehicleResponse.data.item);
  
  const returnVal = {
    'vehicleMakeMap': vehicleMakeMap, 
    'vehicleModelMap': vehicleModelMap, 
    'vehicles': vehicles
  }
  
  return returnVal;
}

function findVehicleModel(modelName) {
  let retVal = null;
  for (const [_key, val] of vehicleModelMap) {
    if (val.name === modelName) {
      retVal = val;
      break;
    }
  }
  return retVal;
}

// Add new vehicle
export function addNewVehicle(vehicleForm) {
  const {model, ...vehicle} = vehicleForm

  // searchVehicleModel(model);

  let existingVehicleModel = findVehicleModel(model);

  if (existingVehicleModel === null) {
    const newVehicleModel = { name: model, abbrv: model.substring(0,4) };
    existingVehicleModel = storeNewVehicleModel(newVehicleModel);
  }

  // dodajemo vehicle_model_id u vehicle
  vehicle.vehicle_model_id = existingVehicleModel.id;

  // spremamo novi Vehicle
  const storedVehicle = storeNewVehicle(vehicle);

  return storedVehicle;
}
