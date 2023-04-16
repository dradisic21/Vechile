import {storeNewVehicleModel, storeNewVehicle, getResourceData} from "./VehicleMethodsApi"

const vehicleMakeMap = new Map();
const vehicleModelMap = new Map();

function mapVehicleObjects(responseVehicleList) {
  const result = [];

  for (const item of responseVehicleList) {
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
  const [vehicleMake, vehicleModel, vehicle] = await Promise.all([
   getResourceData("VehicleMake"),
   getResourceData("VehicleModel"),
   getResourceData("Vehicle"),
  ]);

  vehicleMake.item.forEach(make => vehicleMakeMap.set(make.id, make));
  localStorage.setItem("VehicleMakeMap", vehicleMakeMap);

  vehicleModel.item.forEach(model => vehicleModelMap.set(model.id, model));
  localStorage.setItem("VehicleModelMap", vehicleModelMap);

  const vehicles = mapVehicleObjects(vehicle.item);
  
  const returnVal = {
    'vehicleMakeMap': vehicleMakeMap, 
    'vehicleModelMap': vehicleModelMap, 
    'vehicles': vehicles
  }
  
  return returnVal;
}

// Pretrazivanje po nazivu vozila
function findVehicleModel(modelName) {
  return [...vehicleModelMap.values()].find((model) => model.name === modelName) || null;
}

// function findVehicleModel(modelName) {
//   let retVal = null;
//   for (const [_key, val] of vehicleModelMap) {
//     if (val.name === modelName) {
//       retVal = val;
//       break;
//     }
//   }
//   return retVal;
// }


// Add new vehicle
export async function addNewVehicle(vehicleForm) {
  const {model,selectedOption, ...vehicle} = vehicleForm
  // searchVehicleModel(model);

  let existingVehicleModel = await findVehicleModel(model);

  if (existingVehicleModel === null) {
    const newVehicleModel = { name: model, abbrv: model.substring(0,4), vehicle_make_id: selectedOption };
    existingVehicleModel = await storeNewVehicleModel(newVehicleModel);
    vehicleModelMap.set(existingVehicleModel.id, existingVehicleModel);
  }

  // dodajemo vehicle_model_id u vehicle
  vehicle.vehicle_model_id = existingVehicleModel.id;
  
  // spremamo novi Vehicle
  const storedVehicle = await storeNewVehicle(vehicle);

  return storedVehicle;
}
