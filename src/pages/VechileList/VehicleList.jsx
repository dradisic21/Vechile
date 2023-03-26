import { useEffect } from "react";
import { getAllVehicleData } from "../../common/Services/VehicleServices";
import { deleteVehicle } from "../../common/Services/VehicleMethodsApi";
import { AddVehicleForm } from "../../components/VehicleForm";
import { UpdateVehiclePopUp } from "../../components/UpdateVehicle";
import vehicleListStore from "../../stores/VehicleListStore";
import { observer } from "mobx-react";
import { Button } from "../../components/UI";
import "./VehicleList.css";

function VehicleList () {

  // get Vehicle
  useEffect(() => {
    const getVehicles = async () => {
      try {
        const vehicleData = await getAllVehicleData();
        vehicleListStore.setVehicles(vehicleData.vehicles);
        vehicleListStore.setVehicleMakeMap(vehicleData.vehicleMakeMap);
        vehicleListStore.setVehicleModelMap(vehicleData.vehicleModelMap);
      } catch (err) {
        vehicleListStore.setError(err);
      } finally {
        vehicleListStore.setRefresh(false);
      }
    };
    if (vehicleListStore.refresh === true) {
      getVehicles();
    }
  });

    const handleUpdate = () => {
      vehicleListStore.setRefresh(true);
    } 
  // delete item

    const handleDelete = async (vehicleId) => {
      try {
        const response = await deleteVehicle(vehicleId);
        //console.log(response.data);
        vehicleListStore.setVehicles(vehicleListStore.vehicles.filter(vehicle => vehicle.id !== vehicleId));
      } catch (error) {
        vehicleListStore.setError(error);
      }
    };
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        vehicleListStore.setShowScrollBtn(true);
      } else {
        vehicleListStore.setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scrool page to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // show the add form
  const showAddForm = () => {
    vehicleListStore.setShowForm(!vehicleListStore.showForm);
  };

  // update item pop up
  const togglePopUp = (vehicle) => {
    vehicleListStore.setSelectedVehicle(vehicle);
    vehicleListStore.setIsOpen(!vehicleListStore.isOpen);
  };


  return (
    <div className="screen_container">
      <div className="header">
        <div className="titleHeader">
          <h1>Cars Page List</h1>
        </div>
        <div className="btnPosition">
          <Button
            className="createBtn"
            onClick={showAddForm}
            name="Create Vechile"
          />
        </div>
      </div>

      {vehicleListStore.isOpen && (
        <div>
          <UpdateVehiclePopUp handleClose={togglePopUp} vehicle={vehicleListStore.selectedVehicle} onUpdate={handleUpdate} />
        </div>
      )}

      {vehicleListStore.showScrollBtn && (
        <div className="scroll-position">
          <div className="scroll" onClick={scrollToTop}>
            <i className="material-icons">arrow_upward</i>
          </div>
        </div>
      )}

      {vehicleListStore.showForm && (
        <div>
          <AddVehicleForm vehicleMakeMap={vehicleListStore.vehicleMakeMap} />
        </div>
      )}

      {vehicleListStore.error ? (
        <div>{vehicleListStore.error.message}</div>
      ) : (
        <div className="screen_content">
          {vehicleListStore.vehicles.map((vehicle) => {
            return (
              <div key={vehicle.vehicle_model_id} className="card">
                <div className="image_postion">
                  <img
                    src={vehicle.image}
                    alt="car"
                    className="image-vechile-list"
                  />
                </div>
                <div className="icons">
                  <i
                    className="material-icons"
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    delete
                  </i>
                  <i className="material-icons" onClick={() => togglePopUp(vehicle)}>
                    edit
                  </i>
                </div>
                <div className="description">
                  <p className="title">
                    {vehicle.car_brand} {vehicle.model}
                  </p>
                  <p className="subtitle">Features</p>
                  <div className="features">
                    <p>
                      <i className="material-icons">calendar_month</i> Year:{" "}
                      {vehicle.year}
                    </p>
                    <p>
                      <i className="material-icons">local_gas_station</i> Engyne
                      type: {vehicle.engine_type}
                    </p>
                    <p>
                      <i className="material-icons">bolt</i> Power:{" "}
                      {vehicle.power} kW
                    </p>
                    <p>
                      <i className="material-icons">settings</i>
                      Transmission: {vehicle.transmission}
                    </p>
                    <p>
                      <i className="material-icons">palette</i> Color:{" "}
                      {vehicle.color}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default observer(VehicleList);
