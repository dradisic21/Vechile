import axios from "axios";

export async function getAllVehicleData() {
    const userToken = localStorage.getItem("userToken");
  
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };
  
    const [vehicleMakeResponse, vehicleModelResponse, vehicleResponse] = await Promise.all([
      axios.get("https://api.baasic.com/v1/vehicle-cro23/resources/VehicleMake", requestOptions),
      axios.get("https://api.baasic.com/v1/vehicle-cro23/resources/VehicleModel", requestOptions),
      axios.get("https://api.baasic.com/v1/vehicle-cro23/resources/Vehicle", requestOptions),
    ]);
  
    const vehicleMakeMap = new Map();
    vehicleMakeResponse.data.item.forEach(make => vehicleMakeMap.set(make.id, make));
    localStorage.setItem("VehicleMakeMap", vehicleMakeMap);
    const vehicleModelMap = new Map();
    vehicleModelResponse.data.item.forEach(model => vehicleModelMap.set(model.id, model));
    localStorage.setItem("VehicleModelMap", vehicleModelMap);

    const vehicles = vehicleResponse.data.item.map(item => {
     
      const {vehicle_model_id, ...vehicle} = item
    

      vehicle['model'] = vehicleModelMap.get(vehicle_model_id).name
      
      const vehicle_make_id = vehicleModelMap.get(vehicle_model_id).vehicle_make_id
      vehicle['car_brand'] = vehicleMakeMap.get(vehicle_make_id).name
    

      return vehicle
    })
    
  
    return vehicles;
  }

  
  